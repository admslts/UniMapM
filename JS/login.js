    authToken = "unimapko"
    function attemptLogin() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlToken = urlParams.get('token');

        if (urlToken == authToken) {
            sessionStorage.setItem('loggedIn', 'true');
            document.getElementById('login-status').textContent = 'Prihlásenie úspešné';
            window.location.href = "https://admslts.github.io/UniMapM/mapa.html";
            }
        else {
            document.getElementById("login-status").textContent = "Naskenujte QR kód svojim telefónom";
        }
    }


    setInterval(attemptLogin, 2000);