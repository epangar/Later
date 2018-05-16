require("dotenv").config();

const mongoose = require('mongoose');
const Entry = require('../models/Entry');
const dbURL = process.env.DBURL;
mongoose.connect(dbURL);
Entry.collection.drop();

const entries = [
  {
    listId: '5af5bb267974f351a7d9e7ca',
    url: 'https://www.youtube.com/watch?v=w4Setx7VNzw',
    titleFile: 'Receta de tarta de queso', 
    comment: 'Zenchy explica cómo hacer una tarta de queso',
    whichType: 'video',
    
  },
  {
    listId: '5af5bb267974f351a7d9e7ca',
    url: 'http://www.theuselessweb.com/',
    titleFile: '', 
    comment: 'Webs random',
    whichType: 'web',
  },
  {
    listId: '5af5bb267974f351a7d9e7ca',
    url: 'https://es.wikipedia.org/wiki/Tardigrada',
    titleFile: 'Tardígrados', 
    comment: 'Artículo de Wikipedia sobre los tardígrados',
    whichType: 'article',    
  },
  {
    listId: '5af5bb267974f351a7d9e7ca',
    url: 'http://corndog.io/',
    titleFile: 'Corndog rain', 
    comment: '',
    whichType: 'web',    
  },
  {
    listId: '5af5bb267974f351a7d9e7ca',
    url: 'https://www.theonion.com/flu-vaccine-recalled-due-to-defective-government-tracki-1825854033',
    titleFile: '', 
    comment: '',
    whichType: 'article',    
  }
];

Entry.create(entries, (err) => {
  useMongoClient: true
  if (err) { throw(err) }
  console.log(`Created a list of ${entries.length} entries.`)
  mongoose.disconnect();
});
