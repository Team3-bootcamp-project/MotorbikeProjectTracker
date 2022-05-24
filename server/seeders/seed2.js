const db = require('../config/connection');
const { Project, User } = require('../models');
const UserSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  try {
     
      const admin = await User.create(UserSeeds);
      
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
