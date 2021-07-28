<%- include ('../partials/navbar.ejs') %>


<form action="/products/<%=product._id%>?_method=DELETE" method="POST">
    <input class="button-primary" type="submit" value="DELETE"/>
</form>


///////////////////////////////////////////
# MONGODBURI=mongodb://localhost:27017/forum
