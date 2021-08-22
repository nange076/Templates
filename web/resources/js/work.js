var a;
var b;
var c;
var d;
function onfocus1(e){
	a=e.style;
	e.style.borderColor="#6b9ae6";
	e.style.color="black";
	document.getElementById("address2").style.display="none";
	document.getElementById("address1").style.display="block";
	document.getElementById("address4").style.display="none";
}
function onblur1(e){
	document.getElementById("address1").style.display="none";
	var t=e.value;
	var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	if(!reg.test(t)&&t.length>0){
		e.style.color="#ff0000";
		e.style.borderColor="#ff0000";
		document.getElementById("address2").style.display="block";
		
	}else if(reg.test(t)){
		document.getElementById("address3").style.display="block";
	}else{
		e.style=a;
	}
}

function onfocus2(e){
	b=e.style;
	e.style.borderColor="#6b9ae6";
	e.style.color="black";
	document.getElementById("address3").style.display="none";
	document.getElementById("password2").style.display="none";
	document.getElementById("password1").style.display="block";
	document.getElementById("password3").style.display="none";
}
function onblur2(e){
	document.getElementById("password1").style.display="none";
	var t=e.value;
	if((t.length<6||t.length>16)&&t.length!=0){
		e.style.color="#ff0000";
		e.style.borderColor="#ff0000";
		document.getElementById("password2").style.display="block";
	}else{
		e.style=b;
	}
}
function onfocus3(e){
	c=e.style;
	e.style.borderColor="#6b9ae6";
	e.style.color="black";
	document.getElementById("address3").style.display="none";
	document.getElementById("tel2").style.display="none";
	document.getElementById("tel1").style.display="block";
	document.getElementById("tel3").style.display="none";
}
function onblur3(e){
	document.getElementById("tel1").style.display="none"
	var t=e.value;
	if(!(/^1[3456789]\d{9}$/.test(t))&&t.length!=0){
		e.style.color="#ff0000";
		e.style.borderColor="#ff0000";
		document.getElementById("tel2").style.display="block";
	}else{
		e.style=c;
	}
	
}

function mymousein(e){
	d=e.style;
	e.style.backgroundColor="#59c0ff";
}

function mymouseout(e){
	e.style=d;
}

function myclick(){
	var x=document.getElementById("address").value;
	var y=document.getElementById("password").value;
	var z=document.getElementById("telphone").value;
	if(x.length==0){
		document.getElementById("address4").style.display="block";
	}
	if(y.length==0){
		document.getElementById("password3").style.display="block";
	}
	if(z.length==0){
		document.getElementById("tel3").style.display="block";
	}
	
}
	
