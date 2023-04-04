const express = require('express');
const { validatePost } = require('../middleware');
const router = express.Router();
const jsonServer = require('json-server');
const db = jsonServer.router('db.json').db;

router.get('/posts', async (req, res) => {
  try {
    const posts = await db.get('posts').value();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const post = await db.get('posts').find({ id: req.params.id }).value();
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/posts', validatePost, async (req, res) => {
  try {
    const post = req.body;
    const newPost = await db.get('posts').push(post).write();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/posts/:id', async (req, res) => {
  try {
    const post = await db.get('posts').find({ id: req.params.id }).value();
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    const updatedPost = await db.get('posts').find({ id: req.params.id }).assign(req.body).write();
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await db.get('posts').find({ id: req.params.id }).value();
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    await db.get('posts').remove({ id: req.params.id }).write();
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
