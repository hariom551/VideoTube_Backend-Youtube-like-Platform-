import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        videoFile:{
            type: String //cloudinary url
        },
        thumbnail:{
            type: String, //cloudinary url
            requires: true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref: "User"
        },
        title:{
            type: String,
            requires: true
        },
        description :{
            type: String,
            requires: true
        },
        duration :{
            type: Number,   //cloudinary url
            requires: true
        },
        views:{
            type: Number,
            default:0
        },
        isPublished:{
            type: Boolean,
            default: true 
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
        
    },
    {
        timestamp: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)