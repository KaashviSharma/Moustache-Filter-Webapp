x = 0;
y = 0;

function preload()
{
   moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
   canvas = createCanvas(300,300);
   canvas.position(650,300);
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
   console.log("poseNet is initialized");
}

function gotPoses(results)
{
   if(results.length > 0)
   {
      console.log(results);
      x = results[0].pose.nose.x-30;
      y  = results[0].pose.nose.y+10;
      console.log("nose x ="+results[0].pose.nose.x);
      console.log("nose y ="+results[0].pose.nose.y);

   }
}

function draw()
{
   image(video,0,0,300,300);
   image(moustache,x,y,60,30);
}

function take_snapshot()
{
   save("myfilterimage.png"); 
}