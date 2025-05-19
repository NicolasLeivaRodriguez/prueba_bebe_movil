 const globo = document.getElementById('globo');
        const nombre = document.getElementById('nombreAleix');
        globo.addEventListener('click', function() {
          // Explotar: crear partículas
          const rect = globo.getBoundingClientRect();
          const container = globo.parentElement;
          for (let i = 0; i < 100; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            // Ángulo y distancia aleatoria
            const angle = Math.random() * 2 * Math.PI;
            const distance = 80 + Math.random() * 60;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
            p.style.left = (globo.offsetLeft + globo.offsetWidth/2 - 7) + 'px';
            p.style.top = (globo.offsetTop + globo.offsetHeight/2 - 7) + 'px';
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
        });
