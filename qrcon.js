global.mongodb = process.env.MONGODB || ""; 
global.sessionId = process.env.SESSION_ID || "own session";
global.port = process.env.PORT || "10000";

module.exports = {
  mongodb: global.mongodb,
};