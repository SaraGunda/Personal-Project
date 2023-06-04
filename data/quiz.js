const { v4: uuid } = require("uuid");

// const { uuid } = require("bson");

module.exports = [
  {
    _id: uuid(),
    firstName: "Sara",
    age: "26-34",
    activityLevel: "high",
    injury: "none",
    goal: "flexibility",
    frequency: "frequent",
  },
];
