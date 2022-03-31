const LocalStrategy = require('passport-local').Strategy;

const User = require("./models/User");

const createStrategyWith = async (username, password, done) => {
  const result = await User.findOne({ user_name: username })
    .then(document => ({ document })).catch(error => ({ error }));
  if (result.error) return done(result.error);

  const user = result.document;
  if (!user)
    return done(null, false, { msg: 'Incorrect Username' });

  /*const response = await password === user.password
    .then(isEqual => ({ isEqual })).catch(error => ({ error }));
  if (response.error) return done (response.error);
 
  if (!response.isEqual)
    return done(null, false, { msg: 'Incorrect Password' });
  else done(null, user);*/
  if(password !== user.password){
      return done(null, false, { msg: 'Incorrect Password' })
  }
  return done(null, user);
}

const deserializeUser = async (_id, done) => {
  const result = await User.findOne({ _id: _id })
    .then(document => ({ document })).catch(error => ({ error }));
  const { error, document } = result;
  done(error, document);
}

const serializeUser = async (user, done) => done(null, user._id)

exports.apply = passport => {
  passport.use(new LocalStrategy(createStrategyWith));
  passport.deserializeUser(deserializeUser);
  passport.serializeUser(serializeUser);
}