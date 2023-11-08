// registrando conta no banco

function createAccout() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        username,
        email,
        password
    };

    fetch('http://localhost:3008/api/user/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);        
        window.location.href = 'http://127.0.0.1:5501/PROJETO%20PROFISSIONAL/frontend/src/pages/Bem-Vindo/index.html'
        // http://127.0.0.1:5500/frontend/src/pages/Bem-Vindo/index.html
        alert(data.message);
    })
    .catch(function(err) {
        alert(err);
    })
}

