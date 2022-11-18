const jwt = require('jsonwebtoken');
const { Schema, models } = require('mongoose');

const userSchema = Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    minLength: 5,
    maxLength: 255
  },
  password: {
    type: String,
    require: true,
    minLength: 5,
    maxLength: 1024
  }
})

userSchema.methods.generateJWT = function () {
  const token = jwt.sign({ _id: this._id, email: this.email, password: this.password }, process.env.SECRET_KEY, { expiresIn: "24h" });
  return token;
}

module.exports = userSchema;