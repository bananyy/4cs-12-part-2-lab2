const mongoose = require('mongoose');

async function setup() {
  try {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    console.log(error);
  }
}

module.exports = setup;