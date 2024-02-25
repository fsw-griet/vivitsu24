// let title = document.querySelector('.title');
let myCursor = document.querySelector(".cursor");
let registerCursor=document.querySelector(".register-cursor");
let footerCursor=document.querySelector(".footer-cursor");

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    myCursor.style.left = (x - 22) + "px";
    myCursor.style.top = (y - 22) + "px";
    registerCursor.style.left = (x - 22) + "px";
    registerCursor.style.top = (y - 22) + "px";
    footerCursor.style.left = (x - 22) + "px";
    footerCursor.style.top = (y - 22) + "px";
});

document.addEventListener('mouseleave', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    myCursor.style.left = (x - 22) + "px";
    myCursor.style.top = (y - 22) + "px";
    registerCursor.style.left = (x - 22) + "px";
    registerCursor.style.top = (y - 22) + "px";
    footerCursor.style.left = (x - 22) + "px";
    footerCursor.style.top = (y - 22) + "px";
});
