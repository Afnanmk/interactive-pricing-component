let toggleCheckbox = document.querySelector(".switch input"),
  price = document.querySelector(".card__price .pricefix"),
  switcher = document.querySelector(".switch"),
  duration = document.querySelector(".month"),
  pageViews = document.querySelector(".card__pageviews span")
range = document.querySelector(".myrange")

//   generate price on switch
switcher.onclick = function () {
  if (toggleCheckbox.checked == true) {
    let priceInt = parseInt(price.textContent)
    price.textContent = `${(priceInt - priceInt * 0.25) * 12}`
    duration.textContent = "/year"
    switcher.style.backgroundColor = "hsl(174, 77%, 80%)"
  } else {
    refreshPrices()
    duration.textContent = "/month"
    switcher.style.backgroundColor = "var(--Toggle_Background)"
  }
}

// generate price on range
range.addEventListener("input", refreshPrices)
function refreshPrices() {
  if (range.value == 1) {
    if (toggleCheckbox.checked == true) {
      price.textContent = `${(8 - 8 * 0.25) * 12}`
    } else {
      price.textContent = 8
    }

    pageViews.textContent = "10k Pageviews"
  }
  if (range.value == 2) {
    if (toggleCheckbox.checked == true) {
      price.textContent = `${(12 - 12 * 0.25) * 12}`
    } else {
      price.textContent = 12
    }

    pageViews.textContent = "50k Pageviews"
  }
  if (range.value == 3) {
    if (toggleCheckbox.checked == true) {
      price.textContent = `${(16 - 16 * 0.25) * 12}`
    } else {
      price.textContent = 16
    }

    pageViews.textContent = "100k Pageviews"
  }
  if (range.value == 4) {
    if (toggleCheckbox.checked == true) {
      price.textContent = `${(24 - 24 * 0.25) * 12}`
    } else {
      price.textContent = 24
    }

    pageViews.textContent = "500k Pageviews"
  }
  if (range.value == 5) {
    if (toggleCheckbox.checked == true) {
      price.textContent = `${(36 - 36 * 0.25) * 12}`
    } else {
      price.textContent = 36
    }

    pageViews.textContent = "1M Pageviews"
  }
}
