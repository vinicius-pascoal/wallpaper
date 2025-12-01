// Gerenciador de Easter Eggs
export class EasterEggsManager {
  constructor() {
    this.halleyInterval = null;
    this.ufoInterval = null;
  }

  init() {
    this.startHalleyComet();
    this.startUFO();
  }

  createHalleyComet() {
    // Probabilidade muito baixa: 0.05% a cada verificação
    if (Math.random() > 0.9995) {
      const halley = document.createElement('div');
      halley.className = 'halley-comet';
      halley.style.top = Math.random() * 50 + '%';
      halley.style.left = '-100px';
      document.body.appendChild(halley);

      console.log('🌠 EVENTO RARO: Cometa Halley avistado!');

      setTimeout(() => {
        halley.remove();
      }, 30000);
    }
  }

  startHalleyComet() {
    this.halleyInterval = setInterval(() => {
      this.createHalleyComet();
    }, 30000);
  }

  createUFO() {
    // Probabilidade baixa: 0.2% a cada verificação
    if (Math.random() > 0.998) {
      const ufo = document.createElement('div');
      ufo.className = 'ufo';
      ufo.style.top = (20 + Math.random() * 40) + '%';
      ufo.style.left = '-100px';
      document.body.appendChild(ufo);

      console.log('👽 EASTER EGG: UFO detectado!');

      setTimeout(() => {
        ufo.remove();
      }, 25000);
    }
  }

  startUFO() {
    this.ufoInterval = setInterval(() => {
      this.createUFO();
    }, 20000);
  }

  destroy() {
    if (this.halleyInterval) clearInterval(this.halleyInterval);
    if (this.ufoInterval) clearInterval(this.ufoInterval);
  }
}
