$(function () {
    var oInnerWidth_font;
    if (window.innerWidth) {
        oInnerWidth_font = innerWidth;
    } else {
        oInnerWidth_font = document.documentElement.clientWidth || document.body.clientWidth;
    }
    if (oInnerWidth_font <= 991) {
        document.documentElement.style.fontSize = innerWidth / 7.5 + "px";
    } else {
        document.documentElement.style.fontSize = "14px";
    }

    onresize = function () {
        if (window.innerWidth) {
            oInnerWidth_font = innerWidth;
        } else {
            oInnerWidth_font = document.documentElement.clientWidth || document.body.clientWidth;
        }
        if (oInnerWidth_font <= 991) {
            document.documentElement.style.fontSize = innerWidth / 7.5 + "px";
        } else {
            document.documentElement.style.fontSize = "14px";
        }
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    }

})