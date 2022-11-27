module.exports = mongoose =>  {

 const Schema = mongoose.Schema;

 ProduitSchema =  new Schema({

    prix: {
        type: Number,
        required: true
    },

    nom: {
        type: String,
        required: true
    },

    code: { 
        type: String,
         required: true
    },

    quantite: {
         type: Number, 
        required: true 
    }
 });

 ProduitSchema.method("toJSON", function(){
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
 });

 const Produit =  mongoose.model("Produit", ProduitSchema); 

 return Produit ;
}