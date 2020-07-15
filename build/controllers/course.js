'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCourse = createCourse;
exports.getAllCourse = getAllCourse;
exports.getSingleCourse = getSingleCourse;
exports.deleteCourse = deleteCourse;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _course = require('../models/course');

var _course2 = _interopRequireDefault(_course);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCourse(req, res) {

    var course = new _course2.default({
        _id: _mongoose2.default.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
    });

    return course.save().then(function (newCourse) {
        return res.status(201).json({
            success: true,
            message: 'New cause created successfully',
            Course: newCourse
        });
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: error.message
        });
    });
}

// Get all course
function getAllCourse(req, res) {
    _course2.default.find().select('_id title description').then(function (allCourse) {
        return res.status(200).json({
            success: true,
            message: 'A list of all course',
            Course: allCourse
        });
    }).catch(function (err) {
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: err.message
        });
    });
}

// get single course
function getSingleCourse(req, res) {
    var id = req.params.courseId;
    _course2.default.findById(id).then(function (singleCourse) {
        res.status(200).json({
            success: true,
            message: 'More on ' + singleCourse.title,
            Course: singleCourse
        });
    }).catch(function (err) {
        res.status(500).json({
            success: false,
            message: 'This course does not exist',
            error: err.message
        });
    });
}

// delete a course
function deleteCourse(req, res) {
    var id = req.params.courseId;
    _course2.default.findByIdAndRemove(id).exec().then(function () {
        return res.status(204).json({
            success: true
        });
    }).catch(function (err) {
        return res.status(500).json({
            success: false
        });
    });
}
//# sourceMappingURL=course.js.map