const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api/stories', require('./routes/storyRoutes'));
app.use('/api/npcs', require('./routes/npcRoutes'));
app.use('/api/monsters', require('./routes/monsterRoutes'));
app.use('/api/maps', require('./routes/mapRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
