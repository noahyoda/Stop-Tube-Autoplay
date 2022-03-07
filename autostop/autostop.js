function main(){
    let el = document.getElementsByClassName("ytp-autonav-toggle-button")[0];
    if(el.getAttribute("aria-checked")){
        el.setAttribute("aria-checked", false);
        setTimeout(main, 300);
    }
}

main();