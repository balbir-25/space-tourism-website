const toggleMenu = () => document.body.classList.toggle("open");

const pic = document.getElementById("pic");
const bio = document.getElementById("bio");
const role = document.getElementById("role");
const person1 = document.getElementById("person1");
const person2 = document.getElementById("person2");
const person3 = document.getElementById("person3");
const person4 = document.getElementById("person4");
const title = document.getElementById("name");

const crewNavItem = document.querySelector('.bar-li:nth-child(3)');
crewNavItem.classList.add('active');



// fetch data

const list = fetch("https://balbir-25.github.io/space-tourism-website/data.json").then((response) => {
    return response.json();
})

.then((data) => {

    // person1 is clicked

    person1.addEventListener("click", () => {
        title.innerText = data.crew[0].name;
        role.innerText = data.crew[0].role;
        bio.innerText = data.crew[0].bio;
        pic.src = data.crew[0].images.png;
    });

    // person2 is clicked

    person2.addEventListener("click", () => {
        title.innerText = data.crew[1].name;
        role.innerText = data.crew[1].role;
        bio.innerText = data.crew[1].bio;
        pic.src = data.crew[1].images.png;
    });

     // person3 is clicked

     person3.addEventListener("click", () => {
        title.innerText = data.crew[2].name;
        role.innerText = data.crew[2].role;
        bio.innerText = data.crew[2].bio;
        pic.src = data.crew[2].images.png;
    });

     // person4 is clicked

     person4.addEventListener("click", () => {
        title.innerText = data.crew[3].name;
        role.innerText = data.crew[3].role;
        bio.innerText = data.crew[3].bio;
        pic.src = data.crew[3].images.png;
    });



    // making person1 default

    person1.click();
});