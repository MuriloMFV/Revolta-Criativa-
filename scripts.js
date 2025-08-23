const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

loadMoreBtn.addEventListener('click', () => {
    // Simula o carregamento de mais itens
    const newItems = `
        <div class="gallery-item">
            <img src="tela4.jpg" alt="Tela 4">
            <div class="overlay">
                <h3>Título da Tela 4</h3>
                <p>Descrição breve da tela.</p>
            </div>
        </div>
        <div class="gallery-item">
            <img src="tela5.jpg" alt="Tela 5">
            <div class="overlay">
                <h3>Título da Tela 5</h3>
                <p>Descrição breve da tela.</p>
            </div>
        </div>
    `;
    gallery.innerHTML += newItems;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$("#button").click(function() {
    $('html, body').animate({
      scrollTop: $("#anchor").offset().top
    }, 2000);
  });

  let currentIndex = 0;
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  
  function showSlide(index) {
      carouselItems.forEach((item, i) => {
          item.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
  }
  
  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showSlide(currentIndex);
  }
  
  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);
  
  // Inicializa o carrossel
  showSlide(currentIndex);

  console.log("Script do carrossel carregado!");

 // Função para envio de formulário (simulação)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contato form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = form.querySelector('input[name="nome"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const mensagem = form.querySelector('textarea[name="mensagem"]').value;

            if (!nome || !email || !mensagem) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Simula envio
            alert("Mensagem enviada com sucesso!\nObrigado por entrar em contato, " + nome + ".");
            form.reset();
        });
    }

    // Animações extras suaves ao rolar
    const elementosAnimados = document.querySelectorAll('[data-animar]');

    const animarScroll = () => {
        const topo = window.scrollY + (window.innerHeight * 0.85);

        elementosAnimados.forEach(el => {
            if (topo > el.offsetTop) {
                el.classList.add('animar');
            } else {
                el.classList.remove('animar');
            }
        });
    };

    window.addEventListener('scroll', animarScroll);
    animarScroll();
});
  