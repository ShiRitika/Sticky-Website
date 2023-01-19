// function to include html popup code
function includePopupHTML() {

    let html = '<div id="popup"><span id="close" onclick="closePopUp()"><img id="not-pop" src="https://cdn.pixabay.com/photo/2012/04/13/00/22/red-31226__340.png" alt=""/></span> <img id="prev-arrow" src="https://cdn.pixabay.com/photo/2014/04/02/10/55/arrow-304924__340.png" alt=""/> <img id="next-arrow" src="https://cdn.pixabay.com/photo/2012/04/12/19/38/arrow-30330__340.png" alt=""/> <img id="mainPopImage" src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg" alt=""/></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
};
let img;
let current;
function imagePopupInit(target) {
    // select all image with class target
    img = document.getElementsByClassName(target);
    
    // add event listner on all selected image
    for(let i = 0 ; i < img.length ; i++) {
        img[i].addEventListener("click",function() {
            document.getElementById("mainPopImage").src = this.src;           
             document.getElementById("popup").style.display = 'block';
             checkArrow();
        })
    }
    includePopupHTML();

    //next button
    document.getElementById("next-arrow").addEventListener('click', function(){
        nextImage();
    });
    //privious button
    document.getElementById("prev-arrow").addEventListener('click', function(){
        priviousImage();
    });
};

// close button
function closePopUp() {
    document.getElementById("mainPopImage").src = "";
    document.getElementById("popup").style.display = 'none';
};

function getCurrentImage() {
    for(let i = 0 ; i < img.length ; i++) {
        if(img[i].src == document.getElementById("mainPopImage").src) {
            current = i;
        }
    }
};

// next image
function nextImage() {
    getCurrentImage();
    current = current + 1; 
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow()

};
// privious image
function priviousImage() {
    getCurrentImage();
    current--; 
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow()
};

// disable arrow when last and first img is there
function checkArrow() {
    getCurrentImage(); //need to know about current img
    if(current == "0") {
        document.getElementById('prev-arrow').style.display = "none";
        document.getElementById('next-arrow').style.display = "block";
    } else if(current == img.length - 1) {
        document.getElementById('next-arrow').style.display = "none";
        document.getElementById('prev-arrow').style.display = "block";
    } else {
        document.getElementById('prev-arrow').style.display = "block";
        document.getElementById('next-arrow').style.display = "block";
    }
};