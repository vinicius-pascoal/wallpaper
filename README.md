# 🌌 Wallpaper Espacial

Wallpaper animado com céu estrelado, planetas, e efeitos especiais.

## 📁 Estrutura do Projeto

```
wallpaper/
│
├── index.html              # Arquivo principal
│
├── styles/                 # Estilos CSS separados
│   ├── main.css           # Estilos base e layout
│   ├── stars.css          # Estilos das estrelas
│   ├── planets.css        # Estilos dos planetas
│   └── effects.css        # Efeitos especiais (Halley, UFO, etc)
│
└── js/                     # JavaScript modular
    ├── main.js            # Inicialização principal
    ├── stars.js           # Gerenciador de estrelas
    ├── planets.js         # Gerenciador de planetas + NASA data
    ├── easter-eggs.js     # Easter eggs (Halley, UFO)
    └── album-nebula.js    # Nebulosa de album art
```

## 🚀 Como Usar

Abra `index.html` no navegador

## ✨ Funcionalidades

### Visuais
- ⭐ 250 estrelas animadas com tamanhos variados
- 🌠 Estrelas cadentes periódicas
- 🪐 8 planetas do sistema solar com animações
- ☀️ Sol com efeito pulsante
- 🌌 Constelações conectadas

### Easter Eggs
- ☄️ **Cometa Halley** - Aparição muito rara (0.05% chance)
- 👽 **UFO** - Aparição rara (0.2% chance)
- 🎵 **Album Nebulosa** - Nebulosa colorida baseada em "música"

### Dados da NASA
- 📡 Informações reais dos planetas
- 🌍 Posições atualizadas em tempo real
- 🎯 Tooltips interativos com dados astronômicos

## 🛠️ Tecnologias

- HTML5
- CSS3 (Animações, Gradientes, Blur)
- JavaScript ES6+ (Módulos, Classes)

## 📝 Notas

- **Performance**: Otimizado para uso como papel de fundo
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Modular**: Código organizado e fácil de manter

## 🎨 Personalização

Você pode personalizar:
- Número de estrelas em `js/stars.js`
- Posição dos planetas em `styles/planets.css`
- Probabilidade dos easter eggs em `js/easter-eggs.js`
- Cores da nebulosa em `js/album-nebula.js`

## 🐛 Debug

Abra o Console (F12) para ver:
- Logs de inicialização
- Eventos de easter eggs
- Atualizações de posições planetárias
