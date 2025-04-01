document.addEventListener('DOMContentLoaded', function() {
    const genderVoteButton = document.getElementById('vote-gender-button');
    const boyNameVoteButton = document.getElementById('vote-boy-name-button');
    const girlNameVoteButton = document.getElementById('vote-girl-name-button');

    genderVoteButton.addEventListener('click', voteGender);
    boyNameVoteButton.addEventListener('click', voteBoyName);
    girlNameVoteButton.addEventListener('click', voteGirlName);

    function animateResults(elementId) {
        const resultsDiv = document.getElementById(elementId);
        if (resultsDiv) {
            resultsDiv.style.display = 'block';
            requestAnimationFrame(() => {
                resultsDiv.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                resultsDiv.style.opacity = '1';
                resultsDiv.style.transform = 'translateY(0)';
            });
        }
    }

    function voteGender() {
        const selectedGender = document.querySelector('input[name="gender"]:checked');
        if (selectedGender) {
            console.log('Voto de género registrado:', selectedGender.value);
            // Aquí iría la lógica real para registrar el voto

            // Simulación de resultados
            const resultsContent = `Niño: ${selectedGender.value === 'niño' ? '100%' : '0%'}, Niña: ${selectedGender.value === 'niña' ? '100%' : '0%'}`;
            document.getElementById('gender-results-content').innerText = resultsContent;
            animateResults('gender-results');
            document.getElementById('gender-voted').style.display = 'block';
        } else {
            alert('Por favor, selecciona un género.');
        }
    }

    function voteBoyName() {
        const selectedBoyName = document.querySelector('input[name="boy-name"]:checked');
        if (selectedBoyName) {
            console.log('Voto de nombre de niño registrado:', selectedBoyName.value);
            // Aquí iría la lógica real para registrar el voto

            // Simulación de resultados
            const resultsContent = `
                <ul class="results-list">
                    <li>Nombre 1 Chico: ${selectedBoyName.value === 'nombre1_chico' ? '100%' : '0%'}</li>
                    <li>Nombre 2 Chico: ${selectedBoyName.value === 'nombre2_chico' ? '100%' : '0%'}</li>
                    <li>Nombre 3 Chico: ${selectedBoyName.value === 'nombre3_chico' ? '100%' : '0%'}</li>
                    <li>Nombre 4 Chico: ${selectedBoyName.value === 'nombre4_chico' ? '100%' : '0%'}</li>
                    <li>Nombre 5 Chico: ${selectedBoyName.value === 'nombre5_chico' ? '100%' : '0%'}</li>
                </ul>
            `;
            document.getElementById('boy-names-results-content').innerHTML = resultsContent;
            animateResults('boy-names-results');
            document.getElementById('boy-names-voted').style.display = 'block';
        } else {
            alert('Por favor, selecciona un nombre de niño.');
        }
    }

    function voteGirlName() {
        const selectedGirlName = document.querySelector('input[name="girl-name"]:checked');
        if (selectedGirlName) {
            console.log('Voto de nombre de niña registrado:', selectedGirlName.value);
            // Aquí iría la lógica real para registrar el voto

            // Simulación de resultados
            const resultsContent = `
                <ul class="results-list">
                    <li>Nombre 1 Chica: ${selectedGirlName.value === 'nombre1_chica' ? '100%' : '0%'}</li>
                    <li>Nombre 2 Chica: ${selectedGirlName.value === 'nombre2_chica' ? '100%' : '0%'}</li>
                    <li>Nombre 3 Chica: ${selectedGirlName.value === 'nombre3_chica' ? '100%' : '0%'}</li>
                    <li>Nombre 4 Chica: ${selectedGirlName.value === 'nombre4_chica' ? '100%' : '0%'}</li>
                    <li>Nombre 5 Chica: ${selectedGirlName.value === 'nombre5_chica' ? '100%' : '0%'}</li>
                </ul>
            `;
            document.getElementById('girl-names-results-content').innerHTML = resultsContent;
            animateResults('girl-names-results');
            document.getElementById('girl-names-voted').style.display = 'block';
        } else {
            alert('Por favor, selecciona un nombre de niña.');
        }
    }
});