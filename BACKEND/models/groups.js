const mongoose = require(`mongoose`)

const groupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    } ,
    Description: {
        type: String,

    },
    Currency: {
        type: Number,
    }


});


const Groups = mongoose.models.Groups || mongoose.model('Groups', groupSchema);


module.exports = Groups;
