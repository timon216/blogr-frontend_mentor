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

