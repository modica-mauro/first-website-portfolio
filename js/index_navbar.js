//Makes -new navbar menù- appear on hambuger manù click
const navSlide = () => {
  if (typeof screen.orientation !== 'undefined') {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
      //NavBar Appears/Disappear on hamburger click
      nav.classList.toggle('nav-active');
      //Toggling Hamburger manù into a white X
      burger.classList.toggle('white');
    });

    //NavBar Disappears on links click
    //Same script as above, different const
    nav.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('white');
    });
  }
}

navSlide();
