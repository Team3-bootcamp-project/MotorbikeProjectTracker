const db = require('../config/connection');
const { Client, Project, Event } = require('../models');
const ClientSeeds = require('./clientSeeds.json');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});
    await Client.deleteMany({});

    await Client.create(ClientSeeds);

    for (let i = 0; i < projectSeeds.length; i++) {
      const { _id, projectName, associatedClient } = await Project.create(projectSeeds[i]);
      const client = await Client.findOneAndUpdate(
        {clientName: associatedClient},
        {
          $addToSet: {
            projects: _id
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
