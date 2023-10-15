// 实行轮播图的切换=====================================

let img = document.querySelector('.img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let lis = document.querySelectorAll('.banner-btn li');


let imgArr = ['1.webp','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];

let count=0;
//定义函数，用来切换图片的路径
function cutImg(){
	img.src = './images/' + imgArr[count];
	for(let i = 0; i<lis.length;i++){
		lis[i].className = '';
	}
	lis[count].className = "active";
	}
//设置定时器。每隔3秒切换图片
let timer = setInterval(function(){
	count++;
	if(count > imgArr.length - 1)
	{
	count = 0;
	}
	cutImg();
	
}, 2000);

//点击下一张
next.onclick = function(){
	count++;
	if(count > imgArr.length - 1)
	{
	count = 0;
	}
	cutImg();
}

//点击上一张
prev.onclick = function(){
	count--;
	if(count<0)
	{
	count = imgArr.length - 1;
	}
	cutImg();
}

//鼠标滑入div，将定时切换图片停止
slide.onmouseover = function(){
	clearInterval(timer);	
}

//鼠标滑出div，定时器跑起来
slide.onmouseout = function(){
	timer = setInterval(function(){
		count++;
		if(count > imgArr.length - 1)
		{
		count = 0;
		}
		cutImg();
	},2000);
}

//给li绑定点击事件

for(let i = 0; i < lis.length;i++){
	lis[i].onclick = () => {
		count = i;
		cutImg();
	}
};

//