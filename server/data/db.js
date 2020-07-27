// LIBS
import mongoose from "mongoose";

// ────────────────────────────────────────────────────────────────────────────────────────────────

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/clients", { useNewUrlParser: true });

const clientsSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  age: Number,
  emails: Array,
  business: String,
  type: String,
  orders: Array
});

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number
});

const ordersSchema = new mongoose.Schema({
  order: Array,
  total: Number,
  date: Date,
  client: String,
  state: String
});

export const Clients = mongoose.model("clients", clientsSchema);
export const Products = mongoose.model("products", productsSchema);
export const Orders = mongoose.model("orders", ordersSchema);
