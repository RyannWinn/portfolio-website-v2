(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* load sequence */
  requestAnimationFrame(function(){
    setTimeout(function(){ document.querySelector('.hero').classList.add('go'); }, 60);
  });

  /* scroll reveals */
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  },{rootMargin:'0px 0px -12% 0px',threshold:.08});
  document.querySelectorAll('.rv').forEach(function(el,i){
    el.style.transitionDelay = (Math.min(i%4,3)*70)+'ms';
    io.observe(el);
  });

  /* nav flips to dark over dark bands */
  var nav = document.getElementById('nav');
  var darks = document.querySelectorAll('.band, .foot');
  function flip(){
    var y = 29, on = false;
    darks.forEach(function(d){
      var r = d.getBoundingClientRect();
      if(r.top <= y && r.bottom >= y) on = true;
    });
    nav.classList.toggle('on-dark', on);
  }

  /* scroll spy */
  var links = Array.prototype.slice.call(document.querySelectorAll('#navlinks a'));
  var secs = links.map(function(a){ return document.querySelector(a.getAttribute('href')); });
  function spy(){
    var best = -1;
    secs.forEach(function(s,i){
      if(s && s.getBoundingClientRect().top <= 140) best = i;
    });
    links.forEach(function(a,i){ a.classList.toggle('active', i===best); });
  }
  var ticking = false;
  function onScroll(){
    if(ticking) return; ticking = true;
    requestAnimationFrame(function(){ flip(); spy(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  onScroll();

  /* lightbox */
  var lb = document.getElementById('lb'), lbimg = document.getElementById('lbimg');
  document.querySelectorAll('[data-zoom]').forEach(function(el){
    el.setAttribute('tabindex','0');
    el.setAttribute('role','button');
    function open(){
      var im = el.querySelector('img');
      if(!im) return;
      lbimg.src = im.currentSrc || im.src;
      lbimg.alt = im.alt;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    el.addEventListener('click', open);
    el.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
    });
  });
  function close(){ lb.classList.remove('open'); document.body.style.overflow = ''; }
  lb.addEventListener('click', close);
  document.getElementById('lbclose').addEventListener('click', close);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });

  /* pause the reel when it is off screen */
  var vid = document.querySelector('.item.video video');
  if(vid){
    if(reduce){ vid.removeAttribute('autoplay'); vid.pause(); }
    new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){ if(!reduce) vid.play().catch(function(){}); }
        else vid.pause();
      });
    },{threshold:.25}).observe(vid);
  }
})();
