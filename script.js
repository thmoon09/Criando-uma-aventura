document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-proximo');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = document.querySelector('.passo.ativo');
            const nextStepId = this.getAttribute('data-proximo');
            const nextStep = document.getElementById('passo-' + nextStepId);

            // Remove a classe 'ativo' do passo atual
            currentStep.classList.remove('ativo');

            // Adiciona a classe 'ativo' ao próximo passo
            nextStep.classList.add('ativo');
        });
    });
});
