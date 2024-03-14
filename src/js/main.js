'use strict';

import "@babel/polyfill";
import $ from 'jquery'; // так подключается библиотека jquery
import 'popper.js'; // так подключается popper.js
import 'bootstrap'; // так подключается bootstrap

import {slebyDub} from './sleby_dub_product';
import {doskaDub} from './doska_duba_product';
import {doskaYasen} from './doska_yasenya_product';
import {doskaDubMoreny} from './doska_dub_moreny_product';
import {slebyDubMoreny} from './sleby_dub_moreny_product';
import {slebyGrusha} from './sleby_grusha_product';
import {slebyKapovyTopol} from './kapovy_topol_product';
import dollarRate from "./dollar_rate";

const SimpleLightbox = require('simple-lightbox');
const simpleLightboxOptions = SimpleLightbox.defaults;
simpleLightboxOptions.closeBtnCaption = 'Закрыть';
simpleLightboxOptions.nextOnImageClick = false;
simpleLightboxOptions.closeOnOverlayClick = true;
simpleLightboxOptions.captionAttribute = 'data-description';
SimpleLightbox.registerAsJqueryPlugin($);

const toTop = ()=>{
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    };
};

const getSimpleLightbox = ()=>{
    $('.imageGallery a.item-image').simpleLightbox();
};


const showProductSlab = (slebyDub)=>{
    //ЦИКЛ ВЫВОДА ТОВАРОВ СЛЭБОВ ДУБА
    const product_slab = document.getElementById("product_slab");
    product_slab.innerHTML ='';
    const product_slab_amount= document.getElementById("product_slab_amount");
    product_slab_amount.innerText = slebyDub.length;
    slebyDub.forEach(function(currentProduct) {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-5", "col-sm-12", "products__wrap");
        div.innerHTML =
            `<h3 class="category">${currentProduct.name}</h3>
         <p>
             <a class="item-image" href="${currentProduct.linkFullsize}" data-description="${currentProduct.name} Цена: ${currentProduct.price * dollarRate} руб. <br> Размер: ${currentProduct.height}*${currentProduct.widthMax}-${currentProduct.widthMin}*${currentProduct.thickness}см."><img src="${currentProduct.linkResize}" alt="Дубовый слэб" title="Дубовый слэб"></a>
         </p>
         <p><b>Размеры:</b><br>
         Длина: ${currentProduct.height}см;<br>
         Ширина: ${currentProduct.widthMax}-${currentProduct.widthMin}см;<br>
         Толщина: ${currentProduct.thickness}см;<br>
         Цена: <span class="price">${currentProduct.price * dollarRate} руб</span><br>
         <span>Актуальные цены и наличие уточняйте по телефону <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a> или смотрите в каталоге нашего основного сайта <a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/product-category/dubovye-sleby/">экодизайн.бел</a></span>
         </p>`;
        product_slab.appendChild(div);
    });
    getSimpleLightbox();
};

const showProductDub = (doskaDub)=>{
    //ЦИКЛ ВЫВОДА ТОВАРОВ ДОСКИ ДУБА
    const product_dub = document.getElementById("product_dub");
    product_dub.innerHTML ='';
    document.getElementById("product_dub_amount").innerText = doskaDub.length;
    doskaDub.forEach(function(currentProduct) {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-5", "col-sm-12", "products__wrap");
        div.innerHTML =
            `<h3 class="category">${currentProduct.name}</h3>
         <p>
             <a class="item-image" href="${currentProduct.linkFullsize}" data-description="${currentProduct.name} Цена: ${currentProduct.price * dollarRate} руб. <br> Размер: ${currentProduct.height}*${currentProduct.widthMax}-${currentProduct.widthMin}*${currentProduct.thickness}см."><img src="${currentProduct.linkResize}" alt="Доска дубовая" /></a>
         </p>
         <p><b>Размеры:</b><br>
         Длина: ${currentProduct.height}см;<br>
         Ширина: ${currentProduct.widthMax}-${currentProduct.widthMin}см;<br>
         Толщина: ${currentProduct.thickness}см;<br>
         Цена: <span class="price">${currentProduct.price * dollarRate} руб</span><br>
         <span>Актуальные цены и наличие уточняйте по телефону <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a> или смотрите в каталоге нашего основного сайта <a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/product-category/doska-dubovaya/">экодизайн.бел</a></span>
         </p>`;
        product_dub.appendChild(div);
    });
    getSimpleLightbox();
};

const showProductYasen = (doskaYasen)=>{
    //ЦИКЛ ВЫВОДА ТОВАРОВ ДОСКИ ЯСЕНЯ
    const product_yasen = document.getElementById("product_yasen");
    product_yasen.innerHTML ='';
    document.getElementById("product_yasen_amount").innerText = doskaYasen.length;
    doskaYasen.forEach(function(currentProduct) {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-5", "col-sm-12", "products__wrap");
        div.innerHTML =
            `<h3 class="category">${currentProduct.name}</h3>
         <p>
             <a class="item-image" href="${currentProduct.linkFullsize}" data-description="${currentProduct.name} Цена: ${currentProduct.price * dollarRate} руб. <br> Размер: ${currentProduct.height}*${currentProduct.widthMax}-${currentProduct.widthMin}*${currentProduct.thickness}см."><img src="${currentProduct.linkResize}" alt="Доска дубовая" /></a>
         </p>
         <p><b>Размеры:</b><br>
         Длина: ${currentProduct.height}см;<br>
         Ширина: ${currentProduct.widthMax}-${currentProduct.widthMin}см;<br>
         Толщина: ${currentProduct.thickness}см;<br>
         Цена: <span class="price">${currentProduct.price * dollarRate} руб</span><br>
         <span>Актуальные цены и наличие уточняйте по телефону <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a> или смотрите в каталоге нашего основного сайта <a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/katalog/">экодизайн.бел</a></span>
         </p>`;
        product_yasen.appendChild(div);
    });
    getSimpleLightbox();
};

const showProductDubMoreny = (doskaDubMoreny)=>{
    //ЦИКЛ ВЫВОДА ТОВАРОВ ДОСКИ ДУБА МОРЕНОГО
    const product_dub_moreny = document.getElementById("product_dub_moreny");
    product_dub_moreny.innerHTML ='';
    document.getElementById("doska_dub_moreny_amount").innerText = doskaDubMoreny.length;
    doskaDubMoreny.forEach(function(currentProduct) {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-5", "col-sm-12", "products__wrap");
        div.innerHTML =
            `<h3 class="category">${currentProduct.name}</h3>
         <p>
             <a class="item-image" href="${currentProduct.linkFullsize}" data-description="${currentProduct.name} Цена: ${currentProduct.price * dollarRate} руб. <br> Размер: ${currentProduct.height}*${currentProduct.widthMax}-${currentProduct.widthMin}*${currentProduct.thickness}см."><img src="${currentProduct.linkResize}" alt="Доска дубовая" /></a>
         </p>
         <p><b>Размеры:</b><br>
         Длина: ${currentProduct.height}см;<br>
         Ширина: ${currentProduct.widthMax}-${currentProduct.widthMin}см;<br>
         Толщина: ${currentProduct.thickness}см;<br>
         Цена: <span class="price">${currentProduct.price * dollarRate} руб</span><br>
         <span>Актуальные цены и наличие уточняйте по телефону <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a> или смотрите в каталоге нашего основного сайта <a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/product-category/dub-morenyj/">экодизайн.бел</a></span>
         </p>`;
        product_dub_moreny.appendChild(div);
    });
    getSimpleLightbox();
};

const showProductDubMorenySlab = (slebyDubMoreny)=>{
    //ЦИКЛ ВЫВОДА ТОВАРОВ СЛЭБОВ ДУБА МОРЕНОГО
    const product_dub_moreny_sleb = document.getElementById("product_dub_moreny_sleb");
    product_dub_moreny_sleb.innerHTML ='';
    document.getElementById("sleb_dub_moreny_amount").innerText = slebyDubMoreny.length;
    slebyDubMoreny.forEach(function(currentProduct) {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-5", "col-sm-12", "products__wrap");
        div.innerHTML =
            `<h3 class="category">${currentProduct.name}</h3>
         <p>
             <a class="item-image" href="${currentProduct.linkFullsize}" data-description="${currentProduct.name} Цена: ${currentProduct.price * dollarRate} руб. <br> Размер: ${currentProduct.height}*${currentProduct.widthMax}-${currentProduct.widthMin}*${currentProduct.thickness}см."><img src="${currentProduct.linkResize}" alt="Доска дубовая" /></a>
         </p>
         <p><b>Размеры:</b><br>
         Длина: ${currentProduct.height}см;<br>
         Ширина: ${currentProduct.widthMax}-${currentProduct.widthMin}см;<br>
         Толщина: ${currentProduct.thickness}см;<br>
         Цена: <span class="price">${currentProduct.price * dollarRate} руб</span><br>
         <span>Актуальные цены и наличие уточняйте по телефону <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a> или смотрите в каталоге нашего основного сайта <a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/product-category/dub-morenyj-sleby/">экодизайн.бел</a></span>
         </p>`;
        product_dub_moreny_sleb.appendChild(div);
    });
    getSimpleLightbox();
};

const showProductGrushaSlab = (slebyGrusha)=>{
    //ЦИКЛ ВЫВОДА ТОВАРОВ СЛЭБОВ ГУШИ
    const product_grusha_sleb = document.getElementById("product_grusha_sleb");
    product_grusha_sleb.innerHTML ='';
    document.getElementById("sleb_grusha_amount").innerText = slebyGrusha.length;
    slebyGrusha.forEach(function(currentProduct) {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-5", "col-sm-12", "products__wrap");
        div.innerHTML =
            `<h3 class="category">${currentProduct.name}</h3>
         <p>
             <a class="item-image" href="${currentProduct.linkFullsize}" data-description="${currentProduct.name} Цена: ${currentProduct.price * dollarRate} руб. <br> Размер: ${currentProduct.height}*${currentProduct.widthMax}-${currentProduct.widthMin}*${currentProduct.thickness}см."><img src="${currentProduct.linkResize}" alt="Доска дубовая" /></a>
         </p>
         <p><b>Размеры:</b><br>
         Длина: ${currentProduct.height}см;<br>
         Ширина: ${currentProduct.widthMax}-${currentProduct.widthMin}см;<br>
         Толщина: ${currentProduct.thickness}см;<br>
         Цена: <span class="price">${currentProduct.price * dollarRate} руб</span><br>
         <span>Актуальные цены и наличие уточняйте по телефону <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a> или смотрите в каталоге нашего основного сайта <a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/product-category/sleby-grushi/">экодизайн.бел</a></span>
         </p>`;
        product_grusha_sleb.appendChild(div);
    });
    getSimpleLightbox();
};

const showProductKapovyTopol = (slebyKapovyTopol)=>{
    //ЦИКЛ ВЫВОДА ТОВАРОВ СЛЭБОВ КАПОВОГО ТОПОЛЯ
    const product_kapovy_topol_sleb = document.getElementById("product_kapovy_topol_sleb");
    product_kapovy_topol_sleb.innerHTML ='';
    document.getElementById("kapovy_topol_amount").innerText = slebyKapovyTopol.length;
    slebyKapovyTopol.forEach(function(currentProduct) {
        let div = document.createElement('div');
        div.classList.add("col-lg-3", "col-md-5", "col-sm-12", "products__wrap");
        div.innerHTML =
            `<h3 class="category">${currentProduct.name}</h3>
         <p>
             <a class="item-image" href="${currentProduct.linkFullsize}" data-description="${currentProduct.name} Цена: ${currentProduct.price * dollarRate} руб. <br> Размер: ${currentProduct.height}*${currentProduct.widthMax}-${currentProduct.widthMin}*${currentProduct.thickness}см."><img src="${currentProduct.linkResize}" alt="Доска дубовая" /></a>
         </p>
         <p><b>Размеры:</b><br>
         Длина: ${currentProduct.height}см;<br>
         Ширина: ${currentProduct.widthMax}-${currentProduct.widthMin}см;<br>
         Толщина: ${currentProduct.thickness}см;<br>
         Цена: <span class="price">${currentProduct.price * dollarRate} руб</span><br>
         <span>Актуальные цены и наличие уточняйте по телефону <a class="linkFollow" href="tel:+375291860031" title="Звоните прямо сейчас!">+375(29) 186-00-31</a> или смотрите в каталоге нашего основного сайта <a class="linkFollow" href="https://xn--80ahjdhb0ac7k.xn--90ais/product-category/kapovyj-topol-sleby/">экодизайн.бел</a></span>
         </p>`;
         product_kapovy_topol_sleb.appendChild(div);
    });
    getSimpleLightbox();
};






// ФИЛЬТРЫ
const applyFilterOptionsProductSlab =()=>{
    const FitterOptionsValue = document.querySelector('.select-filter').value;
    if (FitterOptionsValue && Number(FitterOptionsValue) === 1){
        slebyDub.sort(function(a, b){
            return a.price-b.price;
        });
        showProductSlab(slebyDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 2){
        slebyDub.sort(function(a, b){
            return b.price-a.price;
        });
        showProductSlab(slebyDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 3){
        slebyDub.sort(function(a, b){
            return a.widthMin-b.widthMin;
        });
        showProductSlab(slebyDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 4){
        slebyDub.sort(function(a, b){
            return b.widthMax-a.widthMax;
        });
        showProductSlab(slebyDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 5){
        slebyDub.sort(function(a, b){
            return a.height-b.height;
        });
        showProductSlab(slebyDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 6){
        slebyDub.sort(function(a, b){
            return b.height-a.height;
        });
        showProductSlab(slebyDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 7){
        slebyDub.sort(function(a, b){
            return a.thickness-b.thickness;
        });
        showProductSlab(slebyDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 8){
        slebyDub.sort(function(a, b){
            return b.thickness-a.thickness;
        });
        showProductSlab(slebyDub);
    } else {
        slebyDub.sort(function(a, b){
            return a.id-b.id;
        });
        showProductSlab(slebyDub);
    }
};

const applyFilterOptionsProductDub =()=>{
    const FitterOptionsValue = document.querySelector('.select-filter').value;
    if (FitterOptionsValue && Number(FitterOptionsValue) === 1){
        doskaDub.sort(function(a, b){
            return a.price-b.price;
        });
        showProductDub(doskaDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 2){
        doskaDub.sort(function(a, b){
            return b.price-a.price;
        });
        showProductDub(doskaDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 3){
        doskaDub.sort(function(a, b){
            return a.widthMin-b.widthMin;
        });
        showProductDub(doskaDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 4){
        doskaDub.sort(function(a, b){
            return b.widthMax-a.widthMax;
        });
        showProductDub(doskaDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 5){
        doskaDub.sort(function(a, b){
            return a.height-b.height;
        });
        showProductDub(doskaDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 6){
        doskaDub.sort(function(a, b){
            return b.height-a.height;
        });
        showProductDub(doskaDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 7){
        doskaDub.sort(function(a, b){
            return a.thickness-b.thickness;
        });
        showProductDub(doskaDub);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 8){
        doskaDub.sort(function(a, b){
            return b.thickness-a.thickness;
        });
        showProductDub(doskaDub);
    } else {
        doskaDub.sort(function(a, b){
            return a.id-b.id;
        });
        showProductDub(doskaDub);
    }
};

const applyFilterOptionsProductYasen =()=>{
    const FitterOptionsValue = document.querySelector('.select-filter').value;
    if (FitterOptionsValue && Number(FitterOptionsValue) === 1){
        doskaYasen.sort(function(a, b){
            return a.price-b.price;
        });
        showProductYasen(doskaYasen);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 2){
        doskaYasen.sort(function(a, b){
            return b.price-a.price;
        });
        showProductYasen(doskaYasen);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 3){
        doskaYasen.sort(function(a, b){
            return a.widthMin-b.widthMin;
        });
        showProductYasen(doskaYasen);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 4){
        doskaYasen.sort(function(a, b){
            return b.widthMax-a.widthMax;
        });
        showProductYasen(doskaYasen);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 5){
        doskaYasen.sort(function(a, b){
            return a.height-b.height;
        });
        showProductYasen(doskaYasen);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 6){
        doskaYasen.sort(function(a, b){
            return b.height-a.height;
        });
        showProductYasen(doskaYasen);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 7){
        doskaYasen.sort(function(a, b){
            return a.thickness-b.thickness;
        });
        showProductYasen(doskaYasen);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 8){
        doskaYasen.sort(function(a, b){
            return b.thickness-a.thickness;
        });
        showProductYasen(doskaYasen);
    } else {
        doskaYasen.sort(function(a, b){
            return a.id-b.id;
        });
        showProductYasen(doskaYasen);
    }
};

const applyFilterOptionsDubMoreny =()=>{
    const FitterOptionsValue = document.querySelector('.select-filter').value;
    if (FitterOptionsValue && Number(FitterOptionsValue) === 1){
        doskaDubMoreny.sort(function(a, b){
            return a.price-b.price;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 2){
        doskaDubMoreny.sort(function(a, b){
            return b.price-a.price;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 3){
        doskaDubMoreny.sort(function(a, b){
            return a.widthMin-b.widthMin;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 4){
        doskaDubMoreny.sort(function(a, b){
            return b.widthMax-a.widthMax;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 5){
        doskaDubMoreny.sort(function(a, b){
            return a.height-b.height;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 6){
        doskaDubMoreny.sort(function(a, b){
            return b.height-a.height;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 7){
        doskaDubMoreny.sort(function(a, b){
            return a.thickness-b.thickness;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 8){
        doskaDubMoreny.sort(function(a, b){
            return b.thickness-a.thickness;
        });
        showProductDubMoreny(doskaDubMoreny);
    } else {
        doskaDubMoreny.sort(function(a, b){
            return a.id-b.id;
        });
        showProductDubMoreny(doskaDubMoreny);
    }
};


const applyFilterOptionsSlabDubMoreny =()=>{
    const FitterOptionsValue = document.querySelector('.select-filter').value;
    if (FitterOptionsValue && Number(FitterOptionsValue) === 1){
        slebyDubMoreny.sort(function(a, b){
            return a.price-b.price;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 2){
        slebyDubMoreny.sort(function(a, b){
            return b.price-a.price;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 3){
        slebyDubMoreny.sort(function(a, b){
            return a.widthMin-b.widthMin;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 4){
        slebyDubMoreny.sort(function(a, b){
            return b.widthMax-a.widthMax;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 5){
        slebyDubMoreny.sort(function(a, b){
            return a.height-b.height;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 6){
        slebyDubMoreny.sort(function(a, b){
            return b.height-a.height;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 7){
        slebyDubMoreny.sort(function(a, b){
            return a.thickness-b.thickness;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 8){
        slebyDubMoreny.sort(function(a, b){
            return b.thickness-a.thickness;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    } else {
        slebyDubMoreny.sort(function(a, b){
            return a.id-b.id;
        });
        showProductDubMorenySlab(slebyDubMoreny);
    }
};

const applyFilterOptionsSlabGrusha =()=>{
    const FitterOptionsValue = document.querySelector('.select-filter').value;
    if (FitterOptionsValue && Number(FitterOptionsValue) === 1){
        slebyDubMoreny.sort(function(a, b){
            return a.price-b.price;
        });
        showProductGrushaSlab(slebyGrusha);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 2){
        slebyGrusha.sort(function(a, b){
            return b.price-a.price;
        });
        showProductGrushaSlab(slebyGrusha);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 3){
        slebyGrusha.sort(function(a, b){
            return a.widthMin-b.widthMin;
        });
        showProductGrushaSlab(slebyGrusha);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 4){
        slebyGrusha.sort(function(a, b){
            return b.widthMax-a.widthMax;
        });
        showProductGrushaSlab(slebyGrusha);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 5){
        slebyGrusha.sort(function(a, b){
            return a.height-b.height;
        });
        showProductGrushaSlab(slebyGrusha);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 6){
        slebyGrusha.sort(function(a, b){
            return b.height-a.height;
        });
        showProductGrushaSlab(slebyGrusha);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 7){
        slebyGrusha.sort(function(a, b){
            return a.thickness-b.thickness;
        });
        showProductGrushaSlab(slebyGrusha);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 8){
        slebyGrusha.sort(function(a, b){
            return b.thickness-a.thickness;
        });
        showProductGrushaSlab(slebyGrusha);
    } else {
        slebyGrusha.sort(function(a, b){
            return a.id-b.id;
        });
        showProductGrushaSlab(slebyGrusha);
    }
};

const applyFilterOptionsKapovyTopol =()=>{
    const FitterOptionsValue = document.querySelector('.select-filter').value;
    if (FitterOptionsValue && Number(FitterOptionsValue) === 1){
        slebyKapovyTopol.sort(function(a, b){
            return a.price-b.price;
        });
        showProductKapovyTopol(slebyKapovyTopol);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 2){
        slebyKapovyTopol.sort(function(a, b){
            return b.price-a.price;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 3){
        slebyKapovyTopol.sort(function(a, b){
            return a.widthMin-b.widthMin;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 4){
        slebyKapovyTopol.sort(function(a, b){
            return b.widthMax-a.widthMax;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 5){
        slebyKapovyTopol.sort(function(a, b){
            return a.height-b.height;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 6){
        slebyKapovyTopol.sort(function(a, b){
            return b.height-a.height;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 7){
        slebyKapovyTopol.sort(function(a, b){
            return a.thickness-b.thickness;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    } else if (FitterOptionsValue && Number(FitterOptionsValue) === 8){
        slebyKapovyTopol.sort(function(a, b){
            return b.thickness-a.thickness;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    } else {
        sslebyKapovyTopol.sort(function(a, b){
            return a.id-b.id;
        });
        showProductGrushaSlab(slebyKapovyTopol);
    }
};



window.onload = function () {
    if ((window.location.href === "https://sleby.by/category_sleby_dub.php")||(window.location.href === "https://sleby.by/category_sleby_dub")){
        showProductSlab(slebyDub);
        const applyOptions = document.querySelector('.btn-filter');
        applyOptions.addEventListener('click', applyFilterOptionsProductSlab);
    };
    if ((window.location.href === "https://sleby.by/category_doska_duba.php")||(window.location.href === "https://sleby.by/category_doska_duba")) {
        showProductDub(doskaDub);
        const applyOptions = document.querySelector('.btn-filter');
        applyOptions.addEventListener('click', applyFilterOptionsProductDub);
    };
    if ((window.location.href === "https://sleby.by/category_doska_dub_moreny.php")||(window.location.href === "https://sleby.by/category_doska_dub_moreny")){
        showProductDubMoreny(doskaDubMoreny);
        const applyOptions = document.querySelector('.btn-filter');
        applyOptions.addEventListener('click', applyFilterOptionsDubMoreny);
    };
    if ((window.location.href === "https://sleby.by/category_sleby_dub_moreny.php")||(window.location.href === "https://sleby.by/category_sleby_dub_moreny")){
        showProductDubMorenySlab(slebyDubMoreny);
        const applyOptions = document.querySelector('.btn-filter');
        applyOptions.addEventListener('click', applyFilterOptionsSlabDubMoreny);
    };
    if ((window.location.href === "https://sleby.by/category_doska_yasenya.php")||(window.location.href === "https://sleby.by/category_doska_yasenya")){
        showProductYasen(doskaYasen);
        const applyOptions = document.querySelector('.btn-filter');
        applyOptions.addEventListener('click', applyFilterOptionsProductYasen);
    };
    if ((window.location.href === "https://sleby.by/category_sleby_grusha.php")||(window.location.href === "https://sleby.by/category_sleby_grusha")){
        showProductGrushaSlab(slebyGrusha);
        const applyOptions = document.querySelector('.btn-filter');
        applyOptions.addEventListener('click', applyFilterOptionsSlabGrusha);
    };
    if ((window.location.href === "https://sleby.by/category_kapovy_topol.php")||(window.location.href === "https://sleby.by/category_kapovy_topol")){
        showProductKapovyTopol(slebyKapovyTopol);
        const applyOptions = document.querySelector('.btn-filter');
        applyOptions.addEventListener('click', applyFilterOptionsKapovyTopol);
    };
    getSimpleLightbox();
    toTop();
};
import '../css/main.scss';




