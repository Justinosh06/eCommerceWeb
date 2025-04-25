const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo-img");
const black = document.getElementById("logo-blk");
const cards = document.getElementById("cards");
const inner_background = document.getElementById("inner-background");


window.addEventListener ("scroll", function() {

    if (window.scrollY > 0){
        inner_background.classList.add("scrolled");
    } if(window.scrollY == 0) {
        inner_background.classList.remove("scrolled");
    }
});

function openNav(){
    navbar.classList.toggle("open");
}

var data = [
    {
        image: "../IMAGE/Ecobee Smart Thermostat Premium.png",
        name: "Ecobee Smart Thermostat Premium",
        brand: "Ecobee",
        price: 210.00,
        category: "Smart Thermostat",
        description: "Save up to 26% per year on heating and cooling costs. Included SmartSensor (50 dollar value) adjusts the temperature in the rooms that matter most to reduce hot or cold spots to keep you comfortable.",
    },
    {
        image: "../IMAGE/Nest Learning Thermostat - 3rd Generation.png",
        name: "Nest Learning Thermostat - 3rd Generation",
        brand: "Google",
        price: 233.95,
        category: "Smart Thermostat",
        description: "Programmable smart thermostat that learns your schedule and the temperatures you like and programs itself to help you save energy and stay comfortable",
    },
    {
        image: "../IMAGE/Philips E27 smart bulbs (800).png",
        name: "Philips E27 smart bulbs (800)",
        brand: "Philips",
        price: 74.95,
        category: "Smart Lighting",
        description: "Easily control your smart lights with the touch of a button, the sound of your voice or smart light accessories.",
    },
    {
        image: "../IMAGE/BLUETTI SP120 120W.png",
        name: "BLUETTI SP120 120W",
        brand: "Bluetti",
        price: 199.00,
        category: "Solar Energy Monitoring",
        description: "120-Watt monocrystalline solar panel with a high-efficiency solar cell of up to 23.5%",
    },
    {
        image: "../IMAGE/Solar CellPanel 12V 250mA (3W) with Wires.png",
        name: "Ring A19 Smart LED Bulb",
        brand: "Ring",
        price: 14.99,
        category: "Smart Lighting",
        description: "Energy-efficient smart LED bulb that shines up to 800 lumens of white light. Connect to the Ring Bridge, Echo Show 10 (3rd Gen), or Echo (4th Gen) to enable customizable smart controls in the Ring App.",
    }
]