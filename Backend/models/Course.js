const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    videoUrl: String,
    duration: Number,
    order: Number,
    isPreview: {
        type: Boolean,
        default: false
    }
});

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['forex', 'crypto', 'stocks', 'other']
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topics: [topicSchema],
    thumbnail: String,
    price: {
        full: {
            type: Number,
            required: true
        },
        perTopic: {
            type: Number,
            required: true
        }
    },
    rating: {
        type: Number,
        default: 0
    },
    totalStudents: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;