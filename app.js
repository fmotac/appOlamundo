// Importa o módulo express
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor irá escutar
const port = 3000;

// Define uma rota GET para a URL raiz ("/")
// Quando alguém acessa esta rota, a função de callback é executada
app.get('/', (req, res) => {
  // Envia a string "Olá Mundo!" como resposta
  res.send('Olá Mundo!');
});

// Inicia o servidor e o faz escutar na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});