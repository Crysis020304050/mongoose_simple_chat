const PROFILE_PICTURE_PATH = `http://localhost:${ process.env.PORT ||
3000 }/profilePicture`;

const LOGIN_PATTERN = /^\w{6,16}$/;
const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?\-^]{8,60}$/;

module.exports = {
  PROFILE_PICTURE_PATH,
  LOGIN_PATTERN,
  PASSWORD_PATTERN,
};

