const favIcecreams = ["chocolate","strawberry","vanilla"];
const h1 = document.querySelector("h1");
const ul = document.createElement("ul");
h1.after(ul);


favIcecreams.forEach(function(icecream) {
    let li = document.createElement("li");
    li.innerHTML = icecream;
    ul.append(li);
});