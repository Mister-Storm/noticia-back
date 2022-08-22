import Sequelize from 'sequelize';
import db from "../db.js";
import Noticia from './noticia.js';

const Autor = db.define('Autor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
    }
});

Autor.hasOne(Noticia);
Noticia.belongsTo(Autor);

export default Autor;