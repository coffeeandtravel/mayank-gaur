const trail = document.getElementById('trail');

document.addEventListener('mousemove',(e)=>{
    const cursorOffsetX = 0;
    const cursorOffsetY = 0;

    trail.style.left = `${e.clientX + cursorOffsetX}px`;
    trail.style.top = `${e.clientY + cursorOffsetY}px`;

});
document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  