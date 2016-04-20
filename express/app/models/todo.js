var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
	description: {
        type: String,
        default: ''
    },
	priority: {
        type: Number,
        default: 0
    },
	creationDate: {
        type: String,
        default: ''
    }
});