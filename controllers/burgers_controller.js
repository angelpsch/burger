const router = require(`express`).Router();
const burger = require(`../models/burger`);
// Get views
router.get(`/`, (req, res) => {
    let hbs;
    burger.selectAll(function(data) {
        hbs = { burgers: data };
        res.render(`index`, hbs);
    });
});
// Add burger
router.post(`/api/burgers`, (req, res) => {
    burger.insertOne(`burger_name`, req.body.burger_name, (result) => {
        res.json({ id: result.insert});
    });
});
// Update burger
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