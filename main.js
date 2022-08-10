const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const cardscontainer = document.querySelector('.cards-container');
const producDetailContainer =document.querySelector('#producDetail');
const producDetailClose =document.querySelector('.product-detail-close');
const selectMugs =document.querySelector('.mugs')
const selectchromaluxe =document.querySelector('.chromaluxe')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
carritoCompras.addEventListener('click',togglecarritoAside);
producDetailClose.addEventListener('click', closeProducDetailAside);


function toggleDesktopMenu(){
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    
}

function togglemobileMenu (){
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shopingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProducDetailAside();
}

function togglecarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive'); 
    }
    //shopingCartContainer.classList.toggle('inactive');
    const isProductsDetailClose = producDetailContainer.classList.contains('inactive');
   
    if (!isProductsDetailClose){
        producDetailContainer.classList.add('inactive'); 
    }
    shopingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    producDetailContainer.classList.remove('inactive');
    shopingCartContainer.classList.add('inactive');
}
function closeProducDetailAside(){
    producDetailContainer.classList.add('inactive');
}

const productlistMugs = [];
productlistMugs.push({
    name: 'Mug personalizado',
    price: 120,
    image: 'https://lh3.googleusercontent.com/8cYNEQcBYUntT45kZJrKl-cmT6RDcJSxvGkvkFQqXyTDPIiM2YLxyIDmgME6hB-rGmABHKp5cgLiaVr28pzNF24F2LFyL4YtNFHabABq0MT4xuYYMQc4szXYTP6qziHtkFj56oQJI-BeQwhpuYRScI06M7O2Lt_cx6mfDfdlIren7kvFId_yPk-nGj5vOkOCLux34hxuLdTLv8m3LVvJkYqgQFod2AMa56S2svY2QI8pnhrqBtgKPcL0u-9cnAnBxO7L7IaiSMzJldiIwwjJKSVluXPs8mM6YoEaNWE2am6oEvjn0xTj5BdNOFjfaRBuIVAPqPI_o0lGo9FfnLNCvuPlJNU_TYbnvvd6jnORI62WD2Jk8NHH32rewtfn1T8WyQr9K7uLJHwqUmReT2NcrVHjXmZyEUWiMjV9OTzaVfjssCsFSeVZVrHk0WRI_xyj8jQJBjNw7WFBUOpf-_EhF3bSnubBEpprQPAHAKNRlmUcT6KS4AT-5fiMuDbp9Qneq2krxzvmk9XtSq5uOaO9Wzr1Cp5pm337v6_ZC5mRCBSwjfbQi0d1SxDKt8aT-XSoVcbs4iZoa74XWVBe6r_RYLupro1xaPuETtmRDo5OCDnomh_1fkT-NO56ebCDqiaYu3XlcUIx79iDpqMQJYvVFatJ4euRo7jIrU8VPMvc6KngfZqg1icwRPSpYfgVbcX_boIl2s_NK8sb-G62v6RykDmzQHMeo1ej4-lBig6wf1vdPDPKwZQ3mhqZPuaRxM9QnnZLvLtA5k3moDboAHUfAxVAjNZc4uTDwpYARlTJmSQ3klwMn_003x_hq1ELcRKsnbFLyw=s500-no?authuser=2" alt="'

})
productlistMugs.push({
    name: 'Mug personalizado',
    price: 120,
    image: 'https://lh3.googleusercontent.com/ndS-UMSwvOSAXsWpqBv8Ed7hMERa8aDh4bJscpIbdU2aTR3GKET2ffew9KkIzdj4MeN_oWcc4FIo2PBW5EXVuTmeJcCzxDYkECe15JMt4zoxm3N0YEq96HvX5EEfGFzNo77k0kpPEPzoKmQoyznil6B6H0zyeZVJWg4uD9Kmtdq8V22s2n7v9DoCW4ZYQrPcefJ2EGQI7yVqIK1ffLG68CUt6gRMCO1gx43VcKDGmhzTkea6eMALMN5Z3i4DPLeujXy0-QoQgiGQqqJKNzRJ55cRoD3yEupUSXHoLIqI1XfHWNLVGeFo_ZMIk9jIXk2lC1TkRR0Kg4blynKBtOYJ3IExw8YsUxHHxnDyswd_KtkHZBfK4CzMHw1bYXPC7SfI7vzG4NoMkwFxQMGRG6CbrDuJShwKPRhZDnpKi3-JiJU4EdnlH_eRa1EWunQwrJD-l0hCNHdoYoGs3tn-Qy3OGhIWH2PdHrz1YrfJpNO8eku7R1ej3m1uKQuFYoS1snFlNvreSpRzLipVEKJw103yj1Oe1m2WcbDVjrdtHnBm9QD5WDN48EguUGfZfKNFeTU97IxPqF-1hTGAVuN1EK_0xVP9goFwoKqowTNcpPkxwRM6I4Ov1nplZDGOlsfPnUMWSa7NOqfDR3iTJrj-sR7XY6a-VfqQ0BWp7Opk-zRpEVl1eUlj8opGCvnNcI9QTzJLvlRgDfy-PAOIiSGr0XoRXtp2tBaq7OAQa5kBmohq4zn9YGZxIQexSLCuW3b7ZQy4B2aqaj41YS7ZLdwuq8H0l1jHEDcYTw_rI9O907PXZgXEmCviwZhgf_pg1qhCEl4rvEI-LQ=s500-no?authuser=2" alt="'

})
productlistMugs.push({
    name: 'Camisa personalizada',
    price: 120,
    image: 'https://lh3.googleusercontent.com/E9ln3hpuNAVTXmGanugT7NWw8qi8krAVdpcvaATSHda0RcQiqFoNNMCVuKnd0NOg6hzC_9fnnvJ8HeDhSM0ihPvhllE5Y5WeAVozEydsXXi_9dKaGGogGVHQiq9orUWMsHzsHOAuP0mm1tVEfLeEN6O0jp9ouTyIeaXs2MO025W7CBAftNYUVSQJFw4gDwo0xcEbtIGFsANYSYgKgVBW8Izo-OYYcZc57ycq22d4d0PtGnHW6fHsCIAvBMvomVkC2D8rUmAccRf3jq8Bij1AN_1zxR1adPImyczwp3BBfj5Dk_LTfwQkFLxkjbq3xz17I8084SSbFij3gc4li5Q4XosfIHaYV7licN5wrbG1UlR56-DFdPLkvNK1EWX-o0kfPl6tZsDlkx6RvqQk0CI9-nFUAbqXEQp9YV_aD3bWo0_KnHpD5M5STUsC9lVzpLW84Zk8F3ZLpzta6DzeBnSD2-7OiB0TGONLGDQEW08WcodLYtWM190yRjBKukXsSZ14w0ZuTUHX_T050LSz1gLgAml-4BTC5pCwQzsnATDFay3dbp94ZtUI4Ni5eaZjDDbHlvt2Z9AWE57ZlU_oas3eAPzlF1_t3DmAron8tHKsQh40IisnG_BMYf9pD55dQw0yyBT09xIlUjmRFpVuHeDU2W_ONWbeDgSmYkesCMu4nbxZPHdsrZh7f778LGj9gcJ7t9_1MyHVCLLYD8elOKLLajH3b9o49R_6KckHfFo9v-cUBzany7wVIvElcqBOE498jrt3XeKMYftLN1NnGzaKwAt3Xn5sQ9oaKXKqtS4hlU5CFvC7aFcuQ8xwyerJ2Zjc9uSC4g=s500-no?authuser=2" alt="'

})
productlistMugs.push({
    name: 'Mug personalizado',
    price: 120,
    image: 'https://drive.google.com/file/d/1gdKqZYFzkopytiJybUYAVN6MY2kHBvy0/view?usp=sharing" alt="'

})
const productlistChromalux = [];
productlistChromalux.push({
    name: 'Cromalux',
    price: 120,
    image: 'https://lh3.googleusercontent.com/8cYNEQcBYUntT45kZJrKl-cmT6RDcJSxvGkvkFQqXyTDPIiM2YLxyIDmgME6hB-rGmABHKp5cgLiaVr28pzNF24F2LFyL4YtNFHabABq0MT4xuYYMQc4szXYTP6qziHtkFj56oQJI-BeQwhpuYRScI06M7O2Lt_cx6mfDfdlIren7kvFId_yPk-nGj5vOkOCLux34hxuLdTLv8m3LVvJkYqgQFod2AMa56S2svY2QI8pnhrqBtgKPcL0u-9cnAnBxO7L7IaiSMzJldiIwwjJKSVluXPs8mM6YoEaNWE2am6oEvjn0xTj5BdNOFjfaRBuIVAPqPI_o0lGo9FfnLNCvuPlJNU_TYbnvvd6jnORI62WD2Jk8NHH32rewtfn1T8WyQr9K7uLJHwqUmReT2NcrVHjXmZyEUWiMjV9OTzaVfjssCsFSeVZVrHk0WRI_xyj8jQJBjNw7WFBUOpf-_EhF3bSnubBEpprQPAHAKNRlmUcT6KS4AT-5fiMuDbp9Qneq2krxzvmk9XtSq5uOaO9Wzr1Cp5pm337v6_ZC5mRCBSwjfbQi0d1SxDKt8aT-XSoVcbs4iZoa74XWVBe6r_RYLupro1xaPuETtmRDo5OCDnomh_1fkT-NO56ebCDqiaYu3XlcUIx79iDpqMQJYvVFatJ4euRo7jIrU8VPMvc6KngfZqg1icwRPSpYfgVbcX_boIl2s_NK8sb-G62v6RykDmzQHMeo1ej4-lBig6wf1vdPDPKwZQ3mhqZPuaRxM9QnnZLvLtA5k3moDboAHUfAxVAjNZc4uTDwpYARlTJmSQ3klwMn_003x_hq1ELcRKsnbFLyw=s500-no?authuser=2" alt="'

})
productlistChromalux.push({
    name: 'Cromalux',
    price: 120,
    image: 'https://lh3.googleusercontent.com/ndS-UMSwvOSAXsWpqBv8Ed7hMERa8aDh4bJscpIbdU2aTR3GKET2ffew9KkIzdj4MeN_oWcc4FIo2PBW5EXVuTmeJcCzxDYkECe15JMt4zoxm3N0YEq96HvX5EEfGFzNo77k0kpPEPzoKmQoyznil6B6H0zyeZVJWg4uD9Kmtdq8V22s2n7v9DoCW4ZYQrPcefJ2EGQI7yVqIK1ffLG68CUt6gRMCO1gx43VcKDGmhzTkea6eMALMN5Z3i4DPLeujXy0-QoQgiGQqqJKNzRJ55cRoD3yEupUSXHoLIqI1XfHWNLVGeFo_ZMIk9jIXk2lC1TkRR0Kg4blynKBtOYJ3IExw8YsUxHHxnDyswd_KtkHZBfK4CzMHw1bYXPC7SfI7vzG4NoMkwFxQMGRG6CbrDuJShwKPRhZDnpKi3-JiJU4EdnlH_eRa1EWunQwrJD-l0hCNHdoYoGs3tn-Qy3OGhIWH2PdHrz1YrfJpNO8eku7R1ej3m1uKQuFYoS1snFlNvreSpRzLipVEKJw103yj1Oe1m2WcbDVjrdtHnBm9QD5WDN48EguUGfZfKNFeTU97IxPqF-1hTGAVuN1EK_0xVP9goFwoKqowTNcpPkxwRM6I4Ov1nplZDGOlsfPnUMWSa7NOqfDR3iTJrj-sR7XY6a-VfqQ0BWp7Opk-zRpEVl1eUlj8opGCvnNcI9QTzJLvlRgDfy-PAOIiSGr0XoRXtp2tBaq7OAQa5kBmohq4zn9YGZxIQexSLCuW3b7ZQy4B2aqaj41YS7ZLdwuq8H0l1jHEDcYTw_rI9O907PXZgXEmCviwZhgf_pg1qhCEl4rvEI-LQ=s500-no?authuser=2" alt="'

})
productlistChromalux.push({
    name: 'Cromalux',
    price: 120,
    image: 'https://lh3.googleusercontent.com/E9ln3hpuNAVTXmGanugT7NWw8qi8krAVdpcvaATSHda0RcQiqFoNNMCVuKnd0NOg6hzC_9fnnvJ8HeDhSM0ihPvhllE5Y5WeAVozEydsXXi_9dKaGGogGVHQiq9orUWMsHzsHOAuP0mm1tVEfLeEN6O0jp9ouTyIeaXs2MO025W7CBAftNYUVSQJFw4gDwo0xcEbtIGFsANYSYgKgVBW8Izo-OYYcZc57ycq22d4d0PtGnHW6fHsCIAvBMvomVkC2D8rUmAccRf3jq8Bij1AN_1zxR1adPImyczwp3BBfj5Dk_LTfwQkFLxkjbq3xz17I8084SSbFij3gc4li5Q4XosfIHaYV7licN5wrbG1UlR56-DFdPLkvNK1EWX-o0kfPl6tZsDlkx6RvqQk0CI9-nFUAbqXEQp9YV_aD3bWo0_KnHpD5M5STUsC9lVzpLW84Zk8F3ZLpzta6DzeBnSD2-7OiB0TGONLGDQEW08WcodLYtWM190yRjBKukXsSZ14w0ZuTUHX_T050LSz1gLgAml-4BTC5pCwQzsnATDFay3dbp94ZtUI4Ni5eaZjDDbHlvt2Z9AWE57ZlU_oas3eAPzlF1_t3DmAron8tHKsQh40IisnG_BMYf9pD55dQw0yyBT09xIlUjmRFpVuHeDU2W_ONWbeDgSmYkesCMu4nbxZPHdsrZh7f778LGj9gcJ7t9_1MyHVCLLYD8elOKLLajH3b9o49R_6KckHfFo9v-cUBzany7wVIvElcqBOE498jrt3XeKMYftLN1NnGzaKwAt3Xn5sQ9oaKXKqtS4hlU5CFvC7aFcuQ8xwyerJ2Zjc9uSC4g=s500-no?authuser=2" alt="'

})
productlistChromalux.push({
    name: 'Cromalux',
    price: 120,
    image: 'https://lh3.googleusercontent.com/VKo0rG_bGK22ftRzvznLM6qnjNOjKl8gUSz44XswJWKDgx9YPG4q6MO2gLCb0NQi7NCJw2pFJvyD4hm-VVQrSR8BmI1VRCBUrDGKmAR-t0Eh998hbgSUHu-ypJXKQjOK-Vs2EQvgVZQMANb0oV8OBDwt9PfA8gvMSQkWtPtgwWcsgZy7hoMLICvBmPACJ6Ieg7xumcB8qdl2TNndPYUXZSqz-Uy7gEczErpdJYQT7r7EW9mjyWfrvNrGh8NcX2Bs1uHh0KTVSZjJzO_JzsmZbGLhA94pO1v5FA29mROlmQ5NNosL9mgV1s8yHZrAoURq8fJNSWv_zzfjUfr0TdkpQViZ5DKls8ORkPn98OAeRureVIYpKpdU5NczvIJv-zXNVKMqNIwf4Ruk2oi408Ka3aLWQ9a2rqc13egqh714Urqo7lLTMkGv_2-e-0L-Kl8TLJzI8jMcFEbc-NzLN0JsIpaJsxRJZSsXy9sppxYfkshV4T5Wp9wN2iaxjn1KGZ98V5v0By5aJFfDqEeiGYluV1kMx7GfWaO_DB6JJ5gVUYwQvewTMGbgHGIRUimB-QPgaihsxNBIjZv0QrMdpW_u_OZWeNx5SkxF4CKJ6HDfBuRRVK68QKanT5EJp7do9l_CmumTxagHd9Sf4re5nErOHMDPC5nxktxEnCL7zd_qR167wbEsH_dpNN5-kzkyme7WWYQYFNx7yj8MzmDYF4oJ7JfnD3xNy5fjI_JXFQ446yLci703mfa4i5BiRVp_Hk9geqxIeUtZA8SJsszFILS3ziTgQQFIk5yA2nF-4RdXMWmX6VHrLGNJvgUFzNVD9MBrJhucjQ=s500-no?authuser=2" alt="'

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




function renderProductsMugs(arr){
    
    for (product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card' );
        productCart.classList.add('mugs' );
      
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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
    function renderProductsChromaluxe(arr){
    
        for (product of arr){
            const productCart = document.createElement('div');
            productCart.classList.add('product-card');
            productCart.classList.add('chroma');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
            productImg.addEventListener('click', openProductDetailAside);
        
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

renderProductsChromaluxe(productlistChromalux);
renderProductsMugs(productlistMugs)
