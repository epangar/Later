const express = require("express");
const _ = require("lodash");
const router = express.Router();
const Entry = require("../models/Entry");

const fields = Object.keys(_.omit(Entry.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  Entry.find()
    .then(entries => res.json(entries))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const ph = _.pick(req.body, fields);
  Entry.create(ph)
    .then(entry => res.json(entry))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  console.log(req.params.id)
  Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(e => next(e));
});

// Update
router.put("/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);

  Entry.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(entry => res.json(entry))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  Entry.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});


 // Retrive by ListId
router.get("/objects/:id", (req, res, next) => {
  console.log(req.params.id)
  Entry.find({listId:req.params.id})
    .then(entry => res.status(200).json(entry))
    .catch(e => next(e));
}); 


module.exports = router;
