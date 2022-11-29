import {Schema,model,mongoose} from "mongoose";

const productSchema= new Schema({

    name:{
        type: String,
        required: true

    },
    size:{
        type: String,
        required: false,
        default: ""

    },
    color:{
        type: String,
        required: false,
        default: ""

    },
    price:{
        type: Number,
        required: false,
        default: 0

    },
    brand:{
        type: mongoose.Types.ObjectId,
        ref: 'Brand',
        required: false
        

    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: false

    },
    amount:{
        type: Number,
        required: false,
        default: 0

    },
    isActive:{
        type: Boolean,
        default: true,
        required: false,

    }

});

export default model('Product',productSchema);