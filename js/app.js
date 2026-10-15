// ========================================
// PAWS & LUXE — Aplicación principal
// ========================================

// --- Datos de productos (50 demo, imágenes únicas por tipo de producto) ---
// CUIDADO: imágenes de baño, cepillado, higiene, salud, pelaje
// ESTÉTICA: imágenes de collares, ropa, accesorios, moda canina
const PRODUCTS = [
  // ================= CUIDADO & SALUD (25 productos) =================
  {
    id: 1,
    name: "Shampoo Dermocosmético Neutro",
    category: "cuidado",
    price: 45000,
    originalPrice: 55000,
    rating: 4.8,
    reviews: 128,
    badge: "Dermatológico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700&q=80&fit=crop"
  },
  {
    id: 3,
    name: "Sérum Hidratante de Huellas y Trufa",
    category: "cuidado",
    price: 32000,
    originalPrice: null,
    rating: 4.7,
    reviews: 86,
    badge: "Orgánico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1601062671322-6e99333bfe33?w=700&q=80&fit=crop"
  },
  {
    id: 5,
    name: "Cepillo Deslanador Ergonómico Pro",
    category: "cuidado",
    price: 39000,
    originalPrice: null,
    rating: 4.6,
    reviews: 312,
    badge: "Top Venta",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1592748815791-430414cb2260?w=700&q=80&fit=crop"
  },
  {
    id: 7,
    name: "Acondicionador Reparador Pelaje Largo",
    category: "cuidado",
    price: 52000,
    originalPrice: 60000,
    rating: 4.7,
    reviews: 143,
    badge: "Orgánico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1545367977-65c7b9a34f79?w=700&q=80&fit=crop"
  },
  {
    id: 9,
    name: "Toallitas Hipoalergénicas Ojos y Orejas",
    category: "cuidado",
    price: 18000,
    originalPrice: null,
    rating: 4.5,
    reviews: 201,
    badge: "Hipoalergénico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1583511655747-193e5ef3803e?w=700&q=80&fit=crop"
  },
  {
    id: 11,
    name: "Protector Solar Nariz y Zonas Sensibles",
    category: "cuidado",
    price: 29000,
    originalPrice: null,
    rating: 4.6,
    reviews: 91,
    badge: "Dermatológico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1548247415-dc6735513271?w=700&q=80&fit=crop"
  },
  {
    id: 13,
    name: "Cepillo Dientes Dedo Microfibra",
    category: "cuidado",
    price: 16000,
    originalPrice: null,
    rating: 4.4,
    reviews: 178,
    badge: "Higiene",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1537151650055-7df32a04c6b6?w=700&q=80&fit=crop"
  },
  {
    id: 15,
    name: "Spray Desodorante Pelaje Natural",
    category: "cuidado",
    price: 26000,
    originalPrice: null,
    rating: 4.5,
    reviews: 134,
    badge: "Orgánico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1514432324606-a07d98791a0d?w=700&q=80&fit=crop"
  },
  {
    id: 17,
    name: "Loción Ojos Lágrimas Suave",
    category: "cuidado",
    price: 22000,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    badge: "Suave",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1552750282-033922592da1?w=700&q=80&fit=crop"
  },
  {
    id: 19,
    name: "Suplemento Omega 3 Pelaje Brillante",
    category: "cuidado",
    price: 58000,
    originalPrice: 65000,
    rating: 4.9,
    reviews: 215,
    badge: "Salud",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1582538287213-68e0cdc21bf5?w=700&q=80&fit=crop"
  },
  {
    id: 21,
    name: "Toallitas Dental Enzimáticas",
    category: "cuidado",
    price: 21000,
    originalPrice: null,
    rating: 4.5,
    reviews: 164,
    badge: "Enzimático",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1517249588284-93265986486d?w=700&q=80&fit=crop"
  },
  {
    id: 23,
    name: "Shampoo Antipulgas Natural",
    category: "cuidado",
    price: 38000,
    originalPrice: 44000,
    rating: 4.7,
    reviews: 287,
    badge: "Efectivo",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1519692651064-188072838198?w=700&q=80&fit=crop"
  },
  {
    id: 25,
    name: "Limpiador Oídos Suave Sin Alcohol",
    category: "cuidado",
    price: 19000,
    originalPrice: null,
    rating: 4.6,
    reviews: 111,
    badge: "Sin Alcohol",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1559756399-837668953d15?w=700&q=80&fit=crop"
  },
  {
    id: 27,
    name: "Bálsamo Almohadillas Grietas",
    category: "cuidado",
    price: 27000,
    originalPrice: null,
    rating: 4.7,
    reviews: 145,
    badge: "Reparador",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&q=80&fit=crop"
  },
  {
    id: 29,
    name: "Spray Calmante Estrés y Ansiedad",
    category: "cuidado",
    price: 41000,
    originalPrice: 49000,
    rating: 4.6,
    reviews: 138,
    badge: "Relajante",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80&fit=crop"
  },
  {
    id: 31,
    name: "Shampoo Seco Espuma Sin Agua",
    category: "cuidado",
    price: 31000,
    originalPrice: null,
    rating: 4.5,
    reviews: 105,
    badge: "Práctico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1520813795580-37669958582e?w=700&q=80&fit=crop"
  },
  {
    id: 33,
    name: "Gotas Ojos Conjuntivitis Suaves",
    category: "cuidado",
    price: 34000,
    originalPrice: null,
    rating: 4.7,
    reviews: 72,
    badge: "Veterinario",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1534388950305-73725527a74b?w=700&q=80&fit=crop"
  },
  {
    id: 34,
    name: "Cepillo Masajeador Silicona Baño",
    category: "cuidado",
    price: 17000,
    originalPrice: null,
    rating: 4.4,
    reviews: 190,
    badge: "Masaje",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1532833775197-09d92f45c236?w=700&q=80&fit=crop"
  },
  {
    id: 37,
    name: "Suplemento Articulaciones Senior",
    category: "cuidado",
    price: 67000,
    originalPrice: 79000,
    rating: 4.9,
    reviews: 133,
    badge: "Senior",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1499762241231-56fd8228b3b6?w=700&q=80&fit=crop"
  },
  {
    id: 39,
    name: "Pasta Dental Sabor Pollo Enzimática",
    category: "cuidado",
    price: 23000,
    originalPrice: null,
    rating: 4.6,
    reviews: 176,
    badge: "Sabor",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1512438350742-03e1a5d05f5e?w=700&q=80&fit=crop"
  },
  {
    id: 41,
    name: "Loción Repelente Insectos Natural",
    category: "cuidado",
    price: 33000,
    originalPrice: null,
    rating: 4.5,
    reviews: 91,
    badge: "Natural",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1494812762474-481e892295c0?w=700&q=80&fit=crop"
  },
  {
    id: 43,
    name: "Cepillo Desenredador Doble Cara",
    category: "cuidado",
    price: 28000,
    originalPrice: null,
    rating: 4.7,
    reviews: 158,
    badge: "Doble Cara",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1502281192310-6a1c1d1d6a3e?w=700&q=80&fit=crop"
  },
  {
    id: 45,
    name: "Gotas Calma Tránsito Viajes",
    category: "cuidado",
    price: 39000,
    originalPrice: null,
    rating: 4.5,
    reviews: 88,
    badge: "Viajes",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1496197396666-3d8d06081e05?w=700&q=80&fit=crop"
  },
  {
    id: 47,
    name: "Shampoo Cachorro Lágrimas Cero",
    category: "cuidado",
    price: 36000,
    originalPrice: null,
    rating: 4.8,
    reviews: 142,
    badge: "Cachorro",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1488768217014-2f29074482c8?w=700&q=80&fit=crop"
  },
  {
    id: 49,
    name: "Antiséptico Heridas Spray",
    category: "cuidado",
    price: 31000,
    originalPrice: null,
    rating: 4.7,
    reviews: 94,
    badge: "Antiséptico",
    badgeType: "cyan",
    categoryLabel: "Cuidado & Salud",
    image: "https://images.unsplash.com/photo-1501437839713-3b61a2f075c4?w=700&q=80&fit=crop"
  },

  // ================= ESTÉTICA & ESTILO (25 productos) =================
  {
    id: 2,
    name: "Collar de Cuero Vegano Neón",
    category: "estetica",
    price: 68000,
    originalPrice: null,
    rating: 4.9,
    reviews: 204,
    badge: "Bestseller",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1552053938279-4997379e715c?w=700&q=80&fit=crop"
  },
  {
    id: 4,
    name: "Perfume Orgánico Lavanda & Salvia",
    category: "estetica",
    price: 54000,
    originalPrice: 62000,
    rating: 4.9,
    reviews: 156,
    badge: "Edición Limitada",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1599069777877-a45647d84323?w=700&q=80&fit=crop"
  },
  {
    id: 6,
    name: "Capa Impermeable Reflectiva",
    category: "estetica",
    price: 72000,
    originalPrice: null,
    rating: 4.8,
    reviews: 94,
    badge: "Nuevo",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1561037404671-79e71c0ac182?w=700&q=80&fit=crop"
  },
  {
    id: 8,
    name: "Arnés Reflectante Seguridad Nocturna",
    category: "estetica",
    price: 58000,
    originalPrice: null,
    rating: 4.8,
    reviews: 187,
    badge: "Premium",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1514866191752-6b439c86f0a0?w=700&q=80&fit=crop"
  },
  {
    id: 10,
    name: "Bandana Seda Estampada Lujo",
    category: "estetica",
    price: 24000,
    originalPrice: null,
    rating: 4.9,
    reviews: 67,
    badge: "Edición Limitada",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1562047688-473272b4523c?w=700&q=80&fit=crop"
  },
  {
    id: 12,
    name: "Collar Strass Piedras Swarovski",
    category: "estetica",
    price: 89000,
    originalPrice: 110000,
    rating: 5.0,
    reviews: 54,
    badge: "Lujo",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1551806448-91e307e956f1?w=700&q=80&fit=crop"
  },
  {
    id: 14,
    name: "Pulsera Identificación Grabada",
    category: "estetica",
    price: 34000,
    originalPrice: null,
    rating: 4.7,
    reviews: 112,
    badge: "Personalizable",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1527983892603-aa96c47b2bf5?w=700&q=80&fit=crop"
  },
  {
    id: 16,
    name: "Vestido Tule Fiesta Gala Canina",
    category: "estetica",
    price: 95000,
    originalPrice: null,
    rating: 4.9,
    reviews: 41,
    badge: "Alta Costura",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1560325755-9db58fbb3736?w=700&q=80&fit=crop"
  },
  {
    id: 18,
    name: "Pañuelo Seda Diseñador Exclusivo",
    category: "estetica",
    price: 41000,
    originalPrice: 48000,
    rating: 4.8,
    reviews: 76,
    badge: "Diseñador",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1579469122393-7c73b1ba8c02?w=700&q=80&fit=crop"
  },
  {
    id: 20,
    name: "Collar Cuero Trenzado Hecho a Mano",
    category: "estetica",
    price: 76000,
    originalPrice: null,
    rating: 4.9,
    reviews: 129,
    badge: "Artesanal",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1526969337982-e7377612437b?w=700&q=80&fit=crop"
  },
  {
    id: 22,
    name: "Gafas Sol Protección UV Mascota",
    category: "estetica",
    price: 45000,
    originalPrice: null,
    rating: 4.6,
    reviews: 63,
    badge: "Protección",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1533155383100-2497c2f2bb7f?w=700&q=80&fit=crop"
  },
  {
    id: 24,
    name: "Cama Ortopédica Viscoelástica Lujo",
    category: "estetica",
    price: 145000,
    originalPrice: null,
    rating: 5.0,
    reviews: 92,
    badge: "Confort",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1564312766521-10efc5e7a34e?w=700&q=80&fit=crop"
  },
  {
    id: 26,
    name: "Correa Cuero Vegano Hebilla Dorada",
    category: "estetica",
    price: 63000,
    originalPrice: null,
    rating: 4.8,
    reviews: 154,
    badge: "Elegante",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1518783863317-8b2e178a5f4e?w=700&q=80&fit=crop"
  },
  {
    id: 28,
    name: "Gorro Tejido Invierno Canino",
    category: "estetica",
    price: 29000,
    originalPrice: null,
    rating: 4.7,
    reviews: 78,
    badge: "Invierno",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1514124280178-05137a3d0b90?w=700&q=80&fit=crop"
  },
  {
    id: 30,
    name: "Medalla Grabada Acero Inoxidable",
    category: "estetica",
    price: 22000,
    originalPrice: null,
    rating: 4.5,
    reviews: 99,
    badge: "Seguridad",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1493779690423-0c279d07ab54?w=700&q=80&fit=crop"
  },
  {
    id: 32,
    name: "Chaquetón Impermeable Forro Pelo",
    category: "estetica",
    price: 112000,
    originalPrice: null,
    rating: 4.9,
    reviews: 83,
    badge: "Invierno",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1554118811-1e0d6820c4a2?w=700&q=80&fit=crop"
  },
  {
    id: 35,
    name: "Collar LED Recargable Noche",
    category: "estetica",
    price: 47000,
    originalPrice: null,
    rating: 4.8,
    reviews: 161,
    badge: "Visibilidad",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1503224434986-4b618ef9b0c8?w=700&q=80&fit=crop"
  },
  {
    id: 36,
    name: "Perfume Feromonas Calmante",
    category: "estetica",
    price: 51000,
    originalPrice: 59000,
    rating: 4.7,
    reviews: 122,
    badge: "Feromonas",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1515537565385-61b81c9045f7?w=700&q=80&fit=crop"
  },
  {
    id: 38,
    name: "Fular Porta Perrito Bebé Algodón",
    category: "estetica",
    price: 74000,
    originalPrice: null,
    rating: 4.8,
    reviews: 69,
    badge: "Ergonómico",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1519047939863-e620857f00a7?w=700&q=80&fit=crop"
  },
  {
    id: 40,
    name: "Bata Satén Spa Post-Baño",
    category: "estetica",
    price: 81000,
    originalPrice: null,
    rating: 4.9,
    reviews: 55,
    badge: "Spa",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1502918412887-5e576f5b1f64?w=700&q=80&fit=crop"
  },
  {
    id: 42,
    name: "Collar Perlas Cultivadas Lujo",
    category: "estetica",
    price: 128000,
    originalPrice: 155000,
    rating: 5.0,
    reviews: 38,
    badge: "Exclusivo",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1509160749780-8d7f2e5f6904?w=700&q=80&fit=crop"
  },
  {
    id: 44,
    name: "Bufanda Cachemir Mascota",
    category: "estetica",
    price: 67000,
    originalPrice: null,
    rating: 4.9,
    reviews: 71,
    badge: "Cachemir",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1487415529821-0a5b2a5e3b5a?w=700&q=80&fit=crop"
  },
  {
    id: 46,
    name: "Pechera Cuero Vegano Ancha",
    category: "estetica",
    price: 69000,
    originalPrice: 82000,
    rating: 4.8,
    reviews: 117,
    badge: "Ergonomía",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=80&fit=crop"
  },
  {
    id: 48,
    name: "Gorro Fiesta Brillantina Cumpleaños",
    category: "estetica",
    price: 19000,
    originalPrice: null,
    rating: 4.6,
    reviews: 53,
    badge: "Fiesta",
    badgeType: "neon",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1498550744827-622d5e08e646?w=700&q=80&fit=crop"
  },
  {
    id: 50,
    name: "Traje Esmoquin Negro Gala Canina",
    category: "estetica",
    price: 139000,
    originalPrice: 169000,
    rating: 5.0,
    reviews: 29,
    badge: "Gala",
    badgeType: "purple",
    categoryLabel: "Estética & Estilo",
    image: "https://images.unsplash.com/photo-1493700806039-e23df36e0a0e?w=700&q=80&fit=crop"
  }
];

const STORAGE_KEY = 'paws_luxe_cart_v1';
const FREE_SHIPPING_THRESHOLD = 100000; // $100.000

let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const formatCLP = (n) => new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(n);

const app = {
  init() {
    lucide.createIcons();
    this.renderProducts('todos');
    this.renderCart();
    this.setupSearch();
    this.setupRevealOnScroll();
    this.updateCartBadge();
  },

  // ---------- Productos ----------
  renderProducts(filter) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';

    let filtered = PRODUCTS;
    if (filter === 'ofertas') {
      filtered = PRODUCTS.filter(p => p.originalPrice);
    } else if (filter !== 'todos') {
      filtered = PRODUCTS.filter(p => p.category === filter);
    }

    // Actualizar pestañas visuales
    document.querySelectorAll('.tab-link').forEach(btn => {
      const isActive = (filter === 'todos' && btn.textContent === 'Todos') ||
                       (filter === 'estetica' && btn.textContent === 'Estética & Estilo') ||
                       (filter === 'cuidado' && btn.textContent === 'Cuidado & Salud') ||
                       (filter === 'ofertas' && btn.textContent === 'Ofertas VIP');
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.classList.remove('border-[#262b36]', 'text-slate-400', 'bg-[#171a21]');
        btn.classList.add('border-neon', 'text-neon', 'bg-neon/10', 'shadow-glow-neon');
      } else {
        btn.classList.remove('border-neon', 'text-neon', 'bg-neon/10', 'shadow-glow-neon');
        btn.classList.add('border-[#262b36]', 'text-slate-400', 'bg-[#171a21]');
      }
    });

    filtered.forEach((p, i) => {
      const el = document.createElement('div');
      el.className = 'card-glass rounded-3xl overflow-hidden flex flex-col group reveal';
      el.style.transitionDelay = `${i * 0.03}s`;
      el.innerHTML = `
        <div class="img-wrap relative h-48 md:h-56 lg:h-64 bg-[#0f1115]">
          <span class="absolute top-3 left-3 badge badge-${p.badgeType} z-10">${p.badge}</span>
          <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=700&q=80&fit=crop'"/>
          <div class="absolute inset-0 bg-gradient-to-t from-[#0f1115]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="p-2.5 bg-white text-black rounded-xl hover:bg-neon transition-colors" onclick="event.stopPropagation(); app.addToCart(${p.id})">
              <i data-lucide="plus" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <div class="flex justify-between items-start mb-2">
            <span class="text-xs font-bold category-${p.category === 'cuidado' ? 'cyan' : 'purple'} tracking-wider uppercase">${p.categoryLabel}</span>
            <span class="text-xs text-slate-500">${p.reviews} reseñas</span>
          </div>
          <h3 class="font-bold text-lg text-white leading-tight group-hover:text-neon transition-colors">${p.name}</h3>
          <div class="mt-2 flex items-center gap-1">
            ${this.renderStars(p.rating)}
            <span class="text-xs text-slate-400 ml-1">(${p.rating})</span>
          </div>
          <div class="mt-4 flex flex-wrap items-baseline gap-2">
            <span class="text-xl font-bold text-neon">${formatCLP(p.price)}</span>
            ${p.originalPrice ? `<span class="text-sm text-slate-500 line-through">${formatCLP(p.originalPrice)}</span>` : ''}
          </div>
          <button class="mt-auto w-full btn-primary py-3.5 rounded-2xl font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all shadow-glow-neon" onclick="app.addToCart(${p.id})">
            Agregar al Carrito
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
          </button>
        </div>
      `;
      grid.appendChild(el);
    });

    lucide.createIcons();
    setTimeout(() => document.querySelectorAll('.reveal').forEach((r, idx) => {
      r.style.transitionDelay = `${idx * 0.03}s`;
      r.classList.add('active');
    }), 50);
  },

  renderStars(rating) {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    let html = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= full) html += '<span class="star">★</span>';
      else if (i === full + 1 && hasHalf) html += '<span class="star" style="color:#fbbf24; opacity: 0.6;">★</span>';
      else html += '<span class="star-empty">☆</span>';
    }
    return html;
  },

  filter(cat) {
    this.renderProducts(cat);
    if (window.innerWidth < 768) {
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMobileMenu();
  },

  setupSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const grid = document.getElementById('productGrid');
      grid.innerHTML = '';
      const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q));
      if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-12 text-center py-20 text-slate-500">No se encontraron productos.</div>';
        return;
      }
      filtered.forEach((p, i) => {
        const el = document.createElement('div');
        el.className = 'card-glass rounded-3xl overflow-hidden flex flex-col group reveal';
        el.style.transitionDelay = `${i * 0.03}s`;
        el.innerHTML = `
          <div class="img-wrap relative h-48 md:h-56 lg:h-64 bg-[#0f1115]">
            <span class="absolute top-3 left-3 badge badge-${p.badgeType} z-10">${p.badge}</span>
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy"/>
            <div class="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <button class="p-2.5 bg-white text-black rounded-xl hover:bg-neon transition-colors" onclick="event.stopPropagation(); app.addToCart(${p.id})">
                <i data-lucide="plus" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
          <div class="p-5 flex flex-col flex-1">
            <div class="flex justify-between items-start mb-2">
              <span class="text-xs font-bold category-${p.category === 'cuidado' ? 'cyan' : 'purple'} tracking-wider uppercase">${p.categoryLabel}</span>
            </div>
            <h3 class="font-bold text-lg text-white leading-tight">${p.name}</h3>
            <div class="mt-2 flex items-center gap-1">${this.renderStars(p.rating)} <span class="text-xs text-slate-400 ml-1">(${p.rating})</span></div>
            <div class="mt-4 flex items-baseline gap-2">
              <span class="text-xl font-bold text-neon">${formatCLP(p.price)}</span>
              ${p.originalPrice ? `<span class="text-sm text-slate-500 line-through">${formatCLP(p.originalPrice)}</span>` : ''}
            </div>
            <button class="mt-auto w-full btn-primary py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-glow-neon" onclick="app.addToCart(${p.id})">
              Agregar al Carrito <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            </button>
          </div>
        `;
        grid.appendChild(el);
      });
      lucide.createIcons();
    });
  },

  // ---------- Carrito ----------
  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    badge.textContent = totalQty;
    if (totalQty > 0) {
      badge.classList.remove('opacity-0', 'scale-0');
      badge.classList.add('opacity-100', 'scale-100');
    } else {
      badge.classList.remove('opacity-100', 'scale-100');
      badge.classList.add('opacity-0', 'scale-0');
    }
  },

  addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    this.saveCart();
    this.renderCart();
    this.updateCartBadge();
    this.openCart();
    this.showToast(product.name);

    const btn = document.querySelector('button[onclick="app.toggleCart()"]');
    btn.classList.add('bounce-subtle');
    setTimeout(() => btn.classList.remove('bounce-subtle'), 500);
  },

  changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    this.saveCart();
    this.renderCart();
    this.updateCartBadge();
  },

  removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    this.saveCart();
    this.renderCart();
    this.updateCartBadge();
  },

  saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  },

  renderCart() {
    const container = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('subtotalText');
    const totalEl = document.getElementById('totalText');
    const shippingTextEl = document.getElementById('shippingText');
    const shippingFill = document.getElementById('shippingFill');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const shippingCostEl = document.getElementById('shippingCostText');

    const empty = document.querySelector('#cartItems > .flex.flex-col.items-center.justify-center');
    if (empty) empty.remove();

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="flex flex-col items-center justify-center h-32 text-slate-500">
          <i data-lucide="shopping-basket" class="w-10 h-10 mb-3 opacity-50"></i>
          <p class="text-sm">Tu carrito está vacío</p>
          <p class="text-xs text-slate-600 mt-1">Descubre productos de lujo para tu mascota</p>
        </div>
      `;
      lucide.createIcons();
    } else {
      container.innerHTML = cart.map(item => `
        <div class="flex gap-4 mb-5 items-center">
          <img src="${item.image}" class="w-16 h-16 rounded-xl object-cover border border-[#262b36] flex-shrink-0" alt="${item.name}" loading="lazy"/>
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm text-white leading-tight">${item.name}</h4>
            <p class="text-xs text-slate-500 mt-1">${formatCLP(item.price)} c/u</p>
            <div class="flex items-center gap-2 mt-3">
              <button class="quantity-btn w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" onclick="app.changeQty(${item.id}, -1)">−</button>
              <span class="w-6 text-center text-xs font-bold text-white">${item.qty}</span>
              <button class="quantity-btn w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" onclick="app.changeQty(${item.id}, 1)">+</button>
              <button class="text-slate-500 hover:text-red-400 ml-2" onclick="app.removeItem(${item.id})">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
          <span class="font-bold text-sm text-white">${formatCLP(item.price * item.qty)}</span>
        </div>
      `).join('');
      lucide.createIcons();
    }

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 4900;
    const total = subtotal + shipping;

    subtotalEl.textContent = formatCLP(subtotal);
    totalEl.textContent = formatCLP(total);
    shippingCostEl.textContent = shipping === 0 ? 'Gratis' : formatCLP(shipping);

    const missing = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
    shippingFill.style.width = `${pct}%`;

    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingTextEl.textContent = '¡Envío Gratis activado!';
      shippingTextEl.classList.add('text-green-400');
      shippingTextEl.classList.remove('text-neon');
    } else {
      shippingTextEl.textContent = `Agrega ${formatCLP(missing)} más`;
      shippingTextEl.classList.remove('text-green-400');
      shippingTextEl.classList.add('text-neon');
    }

    checkoutBtn.disabled = cart.length === 0;
  },

  openCart() {
    document.getElementById('cartBackdrop').classList.remove('hidden');
    requestAnimationFrame(() => {
      document.getElementById('cartDrawer').classList.add('open');
    });
    document.body.style.overflow = 'hidden';
  },

  closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartBackdrop').classList.add('hidden');
    document.body.style.overflow = '';
  },

  toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const isOpen = drawer.classList.contains('open');
    if (isOpen) this.closeCart();
    else this.openCart();
  },

  checkout() {
    if (cart.length === 0) return;
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    alert(`¡Gracias por tu compra!\nTotal: ${formatCLP(total)}\n\nTu pedido será procesado y enviado en 24hs.`);
    cart = [];
    this.saveCart();
    this.renderCart();
    this.updateCartBadge();
    this.closeCart();
  },

  // ---------- Utilidades ----------
  setupRevealOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  toggleMobileMenu() {
    const m = document.getElementById('mobileMenu');
    m.classList.toggle('hidden');
  },

  closeMobileMenu() {
    document.getElementById('mobileMenu').classList.add('hidden');
  },

  showToast(productName) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = `${productName} se agregó al carrito`;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
  },

  newsletter() {
    alert('¡Gracias por suscribirte! Revisa tu correo para tu código de 10% OFF.');
  }
};

// Iniciar
app.init();

// Cerrar carrito con tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') app.closeCart();
});
