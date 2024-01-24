module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "useraccountroles",
        {
            userid: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            accountroleid: {
                type: Sequelize.UUID,

                allowNull: false,
            },
           
            verified: {
                type: Sequelize.BOOLEAN,
                defaultValue: 0,
            },
            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                type: Sequelize.DATE,
            }

        },
        { timestamps: true, }
    )
}

