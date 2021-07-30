# Readit, a simple message board
#### (Title pending)

Live Heroku Site: <https://discount-reddit-2021.herokuapp.com/>

## Website Description:

The old college try at making a pared-down Reddit clone, this repo acts as a very simple message board with like/dislike functionality. At minimum, the webapp has full CRUD functionality with all 7 RESTful routes, with the main JS schema being the Reddit *post*. *Posts* are what the webapp is creating, editing, updating, and deleting.

## Technologies/Resources Used:

This webapp uses the MEN (MongoDB, Express, NodeJS) stack with CSS styling from the Bulma framework and icons from Ionicons.

## Notes, Challenges:

As of this writing (7/30/21), there were several stretch goals attempted which unfortunately were not met, either due to time constraints and/or difficulty of objective. In no particular order, they are:

- auth/sessions functionality
- auth/sessions permissions on post creation, edit, upvote, downvoting
- ability to comment on posts
- ability to comment on comments, nested indefinitely
- post and comment sorting (by timestamp, most upvotes/downvotes, most/least commented on posts, controversial, etc.)
- minimum character limit on post and/or comment text bodies
- including toggle functionality for upvotes/downvotes. In its current state, a user can upvote and downvote a post as many times as they like.


## Media Sources:

### CSS, Icons:

Bulma: <https://bulma.io/>
Ionicons: <https://ionic.io/ionicons>


### Images:

Index logo: <https://i.imgur.com/0vgmLsY.gif>


## Miscellany:

### The real joke is always in the comments:

The original plan of attack to build out comment functionality was through creating a comment schema and possibly including an array of those objects as one of the key-value pairs of the post schema. In doing so, comment data would always be linked/a part of post data.

Multidimentionality in said array could potentially be a way to preserve/track the comment structure as well. For example,

[
    [comment],
    [comment],      >> all top-level comments to the post
    [comment]
]

[
    [comment],                              >> top level comment
    [comment, [nest1comment]],              >> one top-level comment with one nested comment
    [comment],                              >> top level again

    [comment, [nest1, [nest2, nest2]]]      >> one top-level, one level-1-nested, two level-2-nested

]

and so on.

However, can key-value pairs in the schema accommodate arrays of indeterminate dimensionality? Is it even *necessary* to keep track of the overall comment structure in MongoDB? For example, perhaps the comment-create route could .appendTo() the child of an existing div, thereby getting built in nesting within the HTML structure.

Other typical queries (e.g., retrieve all posts/comments/upvotes/downvotes made by a user), could simply append to a schema key-value pair the post/comment ID on each call:

```
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required, true},
    userComments: [commentId: {type: String}]
})
```

...that then may look like:

userComments:
```
[
    {commentId: "blahblahblah001"},
    {commentId: "blahblahblah002"},
    {commentId: "blahblahblah003"},
    {commentId: "blahblahblah004"},
    {commentId: "blahblahblah005"},

]
```
