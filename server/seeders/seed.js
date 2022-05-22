const db = require('../config/connection');
const { Customer, Project, Event, User } = require('../models');
// const CustomerSeeds = require('./customerSeeds.json');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});

    for (let i = 0; i < projectSeeds.length; i++) {
      const { _id, projectName, associatedCustomer } = await Project.create(projectSeeds[i]);
      
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
