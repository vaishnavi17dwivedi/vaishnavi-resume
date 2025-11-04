// small helper: set year and smooth scroll for internal links
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  // smooth scroll for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const t = document.querySelector(this.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
