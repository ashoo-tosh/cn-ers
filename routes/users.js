const express = require('express'); // requiring express
const router = express.Router();
const passport = require('passport');


const userController = require('../controllers/user_controller');

//render the singin and singUp page
router.get('/sign-in' , userController.signIn);
router.get('/sign-up' , userController.signUp);

//create new seeion for the particular user, and also it chaeck the authorization
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.createSession);

//create the new user
router.post('/create' , userController.create);

//logOut form the current user
router.get('/sign-out', userController.destroySession);

//render the forget password page 
router.get('/forgetPassword', userController.forgetPasswordPage);
//change the forget passwrod
router.post('/forgetPasswordLink' , userController.forgetPasswordLink);
// all empoyee
router.post('/addEmployee', userController.addEmployeee);

router.post('/makeAdmin', userController.makeAdmin);


module.exports = router;
