// | Method                                      | Use                                        | Returns                 |
// | ------------------------------------------- | ------------------------------------------ | ----------------------- |
// | `document.getElementById("id")`             | Get an element by its ID                   | A single element        |
// | `document.querySelector("css-selector")`    | Get the **first** match for a CSS selector | A single element        |
// | `document.querySelectorAll("css-selector")` | Get **all** matches                        | A NodeList (array-like) |
// | `document.getElementsByClassName("class")`  | All elements with that class               | HTMLCollection          |
// | `document.getElementsByTagName("tag")`      | All elements with that tag                 | HTMLCollection          |

//dom is a big treee, selectors helps us specify a tree branch a node

const get = document.getElementById("heading")
get.textContent = "hello DOM !"

const par = document.querySelectorAll(".info")

par.forEach(p => console.log(p.textContent));

const a = document.getElementsByTagName("li");
li.style.color = 'green'