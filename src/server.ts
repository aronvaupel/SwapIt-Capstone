import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

app.use('/storybook', express.static('dist/storybook'));

app.get('/api/hello', (_request, response) => {
  response.send('Hello API!');
});

app.use(express.static('dist/app'));
app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
