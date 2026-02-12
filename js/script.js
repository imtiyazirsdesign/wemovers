var swiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* Navbar scroll background */
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
/* ================= ACTIVE NAVBAR ON SCROLL ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* Counter Animation */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});

/* ================= PRICE CALCULATOR ================= */

const distanceRange = document.getElementById("distanceRange");
const distanceValue = document.getElementById("distanceValue");

const baseCost = document.getElementById("baseCost");
const gstCost = document.getElementById("gstCost");
const totalCost = document.getElementById("totalCost");

function calculatePrice() {
    let distance = parseInt(distanceRange.value);

    distanceValue.textContent = distance;

    // 🔥 Fixed Rate ₹500 Per KM
    let ratePerKm = 500;

    let base = distance * ratePerKm;
    let gst = base * 0.18;
    let total = base + gst;

    baseCost.textContent = "₹" + base.toLocaleString();
    gstCost.textContent = "₹" + Math.round(gst).toLocaleString();
    totalCost.textContent = "₹" + Math.round(total).toLocaleString();
}

distanceRange.addEventListener("input", calculatePrice);

calculatePrice();


var swiper = new Swiper(".myReviewSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });