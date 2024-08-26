// Set theme for initial site load based on system theme 
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // already dark mode on loading do nothing
}
else {
    console.log("light")
    document.addEventListener('DOMContentLoaded', () => {
        switchLight()
    });
}


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    if (newColorScheme === 'light') {
        switchLight()
    }
    else {
        switchDark()
    }
});

function switchLight() {
    document.body.classList.add('light');
    document.body.classList.remove('dark');

    document.getElementById('maindiv').classList.remove('yellow')
    document.getElementById('maindiv').classList.add('green')

    const web = document.querySelectorAll('.nandini-web');
    web.forEach(element => {
        element.src = "img/nandini-web-light.webp";
    });

    const mobile = document.querySelectorAll('.nandini-mobile');
    mobile.forEach(element => {
        element.src = "img/nandini-mobile-light.webp";
    });

    // Change the --before-bg-color variable
    document.querySelector('.portfolio.professional').style.setProperty('--before-bg-color', '#72b626');
}

function switchDark() {
    document.body.classList.remove('light');
    document.body.classList.add('dark');

    document.getElementById('maindiv').classList.add('yellow')
    document.getElementById('maindiv').classList.remove('green')

    const web = document.querySelectorAll('.nandini-web');
    web.forEach(element => {
        element.src = "img/nandini-web-dark.webp";
    });

    const mobile = document.querySelectorAll('.nandini-mobile');
    mobile.forEach(element => {
        element.src = "img/nandini-mobile-dark.webp";
    });

    // Change the --before-bg-color variable
    document.querySelector('.portfolio.professional').style.setProperty('--before-bg-color', '#ffb400');
}