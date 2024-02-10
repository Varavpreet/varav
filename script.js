const imageslider = [
    "img1.avif",
    "img2.avif",
    "img3.avif"    
];

let imgslider = document.getElementById("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let currentPic = 0;

function showimage(i) 
{
    if (i < 0) 
    {
        currentPic = imageslider.length - 1;//to jump the 1st image to last one
    } 
    else if (i >= imageslider.length) 
    {
        currentPic = 0;
    }
    imgslider.src = imageslider[currentPic];//to jump the 1st image to last one
}

prev.addEventListener("click", () =>
{
    currentPic--;//working of previous button
    showimage(currentPic);
});

next.addEventListener("click", () => 
{
    currentPic++;//working of next button
    showimage(currentPic);
});

showimage(currentPic);