function test1() {
    document.getElementById("demo").innerHTML = 8+1
}
var r=document.querySelector(":root")
var hideOrShow=1
const videoPropertyList=["--video1HideOrShow","--video2HideOrShow"]
function showVideo(selectVideoNum){
    var videoIndex=selectVideoNum-1
    console.log(selectVideoNum)
    r.style.setProperty(videoPropertyList[videoIndex],"inline")
    var i=0
    while(i<videoPropertyList.length){
        if (i!=videoIndex) {
            r.style.setProperty(videoPropertyList[i],"none")
        }
        i++
    } 
}