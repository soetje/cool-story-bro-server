"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("homepages", "userId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
    await queryInterface.addColumn("stories", "homepageId", {
      type: Sequelize.INTEGER,
      reference: {
        model: "homepages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("homepages", "userId")
    await queryInterface.removeColumn("stories", "homepageId")
  },
}
