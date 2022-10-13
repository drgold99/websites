function test1() {
    document.getElementById("demo").innerHTML = 8+1
}
var r=document.querySelector(":root")
var hideOrShow=1
function showVideo(selectVideoNum){
    console.log(selectVideoNum)
    if (selectVideoNum==1) {
        r.style.setProperty("--selectedVideo","url(https://www.prageru.com/video/were-one-step-closer-to-dictatorship)")
    }
    else if (selectVideoNum==2) {
        r.style.setProperty("--selectedVideo","url(https://www.prageru.com/video/the-constitution-the-limited-powers-of-congress)")
    }
    if (hideOrShow==1) {
        r.style.setProperty("--hideOrShow","inline")
        hideOrShow=0
    }
    else {
        r.style.setProperty("--hideOrShow","none")
        hideOrShow=1
    }
}