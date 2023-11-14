const user = {
    lastActivityTime: null,
    posts: []
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve(user.lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.posts.length > 0) {
                const deletedPost = user.posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

// Example Usage with Promise.all
Promise.all([createPost({ title: 'Post 1', content: 'This is my first post' }), updateLastUserActivityTime()])
    .then(([_, updatedLastActivityTime]) => {
        console.log("Posts:", user.posts);
        console.log("Last Activity Time:", updatedLastActivityTime);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", user.posts);
    })
    .catch((error) => {
        console.error(error);
    });
