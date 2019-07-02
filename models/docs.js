const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// ORM

const DocsSchema = new Schema({
    message: String
});

/**
 * TABLE -> COLLECTION
 * ROW   -> DOCUMENT
 * COLUMN -> FIELDS
 */

const Docs       = mongoose.model('docs', DocsSchema);
module.exports = {
    Docs
};

// category => categories