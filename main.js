leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload()
{

}

function draw()
{
    background('#F7DC6F');
    text('BEST TEACHER!', 20, 20,  difference);
    textSize(difference);
    fill('#8E44AD');
    document.getElementById("square_sides").innerHTML = "Size of the font will be = " + difference + "px";
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 400,);
    video.position(50, 150);
    canvas = createCanvas(500, 400);
    canvas.position(640, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);  
        
        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}