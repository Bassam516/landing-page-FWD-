/*TODO: creat dynamic list*/
let list = document.getElementById("list");    
list.setAttribute("class", "list");

const sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
    const name = sections[i].dataset.nav;
    const id = sections[i].getAttribute("id");

    let listItems = document.createElement("li"),
        links = document.createElement("a");

    listItems.appendChild(links);
    links.appendChild(document.createTextNode(name));
    list.appendChild(listItems);

    listItems.classList.add("list-item");

    links.classList.add("nav-link", id);
    links.setAttribute("href","#" + id);
    
}

const navA = document.querySelectorAll(".nav .list .list-item .nav-link");
/*TODO: smooth scroll to sections by navbar links*/
for (const link of navA) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
}


/* TODO: active nav links*/
window.onscroll = function () {
    scrollFunction() // TODO: show scroll-to-top button
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    
    navA.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });

}


/*TODO: scroll-to-top button*/
mybutton = document.getElementById("myBtn");

// TODO: When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if (pageYOffset >= 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// TODO: When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function (event) {
    event.preventDefault();
    scroll({
        top: 0,
        behavior: "smooth"

    });
}


