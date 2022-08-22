import express from "express";
import autor from "./controller/controllerAutor.js";
import noticia from "./controller/controllerNoticia.js"

const routes = express.Router();

routes.get("/autores", autor.findAll);
routes.post("/autores", autor.addAutor);

routes.get("/noticias", noticia.findAll);
routes.post("/noticias", noticia.addNoticia);

export { routes as default };
