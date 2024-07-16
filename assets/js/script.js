'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})




/*  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      
      // Add active class to the clicked button
      this.classList.add('active');
      
      // Get the filter value from the button text
      const filter = this.textContent.trim();
      
      // Update the product list
      updateProductList(filter);
    });
  });

  function updateProductList(filter) {
    const productList = document.querySelector('.product-list');
    const products = productList.querySelectorAll('.product-card');

    // Hide all products
    products.forEach(product => product.style.display = 'none');

    // Show products that match the filter
    if (filter === 'Solar Batteries') {
      productList.querySelectorAll('.product-card').forEach(product => product.style.display = 'block');
    } else {
      productList.querySelectorAll(`.product-card:has(h3 a:contains(${filter}))`).forEach(product => product.style.display = 'block');
    }
  }*/



  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      
      // Add active class to the clicked button
      this.classList.add('active');
      
      // Get the filter value from the button data-filter-btn attribute
      const filter = this.dataset.filterBtn;
      
      // Update the product list
      updateProductList(filter);
    });
  });

  function updateProductList(filter) {
    const productList = document.querySelector('.product-list');
    const products = productList.querySelectorAll('.product-card');

    // Hide all products
    products.forEach(product => product.parentElement.style.display = 'none');

    // Show products that match the filter
    if (filter === 'All') {
      productList.querySelectorAll('.product-card').forEach(product => product.parentElement.style.display = 'block');
    } else {
      productList.querySelectorAll(`li[data-filter="${filter}"]`).forEach(product => product.style.display = 'block');
    }
  }