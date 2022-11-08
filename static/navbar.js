if(window.innerWidth >= 600){
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.logo');

    window.addEventListener('scroll', function(){
        navbar.classList.toggle('fixed', this.scrollY > 30);
        logo.classList.toggle('fixed', this.scrollY > 30);
    });
}