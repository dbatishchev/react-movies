import mongoose from 'mongoose';

/**
 * @constructor
 */
const MovieSchema = new mongoose.Schema({
    name: String,
}, { collection: 'movies' });

export default mongoose.model('Movie', MovieSchema);
