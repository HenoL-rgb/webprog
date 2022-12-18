

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