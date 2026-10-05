const menu = document.querySelector('.menu');
    const links = document.querySelector('.nav-links');
    menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
    document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => b.classList.remove('active')); button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.project').forEach(card => card.classList.toggle('hide', filter !== 'all' && card.dataset.category !== filter));
    }));
