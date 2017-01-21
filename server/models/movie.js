import mongoose from 'mongoose';

/**
 * @constructor
 */
const MovieSchema = new mongoose.Schema({
    name: String,
    description: String,
    year: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    },
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    }],
}, { collection: 'movies' });

export default mongoose.model('Movie', MovieSchema);
