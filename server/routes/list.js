const express = require("express");
const _ = require("lodash");
const router = express.Router();
const List = require("../models/List");
const Entry = require("../models/Entry");

const fields = Object.keys(_.omit(List.schema.paths, ["__v", "_id"]));

// Retrive ALL
router.get("/", (req, res, next) => {
  List.find()
    .then(lists => res.json(lists))
    .catch(e => next(e));
});

// Create
router.post("/", (req, res, next) => {
  const ph = _.pick(req.body, fields);
  List.create(ph)
    .then(list => res.json(list))
    .catch(e => next(e));
});

// Retrive DETAIL
router.get("/:id", (req, res, next) => {
  List.findById(req.params.id)
    .then(list => res.json(list))
    .catch(e => next(e));
});

// Update
router.put("/:id", (req, res, next) => {
  const updates = _.pick(req.body, fields);

  List.findByIdAndUpdate(req.params.id, updates, { new: true })
    .then(list => res.json(list))
    .catch(e => next(e));
});

// Delete
router.delete("/:id", (req, res, next) => {
  List.findByIdAndRemove(req.params.id)
    .then(() => res.json({ message: `SUCESSFUL DELETE ${req.params.id}` }))
    .catch(e => next(e));
});

// Retrive by UserId
router.get("/mylists/:id", (req, res, next) => {
  console.log(req.params.id)
  List.find({userId: req.params.id })
    .then(entry => res.status(200).json(entry))
    .catch(e => next(e));
});

module.exports = router;
