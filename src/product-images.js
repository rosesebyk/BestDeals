const categoryImages = {
  Laptops: "/assets/category-art/laptops.svg",
  Phones: "/assets/category-art/phones.svg",
  TVs: "/assets/category-art/tvs.svg",
  Headphones: "/assets/category-art/headphones.svg",
  Tablets: "/assets/category-art/tablets.svg",
  Cameras: "/assets/category-art/cameras.svg",
};

const productImages = {
  "lenovo-ideapad-slim-3":
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  "hp-pavilion-15":
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
  "asus-vivobook-15":
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
  "acer-aspire-lite":
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  "samsung-galaxy-s24-fe":
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
  "iphone-14":
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
  "oneplus-12r":
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  "sony-bravia-55-x74l":
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
  "samsung-crystal-4k":
    "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
  "boat-nirvana-751":
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  "sony-wh-ch520":
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
  "xiaomi-pad-6":
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
  "samsung-tab-s9-fe":
    "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
  "canon-eos-r100":
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  "sony-zv-e10":
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
};

function resolveProductImage(product) {
  if (!product) {
    return categoryImages.Laptops;
  }

  return (
    product.image ||
    productImages[product.id] ||
    categoryImages[product.category] ||
    categoryImages.Laptops
  );
}

function attachProductImages(products) {
  return (products || []).map((product) => ({
    ...product,
    image: resolveProductImage(product),
  }));
}

module.exports = {
  productImages,
  categoryImages,
  resolveProductImage,
  attachProductImages,
};
