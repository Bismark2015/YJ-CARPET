// Products Data (10 products for JY CARPET - using local images)
const productsData = [
    {
        id: 1,
        name: "3D Geometric Carpet",
        price: 320,
        category: "3d",
        size: "140x200 cm",
        description: "Modern geometric 3D pattern perfect for living rooms. Durable and stylish.",
        rating: 5,
        reviews: 42,
        stock: 12,
        colors: ["#2C3E50", "#34495E", "#7F8C8D"],
        badges: ["popular", "3d"],
        image: "assets/images/3d/3d1.jpg"
    },
    {
        id: 2,
        name: "3D Wave Carpet",
        price: 350,
        category: "3d",
        size: "160x230 cm",
        description: "Beautiful wave pattern 3D carpet. Adds depth and elegance to any room.",
        rating: 4,
        reviews: 28,
        stock: 8,
        colors: ["#3498DB", "#2980B9", "#85C1E9"],
        badges: ["new", "3d"],
        image: "assets/images/3d/3d2.jpg"
    },
    {
        id: 3,
        name: "3D Diamond Carpet",
        price: 380,
        category: "3d",
        size: "180x250 cm",
        description: "Premium diamond pattern 3D carpet. Luxurious feel with anti-slip backing.",
        rating: 5,
        reviews: 56,
        stock: 6,
        colors: ["#E74C3C", "#C0392B", "#EC7063"],
        badges: ["bestseller", "3d"],
        image: "assets/images/3d/3d3.jpg"
    },
    {
        id: 4,
        name: "3D Square Carpet",
        price: 300,
        category: "3d",
        size: "140x200 cm",
        description: "Classic square pattern 3D carpet. Perfect for offices and study rooms.",
        rating: 4,
        reviews: 34,
        stock: 15,
        colors: ["#27AE60", "#229954", "#82E0AA"],
        badges: ["affordable", "3d"],
        image: "assets/images/3d/3d4.jpg"
    },
    {
        id: 5,
        name: "3D Circle Carpet",
        price: 420,
        category: "3d",
        size: "200x300 cm",
        description: "Large circular pattern 3D carpet. Makes a bold statement in spacious rooms.",
        rating: 5,
        reviews: 39,
        stock: 4,
        colors: ["#8E44AD", "#9B59B6", "#BB8FCE"],
        badges: ["premium", "3d"],
        image: "assets/images/3d/3d5.jpg"
    },
    {
        id: 6,
        name: "Fluffy White Carpet",
        price: 280,
        category: "fluffy",
        size: "140x200 cm",
        description: "Soft and cozy white fluffy carpet. Perfect for bedrooms and nurseries.",
        rating: 5,
        reviews: 67,
        stock: 10,
        colors: ["#FFFFFF", "#F2F3F4", "#F8F9F9"],
        badges: ["bestseller", "fluffy"],
        image: "assets/images/fluffy/fluffy1.jpg"
    },
    {
        id: 7,
        name: "Fluffy Grey Carpet",
        price: 310,
        category: "fluffy",
        size: "160x230 cm",
        description: "Elegant grey fluffy carpet. Hides stains well and feels incredibly soft.",
        rating: 4,
        reviews: 45,
        stock: 9,
        colors: ["#95A5A6", "#7F8C8D", "#BDC3C7"],
        badges: ["popular", "fluffy"],
        image: "assets/images/fluffy/fluffy2.jpg"
    },
    {
        id: 8,
        name: "Fluffy Pink Carpet",
        price: 290,
        category: "fluffy",
        size: "120x180 cm",
        description: "Adorable pink fluffy carpet. Perfect for kids' rooms and adds a pop of color.",
        rating: 5,
        reviews: 52,
        stock: 7,
        colors: ["#FADBD8", "#F5B7B1", "#F1948A"],
        badges: ["kids", "fluffy"],
        image: "assets/images/fluffy/fluffy3.jpg"
    },
    {
        id: 9,
        name: "Fluffy Beige Carpet",
        price: 340,
        category: "fluffy",
        size: "180x250 cm",
        description: "Warm beige fluffy carpet. Neutral color that matches any decor style.",
        rating: 4,
        reviews: 38,
        stock: 5,
        colors: ["#F7DC6F", "#F4D03F", "#F1C40F"],
        badges: ["versatile", "fluffy"],
        image: "assets/images/fluffy/fluffy4.jpg"
    },
    {
        id: 10,
        name: "Fluffy Multi-color Carpet",
        price: 370,
        category: "fluffy",
        size: "200x300 cm",
        description: "Vibrant multi-color fluffy carpet. Adds fun and energy to any space.",
        rating: 5,
        reviews: 41,
        stock: 3,
        colors: ["#E74C3C", "#3498DB", "#2ECC71", "#F1C40F"],
        badges: ["vibrant", "fluffy"],
        image: "assets/images/fluffy/fluffy5.jpg"
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Akua Mensah",
        location: "East Legon, Accra",
        rating: 5,
        text: "Absolutely love my 3D Geometric Carpet! The quality is amazing and it transformed my living room completely. Delivery was super fast!",
        product: "3D Geometric Carpet",
        date: "2024-01-15",
        avatar: "AM"
    },
    {
        id: 2,
        name: "Kwame Asante",
        location: "Kumasi",
        rating: 5,
        text: "Best carpet shop in Ghana! The Fluffy Grey carpet feels like walking on clouds. Customer service was excellent throughout.",
        product: "Fluffy Grey Carpet",
        date: "2024-01-10",
        avatar: "KA"
    },
    {
        id: 3,
        name: "Esi Boateng",
        location: "Tema",
        rating: 4,
        text: "Very happy with my purchase. The 3D Diamond effect is stunning and gets compliments from everyone who visits. Will definitely buy again!",
        product: "3D Diamond Carpet",
        date: "2024-01-05",
        avatar: "EB"
    },
    {
        id: 4,
        name: "Yaw Ofori",
        location: "Cape Coast",
        rating: 5,
        text: "Quality exceeded my expectations. The Fluffy White carpet is durable, easy to clean, and looks exactly like the pictures. Great value for money!",
        product: "Fluffy White Carpet",
        date: "2023-12-28",
        avatar: "YO"
    },
    {
        id: 5,
        name: "Ama Darko",
        location: "Takoradi",
        rating: 5,
        text: "Ordered 3D Square carpets for my office and they all arrived perfectly. Professional service and premium quality products. Highly recommended!",
        product: "3D Square Carpet",
        date: "2023-12-20",
        avatar: "AD"
    }
];

// Categories for filtering
const categories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-th' },
    { id: '3d', name: '3D Carpets', icon: 'fas fa-cube' },
    { id: 'fluffy', name: 'Fluffy Carpets', icon: 'fas fa-cloud' },
    { id: 'bestseller', name: 'Best Sellers', icon: 'fas fa-star' },
    { id: 'new', name: 'New Arrivals', icon: 'fas fa-fire' }
];

// DOM Elements
let currentFilter = 'all';
let currentSort = 'featured';
let currentTestimonialSlide = 0;
let cart = JSON.parse(localStorage.getItem('jyCarpetCart')) || [];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 1500);

    // Load categories
    renderCategories();
    
    // Load products
    renderProducts();
    
    // Load testimonials
    renderTestimonials();
    
    // Load cart
    updateCart();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup search
    setupSearch();
}

function renderCategories() {
    const filterButtons = document.getElementById('filterButtons');
    filterButtons.innerHTML = categories.map(category => `
        <button class="filter-btn ${category.id === 'all' ? 'active' : ''}" 
                data-category="${category.id}">
            <i class="${category.icon}"></i> ${category.name}
        </button>
    `).join('');
    
    // Add click events to filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter products
            currentFilter = this.dataset.category;
            renderProducts();
        });
    });
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productsEmpty = document.getElementById('productsEmpty');
    
    // Filter products
    let filteredProducts = [...productsData];
    
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (currentFilter === 'bestseller') {
                return product.badges.includes('bestseller');
            } else if (currentFilter === 'new') {
                return product.badges.includes('new');
            } else {
                return product.category === currentFilter || 
                       product.badges.includes(currentFilter);
            }
        });
    }
    
    // Sort products
    filteredProducts = sortProducts(filteredProducts, currentSort);
    
    // Update products count
    document.getElementById('productsCount').textContent = filteredProducts.length;
    
    // Render products or show empty state
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        productsEmpty.style.display = 'block';
    } else {
        productsGrid.style.display = 'grid';
        productsEmpty.style.display = 'none';
        
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        
        // Add event listeners to quick view buttons
        document.querySelectorAll('.quick-view-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.productId);
                openQuickView(productId);
            });
        });
        
        // Add event listeners to add to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.productId);
                addToCart(productId);
            });
        });
    }
}

function createProductCard(product) {
    const stars = '⭐'.repeat(Math.floor(product.rating)) + 
                  (product.rating % 1 >= 0.5 ? '½' : '');
    
    const badgesHTML = product.badges.map(badge => {
        const badgeText = badge === '3d' ? '3D' : 
                         badge === 'fluffy' ? 'FLUFFY' :
                         badge.charAt(0).toUpperCase() + badge.slice(1);
        const badgeClass = `badge-${badge}`;
        return `<span class="product-badge ${badgeClass}">${badgeText}</span>`;
    }).join('');
    
    const colorsHTML = product.colors.map(color => 
        `<span class="color-dot" style="background: ${color}" title="${color}"></span>`
    ).join('');
    
    const whatsappMessage = `Hi JY CARPET, I'm interested in the ${product.name} (${product.size}) - GH₵ ${product.price}`;
    const whatsappURL = `https://wa.me/233249402659?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Check if product is already in cart
    const cartItem = cart.find(item => item.id === product.id);
    const cartButtonText = cartItem ? `<i class="fas fa-check"></i> Added` : `<i class="fas fa-cart-plus"></i> Add to Cart`;
    const cartButtonClass = cartItem ? 'add-to-cart-btn added' : 'add-to-cart-btn';
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            ${badgesHTML}
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\" viewBox=\"0 0 300 300\"><rect width=\"100%\" height=\"100%\" fill=\"%23f5f5f5\"/><text x=\"50%\" y=\"50%\" font-family=\"Arial\" font-size=\"24\" text-anchor=\"middle\" dy=\".3em\" fill=\"%23666\">${product.name}</text></svg>'">
            </div>
            <div class="product-info">
                <div class="product-header">
                    <h3 class="product-title">${product.name}</h3>
                    <span class="product-category">${product.category.toUpperCase()}</span>
                </div>
                <div class="product-size">Size: ${product.size}</div>
                <div class="product-price">GH₵ ${product.price}</div>
                <div class="product-meta">
                    <div class="product-rating">
                        ${stars} (${product.reviews})
                    </div>
                    <div class="product-stock">
                        ${product.stock > 5 ? '✓ In Stock' : '⚠️ Low Stock'}
                    </div>
                </div>
                <div class="product-colors">
                    ${colorsHTML}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="${cartButtonClass}" data-product-id="${product.id}">
                        ${cartButtonText}
                    </button>
                    <a href="${whatsappURL}" target="_blank" class="whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> Buy Now
                    </a>
                </div>
            </div>
        </div>
    `;
}

function sortProducts(products, sortType) {
    switch(sortType) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'popular':
            return [...products].sort((a, b) => b.reviews - a.reviews);
        case 'new':
            return [...products].sort((a, b) => b.id - a.id);
        default:
            return products;
    }
}

// ===== SHOPPING CART FUNCTIONS =====
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Increase quantity
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: product.size,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('jyCarpetCart', JSON.stringify(cart));
    
    // Update cart display
    updateCart();
    
    // Update button state
    const addButton = document.querySelector(`.add-to-cart-btn[data-product-id="${productId}"]`);
    if (addButton) {
        addButton.innerHTML = '<i class="fas fa-check"></i> Added';
        addButton.classList.add('added');
        
        // Revert button after 2 seconds
        setTimeout(() => {
            if (addButton) {
                addButton.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                addButton.classList.remove('added');
            }
        }, 2000);
    }
    
    // Show cart sidebar
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('jyCarpetCart', JSON.stringify(cart));
    updateCart();
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('jyCarpetCart', JSON.stringify(cart));
        updateCart();
    }
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartItems.style.display = 'flex';
        cartFooter.style.display = 'block';
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-image-container">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" 
                         onerror="this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100%\" height=\"100%\" fill=\"%23f5f5f5\"/><text x=\"50%\" y=\"50%\" font-family=\"Arial\" font-size=\"12\" text-anchor=\"middle\" dy=\".3em\" fill=\"%23666\">${item.name}</text></svg>'">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">GH₵ ${item.price}</div>
                    <div class="cart-item-size">Size: ${item.size}</div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn decrease" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                                   onchange="updateCartQuantity(${item.id}, this.value)">
                            <button class="quantity-btn increase" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Update cart totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const delivery = subtotal > 1000 ? 0 : 50; // Free delivery for orders over GH₵1000
        const grandTotal = subtotal + delivery;
        
        document.querySelector('.cart-subtotal').textContent = `GH₵ ${subtotal}`;
        document.querySelector('.cart-delivery').textContent = delivery === 0 ? 'FREE' : `GH₵ ${delivery}`;
        document.querySelector('.cart-grand-total').textContent = `GH₵ ${grandTotal}`;
        
        // Update checkout message
        const checkoutBtn = document.querySelector('.checkout-btn');
        const cartItemsText = cart.map(item => `${item.name} (${item.size}) x${item.quantity}`).join('%0A');
        const checkoutMessage = `Hi JY CARPET,%0AI want to checkout these items:%0A%0A${cartItemsText}%0A%0ATotal: GH₵ ${grandTotal}%0A%0APlease send me payment details.`;
        checkoutBtn.href = `https://wa.me/233249402659?text=${checkoutMessage}`;
    }
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        localStorage.removeItem('jyCarpetCart');
        updateCart();
    }
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
}

// ===== TESTIMONIALS FUNCTIONS =====
function renderTestimonials() {
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    const testimonialDots = document.getElementById('testimonialDots');
    
    // Create testimonial slides
    testimonialsSlider.innerHTML = `
        <div class="testimonial-track" id="testimonialTrack">
            ${testimonialsData.map(testimonial => createTestimonialSlide(testimonial)).join('')}
        </div>
    `;
    
    // Create dots
    testimonialDots.innerHTML = testimonialsData.map((_, index) => `
        <span class="testimonial-dot ${index === 0 ? 'active' : ''}" 
              data-index="${index}"></span>
    `).join('');
    
    // Update slide position
    updateTestimonialSlide();
}

function createTestimonialSlide(testimonial) {
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    return `
        <div class="testimonial-slide">
            <div class="testimonial-card">
                <div class="testimonial-rating" title="${testimonial.rating} out of 5 stars">
                    ${stars}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="testimonial-avatar">
                        ${testimonial.avatar}
                    </div>
                    <div class="testimonial-author-info">
                        <h4>${testimonial.name}</h4>
                        <div class="testimonial-location">
                            <i class="fas fa-map-marker-alt"></i> ${testimonial.location}
                        </div>
                    </div>
                </div>
                ${testimonial.product ? `
                    <div class="testimonial-product">
                        <span>Purchased: ${testimonial.product}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function nextTestimonial() {
    currentTestimonialSlide = (currentTestimonialSlide + 1) % testimonialsData.length;
    updateTestimonialSlide();
}

function prevTestimonial() {
    currentTestimonialSlide = (currentTestimonialSlide - 1 + testimonialsData.length) % testimonialsData.length;
    updateTestimonialSlide();
}

function goToTestimonial(index) {
    currentTestimonialSlide = index;
    updateTestimonialSlide();
}

function updateTestimonialSlide() {
    const track = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (track) {
        track.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialSlide);
    });
}

function openTestimonialForm() {
    document.getElementById('testimonialModal').style.display = 'flex';
}

function closeTestimonialForm() {
    document.getElementById('testimonialModal').style.display = 'none';
    document.getElementById('testimonialForm').reset();
    
    // Reset rating
    document.querySelectorAll('.rating-input .star').forEach(star => {
        star.classList.remove('active');
    });
    document.querySelectorAll('.rating-input .star[data-value="5"]').forEach(star => {
        star.classList.add('active');
    });
    document.getElementById('testimonialRating').value = '5';
}

function submitTestimonial(event) {
    event.preventDefault();
    
    const name = document.getElementById('testimonialName').value;
    const location = document.getElementById('testimonialLocation').value;
    const rating = parseInt(document.getElementById('testimonialRating').value);
    const text = document.getElementById('testimonialText').value;
    const product = document.getElementById('testimonialProduct').value;
    
    // Create new testimonial
    const newTestimonial = {
        id: testimonialsData.length + 1,
        name: name,
        location: location || 'Ghana',
        rating: rating,
        text: text,
        product: product || null,
        date: new Date().toISOString().split('T')[0],
        avatar: name.split(' ').map(n => n[0]).join('').toUpperCase()
    };
    
    // Add to testimonials (in real app, this would go to a backend)
    testimonialsData.unshift(newTestimonial);
    
    // Update display
    renderTestimonials();
    currentTestimonialSlide = 0;
    updateTestimonialSlide();
    
    // Close form and show success message
    closeTestimonialForm();
    alert('Thank you for your testimonial! It has been submitted successfully.');
}

// ===== EVENT LISTENERS SETUP =====
function setupEventListeners() {
    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        renderProducts();
    });
    
    // Modal close button
    document.getElementById('modalClose').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    document.getElementById('quickViewModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Cart functionality
    document.getElementById('cartToggle').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('clearCart').addEventListener('click', clearCart);
    
    // Close cart when clicking outside (for mobile overlay)
    document.addEventListener('click', function(event) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartToggle = document.getElementById('cartToggle');
        
        if (cartSidebar.classList.contains('active') && 
            !cartSidebar.contains(event.target) && 
            !cartToggle.contains(event.target)) {
            closeCart();
        }
    });
    
    // Testimonials functionality
    document.getElementById('testimonialNext').addEventListener('click', nextTestimonial);
    document.getElementById('testimonialPrev').addEventListener('click', prevTestimonial);
    
    // Testimonial dots
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('testimonial-dot')) {
            const index = parseInt(event.target.dataset.index);
            goToTestimonial(index);
        }
    });
    
    // Testimonial form
    document.getElementById('openTestimonialForm').addEventListener('click', openTestimonialForm);
    document.getElementById('testimonialModalClose').addEventListener('click', closeTestimonialForm);
    document.getElementById('cancelTestimonial').addEventListener('click', closeTestimonialForm);
    document.getElementById('testimonialForm').addEventListener('submit', submitTestimonial);
    
    // Rating stars
    document.querySelectorAll('.rating-input .star').forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.dataset.value);
            document.getElementById('testimonialRating').value = value;
            
            // Update star display
            document.querySelectorAll('.rating-input .star').forEach(s => {
                const starValue = parseInt(s.dataset.value);
                s.classList.toggle('active', starValue <= value);
            });
        });
        
        star.addEventListener('mouseover', function() {
            const value = parseInt(this.dataset.value);
            document.querySelectorAll('.rating-input .star').forEach(s => {
                const starValue = parseInt(s.dataset.value);
                s.classList.toggle('hover', starValue <= value);
            });
        });
        
        star.addEventListener('mouseout', function() {
            document.querySelectorAll('.rating-input .star').forEach(s => {
                s.classList.remove('hover');
            });
        });
    });
    
    // Auto-rotate testimonials
    setInterval(nextTestimonial, 5000);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        document.querySelectorAll('.product-card').forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            const category = card.querySelector('.product-category').textContent.toLowerCase();
            
            if (searchTerm === '' || 
                title.includes(searchTerm) || 
                description.includes(searchTerm) ||
                category.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update products count
        const visibleProducts = document.querySelectorAll('.product-card[style="display: block"]').length;
        document.getElementById('productsCount').textContent = visibleProducts;
        
        // Show empty state if no products
        const productsEmpty = document.getElementById('productsEmpty');
        if (visibleProducts === 0 && searchTerm !== '') {
            productsEmpty.style.display = 'block';
            productsEmpty.querySelector('h3').textContent = 'No matching products found';
            productsEmpty.querySelector('p').textContent = 'Try a different search term';
        } else if (searchTerm === '') {
            productsEmpty.style.display = 'none';
        }
    });
}

function resetFilters() {
    // Reset all filters
    currentFilter = 'all';
    currentSort = 'featured';
    
    // Update UI
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
    
    document.getElementById('sortSelect').value = 'featured';
    document.getElementById('searchInput').value = '';
    
    // Re-render products
    renderProducts();
}

// Quick View Modal Functions
function openQuickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('modalBody');
    const whatsappMessage = `Hi JY CARPET, I'm interested in the ${product.name} (${product.size}) - GH₵ ${product.price}`;
    const whatsappURL = `https://wa.me/233249402659?text=${encodeURIComponent(whatsappMessage)}`;
    
    const colorsHTML = product.colors.map(color => 
        `<span class="color-dot" style="background: ${color}; width: 30px; height: 30px;" title="${color}"></span>`
    ).join('');
    
    const badgesHTML = product.badges.map(badge => {
        const badgeText = badge === '3d' ? '3D Carpet' : 
                         badge === 'fluffy' ? 'Fluffy Carpet' :
                         badge.charAt(0).toUpperCase() + badge.slice(1) + ' Product';
        return `<span class="product-badge badge-${badge}">${badgeText}</span>`;
    }).join('');
    
    modalBody.innerHTML = `
        <div class="modal-image-container">
            <img src="${product.image}" alt="${product.name}" class="modal-image" 
                 onerror="this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\" viewBox=\"0 0 300 300\"><rect width=\"100%\" height=\"100%\" fill=\"%23f5f5f5\"/><text x=\"50%\" y=\"50%\" font-family=\"Arial\" font-size=\"24\" text-anchor=\"middle\" dy=\".3em\" fill=\"%23666\">${product.name}</text></svg>'">
        </div>
        <h2 class="modal-title">${product.name}</h2>
        <div class="modal-price">GH₵ ${product.price}</div>
        
        <div class="modal-details">
            <div class="detail-item">
                <i class="fas fa-ruler-combined"></i>
                <div>
                    <strong>Size:</strong>
                    <p>${product.size}</p>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-star"></i>
                <div>
                    <strong>Rating:</strong>
                    <p>${product.rating}/5 (${product.reviews} reviews)</p>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-box"></i>
                <div>
                    <strong>Stock:</strong>
                    <p>${product.stock} units available</p>
                </div>
            </div>
            <div class="detail-item">
                <i class="fas fa-palette"></i>
                <div>
                    <strong>Available Colors:</strong>
                    <div class="product-colors">${colorsHTML}</div>
                </div>
            </div>
        </div>
        
        <div class="product-badges" style="margin-bottom: 20px;">
            ${badgesHTML}
        </div>
        
        <p style="margin-bottom: 30px; line-height: 1.8;">${product.description}</p>
        
        <div class="modal-actions">
            <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
            <a href="${whatsappURL}" target="_blank" class="btn btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Buy Now on WhatsApp
            </a>
        </div>
    `;
    
    // Show modal
    const modal = document.getElementById('quickViewModal');
    modal.style.display = 'flex';
    
    // Add event listener to add to cart button in modal
    modalBody.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        addToCart(product.id);
    });
}

function closeModal() {
    const modal = document.getElementById('quickViewModal');
    modal.style.display = 'none';
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        closeModal();
        closeTestimonialForm();
        closeCart();
    }
    
    // Ctrl+F to focus search
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});