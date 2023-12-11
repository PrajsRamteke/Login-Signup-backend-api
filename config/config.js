const dotenv = require('dotenv');

dotenv.config();

if (!process.env.MONGO_URL) {
  console.error('MONGO_URL environment variable is not defined');
  process.exit(1);
}

module.exports = {
  MONGO_URL: process.env.MONGO_URL,
  PORT: process.env.PORT || 3000,
};
