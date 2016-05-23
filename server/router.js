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
const detailUserArray = []

module.exports = function(app){
    app.get('/', requireAuth, function(req, res){
      res.send({ message: 'super secret code'});
    });


    const apiDeets = function(userObj, callback){
      const getUrl = 'https://api.github.com/users/'+ userObj.login +'?access_token='+ process.env.Github_AT;
      axios.get(getUrl)
        .then(response =>{
          callback(null, detailUserArray.push(response.data))
        });
     }

    const done = function(error, result) {
      console.log("done this", testRes);
      console.log(">>>>>>>>>>>", detailUserArray);
      testRes.send({ userData : detailUserArray })
    }



    app.get('/github/test', function(req, res){
      const language = req.headers.language;
      const location = req.headers.location;

      testRes = res
      console.log("in /githuh/test", testRes);
      axios.get('https://api.github.com/search/users?q=+language:'+language+'+location:'+location )
        .then(response =>{
          async.map(response.data.items, apiDeets, done );
        });
    });


    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup',Authentication.signup);
}
