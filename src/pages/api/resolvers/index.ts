import { Resolvers } from "@apollo/client";
import dbConnect from "@/lib/dbConnect";
import property from "@/models/property";

async function GetProperty(parent: Resolvers, args: Resolvers) {
    await dbConnect();
    try {
        const result = await property.findById(args._id);
        if (result) return result;
    } catch (err) {
        console.log(err);
    }
}

async function GetProperties(parent: Resolvers, args: Resolvers) {
    await dbConnect();
    try {
        const properties = await property.find();
        if (properties) return properties;
    } catch (err) {
        console.log(err);
    }
}
async function PostProperty(parent: Resolvers, args: Resolvers) {
    await dbConnect();
    try {
        const NewProperty = await property.create({
            name: args.input.name,
            price: args.input.price,
            address: args.input.address,
            propertyType: args.input.propertyType,
            saleType: args.input.saleType,
            images: args.input.images,
        });
        if (NewProperty) {
            return NewProperty;
        }
    } catch (err) {
        console.log(err);
    }
}
async function UpdateProperty(parent: Resolvers, args: Resolvers) {
    await dbConnect();
    try {
        const UpdatePropertry = await property.findByIdAndUpdate(args._id, {
            name: args.input.name,
            price: args.input.price,
            address: args.input.address,
            propertyType: args.input.propertyType,
            saleType: args.input.saleType,
            images: args.input.images,
        });
        if (UpdatePropertry) return { _id: args._id, ...args.input };
        // if (UpdatePropertry) return UpdatePropertry;
    } catch (err) {
        console.log(err);
    }
}
async function DeleteProperty(parent: Resolvers, args: Resolvers) {
    await dbConnect();
    try {
        const DeletedProperty = await property.findByIdAndDelete(args._id);
        if (DeletedProperty) return DeletedProperty;
    } catch (err) {
        console.log(err);
    }
}
export const resolvers = {
    Query: {
        hello: () => "hello test",
        GetProperties,
        GetProperty,
    },
    Mutation: {
        PostProperty,
        UpdateProperty,
        DeleteProperty,
    },
};
