// LIBS
import mongoose from 'mongoose';

// ────────────────────────────────────────────────────────────────────────────────────────────────

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clients', { useNewUrlParser: true });

const clientsSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    age: Number,
    emails: Array,
    business: String,
    type: String,
    orders: Array,
});

export const Clients = mongoose.model('clients', clientsSchema);