const getMappedProducts = (rawProducts) => {
  const waNumber = process.env.ADMIN_WA_NUMBER;
  return rawProducts.map(product => {
    const message = `Halo, saya tertarik dengan produk "${product.name}"`;
    return {
      ...product,
      whatsappLink: `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
    };
  });
}

export { getMappedProducts }