    const isLoggedIn = sessionStorage.getItem('loggedIn');
    setInterval(logOut, 5000);
    function logOut() {
        window.location.href = "file:///Users/adam/Desktop/UniMap/Unimap";
    }

    if (!isLoggedIn) {
        window.location.href = "index.html";
    }
