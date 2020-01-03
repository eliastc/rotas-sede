const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Rota = sequelize.define('rota', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    motorista: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
            len: [2, 50]
        }
    },
    intinerario:  {
        allowNull: false,
        type:Sequelize.STRING(255),
        validate: {
            len: [2, 255]
        }
    },
    postoIda: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
            len: [2,50]
        }
    },

    postoVolta: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
            len: [2,50]
        }
    },

    combustivel: {
        allowNull: false,
        type: Sequelize.STRING(25),
        validate: {
            len: [2,25]
        }  
    },

    litros: {
        allowNull: false,
        type: Sequelize.INTEGER        
    },

    quilometragemInicial: {
        allowNull: false,
        type: Sequelize.INTEGER        
    },

    quilometragemAbastecer: {
        allowNull: false,
        type: Sequelize.INTEGER        
    },

    quilometragemFinal: {
        allowNull: false,
        type:Sequelize.INTEGER        
    },

    cidade: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
            len: [2,50]
        }
    },  

    data: {
        allowNull: false,
        type: Sequelize.DATE
    },
    
    placa: {
        allowNull: false,
        type: Sequelize.STRING(12),
        validate: {
            len: [7,12]
        }
    }
});

module.exports = Rota;