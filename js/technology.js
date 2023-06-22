const toggleMenu = () => document.body.classList.toggle("open");

const pic = document.getElementById("tech-pic");
const para= document.getElementById("tech-para");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const title = document.getElementById("tech-name");

const technologyNavItem = document.querySelector('.bar-li:nth-child(4)');
technologyNavItem.classList.add('active');

const techAItems = document.querySelectorAll('.tech-a');

techAItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all tech-a items
    techAItems.forEach(a => {
      a.classList.remove('active');
    });
    // Add 'active' class to the clicked tech-a item
    this.classList.add('active');
  });
});



// fetch data

const list = fetch("https://balbir-25.github.io/space-tourism-website/data.json").then((response) => {
    return response.json();
})

.then((data) => {

    // one is clicked

    one.addEventListener("click", () => {
        title.innerText = data.technology[0].name;
        para.innerText = data.technology[0].description;
        if (window.innerWidth <= 768) {
           pic.src = data.technology[0].images.landscape;
          } else {
             pic.src = data.technology[0].images.portrait;
            
          }

    });

    // two is clicked

    two.addEventListener("click", () => {
        title.innerText = data.technology[1].name;
        para.innerText = data.technology[1].description;
        if (window.innerWidth <= 768) {
            pic.src = data.technology[1].images.landscape;
          } else {
             pic.src = data.technology[1].images.portrait;
           
          }

    });

     // three is clicked

     three.addEventListener("click", () => {
        title.innerText = data.technology[2].name;
        para.innerText = data.technology[2].description;
        if (window.innerWidth <= 768) {
            pic.src = data.technology[2].images.landscape;
          } else {
            pic.src = data.technology[2].images.portrait;
            
          }

    });

    // making one default

    one.click();
});