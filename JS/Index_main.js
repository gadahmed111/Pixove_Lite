let the_search_button = document.getElementsByClassName("the_main_a7")[0];
let the_search_screen = document.getElementsByClassName("the_search_page")[0];
let the_back_button = document.getElementsByClassName("btn1")[0];
the_search_button.addEventListener("click", (el) => {
    the_search_screen.style = "display:block; text-align: center; display: flex; flex-direction: column; align-items: center;";
})
the_back_button.addEventListener("click", (el) => {
    the_search_screen.style = "display:none;";
})
// When i click on the logo refresh the Page
let the_logo_button = document.getElementsByClassName("the_logo_img")[0];
the_logo_button.addEventListener("click", (el) => {
    window.location.href = "file:///C:/Users/gad/Desktop/wep/Projects/PIXOVA%20LITE/Index.html";
})
// Service_part
let TheImgPart = document.querySelectorAll(".the_img");
TheImgPart.forEach((ele) => {
    ele.onmouseenter = () => {
        ele.style = "box-shadow: 0px 0px 20px -5px black;"

    }
    ele.onmouseleave = () => {
        ele.style = "box-shadow: 0px 0px 20px -10px black;"
    }
});
TheImgPart.forEach((ele) => {
    ele.onclick = () => {
        // window.location.href = "file:///C:/Users/gad/Desktop/wep/Projects/PIXOVA%20LITE/Index.html";
        window.scrollTo(top)
    }
})
// If you wanna to Customize every link

// TheImgPart[0].onclick = () => {
//     window.location.href = "#";
// }
// TheImgPart[1].onclick = () => {
//     window.location.href = "#";
// }
// TheImgPart[2].onclick = () => {
//     window.location.href = "#";
// }
// TheImgPart[3].onclick = () => {
//     window.location.href = "#";
// }
let text2 = document.getElementsByClassName("theh1")[0];
text2.onclick = () => {
    window.scrollTo(top)
}
// The Num time
let theNum1 = document.getElementsByClassName("theNum2")[0];
let theNum2 = document.getElementsByClassName("theNum1")[0];
let the_LearnMore2 = document.getElementsByClassName("the_LearnMore2")[0];

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1750) {
        let theTime1 = setInterval(() => {
            if (parseInt(theNum1.textContent) < 450) {
                theNum1.textContent = parseInt(theNum1.textContent) + 1;
            } else {
                clearInterval(theTime1)
            }
        }, 25);
        let theTime2 = setInterval(() => {
            if (parseInt(theNum2.textContent) < 860) {
                theNum2.textContent = parseInt(theNum2.textContent) + 1
            } else {
                clearInterval(theTime2)
            }
        }, 25);
    }
})
// Video part
let theVideoBtn = document.getElementsByClassName("the_bkw")[0];
let theVideoPage = document.getElementsByClassName("the_search_page1")[0]
let BackBTN = document.getElementsByClassName("btn2")[0];
let video = document.getElementsByTagName("video")[0];
theVideoBtn.addEventListener("click", () => {
    theVideoPage.style = "display:block;"
    video.play();
})
BackBTN.addEventListener("click", () => {
    theVideoPage.style = "display:none;"
    video.pause();
    // video.currentTime = 0;
})
// Video Leave
// The photos
let thePartOneImgsBK = document.querySelectorAll(".the_main_p8_");
let thePartTwoImgsBK = document.querySelectorAll(".the_main_p8_1");
let thePartOneBTN = document.querySelectorAll(".the_LearnMore2_");
let thePartTwoBTN = document.getElementsByClassName("the_main_p8_1_THEEDIT")[0];
// The first BK IN
thePartOneImgsBK.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
        ele.style = "animation: BKCin .3s linear;";
    })
})
// The second BK IN
thePartTwoImgsBK.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
        ele.style = "animation: BKCin .3s linear;";
    })
})
// #####################################################
// The first BK out
thePartOneImgsBK.forEach((ele) => {
    ele.addEventListener("mouseleave", () => {
        ele.style = "animation: BKCOut .4s linear;";
    })
})
// The second BK out
thePartTwoImgsBK.forEach((ele) => {
    ele.addEventListener("mouseleave", () => {
        ele.style = "animation: BKCOut .4s linear;";
    })
})
// More Projects
let MoreProject = document.getElementsByClassName("MoreProjects1")[0];
MoreProject.addEventListener("click", () => {
    window.scrollTo(top)
})
// Man Change photo
let ManIMG = document.getElementsByClassName("ManIMG")[0];
let rule = false;
ManIMG.style = "cursor: pointer;    "
ManIMG.addEventListener("click", () => {
    if (rule == false) {
        ManIMG.setAttribute("src", "IMGS/TheManSPy.png")
        console.log(rule)
        rule = true
    } else {
        ManIMG.setAttribute("src", "IMGS/TheMan.webp")
        rule = false;
        console.log(rule)
    }
})
// ManIMG.addEventListener("onclick", () => {
// })
// Top BTN
let TopArrowBtn = document.getElementsByClassName("arrow_up")[0];
let Helper1 = document.getElementsByClassName("Helper1")[0];
window.onscroll = () => {
    if (window.scrollY >= 500) {
        Helper1.style.display = "block"
    } else {
        Helper1.style.display = "none"

    }
}
Helper1.addEventListener("click", () => {
    window.scrollTo(top);
})
// SubmitBTN
let SubmitBTN = document.getElementsByClassName("submitBTNART")[0];
let SubmitP = document.getElementsByClassName("Submit")[0];
console.log(SubmitBTN)
SubmitBTN.addEventListener("click", () => {
    SubmitP.style = "display: block;"
    // console.log("jdosf")
})