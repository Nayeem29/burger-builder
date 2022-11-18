const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
})