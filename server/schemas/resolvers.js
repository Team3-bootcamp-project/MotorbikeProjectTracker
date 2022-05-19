const { AuthenticationError } = require('apollo-server-express');
const { Project, Client, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // need to add "admin" and "client" stuff

    // Finds a single Project by ID
    project: async ( parent, { projectId }) => {
      return Project.findOne({_id: projectId})
    },

    //not working
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
    addClient: async (parent, { email, password }) => {
      const user = await Client.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
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

    
  },
};

module.exports = resolvers;
