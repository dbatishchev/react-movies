import mongoose from 'mongoose';

/**
 * @constructor
 */
const CategorySchema = new mongoose.Schema({
    name: String,
}, { collection: 'categories' });

export default mongoose.model('Category', CategorySchema);
