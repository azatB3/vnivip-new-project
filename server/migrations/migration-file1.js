'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('paragraphs', 'video',
            {
                type: Sequelize.STRING,
                allowNull: true,
            },
        );
    },

    down: async (queryInterface, Sequelize) => {

    }
};
