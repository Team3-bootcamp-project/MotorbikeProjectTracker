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

    createProject: async (parent, {projectName, estimatedCost}, context) => {
      //Works to create a project. Need to pass all the arguments.
      const newProjectName = projectName
      const project = await Project.create({projectName, estimatedCost})
      return project
    },

    updateProject: async (parent, args, context) => {
      //Update project
      //not working yet
      if (context.Project) {
        const newProjectName = args.ProjectName
        const updatedClient = await Project.findByIdAndUpdate(
          {_id: context.client._id},
          {$push: {projects: ProjectData}},
          {new: true}
        )
        return updatedClient;
      }
      throw new AuthenticationError('Error')
    },

    createEvent: async (parent, { title, description, date}, _id) => {
      //create timeline event
      //not working

        const updatedProject = await Project.findByIdAndUpdate(
          {_id: "62864ff73862996fb13a5a21"},
          { $push: { timeline: [{title, description, date}]}},

        );
        return updatedProject;
        }
    
  },
};

module.exports = resolvers;
