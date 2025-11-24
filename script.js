// Data Kecamatan & Kelurahan di Malang
const lokasiMalang = {
    "Lowokwaru": ["Jatimulyo", "Dinoyo", "Ketawanggede", "Sumbersari", "Tunggulwulung", "Mojolangu", "Tlogomas"],
    "Blimbing": ["Arjosari", "Balearjosari", "Bunulrejo", "Pandanwangi", "Polowijen", "Purwantoro", "Kesatrian"],
    "Klojen": ["Penanggungan", "Samaan", "Klojen", "Sukoharjo", "Kasin", "Bareng", "Kauman"],
    "Sukun": ["Ciptomulyo", "Pisangcandi", "Gadang", "Bandungrejosari", "Sukun", "Mulyorejo", "Tanjungrejo"],
    "Kedungkandang": ["Arjowinangun", "Buring", "Cemorokandang", "Kedungkandang", "Kotalama", "Lesanpuro", "Wonokoyo"]
};

// Database produk (UPGRADED dengan lokasi detail)
const allProducts = [
    {
        id: 1,
        title: "Laptop Dell Latitude E7440 Core i5 RAM 8GB SSD 256GB",
        price: 3500000,
        kecamatan: "Lowokwaru",
        kelurahan: "Sumbersari",
        condition: "Kondisi Baik",
        category: "gadget",
        image: "assets/dell.jpg",
        description: "Laptop Dell Latitude E7440 dalam kondisi baik dan terawat. Cocok untuk mahasiswa dan pekerjaan sehari-hari. Sudah upgrade SSD sehingga sangat responsif.",
        whatsapp: "6281234567890"
    },
    {
        id: 2,
        title: "iPhone 11 128GB Fullset Mulus",
        price: 4800000,
        kecamatan: "Blimbing",
        kelurahan: "Arjosari",
        condition: "Seperti Baru",
        category: "gadget",
        image: "assets/ip11.jpg",
        description: "iPhone 11 kondisi mulus, fullset dengan box dan aksesoris lengkap. Baterai health 85%.",
        whatsapp: "6281234567891"
    },
    {
        id: 3,
        title: "Sepeda MTB Polygon Xtrada 5",
        price: 1800000,
        kecamatan: "Klojen",
        kelurahan: "Samaan",
        condition: "Kondisi Baik",
        category: "hobi",
        image: "assets/polygon.jpg",
        description: "Sepeda MTB Polygon Xtrada 5, frame alloy, fork suspension. Cocok untuk trail dan XC.",
        whatsapp: "6281234567892"
    },
    {
        id: 4,
        title: "Kamera Canon EOS 700D + Lens Kit",
        price: 3200000,
        kecamatan: "Sukun",
        kelurahan: "Ciptomulyo",
        condition: "Kondisi Baik",
        category: "gadget",
        image: "https://via.placeholder.com/240x180/9b59b6/ffffff?text=Kamera",
        description: "Canon EOS 700D body + lens kit 18-55mm. Shutter count rendah, kondisi terawat.",
        whatsapp: "6281234567893"
    },
    {
        id: 5,
        title: "Meja Kerja Minimalis Kayu Jati",
        price: 850000,
        kecamatan: "Kedungkandang",
        kelurahan: "Arjowinangun",
        condition: "Seperti Baru",
        category: "perabotan",
        image: "https://via.placeholder.com/240x180/f39c12/ffffff?text=Meja",
        description: "Meja kerja kayu jati solid, desain minimalis modern. Ukuran 120x60x75cm.",
        whatsapp: "6281234567894"
    },
    {
        id: 6,
        title: "Honda Beat 2018 Surat Lengkap",
        price: 9500000,
        kecamatan: "Lowokwaru",
        kelurahan: "Dinoyo",
        condition: "Kondisi Baik",
        category: "kendaraan",
        image: "assets/beat.jpg",
        description: "Honda Beat 2018, pajak hidup, surat lengkap. Mesin halus, body mulus.",
        whatsapp: "6281234567895"
    },
    {
        id: 7,
        title: "Samsung Galaxy A52 8/128GB",
        price: 2800000,
        kecamatan: "Blimbing",
        kelurahan: "Bunulrejo",
        condition: "Kondisi Baik",
        category: "gadget",
        image: "assets/musan.jpg",
        description: "Samsung A52 RAM 8GB ROM 128GB. Kondisi mulus, tidak ada minus.",
        whatsapp: "6281234567896"
    },
    {
        id: 8,
        title: "Sofa 3 Dudukan Kulit Sintetis",
        price: 1500000,
        kecamatan: "Klojen",
        kelurahan: "Klojen",
        condition: "Kondisi Baik",
        category: "perabotan",
        image: "https://via.placeholder.com/240x180/e67e22/ffffff?text=Sofa",
        description: "Sofa 3 seater kulit sintetis warna cokelat. Kondisi bersih dan nyaman.",
        whatsapp: "6281234567897"
    },
    {
        id: 9,
        title: "Yamaha NMAX 2019 Pajak Aktif",
        price: 18500000,
        kecamatan: "Sukun",
        kelurahan: "Pisangcandi",
        condition: "Seperti Baru",
        category: "kendaraan",
        image: "https://via.placeholder.com/240x180/16a085/ffffff?text=NMAX",
        description: "Yamaha NMAX 2019 kondisi istimewa. Service record lengkap di dealer resmi.",
        whatsapp: "6281234567898"
    },
    {
        id: 10,
        title: "Jaket Kulit Pria Ukuran L",
        price: 450000,
        kecamatan: "Lowokwaru",
        kelurahan: "Mojolangu",
        condition: "Kondisi Baik",
        category: "fashion",
        image: "https://via.placeholder.com/240x180/34495e/ffffff?text=Jaket",
        description: "Jaket kulit asli ukuran L. Kondisi bagus, tidak ada cacat.",
        whatsapp: "6281234567899"
    },
    {
        id: 11,
        title: "Lemari Pakaian 3 Pintu Kayu Solid",
        price: 2200000,
        kecamatan: "Kedungkandang",
        kelurahan: "Buring",
        condition: "Kondisi Baik",
        category: "perabotan",
        image: "https://via.placeholder.com/240x180/d35400/ffffff?text=Lemari",
        description: "Lemari pakaian 3 pintu kayu solid. Ukuran besar, banyak storage.",
        whatsapp: "6281234567800"
    },
    {
        id: 12,
        title: "Koleksi Novel 50 Buku",
        price: 500000,
        kecamatan: "Blimbing",
        kelurahan: "Pandanwangi",
        condition: "Kondisi Baik",
        category: "buku",
        image: "https://via.placeholder.com/240x180/8e44ad/ffffff?text=Buku",
        description: "Koleksi 50 novel berbagai genre. Kondisi buku masih bagus dan terawat.",
        whatsapp: "6281234567801"
    }
];

// State management
let currentPage = 1;
let currentCategory = 'semua';
let searchQuery = '';
let selectedKecamatan = '';
let selectedKelurahan = '';
const itemsPerPage = 20;

// OTP State
let otpSent = false;
let registrationData = {};

// Search function
function searchProducts(products, query) {
    if (!query.trim()) return products;
    query = query.toLowerCase();
    return products.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.kecamatan.toLowerCase().includes(query) ||
        product.kelurahan.toLowerCase().includes(query)
    );
}

// Filter by category
function filterByCategory(products, category) {
    if (category === 'semua') return products;
    return products.filter(p => p.category === category);
}

// Filter by location
function filterByLocation(products, kecamatan, kelurahan) {
    let filtered = products;
    if (kecamatan) {
        filtered = filtered.filter(p => p.kecamatan === kecamatan);
    }
    if (kelurahan) {
        filtered = filtered.filter(p => p.kelurahan === kelurahan);
    }
    return filtered;
}

// Get filtered products
function getFilteredProducts() {
    let filtered = allProducts;
    filtered = filterByCategory(filtered, currentCategory);
    filtered = filterByLocation(filtered, selectedKecamatan, selectedKelurahan);
    filtered = searchProducts(filtered, searchQuery);
    return filtered;
}

// Format price to Rupiah
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Render empty state with brand filler
function renderEmptyState(grid) {
    grid.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">🔄</div>
            <h3>Belum ada produk yang sesuai</h3>
            <p>Coba kata kunci atau kategori lain</p>
        </div>
        <div class="brand-filler">
            <div class="filler-card">
                <div class="filler-icon">♻️</div>
                <h4>Kasih napas kedua ke barangmu</h4>
                <p>From mahasiswa to mahasiswa ✨</p>
            </div>
            <div class="filler-card">
                <div class="filler-icon">🔁</div>
                <h4>Loop lagi, hemat lagi</h4>
                <p>Barang preloved berkualitas untuk kamu</p>
            </div>
        </div>
    `;
}

// Render products
function renderProducts() {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const productsToShow = filtered.slice(startIdx, endIdx);
    
    const grid = document.getElementById('productsGrid');
    const resultsInfo = document.getElementById('resultsInfo');
    
    resultsInfo.textContent = `Menampilkan ${productsToShow.length} dari ${filtered.length} produk`;
    
    if (productsToShow.length === 0) {
        renderEmptyState(grid);
    } else {
        grid.innerHTML = productsToShow.map(product => `
            <div class="product-card" data-product-id="${product.id}" style="cursor: pointer;">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-title">${product.title}</div>
                    <div class="product-condition">${product.condition}</div>
                    <div class="product-location">
                        <svg class="location-icon-small" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span>${product.kelurahan}, ${product.kecamatan}</span>
                    </div>
                    <button class="chat-btn" data-product='${JSON.stringify(product)}' data-action="chat">
                        <svg class="chat-icon" viewBox="0 0 24 24" fill="white">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                        </svg>
                        Chat Penjual
                    </button>
                    <button class="whatsapp-btn" data-whatsapp="${product.whatsapp}" data-title="${product.title}" data-action="whatsapp">
                        <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                    </button>
                </div>
            </div>
        `).join('');
        
        // IMPORTANT: Attach event listeners after rendering
        attachProductCardListeners();
    }
    
    renderPagination(totalPages);
}

// Attach event listeners to product cards (after render)
function attachProductCardListeners() {
    console.log('Attaching listeners...');
    
    // Product card click -> go to detail
    document.querySelectorAll('.product-card').forEach(card => {
        // Make card clickable
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on buttons
            if (e.target.closest('[data-action]')) {
                return; // Let button handle its own event
            }
            
            const productId = parseInt(this.dataset.productId);
            console.log('Navigating to product:', productId);
            goToProductDetail(productId);
        });
    });
    
    // Chat button click
    document.querySelectorAll('[data-action="chat"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const product = JSON.parse(this.dataset.product);
            console.log('Opening chat for:', product.title);
            openProductChat(product);
        });
    });
    
    // WhatsApp button click
    document.querySelectorAll('[data-action="whatsapp"]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            const whatsapp = this.dataset.whatsapp;
            const title = this.dataset.title;
            console.log('Opening WhatsApp for:', title);
            contactSeller(whatsapp, title);
        });
    });
    
    console.log('Listeners attached successfully!');
}

// Navigate to product detail page (Carousell style)
function goToProductDetail(productId) {
    console.log('goToProductDetail called with ID:', productId);
    
    // Find product in database
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) {
        console.error('Product not found:', productId);
        alert('Produk tidak ditemukan');
        return;
    }
    
    console.log('Found product:', product);
    
    // Add images array if not exist (for gallery)
    if (!product.images) {
        product.images = [
            product.image,
            product.image,
            product.image,
            product.image,
            product.image
        ];
    }
    
    // Add seller info if not exist
    if (!product.seller) {
        product.seller = {
            id: `seller_${product.id}`,
            name: `Penjual ${product.kelurahan}`,
            username: `seller${product.id}`,
            avatar: "👤"
        };
    }
    
    // Store in sessionStorage
    try {
        sessionStorage.setItem('currentProduct', JSON.stringify(product));
        console.log('Product saved to sessionStorage');
        
        // Navigate to detail page
        console.log('Navigating to product-detail.html...');
        window.location.href = 'product-detail.html';
    } catch (error) {
        console.error('Error saving to sessionStorage:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    }
}

// Render pagination
function renderPagination(totalPages) {
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = `
        <button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Prev
        </button>
    `;
    
    // Show first 5 pages
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
        html += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // Show ... and last page if needed
    if (totalPages > 5) {
        if (currentPage > 5 && currentPage < totalPages) {
            html += `<span style="padding: 0 0.5rem; color: #666;">...</span>`;
            html += `
                <button class="page-btn active" onclick="changePage(${currentPage})">
                    ${currentPage}
                </button>
            `;
        }
        html += `<span style="padding: 0 0.5rem; color: #666;">...</span>`;
        html += `
            <button class="page-btn ${totalPages === currentPage ? 'active' : ''}" onclick="changePage(${totalPages})">
                ${totalPages}
            </button>
        `;
    }
    
    html += `
        <button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next →
        </button>
    `;
    
    pagination.innerHTML = html;
}

// Change page
function changePage(page) {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact seller via WhatsApp
function contactSeller(whatsappNumber, productTitle) {
    const message = encodeURIComponent(`Halo, saya tertarik dengan produk: ${productTitle}`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Open product chat (integrate with chat system)
function openProductChat(product) {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Silakan login terlebih dahulu untuk menggunakan fitur chat');
        document.getElementById('auth-link').click();
        return;
    }
    
    // Get seller info (in real app, fetch from API)
    const sellerId = `seller_${product.id}`;
    const sellerName = `Penjual ${product.kelurahan}`;
    
    // Open chat using ChatSystem
    if (window.ChatSystem) {
        window.ChatSystem.openChat(product, sellerId, sellerName);
    } else {
        console.error('Chat system not loaded');
        alert('Fitur chat sedang dimuat, silakan coba lagi');
    }
}

// Show message helper
function showMessage(elementId, message, type) {
    const messageBox = document.getElementById(elementId);
    if (messageBox) {
        messageBox.textContent = message;
        messageBox.className = `message-box ${type}`;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 5000);
    }
}

// Update UI based on auth status
function updateUIForAuth(isLoggedIn) {
    const authLink = document.getElementById('auth-link');
    const logoutLink = document.getElementById('logout-link');

    if (isLoggedIn) {
        if (authLink) authLink.classList.add('hidden');
        if (logoutLink) logoutLink.classList.remove('hidden');
    } else {
        if (authLink) authLink.classList.remove('hidden');
        if (logoutLink) logoutLink.classList.add('hidden');
        localStorage.removeItem('token');
        localStorage.removeItem('userPhone');
    }
}

// Populate kecamatan dropdown
function populateKecamatan() {
    const kecamatanSelect = document.getElementById('filter-kecamatan');
    if (!kecamatanSelect) return;
    
    kecamatanSelect.innerHTML = '<option value="">Semua Kecamatan</option>';
    Object.keys(lokasiMalang).forEach(kec => {
        const option = document.createElement('option');
        option.value = kec;
        option.textContent = kec;
        kecamatanSelect.appendChild(option);
    });
}

// Populate kelurahan based on kecamatan
function populateKelurahan(kecamatan) {
    const kelurahanSelect = document.getElementById('filter-kelurahan');
    if (!kelurahanSelect) return;
    
    kelurahanSelect.innerHTML = '<option value="">Semua Kelurahan</option>';
    
    if (kecamatan && lokasiMalang[kecamatan]) {
        lokasiMalang[kecamatan].forEach(kel => {
            const option = document.createElement('option');
            option.value = kel;
            option.textContent = kel;
            kelurahanSelect.appendChild(option);
        });
        kelurahanSelect.disabled = false;
    } else {
        kelurahanSelect.disabled = true;
    }
}

// OTP Functions (Placeholder for backend integration)
function requestOTP(phoneNumber) {
    console.log('Requesting OTP for:', phoneNumber);
    
    setTimeout(() => {
        otpSent = true;
        showMessage('auth-message', 'Kode OTP telah dikirim ke nomor Anda!', 'success');
        document.getElementById('otp-section').classList.remove('hidden');
    }, 1000);
}

function verifyOTP(code) {
    console.log('Verifying OTP:', code);
    
    if (code === '123456' || code.length === 6) {
        showMessage('auth-message', 'Verifikasi berhasil! Akun Anda telah terdaftar.', 'success');
        setTimeout(() => {
            const authModal = document.getElementById('auth-modal');
            authModal.style.display = 'none';
            
            document.getElementById('login-form').classList.remove('hidden');
            document.getElementById('register-form').classList.add('hidden');
            document.getElementById('auth-modal-title').textContent = 'Login';
        }, 1500);
        return true;
    } else {
        showMessage('auth-message', 'Kode OTP salah. Coba lagi.', 'error');
        return false;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing...');
    
    // Populate location filters
    populateKecamatan();
    
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            searchQuery = searchInput.value;
            currentPage = 1;
            renderProducts();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchQuery = this.value;
                currentPage = 1;
                renderProducts();
            }
        });
    }

    // Category filtering
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            currentCategory = this.dataset.category;
            currentPage = 1;
            renderProducts();
        });
    });

    // Location filtering
    const kecamatanSelect = document.getElementById('filter-kecamatan');
    const kelurahanSelect = document.getElementById('filter-kelurahan');
    
    if (kecamatanSelect) {
        kecamatanSelect.addEventListener('change', function() {
            selectedKecamatan = this.value;
            selectedKelurahan = '';
            populateKelurahan(this.value);
            if (kelurahanSelect) kelurahanSelect.value = '';
            currentPage = 1;
            renderProducts();
        });
    }
    
    if (kelurahanSelect) {
        kelurahanSelect.addEventListener('change', function() {
            selectedKelurahan = this.value;
            currentPage = 1;
            renderProducts();
        });
    }

    // Auth Modal Logic
    const authModal = document.getElementById('auth-modal');
    const authLink = document.getElementById('auth-link');
    const closeButton = authModal ? authModal.querySelector('.close-button') : null;
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authModalTitle = document.getElementById('auth-modal-title');
    const toggleFormLinks = document.querySelectorAll('.toggle-form-link');
    const logoutLink = document.getElementById('logout-link');

    // Open modal
    if (authLink && authModal) {
        authLink.addEventListener('click', (e) => {
            e.preventDefault();
            authModal.style.display = 'flex';
            if (loginForm) loginForm.classList.remove('hidden');
            if (registerForm) registerForm.classList.add('hidden');
            if (authModalTitle) authModalTitle.textContent = 'Login';
            const authMessage = document.getElementById('auth-message');
            if (authMessage) authMessage.style.display = 'none';
            const otpSection = document.getElementById('otp-section');
            if (otpSection) otpSection.classList.add('hidden');
            otpSent = false;
        });
    }

    // Close modal
    if (closeButton && authModal) {
        closeButton.addEventListener('click', () => {
            authModal.style.display = 'none';
        });
    }

    if (authModal) {
        window.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.style.display = 'none';
            }
        });
    }

    // Toggle between login and register
    toggleFormLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.dataset.form === 'register') {
                if (loginForm) loginForm.classList.add('hidden');
                if (registerForm) registerForm.classList.remove('hidden');
                if (authModalTitle) authModalTitle.textContent = 'Daftar';
            } else {
                if (loginForm) loginForm.classList.remove('hidden');
                if (registerForm) registerForm.classList.add('hidden');
                if (authModalTitle) authModalTitle.textContent = 'Login';
            }
            const authMessage = document.getElementById('auth-message');
            if (authMessage) authMessage.style.display = 'none';
            const otpSection = document.getElementById('otp-section');
            if (otpSection) otpSection.classList.add('hidden');
            otpSent = false;
        });
    });

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneNumber = document.getElementById('login-phoneNumber').value;
            const password = document.getElementById('login-password').value;
            
            if (phoneNumber && password) {
                localStorage.setItem('token', 'dummy-token');
                localStorage.setItem('userPhone', phoneNumber);
                showMessage('auth-message', 'Login berhasil!', 'success');
                setTimeout(() => {
                    if (authModal) authModal.style.display = 'none';
                    updateUIForAuth(true);
                }, 1500);
            } else {
                showMessage('auth-message', 'Nomor telepon dan password harus diisi', 'error');
            }
        });
    }

    // Register form submission
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const phoneNumber = document.getElementById('register-phoneNumber').value;
            const password = document.getElementById('register-password').value;
            
            if (name && email && phoneNumber && password) {
                registrationData = { name, email, phoneNumber, password };
                requestOTP(phoneNumber);
            } else {
                showMessage('auth-message', 'Semua field harus diisi', 'error');
            }
        });
    }

    // OTP verification
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    if (verifyOtpBtn) {
        verifyOtpBtn.addEventListener('click', () => {
            const otpCode = document.getElementById('otp-code').value;
            if (otpCode) {
                verifyOTP(otpCode);
            } else {
                showMessage('auth-message', 'Masukkan kode OTP', 'error');
            }
        });
    }

    // Logout
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            updateUIForAuth(false);
            alert('Anda telah logout');
        });
    }

    // Check auth on load
    const token = localStorage.getItem('token');
    if (token) {
        updateUIForAuth(true);
    }

    // Initial render
    console.log('Rendering initial products...');
    renderProducts();
    console.log('Initialization complete!');
});
function goToJualPage() {
    console.log('Navigating to Jual page...');
    
    // Check if user is logged in
    const token = localStorage.getItem('token');
    
    if (!token) {
        console.log('User not logged in');
        alert('⚠️ Silakan login terlebih dahulu untuk menjual produk!');
        
        // Open login modal
        const authModal = document.getElementById('auth-modal');
        if (authModal) {
            authModal.style.display = 'flex';
            
            // Show login form
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            if (loginForm) loginForm.classList.remove('hidden');
            if (registerForm) registerForm.classList.add('hidden');
            
            const authModalTitle = document.getElementById('auth-modal-title');
            if (authModalTitle) authModalTitle.textContent = 'Login';
        }
        return;
    }
    
    // User is logged in, navigate to jual page
    console.log('User logged in, navigating...');
    window.location.href = 'jual-produk.html';
}
function goToJualPage() {
    const token = localStorage.getItem('token');
    
    if (!token) {
        alert('⚠️ Silakan login terlebih dahulu untuk menjual produk!');
        document.getElementById('auth-link').click();
        return;
    }
    
    window.location.href = 'jual-produk.html';
}

// 🚀 Function untuk ke halaman boost listing
function goToBoostPage() {
    const token = localStorage.getItem('token');
    
    if (!token) {
        alert('⚠️ Silakan login terlebih dahulu untuk boost listing!');
        document.getElementById('auth-link').click();
        return;
    }
    
    window.location.href = 'boost-listing.html';
}