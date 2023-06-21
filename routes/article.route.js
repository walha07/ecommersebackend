const express = require('express');
const router = express.Router();
const Article=require("../models/article")
// afficher la liste des article.
router.get('/', async (req, res, )=> {
    try {
    const art = await Article.find();
    
    res.status(200).json(art);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    
    });

// créer un nouvelle article
router.post('/', async (req, res) => {
    const { reference, designation,prix,marque,qtestock,imageart,scategorieID} = req.body;
    const newArticle = new Article({reference:reference,designation:designation,
        prix:prix,marque:marque,qtestock:qtestock,imageart:imageart,scategorieID:scategorieID})
    
    try {
    await newArticle.save();
    
    res.status(200).json(newArticle );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    
    });

// chercher un article
router.get('/:reference',async(req, res)=>{
    try {
    const art = await Article.findById(req.params.categorieId);
    res.status(200).json(art);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// modifier une article
router.put('/:reference', async (req, res)=> {
    const { reference, designation,prix,marque,qtestock,imageart,scategorieID} = req.body;
    const ref = req.params.reference;
    try {
    const art1 = {
        reference:reference,designation:designation,
        prix:prix,marque:marque,qtestock:qtestock,imageart:imageart,scategorieID:scategorieID };
    await Article.findByIdAndUpdate(ref, art1);
    res.json(art1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });

// Supprimer un article
router.delete('/:reference', async (req, res)=> {
    const id = req.params.reference;
    await Article.findByIdAndDelete(ref);
    
    res.json({ message: "article deleted successfully." });
    });
    module.exports = router;
    