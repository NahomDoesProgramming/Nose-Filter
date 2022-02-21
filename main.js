noseX = 0;
noseY = 0;
function preload()
{
    splot = loadImage("https://i.postimg.cc/FKYwq3JW/splot.png");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(splot, noseX, noseY, 30, 30);
}
function takeSnapshot()
{
    save("image.png");
}
function modelLoaded()
{
    console.log("PostNet is initialized.");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("pose x = " + noseX);
        console.log("pose y = " + noseY);
    }
}
