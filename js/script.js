// =========== banner part staty 

$('.main_banner').slick({
    prevArrow: '<button class="custom-prev">❮</button>',
        nextArrow: '<button class="custom-next">❯</button>'
});

// =========== banner dom 

const banner = document.querySelector("#banner")
const customPrev = document.querySelector(".custom-prev")
const customNext = document.querySelector(".custom-next")

// ============ function part 

banner.addEventListener("mouseenter", ()=>{
    customPrev.style = "transform : translateX(10px)"
})
banner.addEventListener("mouseleave", ()=>{
    customPrev.style = "transform : translateX(0px)"
})

banner.addEventListener("mouseenter", ()=>{
    customNext.style = "transform : translateX(-10px)"
})
banner.addEventListener("mouseleave", ()=>{
    customNext.style = "transform : translateX(0px)"
})

// =========== furniture part start 

// =========== dom part 

const single_card  = document.querySelector('.single_card')
const single_card1 = document.querySelector('.single_card1')
const single_card2 = document.querySelector('.single_card2')
const single_card3 = document.querySelector('.single_card3')
const single_card4 = document.querySelector('.single_card4')
const single_card5 = document.querySelector('.single_card5')
const single_card6 = document.querySelector('.single_card6')
const single_card7 = document.querySelector('.single_card7')
const furniture    = document.querySelector("#furniture")

// ============ banner part end


// ============= function part =============

single_card.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/sofa.png);"
});
single_card.addEventListener("mouseleave", function() {
    furniture.style = "";
});

single_card1.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/cabinet.png); color : white ;"
});
single_card1.addEventListener("mouseleave", function() {
    furniture.style = "";
});

single_card2.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/Shelving.png);"
});
single_card2.addEventListener("mouseleave", function() {
    furniture.style = "";
});

single_card3.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/Tea_Table.png);"
});
single_card3.addEventListener("mouseleave", function() {
    furniture.style = "";
});

single_card4.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/Kitchen_Furniture.png);"
});
single_card4.addEventListener("mouseleave", function() {
    furniture.style = "";
});

single_card5.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/Decors.png);"
});
single_card5.addEventListener("mouseleave", function() {
    furniture.style = "";
});

single_card6.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/office_table.png);"
});
single_card6.addEventListener("mouseleave", function() {
    furniture.style = "";
});

single_card7.addEventListener("mouseenter", ()=>{
    furniture.style = "background-image: url(../images/storage.png);"
});
single_card7.addEventListener("mouseleave", function() {
    furniture.style = "";
});

// ============= furniture function part =============

// ============== collection part start =============

$('.coll_main_card').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow : false,
    nextArrow : false,
  });


//   ============ collection dom

const homeColl = document.querySelector("#homeColl")
const officeColl = document.querySelector("#officeColl")
const collectionBtnHome = document.querySelector("#collectionBtnHome")
const collectionBtnOffice = document.querySelector("#collectionBtnOffice")
const collectionBtnIndoor = document.querySelector("#collectionBtnIndoor")
const collectionBtnOutdoor = document.querySelector("#collectionBtnOutdoor")

// =========== function part 

collectionBtnOffice.addEventListener("click", ()=>{
    officeColl.style = "visibility : visible ; opacity :1 ; top: 0;"
    homeColl.style.display = "none"
})
collectionBtnHome.addEventListener("click", ()=>{
    officeColl.style = "display: none;"
    homeColl.style.display = "block"
})