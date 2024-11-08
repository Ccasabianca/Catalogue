const Produits = [
  { titre: 'Chemise à carreaux', image: 'assets/chemise.jpg', alt: 'Chemise à carreaux', prix: 20, categorie: 'chemise', attributs: ['manches longues', 'carreaux'], note: 4.5 },
  { titre: 'Pantalon slim', image: 'assets/jean.jpg', alt: 'Pantalon slim', prix: 35, categorie: 'pantalon', attributs: ['slim', 'noir'], note: 4.0 },
  { titre: 'Veste en jean', image: 'assets/veste-en-jean.jpg', alt: 'Veste en jean', prix: 50, categorie: 'veste', attributs: ['jean', 'bleu'], note: 3.8 },
  { titre: 'Chemise en lin', image: 'assets/chemise-lin.jpg', alt: 'Chemise en lin', prix: 30, categorie: 'chemise', attributs: ['manches courtes', 'lin'], note: 4.2 },
  { titre: 'Pantalon cargo', image: 'assets/pantalon-cargo.jpg', alt: 'Pantalon cargo', prix: 45, categorie: 'pantalon', attributs: ['cargo', 'beige'], note: 4.3 },
  { titre: 'Veste en cuir', image: 'assets/veste-en-cuir.jpg', alt: 'Veste en cuir', prix: 60, categorie: 'veste', attributs: ['cuir', 'marron'], note: 4.7 },
  { titre: 'Chemise à rayures', image: 'assets/chemise-rayure.jpg', alt: 'Chemise à rayures', prix: 25, categorie: 'chemise', attributs: ['rayures', 'blanc', 'bleu'], note: 4.1 },
  { titre: 'Pantalon chino', image: 'assets/pantalon-chino.jpg', alt: 'Pantalon chino', prix: 38, categorie: 'pantalon', attributs: ['chino', 'gris'], note: 4.4 },
  { titre: 'Veste à capuche', image: 'assets/veste-a-capuche.jpg', alt: 'Veste à capuche', prix: 55, categorie: 'veste', attributs: ['capuche', 'noir'], note: 4.6 },
  { titre: 'T-shirt blanc', image: 'assets/tshirt-blanc.jpg', alt: 'T-shirt blanc', prix: 15, categorie: 'tshirt', attributs: ['blanc', 'coton'], note: 4.3 },
  { titre: 'T-shirt noir', image: 'assets/tshirt-noir.jpg', alt: 'T-shirt noir', prix: 18, categorie: 'tshirt', attributs: ['noir', 'coton'], note: 4.4 },
  { titre: 'Pull en laine', image: 'assets/pull-laine.jpg', alt: 'Pull en laine', prix: 40, categorie: 'pull', attributs: ['laine', 'gris'], note: 4.5 },
  { titre: 'Pull à col roulé', image: 'assets/pull-col-roule.jpg', alt: 'Pull à col roulé', prix: 35, categorie: 'pull', attributs: ['col roulé', 'noir'], note: 4.0 },
  { titre: 'Chemise hawaïenne', image: 'assets/chemise-hawaienne.jpg', alt: 'Chemise hawaïenne', prix: 28, categorie: 'chemise', attributs: ['colorée', 'vacances'], note: 4.2 },
  { titre: 'Pantalon de jogging', image: 'assets/pantalon-jogging.jpg', alt: 'Pantalon de jogging', prix: 30, categorie: 'pantalon', attributs: ['confort', 'noir'], note: 4.6 },
  { titre: 'Veste coupe-vent', image: 'assets/veste-coupe-vent.jpg', alt: 'Veste coupe-vent', prix: 48, categorie: 'veste', attributs: ['léger', 'bleu'], note: 4.4 },
  { titre: 'Chemise habillée', image: 'assets/chemise-habillee.jpg', alt: 'Chemise habillée', prix: 40, categorie: 'chemise', attributs: ['formelle', 'blanche'], note: 4.5 },
  { titre: 'Pantalon de costume', image: 'assets/pantalon-costume.jpg', alt: 'Pantalon de costume', prix: 55, categorie: 'pantalon', attributs: ['formel', 'noir'], note: 4.7 },
  { titre: 'Veste de sport', image: 'assets/veste-sport.jpg', alt: 'Veste de sport', prix: 65, categorie: 'veste', attributs: ['sport', 'léger'], note: 4.8 },
  { titre: 'T-shirt graphique', image: 'assets/tshirt-graphique.jpg', alt: 'T-shirt graphique', prix: 20, categorie: 'tshirt', attributs: ['imprimé', 'moderne'], note: 4.3 }
];

  const PRODUCTS_PER_PAGE = 9;
  let currentPage = 1;
  
  function displayProducts(products) {
      const productContainer = document.getElementById('product-list');
      productContainer.innerHTML = '';
  
      // On trouve la page à afficher grâce à currentPage que nous envoie le lien en bas de la page
      // Affiche la page 1 par défaut
      const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
      const endIndex = startIndex + PRODUCTS_PER_PAGE;
      // On choisit quels produits afficher en fonction de la page
      // Si page 1 : (1-1) x9 = 0 donc on affiche le premier produit de l'array
      const productsToDisplay = products.slice(startIndex, endIndex);
  
      productsToDisplay.forEach(product => {
          const productCard = document.createElement('div');
          // Ajout classe CSS
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
  
      displayPagination(products);
  }
  
  function displayPagination(products) {
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = '';
  
      // On calcule combien de pages il y a en divisant le nombre de produits par le nombre de produits par page (9 pour le moment)
      const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  
      for (let i = 1; i <= totalPages; i++) {
          const paginationLink = document.createElement('a');
          paginationLink.href = "#";
          paginationLink.textContent = i;
          paginationLink.classList.add('pagination-link');
          if (i === currentPage) {
              paginationLink.classList.add('active');
          }
          paginationLink.onclick = (e) => {
              e.preventDefault();
              currentPage = i;
              displayProducts(products);
          };
          paginationContainer.appendChild(paginationLink);
      }
  }
  
  function filterByCategory(category) {
    // Remet à la page 1 au cas où on était sur la 2
      currentPage = 1;
      const filteredProducts = category === 'all' ? Produits : Produits.filter(product => product.categorie === category);
      displayProducts(filteredProducts);
  }
  
  function filterByAttribute(attribute) {
      currentPage = 1;
      const filteredProducts = Produits.filter(product => product.attributs.includes(attribute));
      displayProducts(filteredProducts);
  }
  
  function searchProducts() {
      currentPage = 1;
      const query = document.getElementById('search-input').value.toLowerCase();
      // A partir de 3 caractères, lance le tri
      if (query.length >= 3) {
          const filteredProducts = Produits.filter(product => 
              product.titre.toLowerCase().includes(query) || 
              product.categorie.toLowerCase().includes(query) || 
              // Regarde dans l'array si un attribut correspond à la recherche
              product.attributs.some(attr => attr.toLowerCase().includes(query))
          );
          displayProducts(filteredProducts);
      } else {
          displayProducts(Produits);
      }
  }
  
  function filterByPrice() {
      currentPage = 1;
      // On change la string en nombre
      const maxPrice = parseFloat(document.getElementById('price-filter').value);
      if (!isNaN(maxPrice)) {
          const filteredProducts = Produits.filter(product => product.prix <= maxPrice);
          displayProducts(filteredProducts);
      } else {
          displayProducts(Produits);
      }
  }
  
  displayProducts(Produits);