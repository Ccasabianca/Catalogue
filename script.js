const Produits = [
    { titre: 'Chemise à carreaux', image: 'assets/chemise.jpg', alt: 'Chemise à carreaux', prix: 20, categorie: 'chemise', attributs: ['manches longues', 'carreaux'], note: 4.5 },
    { titre: 'Pantalon slim', image: 'assets/jean.jpg', alt: 'Pantalon slim', prix: 35, categorie: 'pantalon', attributs: ['slim', 'noir'], note: 4.0 },
    { titre: 'Veste en jean', image: 'assets/veste-en-jean.jpg', alt: 'Veste en jean', prix: 50, categorie: 'veste', attributs: ['jean', 'bleu'], note: 3.8 },
    { titre: 'Chemise en lin', image: 'assets/chemise-lin.jpg', alt: 'Chemise en lin', prix: 30, categorie: 'chemise', attributs: ['manches courtes', 'lin'], note: 4.2 },
    { titre: 'Pantalon cargo', image: 'assets/pantalon-cargo.jpg', alt: 'Pantalon cargo', prix: 45, categorie: 'pantalon', attributs: ['cargo', 'beige'], note: 4.3 },
    { titre: 'Veste en cuir', image: 'assets/veste-en-cuir.jpg', alt: 'Veste en cuir', prix: 60, categorie: 'veste', attributs: ['cuir', 'marron'], note: 4.7 },
    { titre: 'Chemise à rayures', image: 'assets/chemise-rayure.jpg', alt: 'Chemise à rayures', prix: 25, categorie: 'chemise', attributs: ['rayures', 'blanc', 'bleu'], note: 4.1 },
    { titre: 'Pantalon chino', image: 'assets/pantalon-chino.jpg', alt: 'Pantalon chino', prix: 38, categorie: 'pantalon', attributs: ['chino', 'gris'], note: 4.4 },
    { titre: 'Veste à capuche', image: 'assets/veste-a-capuche.jpg', alt: 'Veste à capuche', prix: 55, categorie: 'veste', attributs: ['capuche', 'noir'], note: 4.6 }
  ];

  function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    const productsToDisplay = products.slice(0, 9);

    productsToDisplay.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <h4>${product.titre}</h4>
        <img src="${product.image}" alt="${product.alt}" width="100">
        <p>Prix: ${product.prix}€</p>
        <p>Catégorie: <a href="#" class="category" onclick="filterByCategory('${product.categorie}')">${product.categorie}</a></p>
        <p>Attributs: ${product.attributs.map(attr => `<a href="#" class="attribute" onclick="filterByAttribute('${attr}')">${attr}</a>`).join(', ')}</p>
        <p>Note: ${product.note} / 5</p>
      `;
      productContainer.appendChild(productCard);
    });
  }

  displayProducts(Produits);

  function filterByCategory(category) {
    const filteredProducts = category === 'all' ? Produits : Produits.filter(product => product.categorie === category);
    displayProducts(filteredProducts);
  }

  function filterByAttribute(attribute) {
    const filteredProducts = Produits.filter(product => product.attributs.includes(attribute));
    displayProducts(filteredProducts);
  }

  function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (query.length >= 3) {
      const filteredProducts = Produits.filter(product => 
        product.titre.toLowerCase().includes(query) || 
        product.categorie.toLowerCase().includes(query) || 
        product.attributs.some(attr => attr.toLowerCase().includes(query))
      );
      displayProducts(filteredProducts);
    } else {
      displayProducts(Produits);
    }
  }

  function filterByPrice() {
    const maxPrice = parseFloat(document.getElementById('price-filter').value);
    if (!isNaN(maxPrice)) {
      const filteredProducts = Produits.filter(product => product.prix <= maxPrice);
      displayProducts(filteredProducts);
    } else {
      displayProducts(Produits);
    }
  }