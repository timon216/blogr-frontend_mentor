const productBtn = document.querySelector("#product-btn")
const productDialog = document.querySelector("#product-dialog")

const companyBtn = document.querySelector("#company-btn")
const companyDialog = document.querySelector("#company-dialog")

const connectBtn = document.querySelector("#connect-btn")
const connectDialog = document.querySelector("#connect-dialog")

productBtn.addEventListener("click", () => {
  closeAllDialogs()
  productDialog.show()
})
companyBtn.addEventListener("click", () => {
  closeAllDialogs()
  companyDialog.show()
})
connectBtn.addEventListener("click", () => {
  closeAllDialogs()
  connectDialog.show()
})

const dialogs = document.querySelectorAll("dialog")

window.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-item__btn")) {
    if (!e.target.closest(".nav-item__dialog") || e.target.closest(".nav-link")) {
      dialogs.forEach(dialog => {
        dialog.close()
      })
    }
  }
})

function closeAllDialogs() {
  dialogs.forEach(dialog => {
    dialog.close()
  })
}

// mobile navigation

const mobileNav = document.querySelector("#mobile-nav");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

mobileNavToggle.addEventListener("click", () => {
  const visibility = mobileNav.getAttribute("data-visible")
  if (visibility === "false") {
    mobileNav.setAttribute("data-visible", true)
    mobileNavToggle.setAttribute("aria-expanded", true)
  } else {
    mobileNav.setAttribute("data-visible", false)
    mobileNavToggle.setAttribute("aria-expanded", false)
  }
})

const mobileNavAccordions = document.querySelectorAll(".mobile-nav__accordion")
const accordionContentDivs = document.querySelectorAll(".accordion__content")

mobileNavAccordions.forEach(accordion => {
  accordion.addEventListener("click", (e) => {
    if (e.target.classList.contains("accordion__btn")) {
      accordionContentDivs.forEach(content => {
        content.classList.remove("is-open")
      })
      accordion.querySelector(".accordion__content").classList.toggle("is-open")
    }
  })
})