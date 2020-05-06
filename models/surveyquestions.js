
module.exports = function (sequelize, DataTypes) {
    var surveyquestions = sequelize.define(
        "surveyquestions",
        {

        },
        {
            timestamps: false
        }

    );
    return surveyquestions;
};