const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/feedbackDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Feedback Schema
const FeedbackSchema = new mongoose.Schema({
  user: String,
  relationship: String,
  rating: Number,
  comments: String
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

// Routes
app.post('/api/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.json({ message: 'Feedback saved!' });
});

app.get('/api/feedback', async (req, res) => {
  const feedbackList = await Feedback.find();
  res.json(feedbackList);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
