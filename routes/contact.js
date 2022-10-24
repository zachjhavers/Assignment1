let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to Contact Model
let Contact = require('../models/contact');

/* GET Route For The Contact Page*/
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);
            res.render("contactlist", {title: "Business Contact List", ContList: contactList});
        }
    });
});

module.exports = router;