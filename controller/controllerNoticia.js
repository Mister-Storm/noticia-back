import db from "../db.js";
import Autor from "../models/autor.js";
import NoticiaRepository from "../models/noticia.js";

async function findAll(req, res) {
  const clients = await NoticiaRepository.findAll({
    raw: true,
    include: [{
      model: Autor,
     }]
  });
  res.json(clients);
}

function addNoticia(req, res) {
    NoticiaRepository.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
      AutorId: req.body.AutorId,
    }).then((result) => res.json(result));
  }

export default { findAll, addNoticia };
