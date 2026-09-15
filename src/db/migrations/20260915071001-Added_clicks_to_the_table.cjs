module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(
      `ALTER TABLE urls ADD COLUMN clicks INT DEFAULT 0;`
    );
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(
      `ALTER TABLE urls DROP COLUMN clicks;`
    );
  }
};
