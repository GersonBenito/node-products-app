import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: true,
    versionKey: false,
});

// custom name id
productSchema.method('toJSON', function() {
    const {_id, ...Object}: any = this.toObject();

    //Rename fields
    Object.id = _id;
    delete Object._id;

    return Object;
});

export default model('product', productSchema);