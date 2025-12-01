// Arquivo principal - Inicialização
import { StarsManager } from './stars.js';
import { PlanetsManager } from './planets.js';
import { EasterEggsManager } from './easter-eggs.js';
import { AlbumNebulaManager } from './album-nebula.js';

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar estrelas
  const starsContainer = document.getElementById('starsContainer');
  const starsManager = new StarsManager(starsContainer);
  starsManager.init();

  // Inicializar planetas
  const planetsManager = new PlanetsManager();
  planetsManager.init();

  // Inicializar Easter Eggs
  const easterEggsManager = new EasterEggsManager();
  easterEggsManager.init();

  // Inicializar Album Nebulosa
  const albumNebula = document.getElementById('albumNebula');
  const albumNebulaManager = new AlbumNebulaManager(albumNebula);
  albumNebulaManager.init();

  // Log de inicialização
  console.log(`
╔════════════════════════════════════════╗
║   🌌 WALLPAPER ESPACIAL INICIADO 🌌   ║
║                                        ║
║  Easter Eggs Ativos:                   ║
║  ☄️  Cometa Halley (muito raro)       ║
║  👽 UFO (raro)                         ║
║  🎵 Album Nebulosa (periódico)        ║
║                                        ║
║  📡 NASA Data: CONECTADO               ║
║  🪐 Posições Planetárias: REAL-TIME   ║
╚════════════════════════════════════════╝
    `);
});
