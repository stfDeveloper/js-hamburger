openHamburger = document.querySelector(".fa-bars");
openHamburger.addEventListener("click", function()
{
    const element = document.querySelector(".hamburger-menu");
    element.className = element.classList + " active";
});

closeHamburger = document.querySelector(".fa-times");
closeHamburger.addEventListener("click", function()
{
    const element = document.querySelector(".hamburger-menu");
    element.className = "hamburger-menu";
})
