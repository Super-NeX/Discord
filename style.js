let mainNavBar = document.getElementById('navBar');
let lineChanger = document.getElementById('lineCng');
let lineC = Array.from(document.getElementsByClassName('tooltips'));
let themeChg = document.getElementById('themeCng');
// const a = 'vert';
// const b = 'hori';
let lineName = mainNavBar.className;

lineChanger.addEventListener('click', lineChange);

function lineChange(){
    if (lineName == 'vert') {
        // console.log(a);
        mainNavBar.classList.remove('vert');
        lineChanger.classList.remove('fa-grip-lines');
        mainNavBar.classList.add('hori');
        lineChanger.classList.add('fa-grip-lines-vertical');
        lineName = 'hori';
        // console.log(b);

    } else if (lineName == 'hori') {
        // console.log(b);
        mainNavBar.classList.remove('hori');
        lineChanger.classList.remove('fa-grip-lines-vertical')
        mainNavBar.classList.add('vert');
        lineChanger.classList.add('fa-grip-lines')
        lineName = 'vert';
        // console.log(a);
    };
}