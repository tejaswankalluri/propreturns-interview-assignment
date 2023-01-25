import mongoose, { SchemaTypes } from "mongoose";

const PropertySchema = new mongoose.Schema({
    name: String,
    price: "number",
    address: String,
    propertyType: {
        type: String,
        enum: ["House", "Shop"],
        default: "House",
    },
    saleType: {
        type: String,
        enum: ["ForSale", "New"],
        default: "ForSale",
    },
    images: [{ type: String }],
});

export default mongoose.models.property ||
    mongoose.model("property", PropertySchema);
