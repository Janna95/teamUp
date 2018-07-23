var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
<<<<<<< HEAD
const { User } = require('./model_crud');
=======
const {User} = require('./model_crud');
>>>>>>> 1669dad939a9572643956aad0edb6c9f1503dc0c

const config = require('../config/config').facebook_config;

passport.use(new FacebookStrategy({
    clientID: config.app_id,
    clientSecret: config.app_secret,
    callbackURL: config.callback_url,
    profileFields:['displayName','picture.type(large)']
  },
  function(accessToken, refreshToken, profile, done) {
<<<<<<< HEAD
    console.log(User.addUser);
=======
    //User
    //console.log('-----------',profile);
>>>>>>> 1669dad939a9572643956aad0edb6c9f1503dc0c
    User.addUser({
      fb_id:profile.id,
      name:profile.displayName,
      phone:0,
      access_token:accessToken,
      refresh_token:refreshToken,
      own_events:[],
      attending_events:[],
      finished_events:[],
      photo:profile.photos[0].value
  },done,{
    name:profile.displayName,
    id:profile.id
  });  
    
    //console.log("https://graph.facebook.com/" + profile.username + "/picture" + "?width=200&height=200" + "&access_token=" + accessToken)
    
  }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
