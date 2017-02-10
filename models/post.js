var mongoose = require('mongoose')
var Schema = require('mongoose').Schema

// Schema 结构
var PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    pv: {
        type: Number,
        default: 0
    },
    time: {
        type: Date,
        default: Date.now
    },
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}],
})
PostSchema.methods = {
}
PostSchema.statics = {
}
// model
mongoose.model('Post', PostSchema)