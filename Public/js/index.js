/////search-box/////
let jango = document.getElementById("bibox");
jango.classList.add('search_box1');
document.getElementsByClassName("srch")[0].addEventListener("click", function(){
    jango.classList.remove('search_box1');
    jango.classList.add('search_box');
    document.body.style = 'overflow:hidden';
});
document.getElementsByClassName('nix')[0].addEventListener("click", function(){
    jango.classList.remove('search_box');
    jango.classList.add('search_box1');
    document.body.style = '';
});
///////////input's/////////////
document.getElementById('magazin').style.outline = "none";
document.getElementsByClassName('inpin')[0].style.outline = "none";
/////navbar/////
let point = 0;
document.addEventListener("scroll", function () {
    let num =document.documentElement.scrollTop;
    let sum = document.getElementsByClassName('navbar')[0].offsetHeight;
    if (num > sum) {
        if (point == 0) {
            point++;
            document.getElementsByClassName('navbar')[0].style = "position: fixed; z-index: 2; background-color: black; padding: 0% 10%; top: -85px";
            document.getElementsByClassName('part')[0].style = "margin-top: 85px";
            setTimeout(function(){
                document.getElementsByClassName('navbar')[0].style = "position: fixed; z-index: 2; background-color: white; padding: 0% 10%; top: 0px; transition: 0.9s; box-shadow: 0px 0px 10px 0px #80808036";
                document.getElementsByClassName('Bname')[0].style = "color: black";
                document.getElementsByClassName('srch')[0].style = "color: black";
                document.getElementById('hide-btn').style = "color: black";
                for (i = 0; i <= 4; i++) {
                    document.getElementsByClassName('colorx')[i].style = "color: black";
                    document.getElementsByClassName('list_a')[i].style = "color: black";
                }
            },100);
            point = 1;
        }
    } else {
        if (point == 1) {
            point--;
            document.getElementsByClassName('navbar')[0].style = "";
            document.getElementsByClassName('part')[0].style = "";
            document.getElementsByClassName('Bname')[0].style = "";
            document.getElementsByClassName('srch')[0].style = "";
            document.getElementById('hide-btn').style = "";
            for (j = 0; j <= 4; j++) {
                document.getElementsByClassName('colorx')[j].style = "";
                document.getElementsByClassName('list_a')[j].style = "";
            }
            point = 0;
        }
    }
});
////////hover-teach-box///////
document.getElementsByClassName('teach_detail1')[0].onmouseover = function() {hover()};
document.getElementsByClassName('teach_detail1')[0].onmouseout = function() {onhover()};
document.getElementsByClassName('teach_detail2')[0].onmouseover = function() {hover2()};
document.getElementsByClassName('teach_detail2')[0].onmouseout = function() {onhover2()};
document.getElementsByClassName('teach_detail3')[0].onmouseover = function() {hover3()};
document.getElementsByClassName('teach_detail3')[0].onmouseout = function() {onhover3()};
function hover() {
    document.getElementsByClassName('share_icon2')[0].style = "opacity: 1; top: 0; transition: 0.3s";
    setTimeout(function() {
    document.getElementsByClassName('share_icon3')[0].style = "opacity: 1; top: 0; transition: 0.3s";
    },300);
    setTimeout(function() {
    document.getElementsByClassName('share_icon4')[0].style = "opacity: 1; top: 0; transition: 0.3s";
    },600);
}
function hover2() {
    document.getElementsByClassName('share_icon2')[1].style = "opacity: 1; top: 0; transition: 0.3s";
    setTimeout(function() {
    document.getElementsByClassName('share_icon3')[1].style = "opacity: 1; top: 0; transition: 0.3s";
    },300);
    setTimeout(function() {
    document.getElementsByClassName('share_icon4')[1].style = "opacity: 1; top: 0; transition: 0.3s";
    },600);
}
function hover3() {
    document.getElementsByClassName('share_icon2')[2].style = "opacity: 1; top: 0; transition: 0.3s";
    setTimeout(function() {
    document.getElementsByClassName('share_icon3')[2].style = "opacity: 1; top: 0; transition: 0.3s";
    },300);
    setTimeout(function() {
    document.getElementsByClassName('share_icon4')[2].style = "opacity: 1; top: 0; transition: 0.3s";
    },600);
}
function onhover() {
    document.getElementsByClassName('share_icon2')[0].style = "";
    setTimeout(function() {
        document.getElementsByClassName('share_icon3')[0].style = "";
    },300);
    setTimeout(function() {
        document.getElementsByClassName('share_icon4')[0].style = "";
    },600);
}
function onhover2() {
    document.getElementsByClassName('share_icon2')[1].style = "";
    setTimeout(function() {
        document.getElementsByClassName('share_icon3')[1].style = "";
    },300);
    setTimeout(function() {
        document.getElementsByClassName('share_icon4')[1].style = "";
    },600);
}
function onhover3() {
    document.getElementsByClassName('share_icon2')[2].style = "";
    setTimeout(function() {
        document.getElementsByClassName('share_icon3')[2].style = "";
    },300);
    setTimeout(function() {
        document.getElementsByClassName('share_icon4')[2].style = "";
    },600);
}
///////slider-&-interval///////
let rail = document.getElementsByClassName('slide_rail');
let winer = document.getElementsByClassName('open_slide1')[0];
let winx = winer.offsetWidth + 32;
let coco = 1;
let khodetBoro;
rail[0].style.left = - winx + "px";
halKon();
document.getElementsByClassName('right')[0].addEventListener("click", function() {
    coco++;
    rail[0].style.left = - winx * coco + 'px';
    rail[0].style.transition = 1000 + 'ms';
    if (coco == 5) {
        setTimeout(function() {
            rail[0].style.left = - winx + 'px';
            rail[0].style.transition = '';
            coco = 1;
        }, 900);
    } else {
        clearInterval(khodetBoro);
        setTimeout(function() {
            halKon();
        }, 2000);
    }
});
document.getElementsByClassName('left')[0].addEventListener("click", function() {
    coco--;
    rail[0].style.left = - winx * coco + 'px';
    rail[0].style.transition = 1000 + 'ms';
    if (coco == 0) {
        setTimeout(function() {
            rail[0].style.left = ( - winx * 4) + 'px';
            rail[0].style.transition = '';
            coco = 4;
        }, 900);
    } else {
        clearInterval(khodetBoro);
        setTimeout(function() {
            halKon();
        }, 2000);
    }
});
function halKon() {
    khodetBoro = setInterval(function () {
        coco++;
        rail[0].style.left = - winx * coco + 'px';
        rail[0].style.transition = 1000 + 'ms';
        if (coco == 5) {
            setTimeout(function() {
                rail[0].style.left = - winx + 'px';
                rail[0].style.transition = '';
                coco = 1;
            }, 900);
        }
    }, 3000);
}
/////////draggable-slider/////////
let drog = document.getElementsByClassName('slide_window')[0];
let press = false;
let courseX;
drog.addEventListener('mousedown', function(e) {
    press = true;
    /////--------detected direction move//////
    courseX = e.offsetX - (drog.offsetLeft + (-710));
});
drog.addEventListener('mousemove', function(event) {
    if (press == true) {
        /////--------detected direction move//////
        let DS = document.getElementsByClassName('slide_rail')[0];
        DS.style.left = `${event.offsetX - courseX}px`;
        DS.style.transition = 1000 + 'ms';
    }
});
drog.addEventListener('mouseup', function() {
    press = false;
});
//////////price-button-click///////////
let moveCount = 1;
let update = document.getElementsByClassName('chose_dad')[0];
let moveUp = document.getElementsByClassName('chose_son')[0];
moveUp.classList.add('move_son1');
update.addEventListener('click' , function() {
    moveCount++;
    if (moveCount % 2 == 0) {
        moveUp.classList.remove('move_son1');
        moveUp.classList.add('move_son2');
    } else {
        moveUp.classList.remove('move_son2');
        moveUp.classList.add('move_son1');
    }
    for (t = 0; t <= 2; t++) {
        let newPrice1 = document.getElementsByClassName('teter')[t];
        let newPrice2 = document.getElementsByClassName('teter_new')[t];
        newPrice1.style = "display: block";
        newPrice2.style = "display: none";
        if (moveCount % 2 == 0) {
            newPrice1.style = "display: none";
            newPrice2.style = "display: block";   
        } else {
            newPrice1.style = "display: block";
            newPrice2.style = "display: none";
        }
    }
});
/////////////progress-box//////////////
let pathLine = document.getElementsByClassName('array_move');
for (p = 0; p <= pathLine.length; p++) {
    let pathX;
    let pathPercent1;
    let pathPercent2;
    if (p == 0) {
        pathX = pathLine[p].getTotalLength();
        pathLine[p].style.strokeDasharray = pathX;
        pathPercent1 = (pathX * 100) / 200;
        pathPercent2 = (pathPercent1 * 75) / 200;
        pathLine[p].style.strokeDashoffset = - pathPercent2;
    }
    if (p == 1) {
        pathX = pathLine[p].getTotalLength();
        pathLine[p].style.strokeDasharray = pathX;
        pathPercent1 = (pathX * 100) / 200;
        pathPercent2 = (pathPercent1 * 110) / 200;
        pathLine[p].style.strokeDashoffset = - pathPercent2;
    }
    if (p == 2) {
        pathX = pathLine[p].getTotalLength();
        pathLine[p].style.strokeDasharray = pathX;
        pathPercent1 = (pathX * 100) / 200;
        pathPercent2 = (pathPercent1 * 45) / 200;
        pathLine[p].style.strokeDashoffset = - pathPercent2;
    }
    if (p == 3) {
        pathX = pathLine[p].getTotalLength();
        pathLine[p].style.strokeDasharray = pathX;
        pathPercent1 = (pathX * 100) / 200;
        pathPercent2 = (pathPercent1 * 140) / 200;
        pathLine[p].style.strokeDashoffset = - pathPercent2;
    }
}
////////////scroll-button//////////////
const swg = document.getElementById('tada');
const lens = swg.getTotalLength();
swg.style.strokeDasharray = lens;
swg.style.strokeDashoffset = lens;
window.addEventListener('scroll' , function () {
    const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const draw = lens * scrollpercent;
    swg.style.strokeDashoffset = lens - draw;
});
///////////click-scroll-button///////////
window.addEventListener('scroll' , function () {
    let scroll = this.scrollY;
    let up = document.getElementsByClassName('scroly');
    if (scroll > 10) {
        up[0].style = "visibility : visible; bottom : 30px";
        up[0].addEventListener('click' , function () {
            window.scrollTo({top : 0 , behavior: 'smooth'});
            up[0].style = "";
        });
    } else {
        up[0].style = "";
    }
});
//////////mousemove-for-animation/////////
document.body.addEventListener('mousemove' , function (e) {
    let setX = e.pageX;
    let setY = e.pageY;
    let moveX = (setX * 100) / 200;
    let moveY = (setY * 100) / 200;
    let motionX = (moveX * 10) / 200;
    let motionY = (moveY * 10) / 200;
    let lastposition;
    lastposition += setX;
    let animation1 = document.getElementsByClassName('handland_animate')[0];
    let animation2 = document.getElementsByClassName('qadimi')[0];
    let animation3 = document.getElementsByClassName('circle_animate_move')[0];
    let animation4 = document.getElementsByClassName('dotted_animate_move')[0];
    let animation5 = document.getElementsByClassName('anim_cirk')[0];
    let animation6 = document.getElementsByClassName('anim_ugly')[0];
    let animation7 = document.getElementsByClassName('benefit_pink_animate_move')[0];
    let animation8 = document.getElementsByClassName('benefit_dotted_animate_move')[0];
    let animation9 = document.getElementsByClassName('harda')[0];
    let animation10 = document.getElementsByClassName('hardb')[0];
    let animation11 = document.getElementsByClassName('hardc')[0];
    let animation12 = document.getElementsByClassName('skill1')[0];
    let animation13 = document.getElementsByClassName('skill2')[0];
    let animation14 = document.getElementsByClassName('skill3')[0];
    let animation15 = document.getElementsByClassName('skill4')[0];
    if (lastposition > setX) {
        animation1.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation2.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation3.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation4.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation5.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation6.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation7.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation8.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation9.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation10.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation11.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation12.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation13.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation14.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation15.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
    } else {
        animation1.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation2.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation3.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation4.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation5.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation6.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation7.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation8.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation9.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation10.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation11.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation12.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation13.style.transform = `translate(${-motionX}px , ${-motionY}px)`;
        animation14.style.transform = `translate(${motionX}px , ${motionY}px)`;
        animation15.style.transform = `translate(${motionX}px , ${motionY}px)`;
    }
    let delet1 = document.getElementsByClassName('skill_dotted_animate')[0];
    delet1.style.top = 200 + 'px';
    let delet2 = document.getElementsByClassName('skill_circle_animate')[0];
    delet2.style.top = -200 + 'px';
    delet2.style.right = -30 + 'px';
    let delet3 = document.getElementsByClassName('skill_mini_dotted_animate')[0];
    delet3.style.bottom = -180 + 'px';
    delet3.style.left = 140 + 'px';
    let delet4 = document.getElementsByClassName('skill_liner_animate')[0];
    delet4.style.bottom = 320 + 'px';
    delet4.style.left = 170 + 'px';
    let delet5 = document.getElementsByClassName('hard_animate_dotted2')[0];
    delet5.style.top = 500 + 'px';
    delet5.style.left = 140 + 'px';
    let delet6 = document.getElementsByClassName('hard_animate_dotted1')[0];
    delet6.style.right = -100 + 'px';
    delet6.style.top = 435 + 'px';
    let delet7 = document.getElementsByClassName('hard_animate')[0];
    delet7.style.top = 210 + 'px';
    delet7.style.left = 0 + 'px';
});
///////////////delay-on-start-&-scroll////////////////
window.addEventListener('load' , function (event) {
    this.setTimeout(function () {
        document.getElementsByClassName('bold_text')[0].style = "opacity: 1; transform: translateY(0%)";
        setTimeout(function () {
            document.getElementsByClassName('FP')[0].style = "opacity: 1; transform: translateY(0%)";
            setTimeout(function () {
                document.getElementsByClassName('btn2')[0].style = "opacity: 1; transform: translateY(0%)";
            } , 100);
        } , 100);
    } , 200);
    this.setTimeout(function () {
        document.getElementsByClassName('jessika')[0].style = "opacity: 1; transform: translateX(-9%)";
    } , 1000);
    this.setTimeout(function () {
        document.getElementsByClassName('space_animate')[0].style = "opacity: 1";
        document.getElementsByClassName('handland_animate')[0].style = "opacity: 1";
        document.getElementsByClassName('icon1')[0].style = "opacity: 1";
        document.getElementsByClassName('circle_animate')[0].style = "opacity: 1";
        document.getElementsByClassName('dotted_animate')[0].style = "opacity: 1";
        document.getElementsByClassName('secondPart_beef')[0].style = "opacity: 1";
    } , 1400);
});
window.addEventListener('scroll' , function (e) {
    let sky = document.documentElement.scrollTop;
    let delay1 = document.getElementsByClassName('health-box')[0];
    let delay1X = delay1.offsetTop - 550;
    if (delay1X < sky) {
        delay1.style = "opacity: 1; transform: translateY(0%)";
    }
    let delay2 = document.getElementsByClassName('health_img')[0].offsetTop - 550;
    if (delay2 < sky) {
        document.getElementsByClassName('service_box1')[0].style = "opacity: 1; transform: translateY(0%)";
        setTimeout(function () {
            document.getElementsByClassName('service_box2')[0].style = "opacity: 1; transform: translateY(0%)";
            setTimeout(function () {
                document.getElementsByClassName('service_box3')[0].style = "opacity: 1; transform: translateY(0%)";
                setTimeout(function () {
                    document.getElementsByClassName('service_box4')[0].style = "opacity: 1; transform: translateY(0%)";
                } , 100);
            } , 100);
        } , 100);
    }
    let delay3 = document.getElementsByClassName('about_box')[0].offsetTop - 550;
    if (delay3 < sky) {
        document.getElementsByClassName('woman')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('zeshte')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('haha')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('dele_koochooloo')[0].style = "opacity: 1; transform: translateY(0%)";
        setTimeout(function () {
            document.getElementsByClassName('paragera')[0].style = "opacity: 1; transform: translateY(0%)";
            setTimeout(function () {
                document.getElementsByClassName('multi_item')[0].style = "opacity: 1; transform: translateY(0%)";
                setTimeout(function () {
                    document.getElementsByClassName('chikar_kardi')[0].style = "opacity: 1; transform: translateY(0%)";
                } , 100);
            } , 100);
        } , 100);
        setTimeout(function () {
            document.getElementsByClassName('anim_cirk')[0].style = "opacity: 1";
            document.getElementsByClassName('anim_ugly')[0].style = "opacity: 1";
            document.getElementsByClassName('iconx')[0].style = "opacity: 1";
        } , 400);
    }
    let delay4 = document.getElementsByClassName('course_box')[0].offsetTop - 550;
    if (delay4 < sky) {
        document.getElementsByClassName('course_name')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('classic')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('zang_nazan')[0].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay5 = document.getElementsByClassName('pick_list')[0].offsetTop - 550;
    if (delay5 < sky) {
        document.getElementsByClassName('single_pick')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('single_pick')[1].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('single_pick')[2].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay5X = delay5 + 500;
    if (delay5X < sky) {
        document.getElementsByClassName('single_pick')[3].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('single_pick')[4].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('single_pick')[5].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay6 = document.getElementsByClassName('benefit_box')[0].offsetTop - 550;
    if (delay6 < sky) {
        document.getElementsByClassName('fit')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('fit1')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('eybaba')[0].style = "opacity: 1; transform: translateY(0%)";
        setTimeout(function () {
            document.getElementsByClassName('fit2')[0].style = "opacity: 1; transform: translateY(0%)";
            setTimeout(function () {
                document.getElementsByClassName('ben_bar')[0].style = "opacity: 1; transform: translateY(0%)";
                setTimeout(function () {
                    document.getElementsByClassName('ben_click')[0].style = "opacity: 1; transform: translateY(0%)";
                } , 100);
            } , 100);
        } , 100);
        setTimeout(function () {
            document.getElementsByClassName('benefit_white_circle_animate')[0].style = "opacity: 1";
            document.getElementsByClassName('benefit_pink_animate')[0].style = "opacity: 1";
            document.getElementsByClassName('benefit_dotted_animate')[0].style = "opacity: 1";
        } , 400);
    }
    let delay7 = document.getElementsByClassName('instro_box')[0].offsetTop - 550;
    if (delay7 < sky) {
        document.getElementsByClassName('ins_name')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('insas')[0].style = "opacity: 1; transform: translateY(0%)";
        document.getElementsByClassName('ins_brush')[0].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay8 = document.getElementsByClassName('teach_box')[0].offsetTop - 550;
    if (delay8 < sky) {
        document.getElementsByClassName('teach_box')[0].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay9 = document.getElementsByClassName('hard_box')[0].offsetTop - 550;
    if (delay9 < sky) {
        document.getElementsByClassName('side')[0].style = "opacity: 1; transform: translateX(0%)";
        document.getElementsByClassName('slide_window')[0].style = "opacity: 1; transform: translateY(0%)";
        setTimeout(function () {
            document.getElementsByClassName('hard_animate_dotted1')[0].style = "opacity: 1";
            document.getElementsByClassName('hard_animate_dotted2')[0].style = "opacity: 1";
            document.getElementsByClassName('hard_animate')[0].style = "opacity: 1";
            document.getElementsByClassName('hard_border_animate')[0].style = "opacity: 1";
        } , 500);
    }
    let delay10 = document.getElementsByClassName('plan_box')[0].offsetTop - 550;
    if (delay10 < sky) {
        document.getElementsByClassName('head_plan')[0].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay11 = document.getElementsByClassName('plan_box')[0].offsetTop - 750;
    if (delay11 < sky) {
        document.getElementsByClassName('change_plan')[0].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay12 = document.getElementsByClassName('show_plan')[0].offsetTop - 550;
    if (delay12 < sky) {
        document.getElementsByClassName('show_plan')[0].style = "opacity: 1; transform: translateY(0%)";
    }
    let delay13 = document.getElementsByClassName('skill_box')[0].offsetTop - 550;
    if (delay13 < sky) {
        document.getElementsByClassName('inside_skill')[0].style = "opacity: 1; transform: translateY(0%)";
        setTimeout(function () {
            document.getElementsByClassName('skill_dotted_animate')[0].style = "opacity: 1";
            document.getElementsByClassName('skill_mini_dotted_animate')[0].style = "opacity: 1";
            document.getElementsByClassName('skill_circle_animate')[0].style = "opacity: 1";
            document.getElementsByClassName('skill_liner_animate')[0].style = "opacity: 1";
        } , 500);
    }
});