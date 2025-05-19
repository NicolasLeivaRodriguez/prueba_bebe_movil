const globo = document.getElementById('globo');
const nombre = document.getElementById('nombreAleix');

// Función para explotar el globo
function explotarGlobo() {
  // Evita múltiples explosiones
  if (globo.style.display === 'none') return;

  const rect = globo.getBoundingClientRect();
  const container = globo.parentElement;

  for (let i = 0; i < 100; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const angle = Math.random() * 2 * Math.PI;
    const distance = 80 + Math.random() * 60;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    p.style.left = (globo.offsetLeft + globo.offsetWidth / 2 - 7) + 'px';
    p.style.top = (globo.offsetTop + globo.offsetHeight / 2 - 7) + 'px';
    p.style.setProperty('--dx', dx + 'px');
    p.style.setProperty('--dy', dy + 'px');

    container.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }

  globo.style.opacity = '0';
  setTimeout(() => {
    globo.style.display = 'none';
    nombre.style.display = 'block';
  }, 400);
}

// Hacer que explote automáticamente después de 2 segundos
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(explotarGlobo, 2000);
});
