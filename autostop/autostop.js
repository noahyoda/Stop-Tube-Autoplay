function main(){
    let el = document.getElementsByClassName("ytp-autonav-toggle-button")[0];
    let el2 = document.getElementsByClassName("ytp-button")[0];

    if(el.getAttribute("aria-checked")){
        el.setAttribute("aria-checked", false);
        el2.setAttribute("aria-label", "Autoplay is off");
        el22.setAttribute("title", "Autoplay is off");
        setTimeout(main, 300);
    }
}

main();