// Gerenciador de Estrelas
export class StarsManager {
  constructor(container) {
    this.container = container;
    this.numberOfStars = 250;
  }

  init() {
    this.createStars();
    this.startShootingStars();
    this.createConstellations();
  }

  createStars() {
    for (let i = 0; i < this.numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';

      // Tamanhos aleatórios com mais variedade
      const size = Math.random();
      if (size < 0.5) {
        star.classList.add('small');
      } else if (size < 0.85) {
        star.classList.add('medium');
      } else if (size < 0.97) {
        star.classList.add('large');
      } else {
        star.classList.add('bright');
      }

      // Posição aleatória
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';

      // Duração de animação aleatória
      star.style.animationDuration = (2 + Math.random() * 5) + 's';
      star.style.animationDelay = Math.random() * 6 + 's';

      // Cores sutis variadas para algumas estrelas
      if (Math.random() > 0.7) {
        const hue = 200 + Math.random() * 40;
        star.style.filter = `hue-rotate(${hue}deg)`;
      }

      this.container.appendChild(star);
    }
  }

  createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';

    shootingStar.style.left = Math.random() * 100 + '%';
    shootingStar.style.top = Math.random() * 50 + '%';

    this.container.appendChild(shootingStar);

    setTimeout(() => {
      shootingStar.remove();
    }, 3000);
  }

  startShootingStars() {
    const scheduleNext = () => {
      setTimeout(() => {
        this.createShootingStar();
        scheduleNext();
      }, 4000 + Math.random() * 6000);
    };
    scheduleNext();
  }

  createConstellations() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.15';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.insertBefore(canvas, this.container);

    const ctx = canvas.getContext('2d', { alpha: true });
    const stars = document.querySelectorAll('.star.large, .star.bright');

    const drawConstellations = () => {
      // Limpar o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const starPositions = Array.from(stars).map(star => ({
        x: star.offsetLeft,
        y: star.offsetTop
      }));

      ctx.strokeStyle = 'rgba(200, 220, 255, 0.3)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < starPositions.length; i++) {
        for (let j = i + 1; j < starPositions.length; j++) {
          const dx = starPositions[i].x - starPositions[j].x;
          const dy = starPositions[i].y - starPositions[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(starPositions[i].x, starPositions[i].y);
            ctx.lineTo(starPositions[j].x, starPositions[j].y);
            ctx.stroke();
          }
        }
      }

      // Redesenhar continuamente para evitar que o canvas fique preto
      requestAnimationFrame(drawConstellations);
    };

    // Iniciar o loop de desenho
    setTimeout(() => {
      requestAnimationFrame(drawConstellations);
    }, 100);

    // Redimensionar canvas quando a janela muda de tamanho
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
}
