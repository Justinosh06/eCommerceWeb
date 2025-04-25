const navbar = document.getElementById("navbar"),
logo = document.getElementById("logo-img"),
black = document.getElementById("logo-blk"),
shopping_cart = document.getElementById("cart"),
thermostatBtn = document.getElementById("thermostat-btn"),
bulbBtn = document.getElementById("bulb-btn");

function changeGlowValue() {
    const colorInput = document.getElementById('colorInput');

    const colorValue = colorInput.value;
    document.documentElement.style.setProperty('--glow2', `hsl(${colorValue}, 100%, 50%)`);
}

function toggleCart(){
    shopping_cart.classList.toggle("open");

    navbar.classList.remove("open");
}

function openNav(){
    navbar.classList.toggle("open");
}

function toggleThermostat() {
    const dropdown = document.querySelector('.thermostat-dropdown');
    dropdown.classList.toggle('show');
}

function toggleBulb() {
    const dropdown = document.querySelector('.bulb-dropdown');
    dropdown.classList.toggle('show');
}

function selectProduct(product) {
    const plusButton = document.getElementById('thermostat-btn');
    const plusButtonBulb = document.getElementById('bulb-btn');

    if (product == "../IMAGE/Nest Learning Thermostat tooltip.png" || product == "../IMAGE/Ecobee Smart Thermostat Premium tooltip.png"){
        plusButton.innerHTML = `<img src="${product}" class="tooltip-img">`;
        plusButton.style.animation = "pulse 1.4s linear infinite";

        toggleThermostat();
    } else if (product == "../IMAGE/Ring A19 Smart LED Bulb tooltip.png" || product == ""){
        plusButtonBulb.innerHTML = `<img src="${product}" class="tooltip-img">`;
        plusButtonBulb.style.animation = "pulseBulb 1.4s linear infinite";
        plusButtonBulb.style.transform = "rotate(180deg)";

        toggleBulb();
    }
}

const resolver = {
    resolve: function resolve(options, callback) {
      // The string to resolve
      const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
      const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
      
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      
      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      };
      
      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;
  
        let iterations = options.iterations;
  
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
  
            // Ensures partialString without the random character as the final state.
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              // Replaces the last character of partialString with a random character
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }
  
            doRandomiserEffect(nextOptions, callback)
          } else if (typeof callback === "function") {
            callback(); 
          }
        }, options.timeout);
      };
      
      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, {partialString: partialString});
  
        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, {offset: offset + 1});
  
          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      };
  
      doResolverEffect(combinedOptions, callback);
    } 
  }
  
  const strings = "With cutting-edge technology and intuitive designs, KIMPLE revolutionizes homes by offering a diverse range of innovative smart home devices that seamlessly integrate into modern living spaces, providing convenience, comfort, and security at your fingertips.";
  
  let counter = 0;
  
  const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 5,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings,
    // The element
    element: document.querySelector('[data-target-resolver]')
  }
  
  // Callback function when resolve completes
  function callback() {
    setTimeout(() => {
      counter ++;
      
      if (counter >= strings.length) {
        counter = 0;
      }
      
      let nextOptions = Object.assign({}, options, {resolveString: strings});
      resolver.resolve(nextOptions, callback);
    }, 10000);
  }
  
  resolver.resolve(options, callback);

  document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');
    const progress = document.getElementById('progress');
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight - windowHeight;

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const progressWidth = (scrollTop / scrollHeight) * 100;
        progress.style.width = `${progressWidth}%`;

        if (scrollTop > 0) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});