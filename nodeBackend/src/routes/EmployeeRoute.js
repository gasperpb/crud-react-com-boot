const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');

router.get('/list', EmployeeController.list);
router.post('/create', EmployeeController.create);
router.get('/get/:id', EmployeeController.get);
router.post('/update/:id', EmployeeController.update);
router.post('/delete', EmployeeController.delete);

module.exports = router;