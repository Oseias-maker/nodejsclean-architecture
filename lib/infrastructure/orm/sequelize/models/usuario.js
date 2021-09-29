module.exports = (sequelize, DataTypes) => {
 const usuario = sequelize.define('usuario', {
    nif: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    senha: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    id_depto: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'departamento',
        key: 'id_depto'
      }
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "unique_email"
    },
    cfp: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    imagem: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nif" },
        ]
      },
      {
        name: "unique_email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "id_depto",
        using: "BTREE",
        fields: [
          { name: "id_depto" },
        ]
      },
    ]
  });
  usuario.associate = function(models) {
    models.user_roles.belongsTo(models.usuario, { as: "user", foreignKey: "userId"});
    models.user_roles.belongsTo(models.tipo_usuario, { as: "role", foreignKey: "roleId"});
    this.belongsToMany(models.tipo_usuario, { as: 'roles', through: user_roles, foreignKey: "userId", otherKey: "roleId" });
    models.tipo_usuario.belongsToMany(models.usuario, { as: 'userId_usuarios', through: user_roles, foreignKey: "roleId", otherKey: "userId" });
    this.belongsToMany(models.tipo_usuario, { as: 'roleId_tipo_usuarios', through: user_roles, foreignKey: "userId", otherKey: "roleId" });
  };
  return usuario;
};