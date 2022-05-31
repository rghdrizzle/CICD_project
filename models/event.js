module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "event",
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      start_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      event_content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      likes_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      shop_id: {
        type: DataTypes.INTEGER,
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
      tableName: "EVENTS",
    }
  );
};
