//importing express
const express = require('express');

// making router 
const router = express.Router();

// requiring passprt, for chking the authrization
const passport = require('passport');

// requring adminController file, to call the fucntion, when requied
const adminController = require('../controllers/admin_controller');

// assign the work to the employeess
router.get('/assignWork' , passport.checkAuthentication , adminController.assignWork);

// help to view the employee
router.get('/view-employee' , passport.checkAuthentication , adminController.showEmployeeList);

// to set the reviews, 
router.post('/setReviewes' , passport.checkAuthentication , adminController.setReviewrAndReviewe);

// make new Admin
router.post('/newAdmin' , passport.checkAuthentication , adminController.newAdmin);

// delete the employee
router.get('/deleteEmployee/:id', passport.checkAuthentication , adminController.deleteEmployee);

// add the employee
router.get('/add-employee' , passport.checkAuthentication , adminController.addEmployee);

module.exports = router;