<%- include ('../partials/navbar.ejs') %>


<form action="/products/<%=product._id%>?_method=DELETE" method="POST">
    <input class="button-primary" type="submit" value="DELETE"/>
</form>


///////////////////////////////////////////
# MONGODBURI=mongodb://localhost:27017/forum


/////////////////////////////////////////////
For loop that prints posts for index

<% for(let i = post.length - 1; i >= 0; i--){%>

    <div class="thread">
        <a href="/<%=post[i]._id%>">
            <h3><%=post[i].title%></h3>
        </a>
        <p>Likes: <%=post[i].votes%></p>
        <p><%=post[i]%></p>
        <br/>
    </div>
<% } %>

//////////////////////////////////////////////
bulma class card

<div class="card">
    <!-- <div class="columns">

    </div> -->
    <div class="card-content">
        <p class="title"><%=post[i].title%></p>

    </div>

</div>

/////////////////////////////////////////////
bulma card with columns

<div class="card">
    <div class="columns" style="border-radius: 5px">
        <div class="column is-one-fifth has-background-warning">
            <p><%=post[i].votes%></p>
        </div>
        <div class="column has-background-danger">
            <div class="card-content">
                <p class="title"><%=post[i].title%></p>
            </div>
        </div>
    </div>
    <div class="card-footer">
        <div class="card-footer-item">
            <a href="/<%=post[i]._id%>">num comments</a>
        </div>
    </div>

</div>

/////////////////////////////////////////////////

# MONGODB_URI=mongodb+srv://comet:comet7@forum.s4htd.mongodb.net/forummongodb?retryWrites=true&w=majority


///////////////////////////////////////////////////
home.ejs or postsHome.ejs jquery script

<script type="text/javascript">
    $(()=>{
        $("#bouton").on("click", (event)=>{
            let $foo = $("<h1>").text("new elem created by jquery onclick");
            $foo.appendTo(".bar");
        });
    });
</script>

<script type="text/javascript">
    $(()=>{
        $("#upvote_<%=post[i]._id%>").on("click", (event)=>{
            let $foo = $("<h1>").text("new elem created by jquery onclick");
            $foo.appendTo(".bar");
        });
    });
</script>


//////////////////////////////////////
edit link


<a class="is-pulled-right" href="/<%=post._id%>/edit">
<ion-icon name="create-outline" size="large"></ion-icon>
</a>


///////////////////////////////////////
show route elems

<h1><%=post.title%></h1>
<p><%=post.body%></p>

<div class="vote">
    <p>Votes: <%=post.votes%></p>

</div>
<!-- Edit post -->
<a href="/<%=post._id%>/edit">Edit</a>


//////////////////////////////////////////
index route card footer

<!-- footer -->
<div class="card-footer">
    <div class="card-footer-item">
        <a href="/<%=post._id%>"><%=post.numComments%> comments (reply)</a>
    </div>
    <a href="#" class="card-footer-item">Save</a>

/////////////////////////////////////////////
show route delete post form

<form action="/<%=post._id%>?_method=DELETE" method="POST">
    <input type="submit" value="DELETE">
</form>


/////////////////////////////////////////////
other delete forms

<!-- <form action="/" method="POST">
    Title: <input type="text" name="title" /><br/>
    Text: <input type="text" name="body" placeholder="min 100 characters"/><br/>

    <input type="submit" name="" value="Submit"/>
</form> -->



<!-- <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith">
        </div>
</div>

<div class="field">
    <label class="label">Email</label>
    <div class="control">
        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
    </div>
</div> -->

////////////////////////////////////////////

edit forms

<form action="/<%=post._id%>?_method=PUT" method="POST">
    Text: <input type="text" name="body" value="<%=post.body%>" placeholder="min 100 characters"/><br/>

    <input type="submit" name="" value="Submit"/>
</form>

Text: <input type="text" name="body" value="<%=post.body%>" placeholder="min 100 characters"/>
