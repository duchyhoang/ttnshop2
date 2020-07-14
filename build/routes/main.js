'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _course = require('../controllers/course');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.post('/courses', _course.createCourse);
router.get('/courses', _course.getAllCourse);
router.get('/courses/:courseId', _course.getSingleCourse);
router.delete('/courses/:courseId', _course.deleteCourse);

exports.default = router;
//# sourceMappingURL=main.js.map