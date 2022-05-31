module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "image",
    {
      image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      image_path: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      created_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      tableName: "IMAGES",
    }
  );
};
