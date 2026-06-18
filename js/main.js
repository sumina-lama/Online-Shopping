// ============================================
// SUMINA'S STATIONERY — Main JS (Shared UI)
// ============================================

// Apply theme instantly to prevent page flash
const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initLanguage();
  initTheme();
  updateCartBadge();
  highlightActiveNav();
});

// Theme Toggle logic
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  
  themeToggle.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
    const targetTheme = activeTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  });
}

// Sticky navbar shadow on scroll
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });

  // Dynamically insert Admin / Login / Logout links into the nav menu
  const navLinks = document.getElementById("nav-links");
  if (navLinks) {
    const isAdmin = localStorage.getItem("ss_admin_logged_in") === "true";
    
    // Remove existing admin-nav-items if any
    navLinks.querySelectorAll(".admin-nav-item").forEach(el => el.remove());

    if (isAdmin) {
      navLinks.insertAdjacentHTML("beforeend", `
        <li class="admin-nav-item"><a href="admin.html" data-key="nav_admin">${t("nav_admin")}</a></li>
        <li class="admin-nav-item"><a href="#" id="logout-btn" data-key="nav_logout">${t("nav_logout")}</a></li>
      `);
      
      const logoutBtn = document.getElementById("logout-btn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
          e.preventDefault();
          localStorage.removeItem("ss_admin_logged_in");
          window.location.href = "index.html";
        });
      }
    } else {
      navLinks.insertAdjacentHTML("beforeend", `
        <li class="admin-nav-item"><a href="login.html" data-key="nav_login">${t("nav_login")}</a></li>
      `);
    }
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuBtn.classList.toggle("open");
    });
    // Close on link click
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.classList.remove("open");
      });
    });
  }
}

// Highlight active nav link
function highlightActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

// Re-render dynamic content on language change
document.addEventListener("langChange", () => {
  if (typeof renderCartPage === "function") renderCartPage();
  if (typeof renderShopPage === "function") renderShopPage();
  if (typeof renderProductDetail === "function") renderProductDetail();
  if (typeof renderCheckoutSummary === "function") renderCheckoutSummary();
});

// Shared product card builder (used on index + shop)
function buildProductCard(product) {
  const name = product.name[currentLang];
  const badgeMap = { new: "badge-new", sale: "badge-sale", hot: "badge-hot" };
  const badgeKey = product.badge ? `badge_${product.badge}` : null;

  return `
    <div class="product-card" onclick="window.location='product.html?id=${product.id}'">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${name}" class="product-img" loading="lazy">
        ${product.badge ? `<span class="badge ${badgeMap[product.badge]}">${t(badgeKey)}</span>` : ""}
        <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          + <span data-key="add_to_cart">${t("add_to_cart")}</span>
        </button>
      </div>
      <div class="product-info">
        <p class="product-category">${CATEGORIES.find(c => c.id === product.category)?.name[currentLang] || ""}</p>
        <h3 class="product-name">${name}</h3>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ""}
        </div>
      </div>
    </div>`;
}
