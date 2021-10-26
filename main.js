function setup(){
    video = createCapture(VIDEO);
    video.size();

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video ,modeloaded);
    poseNet.on('pose',gotposes);
}
function modeloaded(){
console.log('poseNet is initialized')
}
function gotposes(results){
if(results.length > 0){
console.log(results);
}
}