
module.exports = {
  async up (queryInterface) {
      await queryInterface.sequelize.query(
  `CREATE TABLE urls (
    id INT NOT NULL AUTO_INCREMENT primary key,
    original_url VARCHAR(255) NOT NULL,
    short_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`
    )
  },

  async down (queryInterface) {
    queryInterface.sequelize.query('DROP TABLE IF EXISTS urls;');
  }
};
