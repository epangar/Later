require("dotenv").config();

const mongoose = require('mongoose');
const List = require('../models/List');
const dbURL = process.env.DBURL;
mongoose.connect(dbURL);
List.collection.drop();


const lists = [
  {
  title : "Lista 1",
  comment : "Para echar un vistazo"
  },
  {
  title : " ",
  comment : "Testing" 
  }




]

List.create(lists, (err) => {
  useMongoClient: true
  if (err) { throw(err) }
  console.log(`Created ${lists.length} list/s.`)
  mongoose.disconnect();
});
