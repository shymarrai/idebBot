const express = require('express');
const twilio = require('twilio');
require('dotenv').config()

const app = express();

const opcoes = [
  'pedra', 'papel', 'tesoura'
];

const perde = {
  'pedra': 'papel',
  'papel': 'tesoura',
  'tesoura': 'pedra'
} 

// aqui vamos inserir a lógica do jogo
app.post('/message', (req, res) => {  
  console.log('nova mensagem', 'teste');
  
  
});

app.listen(process.env.PORT, function(){
  console.log('Servidor ativo na porta 3000!');
})
