import { Document, model, Schema } from "mongoose";

export interface TransactionType extends Document{
    type:"income" | "expense",
    amount:number,
    description:string,
    date:Date,
    isDeleted:Boolean
}

const transactionSchema= new Schema<TransactionType>({
    type:{
        type:String,
        enum:["income", "expense"],
        required:true
    },
    amount:{
        type: Number,
        required: true,
        min:0
    },
    description:{
        type:String,
        required: false,
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

export const Transaction = model<TransactionType>("Transaction",transactionSchema)