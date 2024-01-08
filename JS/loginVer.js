    const isLoggedIn = sessionStorage.getItem('loggedIn');

    if (!isLoggedIn) {
        window.location.href = "index.html";
    }
