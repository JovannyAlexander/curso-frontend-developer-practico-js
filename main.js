const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardscontainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
carritoCompras.addEventListener('click',togglecarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    
}

function togglemobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function togglecarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive'); 
    }
    aside.classList.toggle('inactive');
}

const productlist = [];
productlist.push({
    name: 'Mug personalizado',
    price: 120,
    image: 'https://img.freepik.com/psd-gratis/maqueta-dos-tazas-sobre-fondo-azul_125540-1433.jpg?w=740&t=st=1658961061~exp=1658961661~hmac=482729582696ea7b8a38edbab4cb057d82a66cadcb1f05af86ab7251ca85baa2" alt="'

})
productlist.push({
    name: 'Mug personalizado',
    price: 120,
    image: 'https://img.freepik.com/psd-gratis/maqueta-dos-tazas-blancas-sobre-fondo-negro_125540-1434.jpg?w=740&t=st=1658961025~exp=1658961625~hmac=48724cf779e8b071729091097be26989cf5dfa010d9302f3653bb6c5c96d82b2" alt="'

})
productlist.push({
    name: 'Camisa personalizada',
    price: 120,
    image: 'https://img.freepik.com/psd-gratis/mockup-modelo-masculino-camiseta-blanca_125540-2121.jpg?w=740&t=st=1658961120~exp=1658961720~hmac=9425dc0e094e5b1359d9a457ed1453b30948eea1c9e6df6004ff53300cdb96db" alt="'

})
productlist.push({
    name: 'Mug personalizado',
    price: 120,
    image: 'https://img.freepik.com/psd-gratis/mockup-taza-cafe-brazo_23-2147649076.jpg?w=740&t=st=1658961218~exp=1658961818~hmac=423bf7c159ee977219a519b8297675066c623ab46dd30a3955103bbc52640750" alt="'

})
//  <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>  

function renderProducts(arr){
    for (product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productName);
    
    
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productFigureImg);
    
        productInfo.appendChild(productInfoDiv);    
        productInfo.appendChild(productFigure);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardscontainer.appendChild(productCart);
    }
    
}

renderProducts(productlist);