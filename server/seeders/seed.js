const db = require('../config/connection');
const { Client, Project } = require('../models');
// const clientSeeds = require('./clientSeeds.json');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});


    await Project.create(projectSeeds);


  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
