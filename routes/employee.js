const router = require('express').Router();
const mongoose = require('mongoose');
const empModel = require('../models/employee.js');


 router.get('/',(req, res) => {
        async function run() {
            try {
                const allItem = await empModel.find({});
                res.json(allItem);
            } catch (err) { res.json(err.message) }
        }
        run();
}); 

router.post('/', async (req, res) => {
    try {
        var count = Math.floor(Math.random() * 1000);
        const newItem = new empModel({
            Id: count,
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,

        })
        //save this item in database
        const saveItem = await newItem.save()
        res.json(saveItem);
    } catch (err) {
        res.json(err.message);
    }
});

router.patch(('/:id'), async (req, res) => {
    try {
        const updated = await empModel.updateOne(
            { Id: String(req.params.id) },
            { role: req.body.role }
        );
        res.status(200).json(updated);
    } catch (err) {
        res.json(req.params.id);
    }
})

router.delete(('/:id'), async (req, res) => {
    try {
        const updated = await empModel.deleteOne(
            { Id: String(req.params.id) }
        );
        res.status(200).json(updated);
    } catch (err) {
        res.json(req.params.id);
    }
})




module.exports = router;
