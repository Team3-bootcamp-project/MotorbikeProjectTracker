const { AuthenticationError } = require('apollo-server-express');
const { Project, Client, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // need to add "admin" and "client" stuff
    //Admin would have access to all of the create routes
    //Not sure how to implement it
    //im guessing adding an IF statement to the routes
    //IF client id =! 'predeterminedID' then throw an error

    // Finds a single Project by ID
    project: async ( parent, { projectId }) => {
      return Project.findOne({_id: projectId})
    },

    //Finds all clients
    clients: async () => {
      return Client.find()
        .select("-__v -password")
        .populate("projects")
    },
    
    // finds multiple projects and sorts by start date
    projects: async () => {
      return Project.find().sort({startedAt: -1})
    },

    //Finds logged in user's projects
    //broken
    me: async (parent, args, context) => {
      if (context.client) {
        return Client.findOne({ _id: context.client._id }).populate('projects');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {

    //this one seems to be kind of working, token is generated.
    addClient: async (parent, { email, password }) => {
      const user = await Client.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    //this one also generates tokens, so it essentially works. I dont really understand JWT that well.
    login: async (parent, { email, password }) => {
      const user = await Client.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    updateProject: async (parent, {clientName}, context) => {
      //Update project
      //not working, but i think the function should be similar to this
      if (context.client) {
        const newProjectName = ''
        const updatedClient = await Client.findByIdAndUpdate(
          {_id: context.client._id},
          {$push: {projects: newprojectName}},
          {new: true}
        )
        return updatedClient;
      }
      throw new AuthenticationError('You need to be an admin')
    },

    createEvent: async (parent, {projectId}, context) => {
      //create timeline event
      //not working
      if (context.project) {
        const updatedProject = await Project.findByIdAndUpdate(
          {_id: context.project._id},
          { $push: { timeline: {eventId}}},

        );
        return updatedProject;
      }
      throw new AuthenticationError('You need to be an admin');
    }
    
  },
};

module.exports = resolvers;
