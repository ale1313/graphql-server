// LIBS
import mongoose from 'mongoose';

// DATABASE
import { Clients } from './db';

// ────────────────────────────────────────────────────────────────────────────────────────────────

const resolvers = {
    Query: {
        getClient: ({id}) => {
            return new Client(id, clientsDB[id]);
        },
    },
    Mutation: {
        createClient: (root, { form }) => {
            const newClient = new Clients({
                id: form.id,
                name: form.name,
                last_name: form.last_name,
                age: form.age,
                emails: form.emails,
                business: form.business,
                type: form.type,
                orders: form.orders
            });
            newClient.id = newClient._id;
            return new Promise((resolve, obj) => {
                newClient.save((error) => {
                    if (error) rejects(error);
                    else resolve(newClient);
                });
            });
        },
    },
};

export default resolvers;