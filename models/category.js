module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "category",
    {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_datetime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      removed_datetime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "CATEGORIES",
    }
  );
};
