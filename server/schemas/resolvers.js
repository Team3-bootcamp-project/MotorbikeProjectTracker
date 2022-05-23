const { AuthenticationError } = require('apollo-server-express');
const { Project, Event, User } = require('../models');
const { signToken } = require('../utils/auth');
const { ApolloServer, gql } = require('apollo-server-express')

const resolvers = {
  Upload: GraphQLUpload,

  Query: {
 
    // Finds a single Project by ID
    project: async ( parent, { projectId }) => {
      return Project.findOne({_id: projectId})
    },

    // finds multiple projects and sorts by start date
    projects: async () => {
      return Project.find().sort({startedAt: -1})
    },

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

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
        const updatedProject = await Project.findByIdAndUpdate(
          {_id: context.project._id},
          {$push: {projects: ProjectData}},
          {new: true}
        )
        return updatedProject;
      }
      throw new AuthenticationError('Error')
    },

    createEvent: async (parent, { title, description, projectId, date}, context) => {
      //create timeline event

        const updatedProject = await Project.findByIdAndUpdate(
          {_id: projectId },
          { $push: { timeline: [{title, description, date: Date.now() }]}},
          { new : true }
        );
        return updatedProject;
        }
    
  },
};

module.exports = resolvers;
// module.exports = GraphQLUpload;