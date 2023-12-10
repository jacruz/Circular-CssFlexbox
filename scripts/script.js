var isColorOff=true;

window.onload = function(){
    
}

window.onscroll = function(){
    onscrollCustom();
}

function onscrollCustom(){

    if( document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        let elementsColorOff = document.getElementsByClassName('bar-color-off');
        for (var i in elementsColorOff) {
            if (elementsColorOff.hasOwnProperty(i)) {
                elementsColorOff[i].classList.replace('bar-color-off', 'bar-color-on');
            }
        }
    }else{
        let elementsColorOn = document.getElementsByClassName('bar-color-on');
        for (var i in elementsColorOn) {
            if (elementsColorOn.hasOwnProperty(i)) {
                elementsColorOn[i].classList.replace('bar-color-on', 'bar-color-off');
            }
        }
    }


}