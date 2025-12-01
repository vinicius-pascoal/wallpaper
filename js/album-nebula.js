// Gerenciador de Album Art como Nebulosa
export class AlbumNebulaManager {
  constructor(element) {
    this.element = element;
    this.currentAlbumColor = null;
    this.updateInterval = null;
  }

  init() {
    this.startUpdating();
    this.update();
  }

  update() {
    const musicMoods = [
      { colors: ['#8B00FF', '#4B0082', '#9400D3'], mood: 'eletrônica' },
      { colors: ['#FF1493', '#FF69B4', '#FFB6C1'], mood: 'pop' },
      { colors: ['#FF4500', '#FF6347', '#FF7F50'], mood: 'rock' },
      { colors: ['#00CED1', '#20B2AA', '#48D1CC'], mood: 'chill' },
      { colors: ['#FFD700', '#FFA500', '#FF8C00'], mood: 'jazz' }
    ];

    // Simular mudança de música
    if (Math.random() > 0.7) {
      const mood = musicMoods[Math.floor(Math.random() * musicMoods.length)];
      const gradient = `radial-gradient(circle, ${mood.colors[0]}, ${mood.colors[1]}, ${mood.colors[2]})`;

      this.element.style.background = gradient;
      this.element.style.left = (20 + Math.random() * 60) + '%';
      this.element.style.top = (20 + Math.random() * 60) + '%';
      this.element.style.opacity = '0.15';

      this.currentAlbumColor = mood.mood;
      console.log(`🎵 Album Nebula: ${mood.mood}`);

      // Fade out gradual
      setTimeout(() => {
        this.element.style.opacity = '0';
      }, 8000);
    }
  }

  startUpdating() {
    this.updateInterval = setInterval(() => {
      this.update();
    }, 15000);
  }

  destroy() {
    if (this.updateInterval) clearInterval(this.updateInterval);
  }
}
