const express = require('express');
const forum = express.Router();
const Post = require('../models/post.js');

const seed = require('../models/seed.js')
module.exports = forum;

//---------- Routes ----------//

// Seed
forum.get('/seed', (req, res)=>{
    // Post.insertOne((err, post)=>{
    //
    // });

    Post.create(seed, (error, data)=>{
        console.log("successfully seeded post!");
        res.redirect('/');
    });
});

// New
forum.get('/new', (req, res)=>{
    res.render(
        'newPost.ejs',
        {

        }
    );
});
// Create
forum.post('/', (req, res)=>{
    Post.create(req.body, (err, newPost)=>{
        res.redirect('/');
    })
})


// Show
forum.get('/:id', (req, res)=>{
    Post.findById(req.params.id, (err, foundPost)=>{
        res.render(
            'showPost.ejs',
            {
                post: foundPost
            }
        );
    });
});

// Edit
forum.get('/:id/edit', (req, res)=>{
    Post.findById(req.params.id, (err, foundPost)=>{
        res.render(
            'editPost.ejs',
            {
                post: foundPost
            }
        );
    });
});
// Update
forum.put('/:id', (req, res)=>{
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundPost)=>{
        res.redirect(`/${req.params.id}`);
    });
});

// Update-Upvote
forum.put('/:id/upvote', (req, res)=>{
    Post.findByIdAndUpdate(req.params.id, {$inc: {votes: + 1}}, (err, foundPost)=>{
        res.redirect('/');
    });
});
// Update-Downvote
forum.put('/:id/downvote', (req, res)=>{
    Post.findByIdAndUpdate(req.params.id, {$inc: {votes: - 1}}, (err, foundPost)=>{
        res.redirect('/');
    });
})


// Destroy
forum.delete('/:id/', (req, res)=>{
    Post.findByIdAndDelete(req.params.id, (err, foundPost)=>{
        res.redirect('/');
    });
});

// Index
forum.get('/', (req, res)=>{
    Post.find({}, (err, allPosts)=>{
        res.render(
            'home.ejs',
            {
                post: allPosts
            }
        )
    });
    // res.send("hello!");
    // res.render('home.ejs');
});
