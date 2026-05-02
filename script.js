console.log("JS carregado")
class MobileNavBar {
    constructor(mobilemenu, navlist, navlinks) {
        this.mobileMenu = document.querySelector(mobilemenu)
        this.navList = document.querySelector(navlist)
        this.navLinks = document.querySelectorAll(navlinks)
        this.activeClass = "active"
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("Hey "))
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