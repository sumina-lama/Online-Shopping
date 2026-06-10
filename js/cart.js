// ============================================
// SUMINA'S STATIONERY — Cart Logic
// ============================================

const CART_KEY = "ss_cart";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  showCartToast();
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const product = getProductById(item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function showCartToast() {
  let toast = document.getElementById("cart-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cart-toast";
    toast.className = "cart-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = t("added_to_cart");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// Build cart page HTML
function renderCartPage() {
  const cartContainer = document.getElementById("cart-items");
  const summaryContainer = document.getElementById("cart-summary");
  if (!cartContainer) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3 data-key="cart_empty">${t("cart_empty")}</h3>
        <p data-key="cart_empty_desc">${t("cart_empty_desc")}</p>
        <a href="shop.html" class="btn btn-primary" data-key="cart_browse">${t("cart_browse")}</a>
      </div>`;
    if (summaryContainer) summaryContainer.style.display = "none";
    return;
  }

  if (summaryContainer) summaryContainer.style.display = "";

  cartContainer.innerHTML = `
    <table class="cart-table">
      <thead>
        <tr>
          <th data-key="cart_item">${t("cart_item")}</th>
          <th data-key="cart_price">${t("cart_price")}</th>
          <th data-key="cart_qty">${t("cart_qty")}</th>
          <th data-key="cart_total_col">${t("cart_total_col")}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${cart.map(item => {
          const p = getProductById(item.id);
          if (!p) return "";
          return `
            <tr class="cart-row" data-id="${p.id}">
              <td class="cart-product-cell">
                <img src="${p.image}" alt="${p.name[currentLang]}" class="cart-img">
                <span class="cart-product-name">${p.name[currentLang]}</span>
              </td>
              <td>${formatPrice(p.price)}</td>
              <td>
                <div class="qty-control">
                  <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
                  <span class="qty-val">${item.qty}</span>
                  <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
                </div>
              </td>
              <td class="cart-line-total">${formatPrice(p.price * item.qty)}</td>
              <td>
                <button class="cart-remove-btn" onclick="removeItem(${p.id})" title="${t('cart_remove')}">✕</button>
              </td>
            </tr>`;
        }).join("")}
      </tbody>
    </table>`;

  const subtotal = getCartTotal();
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="summary-card">
        <h3 class="summary-title" data-key="checkout_order_summary">${t("checkout_order_summary")}</h3>
        <div class="summary-row">
          <span data-key="cart_subtotal">${t("cart_subtotal")}</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
          <span data-key="cart_shipping">${t("cart_shipping")}</span>
          <span class="free-ship" data-key="cart_free_shipping">${t("cart_free_shipping")}</span>
        </div>
        <div class="summary-divider"></div>
        <div class="summary-row grand-total">
          <span data-key="cart_grand_total">${t("cart_grand_total")}</span>
          <span class="grand-total-price">${formatPrice(subtotal)}</span>
        </div>
        <a href="checkout.html" class="btn btn-primary w-full" data-key="cart_checkout">${t("cart_checkout")}</a>
        <a href="shop.html" class="btn btn-secondary w-full mt-sm" data-key="cart_continue">${t("cart_continue")}</a>
      </div>`;
  }
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
    renderCartPage();
  }
}

function removeItem(id) {
  removeFromCart(id);
  renderCartPage();
}
