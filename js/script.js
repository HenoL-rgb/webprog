const list = document.querySelectorAll('li');
const form = document.querySelector('.blur');
const login = document.querySelector('.login');
const body = document.querySelector("body");


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

searchBtn.addEventListener('click', function() {
    window.location.replace('./search.html')

})


const hamBtn = document.querySelector('.hamBtn');
const hamMenu = document.querySelector('.hamburger');
const closeHam = document.querySelector('.closeHam');
hamBtn.addEventListener('click', function(e) {
    hamMenu.classList.toggle('active');
    closeHam.addEventListener('click', function() {
        hamMenu.classList.remove('active');
    })
})
