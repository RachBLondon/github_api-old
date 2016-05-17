const Authentication  = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport        = require('passport');
const Github          = require('./controllers/github')
const axios           = require('axios');
const env2            = require('env2')('./config.env');


const requireAuth = passport.authenticate('jwt',{ session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app){
    app.get('/', requireAuth, function(req, res){
      res.send({ message: 'super secret code'});
    });

    app.get('/github/test', function(req, res){
      const language = req.headers.language;
      const location = req.headers.location;
      const apiTest = axios.get('https://api.github.com/search/users?q=+language:'+language+'+location:'+location )
        .then(response =>{
          console.log(response.data.items);
          res.send({ message : response.data.items})
        }).catch( response => {
          console.log("error", response);
        });
    });

    app.get('/github/userdata', function(req, res){
      const userData = req.headers.username;
      const apiUserdata = axios.get('https://api.github.com/users/'+ userData +'?access_token='+ process.env.Github_AT)
        .then(response => {
          res.send({ userData : response.data})
        }).catch( response => {
          console.log("error", response);
        });
    });

    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup',Authentication.signup);
}
