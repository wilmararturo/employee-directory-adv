const redis = require("redis");
require("dotenv").config();

let redisClient;

async function connectRedis() {
  redisClient = redis.createClient({
    url: "redis://" + process.env.REDHOST + ":" + process.env.REDPORT,
  });
  await redisClient.connect();
}
connectRedis();

redisClient.on("error", (err) =>
  console.log(`Couldn\'t establish a connection with redis: ${err}`)
);

redisClient.on("connect", () => console.log(`Connected to redis successfully`));

module.exports = redisClient;
