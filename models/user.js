module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(41),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      role: {
        type: DataTypes.BOOLEAN,
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
      tableName: "USERS",
    }
  );
};
