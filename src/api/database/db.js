const dbConfig = require('../config/config');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {} ;

db.mongoose = mongoose;
db.url = dbConfig.urlDB;

db.produits = require("../model/produit.model")(mongoose);


module.exports  = db;