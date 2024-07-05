const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.pro');

searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value.toLowerCase();
  products.forEach((product) => {
    const productName = product.querySelector('.des h5').textContent.toLowerCase();
    if (productName.includes(searchQuery)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});


const searchInput2 = document.getElementById('search-input2');
const productse = document.querySelectorAll('.pro');

searchInput2.addEventListener('input', () => {
  const searchQueryy = searchInput2.value.toLowerCase();
  productse.forEach((product) => {
    const productNamee = product.querySelector('.des h5').textContent.toLowerCase();
    if (productNamee.includes(searchQueryy)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});


 const colorSelect = document.getElementById('color-select');
const sizeSelect = document.getElementById('size-select');
const typeSelect = document.getElementById('type-select');
const productss = document.querySelectorAll('.pro');

typeSelect.addEventListener('change', filterProductss);
colorSelect.addEventListener('change', filterProductss);
sizeSelect.addEventListener('change', filterProductss);

function filterProductss() {
  const selectedType = typeSelect.value;
  const selectedColor = colorSelect.value;
  const selectedSize = sizeSelect.value;
  productss.forEach((product) => {
    const productType = product.getAttribute('data-type');
    const productColor = product.getAttribute('data-color');
    const productSize = product.getAttribute('data-size');
    if ((selectedType === productType || selectedType === 'all') &&
    (selectedColor === productColor || selectedColor === 'all') &&
        (selectedSize === productSize || selectedSize === 'all')) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}




const heartIcons = document.querySelectorAll('.fa-heart');
const likeCountSpan = document.getElementById('like-count');

let likeCount = 0;

heartIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    if (!icon.classList.contains('heart-active')) {
      likeCount++;
      likeCountSpan.textContent = likeCount;
      icon.classList.add('heart-active');
    } else {
      likeCount--;
      likeCountSpan.textContent = likeCount;
      icon.classList.remove('heart-active');
    }
  });
});

