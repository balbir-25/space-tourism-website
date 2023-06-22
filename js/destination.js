const toggleMenu = () => document.body.classList.toggle("open");

const pic = document.getElementById("destination-pic");
const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const euro = document.getElementById("euro");
const titan = document.getElementById("titan");
const title = document.getElementById("destination-name");
const para = document.getElementById("destination-para");
const distance = document.getElementById("distance");
const time = document.getElementById("time");

const destinationNavItem = document.querySelector('.bar-li:nth-child(2)');

destinationNavItem.classList.add('active');

const detailAItems = document.querySelectorAll('.detail-a');

detailAItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all li items
    detailAItems.forEach(a => {
      a.classList.remove('active');
    });

    // Add 'active' class to the clicked li item
    this.classList.add('active');
  });
});


// fetch data

const list = fetch("https://balbir-25.github.io/space-tourism-website/data.json").then((response) => {
    return response.json();
})

.then((data) => {

    // moon is clicked

    moon.addEventListener("click", () => {
        title.innerText = data.destinations[0].name;
        para.innerText = data.destinations[0].description;
        distance.innerText = data.destinations[0].distance;
        time.innerText = data.destinations[0].travel;
        pic.src = data.destinations[0].images.png;
    });

     // mars is clicked

    mars.addEventListener("click", () => {
        title.innerText = data.destinations[1].name;
        para.innerText = data.destinations[1].description;
        distance.innerText = data.destinations[1].distance;
        time.innerText = data.destinations[1].travel;
        pic.src = data.destinations[1].images.png;
    });

     // euro is clicked

    euro.addEventListener("click", () => {
        title.innerText = data.destinations[2].name;
        para.innerText = data.destinations[2].description;
        distance.innerText = data.destinations[2].distance;
        time.innerText = data.destinations[2].travel;
        pic.src = data.destinations[2].images.png;
    });

     // titan is clicked

    titan.addEventListener("click", () => {
        title.innerText = data.destinations[3].name;
        para.innerText = data.destinations[3].description;
        distance.innerText = data.destinations[3].distance;
        time.innerText = data.destinations[3].travel;
        pic.src = data.destinations[3].images.png;
    });

    // making moon default

    moon.click();

    // ROTATING THE PLANENTS

    const rotatePlanets = () => {
      const planets = document.querySelectorAll('.planet');
      planets.forEach((planet, index) => {
        planet.style.animationDelay = `${index * 2}s`; // Delay the animation for each planet
      });
    };
    
    const setInitialPlanet = (planetIndex) => {
      const planets = document.querySelectorAll('.detail-a');
      planets.forEach((planet, index) => {
        if (index === planetIndex) {
          planet.classList.add('active');
          planet.click(); // Simulate a click event to display the initial planet details
        } else {
          planet.classList.remove('active');
        }
      });
    };
    
    // Call the functions to rotate the planets and set the initial planet (e.g., Moon)
    rotatePlanets();
    setInitialPlanet(0);
    
});
