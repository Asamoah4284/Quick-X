const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const auth = require('../middleware/auth');

// Get all courses (public)
router.get('/', async (req, res) => {
    try {
        const { category, search } = req.query;
        let query = {};
        
        if (category) {
            query.category = category;
        }
        
        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }

        const courses = await Course.find(query)
            .select('-topics.videoUrl')
            .populate('instructor', 'fullName');
            
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get single course details (public preview)
router.get('/:id/preview', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .select('-topics.videoUrl')
            .populate('instructor', 'fullName');
            
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get full course content (authenticated & purchased users only)
router.get('/:id/full', auth, async (req, res) => {
    try {
        const user = req.user;
        const course = await Course.findById(req.params.id)
            .populate('instructor', 'fullName');
            
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Check if user has purchased the course
        const hasPurchased = user.purchasedCourses.includes(course._id);
        if (!hasPurchased) {
            return res.status(403).json({ message: 'Access denied. Please purchase this course.' });
        }
        
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Purchase course (authenticated)
router.post('/:id/purchase', auth, async (req, res) => {
    try {
        const user = req.user;
        const course = await Course.findById(req.params.id);
        
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Add purchase logic here (payment integration)
        // For now, just add to user's purchased courses
        if (!user.purchasedCourses.includes(course._id)) {
            user.purchasedCourses.push(course._id);
            await user.save();
            
            course.totalStudents += 1;
            await course.save();
        }
        
        res.json({ message: 'Course purchased successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;