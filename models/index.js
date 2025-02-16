const User = require('./User');
const Comment = require('./Comment');
const Like = require('./Like');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

//like associations
User.belongsToMany(Post, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
    through: Like,
    as: 'liked_posts',
    foreignKey: 'post_id',
    // onDelete: 'SET NULL'
});

Like.belongsTo(User, {
    foreignKey: 'user_id'
});

Like.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Like, {
    foreignKey: 'user_id'
});

Post.hasMany(Like, {
    foreignKey: 'post_id'
});


module.exports = { User, Comment, Like, Post }