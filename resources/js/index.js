//  DOM selections

const menu = document.querySelector("#nav-toggle");


// functions

// toggle mobile Nav
const toggleMenu = ()=>{
    const navList = document.querySelector(".nav-list");
    if(navList.style.display === "none" || navList.style.display === "")  {
        navList.style.display = "block";
        menu.className = "active";
    } else {
        navList.style.display="none";
        menu.className = "";
    }
};

// Event listeners

menu.onclick = toggleMenu;