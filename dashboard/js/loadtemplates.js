window.addEventListener("load", ()=>{

    const sidebarDiv = document.querySelector("#sidebar-left");
    const topBarDiv = document.querySelector(".header-right");

    fetch("http://127.0.0.1:5500/dashboard/shared/sidebar.html")
    .then(res => res.text())
    .then(res => {
        sidebarDiv.innerHTML = res;
    });

    fetch("http://127.0.0.1:5500/dashboard/shared/topbar.html")
    .then(res => res.text())
    .then(res => {
        topBarDiv.innerHTML = res;
    });
})

