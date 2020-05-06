module.exports = function (sequelize, DataTypes) {
    var performance = sequelize.define(
        "performance",
        {
           
        },
        {
            timestamps: false
        }

    );
    return performance;
};