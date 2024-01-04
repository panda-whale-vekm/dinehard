const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

// <<<<<<< vicky/database
// //tests if frontend is connected to backend
// // router.post('/cuisines', (req, res) => {
// //     console.log('Received request body:', req.body);
// //     res.json({ message: 'Request received successfully' });
// //   });

// router.post('/', controller.getCuisines, (req, res) => {
//     res.status(200).json(res.locals.cuisines);
// });

// =======
// >>>>>>> Dev
router.get('/cuisines', controller.getCuisines, (req, res) => {
    return res.status(200).json(res.locals.cuisines)
})

router.patch('/cuisines', controller.updateCuisines, (req, res) => {
    return res.status(200).json(res.locals.addedCuisines)
})

router.get('/people', controller.getPeople, (req, res) => {
    return res.status(200).json(res.locals.people)
})

router.post('/people', controller.addPeople, (req, res) => {
    return res.status(200).json(res.locals.addPeople)
})

router.get('/tally', controller.tally, (req, res) => {
    return res.status(200).json(res.locals.tally)
})


module.exports = router;