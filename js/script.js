window.addEventListener("load", function(){
    setTimeout(function(){
        document.querySelector(".preloader").classList.add("opacity-0");
        document.querySelector(".preloader").style.display="none";
    },1000)
})

// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtns = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItems = portfolioItems.length;

for(let i=0; i<totalFilterBtns; i++) {
    filterBtns[i].addEventListener("click", function() {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter");
        for(let j=0; j<totalPortfolioItems; j++) {
            if(filterValue === portfolioItems[j].getAttribute("data-category")) {
                portfolioItems[j].classList.remove("hide");
                portfolioItems[j].classList.add("show");
            }
            else {
                portfolioItems[j].classList.add("hide");
                portfolioItems[j].classList.remove("show");
            }
            if(filterValue === "all") {
                portfolioItems[j].classList.remove("hide");
                portfolioItems[j].classList.add("show");
            }
        }
    })
}

// Aside Navbar

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalAllSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let i = 0; i < totalAllSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for(let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 2560) {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for(let i = 0; i < totalAllSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");

}


const navToggler = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navToggler.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navToggler.classList.toggle("open");
    for(let i = 0; i < totalAllSection; i++) {
        allSection[i].classList.toggle("open");
    }
}