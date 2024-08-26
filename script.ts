// app.ts

const form = document.getElementById('subscription-form') as HTMLFormElement;
const message = document.getElementById('message') as HTMLParagraphElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    if (name && email) {
        // Aqui, você poderia adicionar a lógica para enviar esses dados para um servidor
        message.textContent = Obrigado por se inscrever, ${name}!;
        form.reset();
    } else {
        message.textContent = 'Por favor, preencha todos os campos.';
    }
});