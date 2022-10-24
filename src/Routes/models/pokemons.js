const {Schema, model} =require("mongoose");

const PokemonSchema = Schema({
    _id:{type:String, require: true},
    id:{type:String, require: true},
    name:{type:String, require: true},
    types: {},
    sprites:{other:{home:{front_default:{type:String}}}},
    height: { type: String },
    weight: { type: String },
})

module.exports = model('Pokemon', PokemonSchema);