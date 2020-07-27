// LIBS
import mongoose from "mongoose";
import rejects from "assert";

// DATABASE
import { Clients, Products } from "./db";

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
    },
    getAllProducts: (root, { limit, offset }) => {
      return Products.find({})
        .limit(limit)
        .skip(offset);
    },
    getProduct: (root, { id }) => {
      return new Promise((resolve, object) => {
        Products.findById(id, (error, product) => {
          if (error) rejects(error);
          else resolve(product);
        });
      });
    },
    totalProducts: root => {
      return new Promise((resolve, object) => {
        Products.countDocuments({}, (error, count) => {
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
        Clients.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("The operation was completed successfully");
        });
      });
    },
    createProduct: (root, { form }) => {
      const newProduct = new Products({
        name: form.name,
        price: form.price,
        stock: form.stock
      });
      newProduct.id = newProduct._id;
      return new Promise((resolve, object) => {
        newProduct.save(error => {
          if (error) rejects(error);
          else resolve(newProduct);
        });
      });
    },
    updateProduct: (root, { form }) => {
      return new Promise((resolve, object) => {
        Products.findOneAndUpdate(
          { _id: form.id },
          form,
          { new: true },
          (error, product) => {
            if (error) rejects(error);
            else resolve(product);
          }
        );
      });
    },
    deleteProduct: (root, { id }) => {
      return new Promise((resolve, object) => {
        Products.findOneAndDelete({ _id: id }, error => {
          if (error) rejects(error);
          else resolve("The operation was completed successfully");
        });
      });
    },
    newOrder: (root, { form }) => {
      const newOrder = new Orders({
        order: form.order,
        total: form.total,
        date: new Date(),
        client: form.client,
        state: "PENDING"
      });
      newOrder.id = newOrder._id;
      return new Promise((resolve, object) => {
        newOrder.save(error => {
          if (error) rejects(error);
          else resolve(newOrder);
        });
      });
    }
  }
};

export default resolvers;
