const Authentication  = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport        = require('passport');
const Github          = require('./controllers/github')
const axios           = require('axios');
const env2            = require('env2')('./config.env');
const async           = require('async');

const request = require('request');


const requireAuth = passport.authenticate('jwt',{ session: false });
const requireSignin = passport.authenticate('local', { session: false });

var testRes;


module.exports = function(app){
    app.get('/', requireAuth, function(req, res){
      res.send({ message: 'super secret code'});
    });

    const pagingationURLs = function(response){
      const pages ={}
      const rawPages = response.headers.link.split("<");
      rawPages.map(function(rawData, i){
        if(rawData.indexOf('next')>0){
          pages.next = rawData.split('>')[0]
        }
         if(rawData.indexOf('last')>0){
          pages.last = rawData.split('>')[0]
        }

        if(rawData.indexOf('prev')>0 ){
         pages.prev = rawData.split('>')[0]
       }

       if(rawData.indexOf('first')>0){
        pages.first = rawData.split('>')[0]
      }

      })
      const pagination = {links: pages}
      detailUserArray.push(pagination)
    }

    const apiDeets = function(userObj, callback){
      const getUrl = 'https://api.github.com/users/'+ userObj.login +'?access_token='+ process.env.Github_AT;
      axios.get(getUrl)
        .then(response =>{
          callback(null, detailUserArray.push(response.data))
        });
     }

    const done = function(error, result) {
      testRes.send(detailUserArray)
    }

    app.get('/github/pagination', function(req, res){
      const url = req.headers.url;
      detailUserArray = [];
      testRes = res
      axios.get(url)
        .then(response =>{
          pagingationURLs(response)
          async.map(response.data.items, apiDeets, done );
        })
    })


    app.get('/github/test', function(req, res){
      const language = req.headers.language;
      const location = req.headers.location;
      detailUserArray = [];
      testRes = res
      axios.get('https://api.github.com/search/users?q=+language:'+language+'+location:'+location)
        .then(response =>{
          pagingationURLs(response)
          async.map(response.data.items, apiDeets, done );
        });
    });


    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup',Authentication.signup);
}
