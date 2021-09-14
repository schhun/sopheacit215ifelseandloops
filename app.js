let writerEle = document.body.querySelector(".box");
function write() {
    document.querySelector(".box").innerHTML = "I am a dog"

}
document.querySelector("button").addEventListener("click", write)



let list = ["Dog","Fish","Cat","Shark","Cat","Dog"];

for(let i=0; i<list.length; i++) {
    let ele = document.createElement("div");
    ele.innerHTML = list[i];
    writerEle.appendChild(ele);
}


























