module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    Item.associate = function(models) {
        Item.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })

        Item.belongsTo(models.Barcode, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Item;

};