const db = require('../config/connection');
const { Customer, Project, Event } = require('../models');
const CustomerSeeds = require('./clientSeeds.json');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});
    await Customer.deleteMany({});

    await Customer.create(CustomerSeeds);

    for (let i = 0; i < projectSeeds.length; i++) {
      const { _id, projectName, associatedCustomer } = await Project.create(projectSeeds[i]);
      const customer = await Customer.findOneAndUpdate(
        {customerName: associatedCustomer},
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
