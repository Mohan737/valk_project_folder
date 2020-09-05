var tf = 1;

var gr = 1;

// const cost = 2999;
// document.getElementById('amnt').innerHTML = cost


var cost = 2999;

var f1 = [0];
var f2 = [0];
var f3 = [0];
var f4 = [0];
var ind = 0;

function setf1() {
    tf = 1;
    document.getElementById("re-up").classList.add("hide");
    document.getElementById("selectors").classList.remove("hide");
}

function setf2() {
    tf = 2;
    document.getElementById("re-up").classList.add("hide");
    document.getElementById("selectors").classList.remove("hide");
}

function reup() {
    ekUpload1();
    document.getElementById("selectors").classList.add("hide");
    document.getElementById("re-up").classList.remove("hide");
}

function aleft() {
    if (gr == 1)
        document.getElementById("textoutput").style.textAlign = "left";
    else
        document.getElementById("reartext").style.textAlign = "left";
}

function aright() {
    if (gr == 1)
        document.getElementById("textoutput").style.textAlign = "right";
    else
        document.getElementById("reartext").style.textAlign = "right";

}

function acent() {
    if (gr == 1)
        document.getElementById("textoutput").style.textAlign = "center";
    else
        document.getElementById("reartext").style.textAlign = "center";

}

function ajus() {
    if (gr == 1)
        document.getElementById("textoutput").style.textAlign = "justify";
    else
        document.getElementById("reartext").style.textAlign = "justify";

}

function removeupload() {
    var upp = document.getElementById('file-upload-form');
    upp.remove()
    document.getElementById('colors').classList.remove("hide");

}

function priceCal() {
    var im1 = document.getElementById('file-image');
    var im2 = document.getElementById('back-image');
    var t1 = document.getElementById('textoutput');
    var t2 = document.getElementById('reartext');
    var i_cost = 1299;
    var inc = 0.025;
    ind += 1;
    var fta = t1.offsetHeight * t1.offsetWidth;
    if (fta == 0)
        f1.push(f1[ind - 1]);
    else
        f1.push(fta);
    var bta = t2.offsetHeight * t2.offsetWidth;
    if (bta == 0)
        f2.push(f2[ind - 1]);
    else
        f2.push(bta);
    var fima = im1.offsetHeight * im1.offsetWidth;
    if (fima == 0)
        f3.push(f3[ind - 1]);
    else
        f3.push(fima);
    var bima = im2.offsetHeight * im2.offsetWidth;
    if (bima == 0)
        f4.push(f4[ind - 1]);
    else
        f4.push(bima);
    fta1 = f1[ind] - f1[ind - 1];
    bta1 = f2[ind] - f2[ind - 1];
    fima1 = f3[ind] - f3[ind - 1];
    bima1 = f4[ind] - f4[ind - 1];
    cost += (fta1 + bta1) * inc;
    if (im1.className)
        cost += 0;
    else
        cost += fima1 * (inc + 0.0012);
    if (im2.className)
        cost += 0
    else
        cost += bima1 * (inc + 0.0009);
    if (cost > i_cost)
        document.getElementById('amnt').innerHTML = Math.round(cost, 5);
    else
        document.getElementById('amnt').innerHTML = Math.round(i_cost);
}

function addtext() {
    document.getElementById('cost').classList.remove("hide");
    var tex = document.getElementById('tenter').value
    console.log(tex)
    var ntex = tex.replace(/\n/g, "<br>")
    ntex = ntex.replace(/ /g, "&nbsp;")
    if (gr == 1) {
        document.getElementById('rot').classList.remove("hide");
        document.getElementById('dir').classList.remove("hide");
        document.getElementById("textoutput").innerHTML = ntex;
    } else if (gr == 2) {
        document.getElementById('rotb').classList.remove("hide");
        document.getElementById('dirb').classList.remove("hide");
        document.getElementById("reartext").innerHTML = ntex;
    }
    priceCal();
    document.getElementById('texx').classList.remove("hide");
    var xyz = document.getElementById('file-upload-form')
    document.getElementById('file-upload-form').style.marginTop = "5px";
    document.getElementById('art').innerHTML = "Art (optional)"
    document.getElementById('file-upload-form').classList.add("hide");
        //xyz.remove();
    var xy = document.getElementById('diss')
        // xy.remove();
    document.getElementById('option').innerHTML = "Edit Text";
    document.getElementById('or').remove();
    document.getElementById('shut').classList.remove("hide");
    document.getElementById('colors').classList.remove("hide");

}

function changeS() {
    var wi = document.getElementById('im-w').value
    if (gr == 1) {
        document.getElementById("file-image").style.width = wi;
    } else {
        document.getElementById("back-image").style.width = wi;
    }
    console.log('changed')
    priceCal();
}


function changet() {
    var si = document.getElementById('t-h').value
    if (gr == 1)
        document.getElementById("textoutput").style.fontSize = si;
    else
        document.getElementById("reartext").style.fontSize = si;
    console.log('changed font size:'+si)
    priceCal();
}

function rottee() {
    if (gr == 1) {
        var u = document.getElementById('reartext').style.fontSize;
        console.log(u);
        u.replace("px", '');
        document.getElementById('t-h').value = parseInt(u);
        gr = 2
        document.getElementById('tee').classList.add("hide");
        document.getElementById('teeb').classList.remove("hide");
        document.getElementById('rotb').classList.remove("hide");
        document.getElementById('dirb').classList.remove("hide");
        document.getElementById('rot').classList.add("hide");
        document.getElementById('dir').classList.add("hide");
    } else {
        var u = document.getElementById('textoutput').style.fontSize;
        console.log(u);
        u.replace("px", '');
        document.getElementById('t-h').value = parseInt(u);
        gr = 1
        document.getElementById('teeb').classList.add("hide");
        document.getElementById('tee').classList.remove("hide");
        document.getElementById('rot').classList.remove("hide");
        document.getElementById('dir').classList.remove("hide");
        document.getElementById('rotb').classList.add("hide");
        document.getElementById('dirb').classList.add("hide");

    }
}
// tee shirt changes:
function cblack() {
    if (tf == 1) {
        document.getElementById("tee").className = "bruhblack";
        document.getElementById("teeb").className = "backblack";
        if (gr == 1)
            document.getElementById("teeb").classList.add("hide");
        else
            document.getElementById("tee").classList.add("hide");
    } else if (tf == 2) {
        if (gr == 1)
            document.getElementById("textoutput").style.color = "black";
        else
            document.getElementById("reartext").style.color = "black";

    }

}

function cgreen() {
    if (tf == 1) {
        document.getElementById("tee").className = "bruhgreen";
        document.getElementById("teeb").className = "backgreen";
        if (gr == 1)
            document.getElementById("teeb").classList.add("hide");
        else
            document.getElementById("tee").classList.add("hide");
    } else if (tf == 2) {
        if (gr == 1)
            document.getElementById("textoutput").style.color = "green";
        else
            document.getElementById("reartext").style.color = "green";
    }
}

function cblue() {
    if (tf == 1) {
        document.getElementById("tee").className = "bruhblue";
        document.getElementById("teeb").className = "backblue";
        if (gr == 1)
            document.getElementById("teeb").classList.add("hide");
        else
            document.getElementById("tee").classList.add("hide");
    } else if (tf == 2) {
        if (gr == 1)
            document.getElementById("textoutput").style.color = "blue";
        else
            document.getElementById("reartext").style.color = "blue";
    }
}

function cred() {
    if (tf == 1) {
        document.getElementById("tee").className = "bruhred";
        document.getElementById("teeb").className = "backred";
        if (gr == 1)
            document.getElementById("teeb").classList.add("hide");
        else
            document.getElementById("tee").classList.add("hide");
    } else if (tf == 2) {
        if (gr == 1)
            document.getElementById("textoutput").style.color = "red";
        else
            document.getElementById("reartext").style.color = "red";
    }
}

function cmar() {
    if (tf == 1) {
        document.getElementById("tee").className = "bruhmaroon";
        document.getElementById("teeb").className = "backmaroon";
        if (gr == 1)
            document.getElementById("teeb").classList.add("hide");
        else
            document.getElementById("tee").classList.add("hide");
    } else if (tf == 2) {
        if (gr == 1)
            document.getElementById("textoutput").style.color = "grey";
        else
            document.getElementById("reartext").style.color = "grey";
    }
}

function cneon() {
    if (tf == 1) {
        document.getElementById("tee").className = "bruhneon";
        document.getElementById("teeb").className = "backneon";
        if (gr == 1)
            document.getElementById("teeb").classList.add("hide");
        else
            document.getElementById("tee").classList.add("hide");
    } else if (tf == 2) {
        if (gr == 1)
            document.getElementById("textoutput").style.color = "#FFE293";
        else
            document.getElementById("reartext").style.color = "#FFE293";
    }
}

function cwhite() {
    if (tf == 1) {
        document.getElementById("tee").className = "bruhwhite";
        document.getElementById("teeb").className = "backwhite";
        if (gr == 1)
            document.getElementById("teeb").classList.add("hide");
        else
            document.getElementById("tee").classList.add("hide");
    } else if (tf == 2) {
        if (gr == 1)
            document.getElementById("textoutput").style.color = "white";
        else
            document.getElementById("reartext").style.color = "white";
    }
}
//object mobility    also document.getElementById("myDIV").className = "mystyle";
var gMouseDownX;
var gMouseDownY;
var gMouseDownOffsetX;
var gMouseDownOffsetY;

function addListeners() {
    document.getElementById('file-image').addEventListener('mousedown', mmouseDown, false);
    document.getElementById('textoutput').addEventListener('mousedown', mmouseDown1, false);
    document.getElementById('reartext').addEventListener('mousedown', mmouseDown2, false);
    document.getElementById('back-image').addEventListener('mousedown', mmouseDown3, false);
    document.getElementById('file-image').addEventListener('touchstart', mouseDown, false);
    document.getElementById('textoutput').addEventListener('touchstart', mouseDown1, false);
    document.getElementById('reartext').addEventListener('touchstart', mouseDown2, false);
    document.getElementById('back-image').addEventListener('touchstart', mouseDown3, false);
    window.addEventListener('mouseup', mouseUp, false);
    window.addEventListener('mouseup', mouseUp1, false);
    window.addEventListener('mouseup', mouseUp2, false);
    window.addEventListener('mouseup', mouseUp3, false);
    window.addEventListener('touchend', mouseUp, false);
    window.addEventListener('touchend', mouseUp1, false);
    window.addEventListener('touchend', mouseUp2, false);
    window.addEventListener('touchend', mouseUp3, false);
}

function mouseUp() {
    document.getElementById("fbox").style.backgroundImage = "";
    window.removeEventListener('mousemove', mdivMove, true);
    window.removeEventListener('touchmove', divMove, true);
}

function mouseUp1() {
    document.getElementById("fbox").style.backgroundImage = "";
    window.removeEventListener('mousemove', mdivMove1, true);
    window.removeEventListener('touchmove', divMove1, true);
}

function mouseUp2() {
    document.getElementById("bbox").style.backgroundImage = "";
    window.removeEventListener('mousemove', mdivMove2, true);
    window.removeEventListener('touchmove', divMove2, true);
}

function mouseUp3() {
    document.getElementById("bbox").style.backgroundImage = "";
    window.removeEventListener('mousemove', mdivMove3, true);
    window.removeEventListener('touchmove', divMove3, true);
}

function mouseDown(e) {
    document.getElementById("fbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX = e.touches[0].clientX;
    gMouseDownY = e.touches[0].clientY;
    console.log(gMouseDownX);

    var div = document.getElementById('file-image');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart = "";
    if (!div.style.left) {
        leftPart += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart = div.style.left;
    let leftPos = leftPart.indexOf("px");
    let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);

    //The following block gets the Y offset (the difference between where it starts and where it was clicked)
    let topPart = "";
    if (!div.style.top)
        topPart += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart = div.style.top;
    let topPos = topPart.indexOf("px");
    let topNumString = topPart.slice(0, topPos); // Get the Y value of the object.
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

    window.addEventListener('mousemove', divMove, true);
    window.addEventListener('touchmove', divMove, true);
}

function mouseDown1(e) {
    document.getElementById("fbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX1 = e.touches[0].clientX;
    gMouseDownY1 = e.touches[0].clientY;

    var div1 = document.getElementById('textoutput');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart1 = "";
    if (!div1.style.left) {
        leftPart1 += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart1 = div1.style.left;
    let leftPos1 = leftPart1.indexOf("px");
    let leftNumString1 = leftPart1.slice(0, leftPos1); // Get the X value of the object.
    gMouseDownOffsetX1 = gMouseDownX1 - parseInt(leftNumString1, 10);

    let topPart1 = "";
    if (!div1.style.top)
        topPart1 += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart1 = div1.style.top;
    let topPos1 = topPart1.indexOf("px");
    let topNumString1 = topPart1.slice(0, topPos1); // Get the Y value of the object.
    gMouseDownOffsetY1 = gMouseDownY1 - parseInt(topNumString1, 10);

    window.addEventListener('mousemove', divMove1, true);
    window.addEventListener('touchmove', divMove1, true);
}

function mouseDown2(e) {
    document.getElementById("bbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX2 = e.touches[0].clientX;
    gMouseDownY2 = e.touches[0].clientY;

    var div2 = document.getElementById('reartext');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart2 = "";
    if (!div2.style.left) {
        leftPart2 += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart2 = div2.style.left;
    let leftPos2 = leftPart2.indexOf("px");
    let leftNumString2 = leftPart2.slice(0, leftPos2); // Get the X value of the object.
    gMouseDownOffsetX2 = gMouseDownX2 - parseInt(leftNumString2, 10);

    let topPart2 = "";
    if (!div2.style.top)
        topPart2 += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart2 = div2.style.top;
    let topPos2 = topPart2.indexOf("px");
    let topNumString2 = topPart2.slice(0, topPos2); // Get the Y value of the object.
    gMouseDownOffsetY2 = gMouseDownY2 - parseInt(topNumString2, 10);

    window.addEventListener('mousemove', divMove2, true);
    window.addEventListener('touchmove', divMove2, true);
}

function mouseDown3(e) {
    document.getElementById("bbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX3 = e.touches[0].clientX;
    gMouseDownY3 = e.touches[0].clientY;

    var div3 = document.getElementById('back-image');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart3 = "";
    if (!div3.style.left) {
        leftPart3 += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart3 = div3.style.left;
    let leftPos3 = leftPart3.indexOf("px");
    let leftNumString3 = leftPart3.slice(0, leftPos3); // Get the X value of the object.
    gMouseDownOffsetX3 = gMouseDownX3 - parseInt(leftNumString3, 10);

    let topPart3 = "";
    if (!div3.style.top)
        topPart3 += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart3 = div3.style.top;
    let topPos3 = topPart3.indexOf("px");
    let topNumString3 = topPart3.slice(0, topPos3); // Get the Y value of the object.
    gMouseDownOffsetY3 = gMouseDownY3 - parseInt(topNumString3, 10);

    window.addEventListener('mousemove', divMove3, true);
    window.addEventListener('touchmove', divMove3, true);

}

function divMove(e) {
    var div = document.getElementById('file-image');
    div.style.position = 'relative';
    let topAmount = e.touches[0].clientY - gMouseDownOffsetY;
    div.style.top = topAmount + 'px';
    let leftAmount = e.touches[0].clientX - gMouseDownOffsetX;
    div.style.left = leftAmount + 'px';
}

function divMove1(e) {
    var div1 = document.getElementById('textoutput');
    div1.style.position = 'relative';
    let topAmount1 = e.touches[0].clientY - gMouseDownOffsetY1;
    div1.style.top = topAmount1 + 'px';
    let leftAmount1 = e.touches[0].clientX - gMouseDownOffsetX1;
    div1.style.left = leftAmount1 + 'px';
}

function divMove2(e) {
    var div2 = document.getElementById('reartext');
    div2.style.position = 'relative';
    let topAmount2 = e.touches[0].clientY - gMouseDownOffsetY2;
    div2.style.top = topAmount2 + 'px';
    let leftAmount2 = e.touches[0].clientX - gMouseDownOffsetX2;
    div2.style.left = leftAmount2 + 'px';
}

function divMove3(e) {
    var div3 = document.getElementById('back-image');
    div3.style.position = 'relative';
    let topAmount3 = e.touches[0].clientY - gMouseDownOffsetY3;
    div3.style.top = topAmount3 + 'px';
    let leftAmount3 = e.touches[0].clientX - gMouseDownOffsetX3;
    div3.style.left = leftAmount3 + 'px';
}
/////////////////////////////////////////////////////////////////////////////////////////

function mmouseDown(e) {
    document.getElementById("fbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;
    console.log(gMouseDownX);

    var div = document.getElementById('file-image');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart = "";
    if (!div.style.left) {
        leftPart += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart = div.style.left;
    let leftPos = leftPart.indexOf("px");
    let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);

    //The following block gets the Y offset (the difference between where it starts and where it was clicked)
    let topPart = "";
    if (!div.style.top)
        topPart += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart = div.style.top;
    let topPos = topPart.indexOf("px");
    let topNumString = topPart.slice(0, topPos); // Get the Y value of the object.
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

    window.addEventListener('mousemove', mdivMove, true);
    window.addEventListener('touchmove', divMove, true);
}

function mmouseDown1(e) {
    document.getElementById("fbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX1 = e.clientX;
    gMouseDownY1 = e.clientY;

    var div1 = document.getElementById('textoutput');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart1 = "";
    if (!div1.style.left) {
        leftPart1 += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart1 = div1.style.left;
    let leftPos1 = leftPart1.indexOf("px");
    let leftNumString1 = leftPart1.slice(0, leftPos1); // Get the X value of the object.
    gMouseDownOffsetX1 = gMouseDownX1 - parseInt(leftNumString1, 10);

    let topPart1 = "";
    if (!div1.style.top)
        topPart1 += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart1 = div1.style.top;
    let topPos1 = topPart1.indexOf("px");
    let topNumString1 = topPart1.slice(0, topPos1); // Get the Y value of the object.
    gMouseDownOffsetY1 = gMouseDownY1 - parseInt(topNumString1, 10);

    window.addEventListener('mousemove', mdivMove1, true);
    window.addEventListener('touchmove', divMove1, true);
}

function mmouseDown2(e) {
    document.getElementById("bbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX2 = e.clientX;
    gMouseDownY2 = e.clientY;

    var div2 = document.getElementById('reartext');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart2 = "";
    if (!div2.style.left) {
        leftPart2 += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart2 = div2.style.left;
    let leftPos2 = leftPart2.indexOf("px");
    let leftNumString2 = leftPart2.slice(0, leftPos2); // Get the X value of the object.
    gMouseDownOffsetX2 = gMouseDownX2 - parseInt(leftNumString2, 10);

    let topPart2 = "";
    if (!div2.style.top)
        topPart2 += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart2 = div2.style.top;
    let topPos2 = topPart2.indexOf("px");
    let topNumString2 = topPart2.slice(0, topPos2); // Get the Y value of the object.
    gMouseDownOffsetY2 = gMouseDownY2 - parseInt(topNumString2, 10);

    window.addEventListener('mousemove', mdivMove2, true);
    window.addEventListener('touchmove', divMove2, true);
}

function mmouseDown3(e) {
    document.getElementById("bbox").style.backgroundImage = "url('../static/mt/box.png')";
    gMouseDownX3 = e.clientX;
    gMouseDownY3 = e.clientY;

    var div3 = document.getElementById('back-image');

    //The following block gets the X offset (the difference between where it starts and where it was clicked)
    // let leftPart = "";
    let leftPart3 = "";
    if (!div3.style.left) {
        leftPart3 += "0px"; //In case this was not defined as 0px explicitly.
    } else
        leftPart3 = div3.style.left;
    let leftPos3 = leftPart3.indexOf("px");
    let leftNumString3 = leftPart3.slice(0, leftPos3); // Get the X value of the object.
    gMouseDownOffsetX3 = gMouseDownX3 - parseInt(leftNumString3, 10);

    let topPart3 = "";
    if (!div3.style.top)
        topPart3 += "0px"; //In case this was not defined as 0px explicitly.
    else
        topPart3 = div3.style.top;
    let topPos3 = topPart3.indexOf("px");
    let topNumString3 = topPart3.slice(0, topPos3); // Get the Y value of the object.
    gMouseDownOffsetY3 = gMouseDownY3 - parseInt(topNumString3, 10);

    window.addEventListener('mousemove', mdivMove3, true);
    window.addEventListener('touchmove', divMove3, true);
}

function mdivMove(e) {
    var div = document.getElementById('file-image');
    div.style.position = 'relative';
    let topAmount = e.clientY - gMouseDownOffsetY;
    div.style.top = topAmount + 'px';
    let leftAmount = e.clientX - gMouseDownOffsetX;
    div.style.left = leftAmount + 'px';
}

function mdivMove1(e) {
    var div1 = document.getElementById('textoutput');
    div1.style.position = 'relative';
    let topAmount1 = e.clientY - gMouseDownOffsetY1;
    div1.style.top = topAmount1 + 'px';
    let leftAmount1 = e.clientX - gMouseDownOffsetX1;
    div1.style.left = leftAmount1 + 'px';
}

function mdivMove2(e) {
    var div2 = document.getElementById('reartext');
    div2.style.position = 'relative';
    let topAmount2 = e.clientY - gMouseDownOffsetY2;
    div2.style.top = topAmount2 + 'px';
    let leftAmount2 = e.clientX - gMouseDownOffsetX2;
    div2.style.left = leftAmount2 + 'px';
}

function mdivMove3(e) {
    var div3 = document.getElementById('back-image');
    div3.style.position = 'relative';
    let topAmount3 = e.clientY - gMouseDownOffsetY3;
    div3.style.top = topAmount3 + 'px';
    let leftAmount3 = e.clientX - gMouseDownOffsetX3;
    div3.style.left = leftAmount3 + 'px';
}
addListeners()


/////////////////// file save part //////////////// there is some download error also which i can fix

function save() {

    var v = document.getElementById("tee");
    console.log(document.getElementsByClassName("watermark"));
    document.getElementsByClassName("watermark")[0].style.backgroundImage = "url('../static/mt/wat.png')";
    v.classList.remove('hide');

    html2canvas(v, {
        useCORS: true
    }).then(canvas => {
        var nc1 = canvas;
        ncw1 = nc1.cloneNode(true);
        const a = document.createElement("a");
        document.body.appendChild(a);
        dis_p1 = nc1.toDataURL('image/png');
        // console.log('dis_p'+dis_p1);
            // localStorage.setItem("front", dis_p);
            // alert("storage success");
            // var item = localStorage.getItem("front");
            // alert(item); 
                                    // dis_p1 = ncw1.toDataURL('image/png');
                                    localStorage.setItem("front", dis_p1);
                                    console.log("front storage success");
                                    // console.log(dis_p1);
                                    // var item = localStorage.getItem("front");
                                    // alert(item); 
        a.href = nc1.toDataURL('image/png');
        a.download = "front.png";
        a.click();
        document.body.removeChild(a);
    })
    var u = document.getElementById("teeb");
    document.getElementsByClassName("watermark")[1].style.backgroundImage = "url('../static/mt/wat.png')";
    u.classList.remove('hide');
    html2canvas(u, {
        useCORS: true
    }).then(canvas => {
        var nc2 = canvas;
        ncw2 = nc2.cloneNode(true);
        u.classList.add('hide');
        const a = document.createElement("a");
        document.body.appendChild(a);
        dis_p2 = nc2.toDataURL('image/png');
        // console.log('dis_p'+dis_p2);                                    
                                    // dis_p2 = ncw2.toDataURL('image/png');
                                    localStorage.setItem("back", dis_p2);
                                    console.log("back storage success");
                                    // console.log(dis_p2);

        a.href = nc2.toDataURL('image/png');
        a.download = "back.png";
        a.click();
        document.body.removeChild(a);
    })
    document.getElementsByClassName("watermark")[0].style.backgroundImage = "";
    document.getElementsByClassName("watermark")[1].style.backgroundImage = "";
    // window.open("h_c.html", "_self");
    // window.location = "{{ url_for('templates', filename='h_c.html') }}"
}

// function save() {
//     var nc2, nc1;
//     html2canvas(document.querySelector("#tee"), {
//         useCORS: true
//     }).then(canvas => {
//         nc1 = canvas;
//     })
//     html2canvas(document.querySelector("#teeb"), {
//         useCORS: true
//     }).then(canvas => {
//         nc2 = canvas;
//     })
//     if (nc1 && nc2) {
//         var image1 = nc1.toDataURL("image/png", 1.0);
//         var image2 = nc2.toDataURL("image/png", 1.0);
//         console.log(image1, image2);
//         const can = document.createElement("canvas");
//         can.height = 860;
//         can.width = 1194;
//         let ctx = canvas.getContext("2d");
//         ctx.drawImage(image1, 0, 0, 972, 860);
//         ctx.drawImage(image2, 972, 0, 972, 860);
//         var image = can.toDataURL("image/png", 1.0)
//             .replace("image/png", "image/octet-stream");
//         download.setAttribute("href", image);
//         console.log('download');
//     }

// }




///////////////////////////////////////////////////
console.log(gr)
$("#raleway-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "acid-label");
    else
        $('#reartext').css("font-family", "acid-label");

});

$("#montserrat-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "antfarm");
    else
        $('#reartext').css("font-family", "antfarm");
});

$("#titillium-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "bad-mofo");
    else
        $('#reartext').css("font-family", "bad-mofo");
});

$("#pacifico-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "black-bruno");
    else
        $('#reartext').css("font-family", "black-bruno");
});

$("#josefin-slab-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "blockletter");
    else
        $('#reartext').css("font-family", "blockletter");
});

$("#orbitron-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "typewriter");
    else
        $('#reartext').css("font-family", "typewriter");
});

$("#comfortaa-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "boblique");
    else
        $('#reartext').css("font-family", "boblique");
});

$("#courgette-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "rock-it");
    else
        $('#reartext').css("font-family", "rock-it");
});

$("#ubuntu-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "gm");
    else
        $('#reartext').css("font-family", "gm");
});

$("#chewy-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "mv");
    else
        $('#reartext').css("font-family", "mv");
});

$("#kaushan-script-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "sw");
    else
        $('#reartext').css("font-family", "sw");
});

$("#lobster-two-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "sam");
    else
        $('#reartext').css("font-family", "sam");
});

$("#capp").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "cap");
    else
        $('#reartext').css("font-family", "cap");
});

$("#satisfy-font").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "du");
    else
        $('#reartext').css("font-family", "du");
});
$("#ff1").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff1");
    else
        $('#reartext').css("font-family", "ff1");
});
$("#ff2").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff2");
    else
        $('#reartext').css("font-family", "ff2");
});
$("#ff3").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff3");
    else
        $('#reartext').css("font-family", "ff3");
});
$("#ff4").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff4");
    else
        $('#reartext').css("font-family", "ff4");
});
$("#ff5").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff5");
    else
        $('#reartext').css("font-family", "ff5");
});
$("#ff6").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff6");
    else
        $('#reartext').css("font-family", "ff6");
});
$("#ff7").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff7");
    else
        $('#reartext').css("font-family", "ff7");
});
$("#ff8").click(function() {
    if (gr == 1)
        $('#textoutput').css("font-family", "ff8");
    else
        $('#reartext').css("font-family", "ff8");
});
$(document).ready(function() {

    var videoObject = $('.modal-content');

    $('.video-trigger').on('click', function() {
        console.log(document.getElementById('tee'))
        itm = document.getElementById('tee');
        var cln = itm.cloneNode(true);
        cln.classList.remove("hide")
        document.getElementById('orderplace').appendChild(cln);
        itm1 = document.getElementById('teeb');
        //itm1.removeClass('hide');
        var cln1 = itm1.cloneNode(true);
        cln1.classList.remove("hide");
        console.log(cln1);
        document.getElementById('rearplace').appendChild(cln1);

        //videoObject.innerHTML = document.getElementById('tee');
        //videoObject.attr('src', $(this).data('video'));
        $('.iframe-pop').addClass('iframe-visible');
    });

    $('.modal-close').on('click', function() {
        document.getElementById('orderplace').innerHTML = '';
        document.getElementById('rearplace').innerHTML = '';
        $('.iframe-pop').removeClass('iframe-visible');
    });

    // $('.iframe-pop').on('click', function() {
    //     document.getElementById('orderplace').innerHTML = '';
    //     document.getElementById('rearplace').innerHTML = '';
    //     $('.iframe-pop').removeClass('iframe-visible');
    // });

});