const Authentication  = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport        = require('passport');
const Github          = require('./controllers/github')
const axios           = require('axios');


const requireAuth = passport.authenticate('jwt',{ session: false });
const requireSignin = passport.authenticate('local', { session: false });


module.exports = function(app){
    app.get('/', requireAuth, function(req, res){
      res.send({ message: 'super secret code'});
    });

    app.get('/github/test', function(req, res){
      const language = req.headers.language;
      const location = req.headers.location;
      const apiTest = axios.get('https://api.github.com/search/users?q=+repos:%3E42+language:'+language+'+location:'+location)
        .then(response =>{
          res.send({ message : response.data.items})
        })
    })
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup',Authentication.signup);
}
