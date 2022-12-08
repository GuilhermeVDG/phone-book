const express = require('express');
const cors = require('cors');

const app = express();
const contatos = [
  {nome: "Felipe", telefone: "9844-9876", data: new Date(), operadora: {nome: "Oi", codigo: 15}, categoria: "Celular"},
  {nome: "Maria", telefone: "9676-5532", data: new Date(), operadora: {nome: "Vivo", codigo: 13}, categoria: "Celular"},
  {nome: "João", telefone: "9876-3232", data: new Date(), operadora: {nome: "Claro", codigo: 19, categoria: "Fixo"}}
];

const operadoras = [
  {nome: "Tim", codigo: 10, categoria: "Celular"},
  {nome: "Oi", codigo: 15, categoria: "Celular"},
  {nome: "Vivo", codigo: 13, categoria: "Celular"},
  {nome: "GVT", codigo: 21, categoria: "Fixo"},
  {nome: "Claro", codigo: 19, categoria: "Fixo"}
];

app.use(cors());
app.use(express.json());

app.listen('3050', () => {
  console.log('Server started in potr 3050');
});

app.get('/contatos', (req, res) => {
  return res.json(contatos);
});

app.get('/operadoras', (req, res) => {
  return res.json(operadoras);
});

app.post('/contatos', (req, res) => {
  contatos.push(req.body);
  return res.json(contatos);
});