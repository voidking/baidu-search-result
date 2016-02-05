window.onload=function(){
	show1();
}

function show1() {
	var pic1 = document.getElementById("pic1");
	var span1 = document.getElementById("span1")
	var hide1 = document.getElementById("c_r_hide1");
	if(hide1.style.display=="none")
	{
		span1.innerHTML = "收起";
		pic1.src = "pic/down4.jpg";
		hide1.style.display = "block";
	}else{
		span1.innerHTML = "展开";
		pic1.src = "pic/down3.jpg";
		hide1.style.display ="none";
	}
	
}