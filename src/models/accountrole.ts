module.exports = (sequelize: any, Sequelize: any) => {
    return sequelize.define(
        "accountrole",
        {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            rolename: {
                type: Sequelize.STRING,
                allowNull: false
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

