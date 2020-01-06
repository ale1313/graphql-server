// LIBS
import mongoose from "mongoose";

// DATABASE
import { Clients } from "./db";

// ────────────────────────────────────────────────────────────────────────────────────────────────

const resolvers = {
  Query: {
    getAllClients: (root, { limit, offset }) => {
      return Clients.find({})
        .limit(limit)
        .skip(offset);
    },
    getClient: (root, { id }) => {
      return new Promise((resolve, object) => {
        Clients.findById(id, (error, client) => {
          if (error) rejects(error);
          else resolve(client);
        });
      });
    },
    totalClients: root => {
      return new Promise((resolve, object) => {
        Clients.countDocuments({}, (error, count) => {
          if (error) rejects(error);
          else resolve(count);
        });
      });
    }
  },
  Mutation: {
    createClient: (root, { form }) => {
      const newClient = new Clients({
        name: form.name,
        last_name: form.last_name,
        age: form.age,
        emails: form.emails,
        business: form.business,
        type: form.type,
        orders: form.orders
      });
      newClient.id = newClient._id;
      return new Promise((resolve, object) => {
        newClient.save(error => {
          if (error) rejects(error);
          else resolve(newClient);
        });
      });
    },
    updateClient: (root, { form }) => {
      return new Promise((resolve, object) => {
        Clients.findOneAndUpdate(
          { _id: form.id },
          form,
          { new: true },
          (error, client) => {
            if (error) rejects(error);
            else resolve(client);
          }
        );
      });
    },
    deleteClient: (root, { id }) => {
      return new Promise((resolve, object) => {
        Clients.findOneAndRemove({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("The operation was completed successfully");
        });
      });
    }
  }
};

export default resolvers;
