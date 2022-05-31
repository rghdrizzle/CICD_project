module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "shop",
    {
      shop_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING(11),
        allowNull: false,
      },
      register_number: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      start_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      holiday: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      shop_content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      zonecode: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      basic_address: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      road_address: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      detail_address: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      latitude: {
        type: DataTypes.DECIMAL(10, 7),
        allowNull: false,
      },
      longitude: {
        type: DataTypes.DECIMAL(11, 7),
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
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
      tableName: "SHOPS",
    }
  );
};
