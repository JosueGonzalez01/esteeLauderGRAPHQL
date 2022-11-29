import {Schema,model} from "mongoose";

const brandSchema= new Schema({

    name:{
        type: String,
        required: true

    },
    isActive:{
        type: Boolean,
        default: true,
        required: false,

    }
});

export default model('Brand',brandSchema);