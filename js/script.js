const list = document.querySelectorAll('li');
const form = document.querySelector('.blur');
const login = document.querySelector('.login');
const body = document.querySelector("body");
const userLogo = document.querySelectorAll('.content__auctions__topUsers__userCard__logo');

userLogo.forEach(item => item.addEventListener('click', function() {
    window.location.replace('topUser.html')
}))


document.querySelector('.header__userProfile').addEventListener('click',function(e) {
    document.querySelector('.popupMenu').classList.toggle('active');

})

document.querySelector('.popupMenu').addEventListener('click', function(e) {
    e.preventDefault();
    form.classList.add('active');
    login.addEventListener('click', function(e) {
        e.stopPropagation();
    })
    form.addEventListener('click', function() {
        form.classList.remove('active');
    })
});

list.forEach(item => {
    item.addEventListener('click', function() {
            item.classList.toggle('active');
    })
})





const auctions = document.querySelectorAll('.content__auctions__cards__card');

console.log(auctions);
auctions.forEach(auction => {
    auction.addEventListener('click', function() {
        window.location.replace('auction.html');
    })
})


const searchBtn = document.querySelector('.header__searchBox__searchBtn');
const hamBtn = document.querySelector('.hamBtn');
const hamMenu = document.querySelector('.hamburger');
const closeHam = document.querySelector('.closeHam');
const logo = document.querySelector('.header__logo');
const ctgBurger = document.querySelector('.content__auctions__categoriesMobile__burger');
const dropMenu = document.querySelector('.dropMenu');

searchBtn.addEventListener('click', function() {
    window.location.replace('./search.html')

})

ctgBurger.addEventListener('click', function() {
    dropMenu.classList.toggle('active');
})


hamBtn.addEventListener('click', function(e) {
    hamMenu.classList.toggle('active');
    closeHam.addEventListener('click', function() {
        hamMenu.classList.remove('active');
    })
})
