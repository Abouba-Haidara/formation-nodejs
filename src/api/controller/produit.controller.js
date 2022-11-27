const db = require('../database/db');
const Produit = db.produits;

exports.create = (req, res) => {

    const  p  = req.body ;

    console.log(p) ;

    if(!p) {
        res.status(400).send({message: "Tous les informations sont obligatoire"});
    }
 
    const  produit = new Produit({
        nom: p.nom,
        prix: p.prix,
        quantite: p.quantite,
        code: p.code
    })

    produit.save(produit).then(() => {
        res.send({message: 'Success', status: 200})
    }).catch(err => {
        console.error(err);
    })

}

exports.showProduits = async (req, res, next) => {

Produit.find({
    ///nom: req.params.nom  ? req.params.nom  : ''
}).then(produits => {
  
    res.send(produits);

}).catch(err => {
   console.log(err);
});


}

exports.showProduitById= async (req, res, next) => {

    const id = req.params.id;

    if(!id) {
        res.send("Id est obligatoire").status(400);
    }
    
    await Produit.findById(id).then(produit => {
      
        res.send(produit);

    })
    .catch(err => {
       console.log(err);
    });
};


exports.delete = async (req, res, next) => {
    
    const id = req.params.id;

    if(!id) {
        res.send("Id est obligatoire").status(400);
    }

   await  Produit.findByIdAndRemove(id).then(() => {

       res.send({message: "le produit a ete suprrimé"});

    }).catch((error) => {
        console.log(error);
    });
}


exports.update =  async (req, res) => {

    const id = req.params.id;

    if(!id) {
        res.send("Id est obligatoire").status(400);
    }

    const nom =  req.body.nom;
    const quantite = req.body.quantite
    const prix = req.body.prix;

    Produit.findOneAndUpdate(
        {
          _id: id
       },  
       {
        $set: {
           nom: nom,
           prix: prix,
           quantite: quantite 
        }
    }, 
    
  {new: true}, (err, data) => {
        if(err) {
            res.send("Item non exitant").status(500);
        }
        if(data) {
            res.send({message: "La mise a jour est effective!"})
        }
    }
    
    ).catch(err => console.log(err));


};