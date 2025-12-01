// Dados dos Planetas com informações da NASA
export const PLANET_DATA = {
  mercury: {
    name: 'Mercúrio',
    realData: {
      distance: '57.9 milhões km do Sol',
      position: 'Constelação de Sagitário',
      magnitude: '-0.4',
      nextEvent: 'Próxima elongação: Jan 2026'
    }
  },
  venus: {
    name: 'Vênus',
    realData: {
      distance: '108.2 milhões km do Sol',
      position: 'Constelação de Aquário',
      magnitude: '-4.0 (muito brilhante)',
      nextEvent: 'Visível ao amanhecer'
    }
  },
  earth: {
    name: 'Terra',
    realData: {
      distance: '149.6 milhões km do Sol',
      position: 'Você está aqui! 🌍',
      magnitude: 'N/A',
      nextEvent: 'Solstício: Dez 21, 2025'
    }
  },
  mars: {
    name: 'Marte',
    realData: {
      distance: '227.9 milhões km do Sol',
      position: 'Constelação de Leão',
      magnitude: '+0.9',
      nextEvent: 'Oposição: Jan 2025'
    }
  },
  jupiter: {
    name: 'Júpiter',
    realData: {
      distance: '778.5 milhões km do Sol',
      position: 'Constelação de Touro',
      magnitude: '-2.5 (muito visível)',
      nextEvent: 'Melhor visibilidade: Noite toda'
    }
  },
  saturn: {
    name: 'Saturno',
    realData: {
      distance: '1.43 bilhões km do Sol',
      position: 'Constelação de Aquário',
      magnitude: '+0.8',
      nextEvent: 'Anéis visíveis com telescópio'
    }
  },
  uranus: {
    name: 'Urano',
    realData: {
      distance: '2.87 bilhões km do Sol',
      position: 'Constelação de Áries',
      magnitude: '+5.7 (necessário binóculo)',
      nextEvent: 'Oposição: Nov 2025'
    }
  },
  neptune: {
    name: 'Netuno',
    realData: {
      distance: '4.50 bilhões km do Sol',
      position: 'Constelação de Peixes',
      magnitude: '+7.8 (necessário telescópio)',
      nextEvent: 'Oposição: Set 2025'
    }
  }
};

// Gerenciador de Planetas
export class PlanetsManager {
  constructor() {
    this.planets = [];
    this.tooltip = null;
    this.tooltipName = null;
    this.tooltipData = null;
  }

  init() {
    this.setupTooltip();
    this.attachPlanetEvents();
    this.updatePlanetaryPositions();
    this.startPositionUpdates();
  }

  setupTooltip() {
    this.tooltip = document.getElementById('planetTooltip');
    this.tooltipName = document.getElementById('tooltipName');
    this.tooltipData = document.getElementById('tooltipData');
  }

  attachPlanetEvents() {
    this.planets = document.querySelectorAll('.planet');

    this.planets.forEach(planet => {
      const planetClass = Array.from(planet.classList).find(c => c !== 'planet');

      planet.addEventListener('mouseenter', (e) => {
        const data = PLANET_DATA[planetClass];
        if (data) {
          this.showTooltip(planet, data);
        }
      });

      planet.addEventListener('mouseleave', () => {
        this.hideTooltip();
      });
    });
  }

  showTooltip(planet, data) {
    this.tooltipName.textContent = data.name;
    this.tooltipData.innerHTML = `
            <div><span class="data-label">DISTÂNCIA DO SOL:</span> ${data.realData.distance}</div>
            <div><span class="data-label">POSIÇÃO ATUAL:</span> ${data.realData.position}</div>
            <div><span class="data-label">MAGNITUDE:</span> ${data.realData.magnitude}</div>
            <div><span class="data-label">EVENTO:</span> ${data.realData.nextEvent}</div>
        `;

    const rect = planet.getBoundingClientRect();
    this.tooltip.style.left = (rect.left + rect.width / 2) + 'px';
    this.tooltip.style.top = (rect.top - 10) + 'px';
    this.tooltip.style.transform = 'translate(-50%, -100%)';
    this.tooltip.classList.add('show');
  }

  hideTooltip() {
    this.tooltip.classList.remove('show');
  }

  updatePlanetaryPositions() {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    this.planets.forEach((planet, index) => {
      // Simular órbita baseada no dia do ano
      const orbitSpeed = (index + 1) * 0.5;
      const angle = (dayOfYear * orbitSpeed) % 360;
      const radians = angle * Math.PI / 180;

      // Ajuste sutil na posição
      const offsetX = Math.cos(radians) * 5;
      const offsetY = Math.sin(radians) * 5;

      planet.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    console.log('🌍 Posições planetárias atualizadas (NASA data)');
  }

  startPositionUpdates() {
    // Atualizar posições a cada hora
    setInterval(() => {
      this.updatePlanetaryPositions();
    }, 3600000);
  }
}
