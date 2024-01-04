// Import any necessary modules or dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../Models/Models');


// Create a controller object
const controller = {};

controller.getCuisines = async (req, res, next) => {
    try {
        // const result = await db.query('SELECT user_id FROM users')
        const text = `SELECT cuisine_choice FROM users`;
        const result = await db.query(text);
        res.locals.cuisines = result.rows;
        console.log(res.locals.cuisines)
        return next();
    } catch (err) {
        console.log('error occurred in getCuisines');
        return next(err);
    } 
}

controller.updateCuisines = async (req, res, next) => {
    console.log('req.body:', req.body);
    const { cuisine_choice, user_id } = req.body;
    try {
        const text = `UPDATE users SET cuisine_choice=$1 WHERE user_id=$2`
        const params = [ cuisine_choice, user_id ]
        console.log(params)
        await db.query(text, params);
        res.locals.addedCuisines = 'Successfully added'
        return next();
    } catch(err) {
        console.log('error in addCuisines');
        return next(err)
    }
}

controller.getPeople = async (req,res,next) => {
    try {
        const text = `SELECT * FROM users`;
        const result = await db.query(text);
        res.locals.people = result.rows;
        return next();
    } catch(err) {
        console.log('error on getPeople middleware');
        return next(err);
    }
}

controller.addPeople = async (req, res, next) => {
    const { name } = req.body;
    // console.log('name:', name);
    try {
     const text = `INSERT INTO users (name) VALUES ($1)`;
     const params = [ name ];
     await db.query(text, params);
     const data = await db.query(`SELECT user_id FROM users WHERE name=$1`, params)
     res.locals.addPeople = data.rows[0].user_id
     console.log(res.locals.addPeople)  
     return next();
    } catch (err) {
        console.log('error in addPeople middleware');
        return next(err)
    }
    // console.log('params:', params);
    // db.query(text, params)
    // .then((data) => {
    //     console.log('data:', data);
    //     res.locals.people = data
    // })
    // .then(() => next())
    // .catch((err) => {
    //     console.log('error cause in addPeople middleware');
    //     return next(err);
    // })

}


// controller.addCuisines = async (req, res, next) => {
//     console.log('req.body:', req.body);
//     const { cuisine } = req.body;
// }
  
controller.tally = async (req, res, next) => {
    try {
        const text = 'SELECT cuisine_choice, COUNT (cuisine_choice) FROM users GROUP BY cuisine_choice'
        const result = await db.query(text);
        res.locals.tally = result.rows;
        console.log(result.rows);
        return next();
    } catch(err) {
        console.log('error in tally middleware');
        return next(err);
    }
}




// Define your controller methods
controller.methodName = (req, res) => {
  // Code logic goes here
};

// Export the controller object
module.exports = controller;
