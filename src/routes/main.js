import express from 'express';
import { createCourse, getAllCourse, getSingleCourse,deleteCourse } from '../controllers/course';

const router = express.Router();
router.post('/courses', createCourse);
router.get('/courses', getAllCourse);
router.get('/courses/:courseId', getSingleCourse);
router.delete('/courses/:courseId', deleteCourse);

export default router;