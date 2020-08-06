const router = require(`express`).Router();
const burger = require(`../models/burger`);

router.get(`/`, (req, res) => {
    let hbsObj;
    burger.selectAll(function(data) {
        hbsObj = { burgers: data };
        res.render(`index`, hbsObj);
    });
});

router.post(`/api/burgers`, (req, res) => {
    burger.insertOne(`burger_name`, req.body.burger_name, (result) => {
        res.json({ id: result.insertID });
    });
});

router.put(`/api/burgers/:id`, (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.updateOne(req.body.devoured, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
