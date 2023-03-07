// window.alert('please do not close this page is Loading it will take some seconds for it to open')

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header');

console.log(navLinks, "navLinks");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        console.log("id =>", id);

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                console.log(links, "-links")
                links.classList.remove('text-maincolor');

                document.querySelector(`.${id}`).classList.add('text-maincolor')

                // document.querySelector('.header a [href*=' + id + ']').classList.add('text-maincolor')
            });
        };
    });
};



/*scroll reveal*/

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });


     ScrollReveal().reveal('.home', { origin: 'top'});

     ScrollReveal().reveal('.home-img ', { origin: 'bottom'});

     ScrollReveal().reveal('.mb ', { origin: 'left'});

     ScrollReveal().reveal('.me ', { origin: 'right'});





// hambugar-menu



  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu')


  btn.addEventListener('click', () => {
    btn.classList.toggle('open')

    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
  })