let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

let sections =  document.querySelector('section');
let navlink = document.querySelector('header nav ul li a')

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHe+ight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navlinks.forEach(links => {
            links.classlist.remove('active');
            document.querySelector('header nav ul li a[href*=' + id +']').classlist.add(active)
              })
         }
    
    })


}
menuIcon.onclick = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}
