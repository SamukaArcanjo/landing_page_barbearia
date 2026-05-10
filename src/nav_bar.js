console.log("JS carregado")
class MobileNavBar {
    constructor(mobilemenu, navlist, navlinks) {
        this.mobileMenu = document.querySelector(mobilemenu)
        this.navList = document.querySelector(navlist)
        this.navLinks = document.querySelectorAll(navlinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ?(link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)

        })
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav_list",
    ".nav_list li"  
)

mobileNavBar.init()


const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50) {
        header.classList.add("scrolled");
    } 
    
    else {
        header.classList.remove("scrolled");
    }

});


const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }

    })

})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObserver.observe(element))