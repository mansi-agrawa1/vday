const images = ["1st_no.gif", "2nd_no.gif","3rd_no.gif", "4th_no.gif", "5th_no.gif"];
const noTrans = [0.8, 0.7, 0.5, 0.3, 0];
const yesTrans = [1.5, 2.5, 3.5, 4.5, 6];
const imgelement = document.getElementById("kiss");
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const noSound = new Audio("mixkit-wrong-answer-fail-notification-946.wav");
const yesSound = new Audio("mixkit-happy-bell-alert-601.wav");
let clicks = 0;
const maxClicks = 5;
noButton.addEventListener("click", function() {
    if(clicks< maxClicks){
        noSound.currentTime = 0;
        noSound.play();
        imgelement.src = images[clicks];
        noButton.style.transform = `scale(${noTrans[clicks]})`;
        yesButton.style.transform = `scale(${yesTrans[clicks]})`;
        clicks++;
    }
});
yesButton.addEventListener("click", function() {
    yesSound.play();
    setTimeout(() => {
        window.location.href = "yespage.html";
    }, 1000);
   

});
