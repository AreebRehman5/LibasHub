// ============================================
// STORE CONFIG
// ============================================
const STORE_CONFIG = {
  easypaisa: { accountName: "LibasHub Official", accountNumber: "03198301854" },
  jazzcash:  { accountName: "LibasHub Official", accountNumber: "03390067091" },
  whatsapp: "923198301854"
};

// ============================================
// PRODUCTS
// ============================================
const products = [
  { id: 1, name: "Men's Casual Shirt", brand: "UrbanStyle", price: 2499, oldPrice: 3499, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c", badge: "Sale", category: "clothing" },
  { id: 2, name: "Women's Floral Dress", brand: "Elegance", price: 3299, oldPrice: 4599, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8", badge: "New", category: "clothing" },
  { id: 3, name: "Slim Fit Jeans", brand: "DenimCo", price: 2899, oldPrice: 3999, image: "https://images.unsplash.com/photo-1542272604-787c3835535d", badge: "", category: "clothing" },
  { id: 4, name: "Embroidered Kurta", brand: "KurtaKing", price: 1999, oldPrice: 2799, image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d", badge: "Hot", category: "clothing" },
  { id: 5, name: "Smart Watch Pro", brand: "TechTime", price: 5500, oldPrice: 7999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", badge: "Sale", category: "watches" },
  { id: 6, name: "Classic Leather Watch", brand: "TimeCraft", price: 4500, oldPrice: 6500, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d", badge: "Premium", category: "watches" },
  { id: 7, name: "Fitness Tracker Band", brand: "FitBand", price: 2999, oldPrice: 4200, image: "https://images.unsplash.com/photo-1544117519-31a4b719223d", badge: "New", category: "watches" },
  { id: 8, name: "Digital Sport Watch", brand: "ActiveWear", price: 3500, oldPrice: 5000, image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56", badge: "", category: "watches" },
  { id: 9, name: "Leather Backpack", brand: "CarryOn", price: 2800, oldPrice: 4200, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", badge: "Sale", category: "accessories" },
  { id: 10, name: "Aviator Sunglasses", brand: "SunShade", price: 1800, oldPrice: 2600, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083", badge: "Hot", category: "accessories" },
  { id: 11, name: "Leather Wallet", brand: "PocketPro", price: 1200, oldPrice: 1800, image: "https://images.unsplash.com/photo-1627123424574-724758594e93", badge: "", category: "accessories" },
  { id: 12, name: "Silk Scarf", brand: "LuxeTouch", price: 1500, oldPrice: 2200, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26", badge: "New", category: "accessories" },
  { id: 13, name: "White Sneakers", brand: "StreetStep", price: 4200, oldPrice: 5999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", badge: "Sale", category: "footwear" },
  { id: 14, name: "Formal Leather Shoes", brand: "Gentleman", price: 5500, oldPrice: 7500, image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1", badge: "Premium", category: "footwear" },
  { id: 15, name: "Running Shoes", brand: "FastTrack", price: 3800, oldPrice: 5500, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a", badge: "", category: "footwear" },
  { id: 16, name: "Casual Loafers", brand: "EasyWalk", price: 3200, oldPrice: 4500, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a", badge: "New", category: "footwear" }
];

let cart = [];

// ============================================
// MOBILE MENU
// ============================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// ============================================
// DISPLAY PRODUCTS
// ============================================
function displayProducts(filter) {
  filter = filter || 'all';
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => {
    let badgeClass = '';
    if (p.badge === 'Sale') badgeClass = 'badge-sale';
    else if (p.badge === 'New') badgeClass = 'badge-new';
    else if (p.badge === 'Hot') badgeClass = 'badge-hot';
    else if (p.badge === 'Premium') badgeClass = 'badge-premium';

    return `
      <div class="product-card">
        <div class="product-image">
          ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
          <img 
            src="${p.image}?w=600&q=80&auto=format&fit=crop" 
            srcset="${p.image}?w=300&q=80&auto=format&fit=crop 300w, ${p.image}?w=600&q=80&auto=format&fit=crop 600w, ${p.image}?w=900&q=80&auto=format&fit=crop 900w"
            sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
            alt="${p.name}" 
            width="600" 
            height="800"
            loading="lazy"
            decoding="async">
        </div>
        <div class="product-info">
          <p class="product-brand">${p.brand}</p>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-price-row">
            <span class="product-price">Rs ${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="product-old-price">Rs ${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <button class="product-add" onclick="addToCart(${p.id})">
            <i class="fas fa-shopping-bag"></i> ADD TO CART
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  displayProducts(cat);
}

// ============================================
// CART FUNCTIONS
// ============================================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });

  updateCartUI();
  showToast(`${product.name} added to cart`);

  if (window.innerWidth > 1024) openCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  updateCartUI();
}

function updateCartUI() {
  const cartBody = document.getElementById('cartBody');
  const cartCount = document.getElementById('cartCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotal = document.getElementById('cartTotal');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  cartCount.textContent = totalQty;
  cartSubtotal.textContent = totalPrice.toLocaleString();
  cartTotal.textContent = totalPrice.toLocaleString();

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag"></i>
        <p>Your cart is empty</p>
        <button class="btn btn-outline" onclick="toggleCart()">START SHOPPING</button>
      </div>
    `;
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.image}?w=200&q=80&auto=format&fit=crop" alt="${item.name}" loading="lazy"></div>
      <div class="cart-item-info">
        <p class="cart-item-brand">${item.brand}</p>
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-price">Rs ${(item.price * item.qty).toLocaleString()}</p>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ============================================
// CHECKOUT
// ============================================
function openCheckout() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }

  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('checkoutItems').textContent = totalQty;
  document.getElementById('checkoutTotal').textContent = totalPrice.toLocaleString();

  document.getElementById('checkoutForm').reset();
  updatePaymentInfo();

  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function updatePaymentInfo() {
  const selected = document.querySelector('input[name="payment"]:checked');
  if (!selected) return;

  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.classList.toggle('selected', opt.querySelector('input').checked);
  });

  const method = selected.value;
  const box = document.getElementById('paymentInfo');

  if (method === 'COD') {
    box.classList.remove('show');
    box.innerHTML = '';
  } else if (method === 'EasyPaisa') {
    box.classList.add('show');
    box.innerHTML = `
      <strong>📱 EasyPaisa Payment:</strong><br>
      1. Send total amount to:<br>
      &nbsp;&nbsp;Account Name: <span class="acc-num">${STORE_CONFIG.easypaisa.accountName}</span><br>
      &nbsp;&nbsp;Account Number: <span class="acc-num">${STORE_CONFIG.easypaisa.accountNumber}</span><br>
      2. Take screenshot of transaction.<br>
      3. Send to WhatsApp: <span class="acc-num">0319 8301854</span><br>
      4. Order confirmed after verification.
    `;
  } else if (method === 'JazzCash') {
    box.classList.add('show');
    box.innerHTML = `
      <strong>📲 JazzCash Payment:</strong><br>
      1. Send total amount to:<br>
      &nbsp;&nbsp;Account Name: <span class="acc-num">${STORE_CONFIG.jazzcash.accountName}</span><br>
      &nbsp;&nbsp;Account Number: <span class="acc-num">${STORE_CONFIG.jazzcash.accountNumber}</span><br>
      2. Take screenshot of transaction.<br>
      3. Send to WhatsApp: <span class="acc-num">0319 8301854</span><br>
      4. Order confirmed after verification.
    `;
  }
}

document.querySelectorAll('input[name="payment"]').forEach(radio => {
  radio.addEventListener('change', updatePaymentInfo);
});

function placeOrder(event) {
  event.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const payment = document.querySelector('input[name="payment"]:checked').value;

  if (!name || !phone || !address) { showToast('Please fill all fields'); return; }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const orderId = 'LH-' + Date.now().toString().slice(-8);
  const itemsList = cart.map(i => `• ${i.name} × ${i.qty} = Rs ${(i.price * i.qty).toLocaleString()}`).join('\n');

  document.getElementById('orderId').textContent = orderId;

  let msg = `Thank you <strong>${name}</strong>! Your order has been received.<br><br>`;
  if (payment === 'COD') {
    msg += `💵 <strong>Payment:</strong> Cash on Delivery<br>Keep Rs ${total.toLocaleString()} ready when delivery arrives.`;
  } else if (payment === 'EasyPaisa') {
    msg += `📱 <strong>Payment:</strong> EasyPaisa<br>Send Rs ${total.toLocaleString()} to <strong>${STORE_CONFIG.easypaisa.accountNumber}</strong> and share screenshot on WhatsApp.`;
  } else if (payment === 'JazzCash') {
    msg += `📲 <strong>Payment:</strong> JazzCash<br>Send Rs ${total.toLocaleString()} to <strong>${STORE_CONFIG.jazzcash.accountNumber}</strong> and share screenshot on WhatsApp.`;
  }

  document.getElementById('successMessage').innerHTML = msg;

  setTimeout(() => {
    const waText = encodeURIComponent(
      `🛒 NEW ORDER — ${orderId}\n\n` +
      `👤 Name: ${name}\n📞 Phone: ${phone}\n🏠 Address: ${address}\n\n` +
      `📦 Items:\n${itemsList}\n\n` +
      `💰 Total: Rs ${total.toLocaleString()}\n💳 Payment: ${payment}`
    );
    window.open(`https://wa.me/${STORE_CONFIG.whatsapp}?text=${waText}`, '_blank');
  }, 600);

  cart = [];
  updateCartUI();

  document.getElementById('checkoutModal').classList.remove('open');
  document.getElementById('successModal').classList.add('open');
}

function closeSuccess() {
  document.getElementById('successModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// CONTACT FORM
// ============================================
function submitContact(e) {
  e.preventDefault();
  showToast('Message sent! We will contact you soon.');
  e.target.reset();
}

// ============================================
// TOAST
// ============================================
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================
// HERO SLIDESHOW
// ============================================
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// ============================================
// FLOATING PARTICLES
// ============================================
function initParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  
  const particleCount = window.innerWidth < 768 ? 15 : 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    particlesContainer.appendChild(particle);
  }
}

// ============================================
// COUNTDOWN TIMER
// ============================================
function initCountdown() {
  const countdownEl = document.getElementById('bannerCountdown');
  if (!countdownEl) return;
  
  const endTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;
    
    if (distance < 0) {
      countdownEl.textContent = '00:00:00';
      return;
    }
    
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownEl.textContent = 
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ============================================
// STAT COUNTER ANIMATION
// ============================================
function initStatCounters() {
  const statValues = document.querySelectorAll('.stat-value[data-target]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const duration = 2000;
        const start = performance.now();
        const isDecimal = target % 1 !== 0;
        
        function animate(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          
          if (isDecimal) el.textContent = current.toFixed(1);
          else el.textContent = Math.floor(current).toLocaleString();
          
          if (progress < 1) requestAnimationFrame(animate);
          else {
            if (isDecimal) el.textContent = target.toFixed(1);
            else el.textContent = Math.floor(target).toLocaleString();
          }
        }
        
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(el => observer.observe(el));
}

// ============================================
// NAVBAR SCROLL SHADOW
// ============================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  else navbar.style.boxShadow = 'none';
}, { passive: true });

// ============================================
// KEYBOARD SUPPORT
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const cartDrawer = document.getElementById('cartDrawer');
    const checkoutModal = document.getElementById('checkoutModal');
    const successModal = document.getElementById('successModal');
    const mobileMenu = document.getElementById('mobileMenu');

    if (checkoutModal.classList.contains('open')) closeCheckout();
    else if (successModal.classList.contains('open')) closeSuccess();
    else if (cartDrawer.classList.contains('open')) toggleCart();
    else if (mobileMenu.classList.contains('open')) toggleMobileMenu();
  }
});

// ============================================
// INIT
// ============================================
displayProducts('all');
updateCartUI();
initHeroSlideshow();
initParticles();
initCountdown();
initStatCounters();

console.log('✅ LibasHub loaded — Attractive Homepage Ready!');