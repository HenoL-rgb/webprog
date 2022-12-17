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
        window.location.replace('auction.html');
    })
})



document.querySelector('.header__userProfile').addEventListener('click',function(e) {
    document.querySelector('.popupMenu').classList.toggle('active');

})