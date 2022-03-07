function main(){
    let el = document.getElementsByClassName("ytp-autonav-toggle-button")[0];

    if(el.getAttribute("aria-checked") == "true"){
        el.parentNode.parentNode.click();
        setTimeout(main, 2000);
    }
}

main();