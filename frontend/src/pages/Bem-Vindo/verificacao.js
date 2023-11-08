// verificando conta no banco

// if (localStorage.getItem(token)) {
//     window.location.href = 'http://127.0.0.1:5501/PROJETO%20PROFISSIONAL/frontend/src/pages/homePerfil/index.html'
// } else {
//     window.location.href = 'http://127.0.0.1:5501/PROJETO%20PROFISSIONAL/frontend/src/pages/Bem-Vindo/index.html'
// }



async function verificandoConta() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const dataForm = {
        email,
        password
    };

    console.log(dataForm);

    await fetch('http://localhost:3008/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })    
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Redireciona');
            localStorage.setItem('token', data.data.token)
            window.location.href = 'http://127.0.0.1:5501/PROJETO%20PROFISSIONAL/frontend/src/pages/homePerfil/index.html'
        } else {
            alert('Verifique usuario e senha:');
        }        
    })
    .catch(error => {
        console.log(error);
        alert(error);
    })  
}