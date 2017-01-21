import mongoose from 'mongoose';

/**
 * @constructor
 */
const PersonSchema = new mongoose.Schema({
    name: String,
}, { collection: 'persons' });

export default mongoose.model('Person', PersonSchema);
