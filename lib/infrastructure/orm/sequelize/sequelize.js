'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/environment');

const sequelize = new Sequelize('bdrepro', 'root', '123', 
    { host: 'localhost', dialect: 'mariadb' })

sequelize.import('./models/usuario');
sequelize.import('./models/tipo_usuario');
sequelize.import('./models/user_roles');

module.exports = sequelize;