// Product Data with categories
const products = [
    { id: 1, name: "Organic Cotton Onesie Set", price: 1299, category: "clothing", ageGroup: "newborn", image: "https://images.unsplash.com/photo-1622290319146-7b63df48a635?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMG9uZXNpZXxlbnwwfHwwfHx8MA%3D%3D?w=500&q=80" },
    { id: 3, name: "Soft Sleep Suit", price: 1899, category: "clothing", ageGroup: "clothing", image: "https://media.johnlewiscontent.com/i/JohnLewis/006812333??w=500&q=80" },
    { id: 4, name: "Cloud Comfort Bodysuit", price: 999, category: "clothing", ageGroup: "newborn", image: "https://m.media-amazon.com/images/I/51itRTFvGhL._SX466_.jpg?w=500&q=80" },
    { id: 5, name: "Baby Cardigan Set", price: 2199, category: "clothing", ageGroup: "clothing", image: "https://m.media-amazon.com/images/I/61bg5UxJa8L._AC_UY350_.jpg?w=500&q=80" },
    { id: 6, name: "Newborn Gift Bundle", price: 3499, category: "bundles", ageGroup: "newborn", image: "https://babywondersuk.com/cdn/shop/files/24_d409c75f-a30d-4226-b726-4cf3a6fbd14d.jpg?v=1759629715?w=500&q=80" },
    { id: 7, name: "Organic Sleepwear Set", price: 1799, category: "clothing", ageGroup: "clothing", image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=500&q=80" },
    { id: 8, name: "Baby Mittens & Booties", price: 699, category: "accessories", ageGroup: "newborn", image: "https://images.unsplash.com/photo-1671306726276-e34093aaba24?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFieSUyMHNvY2tzfGVufDB8fDB8fHww?w=500&q=80" },
    { id: 9, name: "Premium Cotton Blanket", price: 1499, category: "accessories", ageGroup: "newborn", image: "https://images.unsplash.com/photo-1505679428249-ebe9559320a0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFieSUyMGJsYW5rZXR8ZW58MHx8MHx8fDA%3D?w=500&q=80" },
    { id: 10, name: "Starter Bundle - 5 Pieces", price: 4999, category: "bundles", ageGroup: "newborn", image: "https://i8.amplience.net/i/Lindex/8077549_1230_PS_F/beige-5-piece-baby-starter-kit?w=600&h=800&fmt=auto&qlt=70&fmt.jp2.qlt=50&sm=c?w=500&q=80" },
    { id: 11, name: "Baby Socks Set (6 pairs)", price: 599, category: "accessories", ageGroup: "newborn", image: "https://img.joomcdn.net/b30cf5d49c2f5fca4f7eb4983289a5211772be42_original.jpeg?w=500&q=80" },
    { id: 2, name: "Organic Bib Set", price: 799, category: "accessories", ageGroup: "newborn", image: "https://popupkids.in/cdn/shop/files/2_6b3ce65a-5452-44e2-ae68-040cca8de999_grande.jpg?v=1711622014?w=500&q=80" },
    { id: 12, name: "Baby Romper - Pastel Dreams", price: 1599, category: "clothing", ageGroup: "newborn", image: "https://image.made-in-china.com/202f0j00znLVSJMsfTuD/Knitting-2022-New-Baby-Girl-Sweet-Outfit-Romper-Infant-Baby-Girl-Pure-Color-Wool-Soft-Jumpsuit-Newborn-Baby-Girl-Clothes.webp?w=500&q=80" },


    // 18 NEW randomly generated products (total 30)
    { id: 13, name: "Cozy Bamboo Sleepsack", price: 2499, category: "clothing", ageGroup: "newborn", image: "https://gunamuna.com/cdn/shop/files/2810sage_2.jpg?v=1746784685&width=1500?odnHeight=372&odnWidth=372&odnBg=FFFFFF?w=500&q=80" },
    { id: 14, name: "Pastel Swaddle Set", price: 899, category: "accessories", ageGroup: "newborn", image: "https://littleandfern.com/cdn/shop/files/6AEBB18D-FF52-4DB9-BE2C-14D8AD470D1D.jpg?v=1752725263&width=900?w=500&q=80" },
    { id: 15, name: "Organic Muslin Swaddles (3pk)", price: 1299, category: "accessories", ageGroup: "newborn", image: "https://m.media-amazon.com/images/I/71ptNYuTWFL._AC_UF894,1000_QL80_.jpg?w=500&q=80" },
    { id: 16, name: "Velvet Baby Hoodie", price: 2799, category: "clothing", ageGroup: "newborn", image: "https://cutethee.com/cdn/shop/products/7af7edeb4ad748af1c93686c043df5d9.jpg?w=500&q=80" },
    { id: 17, name: "Newborn Essentials Bundle", price: 5999, category: "bundles", ageGroup: "newborn", image: "https://mymilestones.in/cdn/shop/files/RICH275_10.jpg?v=1753084176?w=500&q=80" },
    { id: 18, name: "Silk Lined Sleep Mask", price: 499, category: "accessories", ageGroup: "newborn", image: "https://m.media-amazon.com/images/I/61bAd24BzML._AC_UF894,1000_QL80_.jpg?w=500&q=80" },
];


let cart = [];
let currentFilter = 'all';
let currentBilling = 'monthly';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    updateCartCount();
    
    if (document.getElementById('products-grid')) {
        loadProducts();
    }
    
    if (document.getElementById('cart-items')) {
        loadCartItems();
    }
    
    // Show newsletter popup after 3 seconds (only once per session)
    if (!sessionStorage.getItem('newsletterShown') && document.getElementById('newsletter-popup')) {
        setTimeout(showNewsletterPopup, 3000);
        sessionStorage.setItem('newsletterShown', 'true');
    }
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('babyStoreCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('babyStoreCart', JSON.stringify(cart));
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadProducts();
}

// Load products into grid
function loadProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter || p.ageGroup === currentFilter);
    
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                    <div id="product-action-${product.id}"></div>
            </div>
        `;
            // render action area (Add button or quantity controls) based on cart
            setTimeout(() => renderProductAction(product.id), 0);
        grid.appendChild(card);
    });
}

    // Render the action area on a product card: either Add button or quantity controls
    function renderProductAction(productId) {
        const actionContainer = document.getElementById(`product-action-${productId}`);
        if (!actionContainer) return;

        const inCart = cart.find(i => i.id === productId);
        if (inCart) {
            actionContainer.innerHTML = `
                <div class="product-quantity-controls">
                    <button class="qty-btn qty-decrease" onclick="decreaseQuantity(${productId})">-</button>
                    <span class="qty-value" id="prod-qty-${productId}">${inCart.quantity}</span>
                    <button class="qty-btn qty-increase" onclick="increaseQuantity(${productId})">+</button>
                </div>
            `;
        } else {
            actionContainer.innerHTML = `
                <button class="btn-add-cart" id="add-btn-${productId}" onclick="addToCart(${productId})">Add to Cart</button>
            `;
        }
    }
// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCartToStorage();
    // Update the product card action (if present) so Add button becomes qty controls immediately
    try { renderProductAction(productId); } catch (e) { /* ignore if not on product page */ }
    showLoading('Adding to cart...');
    
    setTimeout(() => {
        hideLoading();
        updateCartCount();
        showToast('Item added to cart! 🛒');
    }, 800);
}

// Update cart count
function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    countElements.forEach(element => {
        element.textContent = totalItems;
        element.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

// Load cart items
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        cartSummary.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    cartItemsContainer.style.display = 'flex';
    cartSummary.style.display = 'block';
    emptyCart.style.display = 'none';
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
                    <div class="quantity-controls">
                        <button class="qty-btn qty-decrease" onclick="decreaseQuantity(${item.id})">-</button>
                        <span class="qty-value" id="qty-${item.id}">${item.quantity}</span>
                        <button class="qty-btn qty-increase" onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                    <p class="cart-item-line-total">Line: ₹${(item.price * item.quantity).toLocaleString('en-IN')}</p>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        Remove
                    </button>
                </div>
            `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    updateCartSummary();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    loadCartItems();
    updateCartCount();
    showToast('Item removed from cart');
    // Re-render product action on product page (show Add button again)
    try { renderProductAction(productId); } catch (e) { /* ignore */ }
}

// Change item quantity by delta (positive or negative)
function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;

    // If quantity drops to 0 or below, remove the item
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCartToStorage();

    // Update quantity text in-place if present, otherwise reload items
    const qtyEl = document.getElementById(`qty-${productId}`);
    if (qtyEl) {
        qtyEl.textContent = item.quantity;
        // update line total
        const parent = qtyEl.closest('.cart-item-details');
        if (parent) {
            const lineTotalEl = parent.querySelector('.cart-item-line-total');
            if (lineTotalEl) lineTotalEl.textContent = `Line: ₹${(item.price * item.quantity).toLocaleString('en-IN')}`;
        }
    } else {
        loadCartItems();
    }
    
        // Update product card quantity display if present
        const prodQty = document.getElementById(`prod-qty-${productId}`);
        if (prodQty) prodQty.textContent = item.quantity;
    
        // Re-render product action to switch to Add button when removed
        try { renderProductAction(productId); } catch (e) { /* ignore */ }

    updateCartCount();
    updateCartSummary();
}

function increaseQuantity(productId) {
    changeQuantity(productId, 1);
}

function decreaseQuantity(productId) {
    changeQuantity(productId, -1);
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const subtotalElement = document.getElementById('subtotal');
    if (subtotalElement) {
        subtotalElement.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    }
    calculateTotal();
}

// Calculate total with discounts
function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    
    const discountRow = document.getElementById('discount-row');
    if (discountRow && discountRow.style.display === 'flex') {
        discount += parseFloat(discountRow.dataset.discount) || 0;
    }
    
    const subscribeCheckbox = document.getElementById('subscribe-checkbox');
    if (subscribeCheckbox && subscribeCheckbox.checked) {
        discount += subtotal * 0.1;
    }
    
    const total = subtotal - discount;
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `₹${Math.round(total).toLocaleString('en-IN')}`;
    }
}

// Apply coupon
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value.trim().toUpperCase();
    
    if (!couponCode) {
        showToast('Please enter a coupon code');
        return;
    }
    
    showLoading('Applying coupon...');
    
    setTimeout(() => {
        hideLoading();
        
        const validCoupons = {
            'BABY10': 10,
            'SAVE15': 15,
            'CLOUD20': 20
        };
        
        if (validCoupons[couponCode]) {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const discountPercent = validCoupons[couponCode];
            const discountAmount = subtotal * (discountPercent / 100);
            
            const discountRow = document.getElementById('discount-row');
            const discountAmountEl = document.getElementById('discount-amount');
            
            discountRow.style.display = 'flex';
            discountRow.dataset.discount = discountAmount;
            discountAmountEl.textContent = `-₹${Math.round(discountAmount).toLocaleString('en-IN')}`;
            
            calculateTotal();
            showToast(`Coupon applied! ${discountPercent}% off 🎉`);
            couponInput.value = '';
        } else {
            showToast('Invalid coupon code ❌');
        }
    }, 1000);
}

// Toggle subscription discount
function toggleSubscription() {
    calculateTotal();
    const subscribeCheckbox = document.getElementById('subscribe-checkbox');
    if (subscribeCheckbox && subscribeCheckbox.checked) {
        showToast('Subscription discount applied! 🎁');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    showLoading('Processing your order...');
    
    setTimeout(() => {
        hideLoading();
        const orderNumber = Math.floor(100000 + Math.random() * 900000);
        document.getElementById('order-number').textContent = orderNumber;
        
        const modal = document.getElementById('checkout-modal');
        modal.classList.add('show');
        
        cart = [];
        saveCartToStorage();
        updateCartCount();
    }, 2000);
}

// Close checkout modal
function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('show');
    window.location.href = 'index.html';
}

// Newsletter functions
function showNewsletterPopup() {
    const popup = document.getElementById('newsletter-popup');
    if (popup) popup.classList.add('show');
}

function closeNewsletter() {
    const popup = document.getElementById('newsletter-popup');
    if (popup) popup.classList.remove('show');
}

function subscribeNewsletter(event) {
    event.preventDefault();
    showLoading('Subscribing...');
    
    setTimeout(() => {
        hideLoading();
        closeNewsletter();
        showToast('Welcome to the Little Clouds family! 💗');
        event.target.reset();
    }, 1000);
    
    return false;
}

// Subscription plan selection
function selectPlan(planType) {
    showLoading('Processing your subscription...');
    
    setTimeout(() => {
        hideLoading();
        const planNames = {
            'starter': 'Starter Plan',
            'essential': 'Essential Plan',
            'premium': 'Premium Plan'
        };
        
        document.getElementById('plan-name').textContent = `You've selected the ${planNames[planType]}`;
        
        const modal = document.getElementById('subscription-modal');
        if (modal) modal.classList.add('show');
    }, 1500);
}

function closeSubscriptionModal() {
    const modal = document.getElementById('subscription-modal');
    if (modal) modal.classList.remove('show');
}

// Billing toggle for subscription page
function toggleBilling(period) {
    currentBilling = period;
    
    document.querySelectorAll('.billing-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.querySelectorAll('.amount').forEach(amount => {
        const monthly = parseFloat(amount.dataset.monthly);
        const quarterly = parseFloat(amount.dataset.quarterly);
        const annual = parseFloat(amount.dataset.annual);
        
        if (period === 'monthly') {
            amount.textContent = monthly;
        } else if (period === 'quarterly') {
            amount.textContent = quarterly;
        } else if (period === 'annual') {
            amount.textContent = annual;
        }
    });
}

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    showLoading('Sending your message...');
    
    setTimeout(() => {
        hideLoading();
        const modal = document.getElementById('contact-modal');
        if (modal) modal.classList.add('show');
        event.target.reset();
    }, 1500);
    
    return false;
}

function closeContactModal() {
    const modal = document.getElementById('contact-modal');
    if (modal) modal.classList.remove('show');
}

// Loading overlay
function showLoading(message = 'Loading...') {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        const loadingText = overlay.querySelector('p');
        if (loadingText) loadingText.textContent = message;
        overlay.classList.add('show');
    }
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.classList.remove('show');
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (navMenu) navMenu.classList.toggle('active');
    if (toggle) toggle.classList.toggle('active');
}

// Close mobile menu on link click
document.addEventListener('click', function(e) {
    const navMenu = document.querySelector('.nav-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (e.target.closest('.nav-menu a')) {
        if (navMenu) navMenu.classList.remove('active');
        if (toggle) toggle.classList.remove('active');
    }
});

// Close modals on outside click
document.addEventListener('click', function(e) {
    const newsletterPopup = document.getElementById('newsletter-popup');
    const checkoutModal = document.getElementById('checkout-modal');
    const subscriptionModal = document.getElementById('subscription-modal');
    const contactModal = document.getElementById('contact-modal');
    
    if (e.target === newsletterPopup) closeNewsletter();
    if (e.target === checkoutModal) closeCheckoutModal();
    if (e.target === subscriptionModal) closeSubscriptionModal();
    if (e.target === contactModal) closeContactModal();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
