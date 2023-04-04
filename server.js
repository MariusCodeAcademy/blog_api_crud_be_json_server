const express = require('express');
// const jsonServer = require('json-server');
const morgan = require('morgan');
const router = require('./routes/postsRoutes');
const app = express();
// const db = router.db;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
