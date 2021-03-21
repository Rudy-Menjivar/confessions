const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const User = require('../models/user');
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);


// const cookieExtractor = req =>{
//     let token = null;
//     if(req && req.cookies){
//         token = req.cookies["mylilsecret"];
//     }
//     return token;
// }

// // authorization 
// passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//   User.findById(jwt_payload.data._id, (err, user) => {
//     if(err) {
//       return done(err, false);
//     }
//     if(user) {
//       return done(null, user);
//     } else {
//       return done(null, false);
//     }
//   });
// }));


// passport.use(new JwtStrategy({
//     jwtFromRequest : cookieExtractor,
//     secretOrKey : "NoobCoder"
// },(payload,done)=>{
//     User.findById({_id : payload.sub},(err,user)=>{
//         if(err)
//             return done(err,false);
//         if(user)
//             return done(null,user);
//         else
//             return done(null,false);
//     });
// }));

// authenticated local strategy using username and password
// passport.use(new LocalStrategy((username,password,done)=>{
//     User.findOne({username},(err,user)=>{
//         // something went wrong with database
//         if(err)
//             return done(err);
//         // if no user exist
//         if(!user)
//             return done(null,false);
//         // check if password is correct
//         user.comparePassword(password,done);
        
//     });
// }));
