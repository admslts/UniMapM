    authToken = "unimapko"
    function attemptLogin() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlToken = urlParams.get('token');

        if (urlToken == authToken) {
            sessionStorage.setItem('loggedIn', 'true');
            document.getElementById('login-status').textContent = 'Prihlásenie úspešné';
            window.location.href = "unimap.sk/?token=bHdl106R0dlBJnA5XWjA";
            }
        else {
            document.getElementById("login-status").textContent = "Naskenujte QR kód svojim telefónom";
        }
    }


    setInterval(attemptLogin, 1000);
