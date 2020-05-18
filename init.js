import app from './app';
import './db';
import dotenv from 'dotenv';       


dotenv.config();

import './models/Video';
import './models/User';
import './models/Comment';

const PORT = process.env.PORT || 3000 ;

const handleLisning = () => console.log(`✅ Listning on: http://localhost:${PORT}`);

app.listen(PORT, handleLisning);