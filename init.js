import app from './app';

const PORT = 3000;

const handleLisning = () => console.log(`✅ Listning on: http://localhost:${PORT}`);

app.listen(PORT, handleLisning);