var bcrypt = require("bcrypt-nodejs")

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            len: [1],
            validate: {
                isEmail: true
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },

    });

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    }

    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });

    User.associate = function (models) {
        User.hasMany(models.Barcode, {
            onDelete: "cascade"
        });

        User.hasMany(models.Item, {
            onDelete: "cascade"
        });
    };

    return User;
};