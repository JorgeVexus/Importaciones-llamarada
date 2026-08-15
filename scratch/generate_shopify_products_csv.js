const fs = require('fs');
const path = require('path');

const headers = [
  'Handle', 'Title', 'Body (HTML)', 'Vendor', 'Standard Product Type', 'Custom Product Type',
  'Tags', 'Published', 'Option1 Name', 'Option1 Value', 'Variant SKU', 'Variant Grams',
  'Variant Inventory Tracker', 'Variant Inventory Qty', 'Variant Inventory Policy',
  'Variant Fulfillment Service', 'Variant Price', 'Variant Compare At Price',
  'Variant Requires Shipping', 'Variant Taxable', 'Image Src', 'Status'
];

const RAW_BASE = 'https://raw.githubusercontent.com/JorgeVexus/Importaciones-llamarada/main/assets/';

const products = [
  // HOGAR
  {
    handle: 'caja-24-velas-aromaticas-surtidas',
    title: 'Caja 24 Velas Aromáticas Surtidas en Frasco de Vidrio',
    body: 'Velas aromáticas elaboradas con cera de soya natural e infundidas con aceites esenciales premium. Presentación mayorista en caja de 24 piezas surtidas en fragancias relajantes como Lavanda, Vainilla, Brisa Marina y Frutos Rojos.',
    vendor: 'Importaciones La Llamarada',
    type: 'Hogar',
    tags: 'Hogar, Decoración, Velas, Mayoreo',
    sku: 'LL-HOG-001',
    price: '480.00',
    compare_price: '600.00',
    image: RAW_BASE + 'prod-candles.png'
  },
  {
    handle: 'lote-12-lamparas-led-recargables',
    title: 'Lote 12 Lámparas LED Recargables de Noche con Sensor',
    body: 'Lámparas nocturnas inteligentes con sensor de movimiento corporal y batería de litio recargable por USB. Ideales para pasillos, recámaras y closets. Paquete mayorista de 12 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Hogar',
    tags: 'Hogar, Iluminación, Mayoreo',
    sku: 'LL-HOG-002',
    price: '660.00',
    compare_price: '800.00',
    image: RAW_BASE + 'new-more-2.png'
  },
  {
    handle: 'caja-36-difusores-aroma-ultrasonicos',
    title: 'Caja 36 Difusores de Aroma Ultrasónicos USB Luz LED',
    body: 'Humidificadores y difusores de aroma silenciosos con capacidad de 300ml y secuencias de luz LED ambiental en 7 colores. Caja mayorista de 36 piezas surtidas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Hogar',
    tags: 'Hogar, Difusores, Mayoreo',
    sku: 'LL-HOG-003',
    price: '3060.00',
    compare_price: '3600.00',
    image: RAW_BASE + 'new-more-1.png'
  },
  {
    handle: 'set-50-ganchos-terciopelo-antideslizantes',
    title: 'Set 50 Ganchos de Terciopelo Antideslizantes Ultra Delgados',
    body: 'Ganchos organizadores de ropa forrados en terciopelo suave que previene caídas y deforma de prendas. Gancho giratorio de cromo 360 grados. Paquete mayorista de 50 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Hogar',
    tags: 'Hogar, Organización, Mayoreo',
    sku: 'LL-HOG-004',
    price: '225.00',
    compare_price: '300.00',
    image: RAW_BASE + 'new-trend-3.png'
  },

  // JUGUETES
  {
    handle: 'caja-50-squishies-surtidos-antiestres',
    title: 'Caja 50 Squishies Surtidos Anti-Estrés Figuras Kawaii',
    body: 'Colección mayorista de 50 juguetes sensoriales suavecitos y de lento retorno (slow rising) en formas de animalitos y postres kawaii. Empacados individualmente.',
    vendor: 'Importaciones La Llamarada',
    type: 'Juguetes',
    tags: 'Juguetes, Squishy, Novedades, Mayoreo',
    sku: 'LL-JUG-001',
    price: '350.00',
    compare_price: '450.00',
    image: RAW_BASE + 'new-trend-4.png'
  },
  {
    handle: 'lote-24-vasos-foco-neon-fiesta',
    title: 'Lote 24 Vasos Foco Neón con Sorbete y Luz Led',
    body: 'Divertidos vasos transparentes en forma de bombilla con colores neón radiantes y popote reusable. Perfectos para fiestas, graduaciones y eventos especiales. Lote de 24 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Juguetes',
    tags: 'Juguetes, Novedades, Fiesta, Mayoreo',
    sku: 'LL-JUG-002',
    price: '1080.00',
    compare_price: '1440.00',
    image: RAW_BASE + 'new-hero-vasos.png'
  },
  {
    handle: 'caja-30-pop-it-fidget-toys-surtidos',
    title: 'Caja 30 Pop It Fidget Toys Figuras Surtidas Colores Arcoíris',
    body: 'Juguetes sensoriales burbujeantes de silicona lavable y duradera. Diseños variados de dinosaurios, unicornios y figuras geométricas. Caja con 30 unidades.',
    vendor: 'Importaciones La Llamarada',
    type: 'Juguetes',
    tags: 'Juguetes, Fidget, Mayoreo',
    sku: 'LL-JUG-003',
    price: '540.00',
    compare_price: '720.00',
    image: RAW_BASE + 'prod-cups.png'
  },

  // COCINA
  {
    handle: 'lote-12-vasos-vidrio-kawaii-perlas-bambu',
    title: 'Lote 12 Vasos Vidrio Kawaii con Perlas, Popote y Tapa Bambú',
    body: 'Hermosos vasos de borosilicato resistente a bebidas frías y calientes, adornados con relieves de perlas y tapas sustentables de bambú natural. Lote de 12 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Cocina',
    tags: 'Cocina, Termos, Kawaii, Mayoreo',
    sku: 'LL-COC-001',
    price: '840.00',
    compare_price: '1080.00',
    image: RAW_BASE + 'prod-cups.png'
  },
  {
    handle: 'caja-16-sets-12-utensilios-silicona-cocina',
    title: 'Caja 16 Sets 12 Utensilios Silicona Cocina Antiadherente',
    body: 'Juegos completísimos de cocina con cabezales de silicona resistente al calor (hasta 230°C) y mangos ergonómicos de madera. Incluyen cubeta organizadora. Caja de 16 sets.',
    vendor: 'Importaciones La Llamarada',
    type: 'Cocina',
    tags: 'Cocina, Utensilios, Silicona, Mayoreo',
    sku: 'LL-COC-002',
    price: '1920.00',
    compare_price: '2400.00',
    image: RAW_BASE + 'new-trend-1.png'
  },
  {
    handle: 'lote-20-molinos-electricos-especias-inox',
    title: 'Lote 20 Molinos Eléctricos de Especias en Acero Inoxidable',
    body: 'Molinillos automáticos de pimienta y sal con núcleo de cerámica ajustable y luz LED integrada. Operables con una sola mano. Lote de 20 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Cocina',
    tags: 'Cocina, Electrodomésticos, Mayoreo',
    sku: 'LL-COC-003',
    price: '3600.00',
    compare_price: '4400.00',
    image: RAW_BASE + 'new-more-5.png'
  },

  // ARTÍCULOS DE LIMPIEZA
  {
    handle: 'caja-24-sets-3-cepillos-limpieza-bano',
    title: 'Caja 24 Sets 3 Cepillos Limpieza Baño Colores Pastel',
    body: 'Set de cerdas de nylon de alta densidad para limpieza profunda de grietas, ranuras y sanitarios. Mangos antiderrapantes en tonos pastel. Caja de 24 sets.',
    vendor: 'Importaciones La Llamarada',
    type: 'Artículos de Limpieza',
    tags: 'Artículos de Limpieza, Limpieza, Cepillos, Mayoreo',
    sku: 'LL-LIM-001',
    price: '1080.00',
    compare_price: '1320.00',
    image: RAW_BASE + 'prod-limpieza-1.png'
  },
  {
    handle: 'caja-12-cepillos-premium-acero-inoxidable',
    title: 'Caja 12 Cepillos Premium Acero Inoxidable Base Rosa',
    body: 'Escobillas de baño de lujo con soporte sanitario sellado en acabado rosa mate y mango cromado antioxidante. Caja mayorista de 12 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Artículos de Limpieza',
    tags: 'Artículos de Limpieza, Limpieza, Premium, Mayoreo',
    sku: 'LL-LIM-002',
    price: '1020.00',
    compare_price: '1200.00',
    image: RAW_BASE + 'prod-limpieza-2.png'
  },
  {
    handle: 'fardo-50-paquetes-panos-microfibra-industrial',
    title: 'Fardo 50 Paquetes Paños Microfibra Industrial Neón',
    body: 'Paños de microfibra ultrasuaves de 30x30cm, absorbentes y libres de pelusa. Ideales para superficies de cristal, autos y cocina. Fardo mayorista de 50 paquetes.',
    vendor: 'Importaciones La Llamarada',
    type: 'Artículos de Limpieza',
    tags: 'Artículos de Limpieza, Limpieza, Microfibra, Mayoreo',
    sku: 'LL-LIM-003',
    price: '1125.00',
    compare_price: '1500.00',
    image: RAW_BASE + 'prod-limpieza-3.png'
  },
  {
    handle: 'caja-36-atomizadores-industriales-translucidos',
    title: 'Caja 36 Atomizadores Industriales Translúcidos 1 Litro',
    body: 'Botellas rociadoras de polietileno de alta densidad con boquilla regulable de bruma a chorro directo. Capacidad de 1000ml. Caja de 36 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Artículos de Limpieza',
    tags: 'Artículos de Limpieza, Limpieza, Atomizador, Mayoreo',
    sku: 'LL-LIM-004',
    price: '648.00',
    compare_price: '864.00',
    image: RAW_BASE + 'prod-limpieza-4.png'
  },

  // BEBÉS
  {
    handle: 'lote-30-baberos-silicon-ajustables-pastel',
    title: 'Lote 30 Baberos Silicón Ajustables Impermeables Tonos Pastel',
    body: 'Baberos con recogedor de migajas profundo fabricados en silicona de grado alimenticio 100% libre de BPA. Fáciles de enrollar y limpiar. Lote mayorista de 30 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Bebés',
    tags: 'Bebés, Baberos, Silicón, Mayoreo',
    sku: 'LL-BEB-001',
    price: '1050.00',
    compare_price: '1350.00',
    image: RAW_BASE + 'prod-bibs.png'
  },
  {
    handle: 'caja-24-morderas-silicona-grado-alimenticio',
    title: 'Caja 24 Morderas de Silicona Grado Alimenticio con Estuche',
    body: 'Mordederas de dentición con texturas estimulantes para encías infantiles. Incluyen estuche protector transparente. Caja de 24 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Bebés',
    tags: 'Bebés, Morderas, Mayoreo',
    sku: 'LL-BEB-002',
    price: '600.00',
    compare_price: '780.00',
    image: RAW_BASE + 'new-more-3.png'
  },
  {
    handle: 'lote-15-aspiradores-nasales-electricos-bebe',
    title: 'Lote 15 Aspiradores Nasales Eléctricos para Bebé',
    body: 'Extractores de mucosidad infantil con 3 niveles de succión suave, música relajante y boquillas de silicona lavable. Lote mayorista de 15 piezas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Bebés',
    tags: 'Bebés, Cuidado Bebé, Mayoreo',
    sku: 'LL-BEB-003',
    price: '2100.00',
    compare_price: '2700.00',
    image: RAW_BASE + 'prod-brushes.png'
  },

  // ABARROTES
  {
    handle: 'caja-48-paquetes-botanas-surtidas-250g',
    title: 'Caja 48 Paquetes Botanas Surtidas 250g',
    body: 'Mix de botanas crujientes saladas y enchiladas en empaques de sellado hermético para mantener frescura. Caja mayorista de 48 paquetes.',
    vendor: 'Importaciones La Llamarada',
    type: 'Abarrotes',
    tags: 'Abarrotes, Snacks, Botanas, Mayoreo',
    sku: 'LL-ABA-001',
    price: '720.00',
    compare_price: '960.00',
    image: RAW_BASE + 'new-more-1.png'
  },
  {
    handle: 'caja-24-frascos-mermelada-artesanal-350g',
    title: 'Caja 24 Frascos Mermelada Artesanal Surtida 350g',
    body: 'Mermeladas de fruta natural baja en azúcar en sabores Fresa, Zarzamora, Durazno y Mango-Chipotle. Caja de 24 frascos de vidrio de 350g.',
    vendor: 'Importaciones La Llamarada',
    type: 'Abarrotes',
    tags: 'Abarrotes, Alimentos, Mayoreo',
    sku: 'LL-ABA-002',
    price: '768.00',
    compare_price: '960.00',
    image: RAW_BASE + 'prod-candles.png'
  },
  {
    handle: 'lote-30-cajas-te-organico-sabores-surtidos',
    title: 'Lote 30 Cajas Té Orgánico Sabores Surtidos 20 sobres',
    body: 'Infusiones herbales orgánicas en sobres individuales compostables. Variedades de Manzanilla-Lavanda, Té Verde-Menta y Jengibre-Limón. Lote de 30 cajas.',
    vendor: 'Importaciones La Llamarada',
    type: 'Abarrotes',
    tags: 'Abarrotes, Bebidas, Té, Mayoreo',
    sku: 'LL-ABA-003',
    price: '840.00',
    compare_price: '1050.00',
    image: RAW_BASE + 'new-more-4.png'
  }
];

function escapeCSV(val) {
  if (val === undefined || val === null) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

const csvRows = [headers.join(',')];

products.forEach(p => {
  const row = [
    p.handle,
    p.title,
    p.body,
    p.vendor,
    p.type,
    p.type,
    p.tags,
    'TRUE',
    'Title',
    'Default Title',
    p.sku,
    '1000',
    'shopify',
    '100',
    'deny',
    'manual',
    p.price,
    p.compare_price,
    'TRUE',
    'TRUE',
    p.image,
    'active'
  ];
  csvRows.push(row.map(escapeCSV).join(','));
});

const csvPath = path.join(__dirname, '..', 'shopify_products_20_import.csv');
fs.writeFileSync(csvPath, csvRows.join('\n'), 'utf8');
console.log(`Generated ${products.length} products with GitHub Raw URLs in CSV: ${csvPath}`);
