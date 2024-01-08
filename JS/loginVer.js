    const isLoggedIn = sessionStorage.getItem('loggedIn');
    setTimeout(window.location.href = "https://admslts.github.io/UniMapM", 10000);

    if (!isLoggedIn) {
        window.location.href = "index.html";
    }
