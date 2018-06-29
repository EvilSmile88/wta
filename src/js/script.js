
window.onload = function () {
    // scrollTo(0,10000)
    //--------Скроллинг Begin
    var sectionArray = document.getElementsByClassName("section"),
        navArray = document.getElementsByClassName("nav__element"),
        navListArray = document.getElementsByClassName("nav_list__element--active")
        offsets = [],
        middle_offsets=[];

    for (var i =0; i<sectionArray.length; i++) {
        offsets.push(sectionArray[i].offsetTop)
        middle_offsets.push(sectionArray[i].offsetTop-window.innerHeight*0.5)
    }

    for(var i=0;i<navArray.length;i++){ //скроллинг из точечного меню
        navArray[i].addEventListener( "click" , function(event){
            scrollTo(offsets[event.currentTarget.getAttribute("data-index")], 5)
        }, false);
    }

    for(var i=0;i<navListArray.length;i++){ // скроллинг из хэтера
        navListArray[i].addEventListener( "click" , function(event){
            scrollTo(offsets[event.currentTarget.getAttribute("data-index")],5)
        }, false);
    }
    document.querySelector('.to_top').onclick = function () {
        scrollTo(0,5)
    }
    window.onscroll = function () { // показывать текущее положение при скролинге
        var winScrollTop =  document.body.scrollTop || window.pageYOffset;
        if (winScrollTop > window.innerHeight*0.5) {
            document.querySelector('.to_top').style.display = "flex";
        }
        else document.querySelector('.to_top').style.display = "none";
        for (var i=0; i<middle_offsets.length; i++) {
            if (winScrollTop>=middle_offsets[i]) {
                document.querySelector('.nav__element--active').classList.remove('nav__element--active')
                navArray[i].classList.add('nav__element--active');
            }
        }
    }

    document.body.addEventListener('keyup', function (event) { // скрол при нажатиии стрелок
        var curentIndex = parseInt(document.querySelector('.nav__element--active').getAttribute('data-index'));
        if (event.keyCode == 40) {
           var nextIndex = curentIndex+1;
            scrollTo(offsets[nextIndex],5)
        }
        else if (event.keyCode == 38) {
            var prevIndex = curentIndex-1;
            scrollTo(offsets[prevIndex],5)
        }
    },false)

    document.body.onkeydown = function (event) {
        event.preventDefault()
    }
    // console.log(offsets)
    // console.log(middle_offsets)

    function scrollTo(index, speed) { // планый скролинг до нужного места
        var offset = document.body.scrollTop || window.pageYOffset;
        if (index>offset) {
            var hand = setInterval(function () {
                if (offset > index) {
                    clearInterval(hand)
                }
                else {
                    window.scrollBy(0, speed);
                    offset += speed
                }
            }, 1)
        }
        else if (index<offset){
            var hand = setInterval(function () {
                if (offset < index) {
                    clearInterval(hand)}
                else {
                    window.scrollBy(0, -speed);
                    offset -= speed
                }
            }, 1)
        }
    }

    //-------- Скроллинг end

    //----------Анимация begin

    var iconsArray = document.getElementsByClassName("notebook_content__icon");
    setTimeout( iconActive,1000)

    function iconActive() {
        var index = 0;
        iconsArray[index].classList.add('notebook_content__icon--active');
        index++;
        setInterval(function () {
            document.querySelector('.notebook_content__icon--active').classList.remove('notebook_content__icon--active')
            iconsArray[index].classList.add('notebook_content__icon--active');
            if (index==iconsArray.length-1) index=0;
            else ++index;
        },5000)
    }


    function moveListItems(item, delay) { // Анимация движения навыков
        var array = document.getElementsByClassName(item);
        for (var i=0; i<array.length; i++) {
             setTimeout( (function (index) {
                return function () {
                    array[index].classList.add('slide_content__skils--active');
                }
            })(i), delay)
            delay += 200;
        }
    }

    //-------- Анимация end

    //----------Drop down begin

    var aboutListArray = document.getElementsByClassName("about__item"),
     slideHeaders = document.getElementsByClassName("slide_header"),
     slideContents = document.getElementsByClassName("slide_content"),
        pluses = document.getElementsByClassName("plus");

    for(var i=0;i<slideHeaders.length;i++){ //
        var oldHeight = parseInt(slideHeaders[i].clientHeight);
        aboutListArray[i].style.height = oldHeight +'px';
        slideHeaders[i].addEventListener( "click" , (function(index){
            return function (event) {
                var that = event.currentTarget;
                var newHeight = parseInt(slideContents[index].clientHeight);
                // that._bootstrap-custom.scss.height = height + 50 + "px";
                if (!that.classList.contains("about__item--active")) {
                    that.classList.add("about__item--active");
                    pluses[index].classList.toggle("plus--active")
                    aboutListArray[index].style.height = oldHeight + newHeight + "px";
                }
                else {
                    that.classList.remove("about__item--active");
                    pluses[index].classList.toggle("plus--active")
                    aboutListArray[index].style.height = oldHeight + "px";
                }
                // if (index==1) moveListItems("slide_content__skils", 100) //// Начать анимация движения навыков
            }

        })(i), false);
    }

    window.onresize = function () {
        sectionArray = document.getElementsByClassName("section"),
            navArray = document.getElementsByClassName("nav__element"),
            navListArray = document.getElementsByClassName("nav_list__element--active")
             offsets = [],
            middle_offsets=[];
        for (var i =0; i<sectionArray.length; i++) {
            offsets.push(sectionArray[i].offsetTop)
            middle_offsets.push(sectionArray[i].offsetTop-window.innerHeight*0.5)
        }
        for(var i=0;i<aboutListArray.length;i++){
            var that = aboutListArray[i];
            if (that.classList.contains("about__item--active")) {
                var oldHeight = parseInt(slideHeaders[i].clientHeight);
                var newHeight = parseInt(slideContents[i].clientHeight);
                that.style.height = oldHeight + newHeight + "px";
            }
        }
    }
    //----------Drop down end
}
// var image = new Image();
// image.onload = function () {
//     document.querySelector(".loading")._bootstrap-custom.scss.display = "none"
// }
// image.src = "pic/noutebook5.png"
