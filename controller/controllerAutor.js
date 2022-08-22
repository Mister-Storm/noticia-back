import AutorRepository from "../models/autor.js";

async function findAll(req, res) {
  const clients = await AutorRepository.findAll();
  res.json(clients);
}

async function findById(pk) {
  const client = await AutorRepository.findByPk(pk);
  console.log(client);
  return client;
}

function addAutor(req, res) {
    AutorRepository.create({
      nome: req.body.nome,
    }).then((result) => res.json(result));
  }

export default { findAll, findById, addAutor };
