const list = document.querySelectorAll('li');

list.forEach(item => {
    item.addEventListener('click', function() {
            item.classList.toggle('active');
    })
})



document.querySelector('.header__userProfile').addEventListener('click',function(e) {
    document.querySelector('.popupMenu').classList.toggle('active');

})

document.querySelector('.popupMenu').addEventListener('click', function(e) {
    console.log(e.target)
});

const auctions = document.querySelectorAll('.content__auctions__cards__card');

console.log(auctions);
auctions.forEach(auction => {
    auction.addEventListener('click', function() {
        window.location.replace('auction.html');
    })
})