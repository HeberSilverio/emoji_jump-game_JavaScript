import express from 'express';

const app = express();

app.get('/users', (_request, response) => {
   return response.json({ message: 'Hello Word'});
   
});

app.listen(3333);
