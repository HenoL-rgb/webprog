const list = document.querySelectorAll('li');

list.forEach(item => {
    item.addEventListener('click', function() {
            item.classList.toggle('active');
    })
})

const auctions = document.querySelectorAll('.content__topAuctionsContainer__cards__card');

console.log(auctions);
auctions.forEach(auction => {
    auction.addEventListener('click', function() {
        window.location.replace('auctionStat.html');
    })
})

const searchBtn = document.querySelector('.header__searchBox__searchBtn');

searchBtn.addEventListener('click', function() {
    window.location.replace('./search.html')
})

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