const express = require('express');
const { validatePost } = require('./middleware');
const router = express.Router();
const db = require('./db');

// Get all posts
router.get('/posts', (req, res) => {
  const posts = db.get('posts').value();
  res.json(posts);
});

// Get a single post
router.get('/posts/:id', (req, res) => {
  const post = db.get('posts').find({ id: req.params.id }).value();
  res.json(post);
});

// Create a new post
router.post('/posts', validatePost, (req, res) => {
  const post = req.body;
  db.get('posts').push(post).write();
  res.json(post);
});

// Update an existing post
router.put('/posts/:id', validatePost, (req, res) => {
  const post = db
    .get('posts')
    .find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(post);
});

// Delete a post
router.delete('/posts/:id', (req, res) => {
  db.get('posts').remove({ id: req.params.id }).write();
  res.sendStatus(204);
});

module.exports = router;
