var Posts = require('./Post')

const User = require('./User')
User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Posts, User }