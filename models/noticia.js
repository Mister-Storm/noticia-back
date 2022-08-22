import Sequelize from 'sequelize';
import db from "../db.js";
import Autor from './autor.js';

const Noticia = db.define('Noticia', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.STRING,
    }
});

export default Noticia;