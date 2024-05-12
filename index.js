addEventListener("DOMContentLoaded", updateCards);

var ismonthly = true;
document.getElementById("month").addEventListener("click", function () {
  document.getElementById("month").style.backgroundColor = "#3f4551";
  document.getElementById("year").style.backgroundColor = "#1B3C73";
  document.getElementById("month").style.color = "white";
  document.getElementById("year").style.color = "black";
  ismonthly = true;
  updateCards();
});

document.getElementById("year").addEventListener("click", function () {
  document.getElementById("month").style.backgroundColor = "#1B3C73";
  document.getElementById("year").style.backgroundColor = "#3f4551";
  document.getElementById("year").style.color = "white";
  document.getElementById("month").style.color = "black";
  ismonthly = false;
  updateCards();
});

const currency = document.getElementById("currency");
const mobile = document.getElementById("mobile");
const basic = document.getElementById("basic");
const standard = document.getElementById("standard");
const premium = document.getElementById("premium");

currency.addEventListener("change", updateCards);

function updateCards() {
  
      
    if (ismonthly) 
    {
      mobile.innerText = "₹199/mo";
      basic.innerText = "₹299/mo";
      standard.innerText = "₹499/mo";
      // premium.innerText = "₹649/mo";
    } else 
    {
      mobile.innerText = "₹1490/yr";
      basic.innerText = "₹1990/yr";
      standard.innerText = "₹4990/yr";
      // premium.innerText = "₹6490/yr";
    }
}

window.onload = function() 
{
  var images = [support/paul-green-mln2ExJIkfc-unsplash.jpg, support/jose-ignacio-pompe-VkF6IXHVIvA-unsplash.jpg, support/alexander-dummer-aS4Duj2j7r4-unsplash.jpg]; //        var randomIndex = Math.floor(Math.random() * images.length); // Choose a random index
  var selectedImage = images[randomIndex]; // Get the selected image
  document.body.style.backgroundImage = 'url(' + selectedImage + ')'; // Set background image
};