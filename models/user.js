
module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define(
        "user",
        {

        },
        {
            timestamps: false
        }

    );
    return user;
};