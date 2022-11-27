module.exports =  app => {

    const router = require("express").Router();

    const produitController  = require("../controller/produit.controller"); 

    router.post('/produits', produitController.create);

    router.get('/produits', produitController.showProduits);

    router.get('/produits/:id', produitController.showProduitById);

    router.delete("/produits/:id", produitController.delete );

    router.put("/produits/:id", produitController.update)

    app.use('/api/', router);

      

}