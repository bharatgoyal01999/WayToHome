var objImage= null;
var objmage=null;
var mat=[];
var soln=[];
var dt={};
var dl={};
var solm=[];
var minpath=0;
var count=0;

			function init(){
				var board=document.getElementById("board");
				objImage=document.getElementById("image1");
				objImage.style.position='relative';
				objImage.style.left='2px';
				objImage.style.top='8px';
				board.style.left='0px';
				board.style.top='0px';
				for (var i=0;i<9;i++){
				  mat[i]=["x","x","x","x","x","x","x","x","x"];
				}
				mat[0][0]="s";
				mat[8][8]="h"
				var c=0;
				while (1){
				if (c==90)
				break
				else{

				var i=randomNumber(0,8)
				var j=randomNumber(0,8)
				if (mat[i][j]=='x')
				mat[i][j]="*";
				c++;}}
				getpath(mat);
				for(var i=0;i<9;i++){
				for (var j=0;j<9;j++){
				var t="t"+i+j;
			  var st=	document.getElementById(t);
				if (mat[i][j]=="x")
				{st.innerHTML=mat[i][j];
				st.style.color="red";}
				else{
					st.innerHTML=mat[i][j];
					st.style.color="blue";
				}

				}}
				for (var i=0;i<9;i++){
				  for (var j=0;j<9;j++){
				    s='t'+String(i)+String(j)
				    dl[[document.getElementById(s).offsetLeft,document.getElementById(s).offsetTop]]=s;


				  }}for(k in dl){
						console.log(k,dl[k])
					}
				}
			function getmykey(e){
				count++;
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: //left arrow key
						moveLeft();
						break;
					case 38: //Up arrow key
						moveUp();
						break;
					case 39: //right arrow key
						moveRight();
						break;
					case 40: //down arrow key
						moveDown();
						break;
				}
			}

			function check(e) {
				var k=e.which||k.keyCode;
				if (k<=40 && k>=37){
					check_pos();
				}

			}
	var g=0;

			function check_pos(){


				var top=objImage.offsetTop+6-2;
				var left=objImage.offsetLeft+12-2;
				// var start=document.getElementById(dt[top]);
				// var starl=document.getElementById(dt[down]);
				// console.log(dl[[left,top]])
				var star=document.getElementById("t00")
				star.style.opacity="0";
				var star=document.getElementById(dl[[left,top]]);
				console.log(objImage.offsetTop,objImage.offsetLeft)
				if(objImage.offsetTop==336 && objImage.offsetLeft==250){
					alert("You Win");
					location.reload();
				}
				if (star.textContent=='x')
				{

				alert("hi there you can't go to x");



				game_over();	}
				else {
					star.style.opacity="0";
					if(count>minpath){
						alert("Your tummy got full");
						game_over();
					}}

			}

			function game_over(){
				alert("Game over");
				alert("Starting new game");
				location.reload();
			}

			function moveLeft(){
				var pos=parseInt(objImage.style.left)-30+'px';
				if (pos>"-50px")
				{objImage.style.transform='scalex(-1)';
				objImage.style.left=pos;}
					// console.log(objImage.offsetLeft)

			}
			function moveUp(){
				var pos=parseInt(objImage.style.top)-40+'px';
				if (pos>"-50px")
				{objImage.style.transform='rotate(270deg)';
				objImage.style.top=pos;}
					// console.log(objImage.offsetTop)
			}
			function moveRight(){
				objImage.style.transform='rotate(0deg)'
				objImage.style.left=parseInt(objImage.style.left)+30+'px';
				// console.log(objImage.offsetLeft)
			}

			function moveDown(){
				objImage.style.transform='rotate(90deg)'
				objImage.style.top=parseInt(objImage.style.top)+40 +'px';
					// console.log(objImage.offsetTop)

			}
			function randomNumber(min, max) {
			  min = Math.ceil(min);
			  max = Math.floor(max);
			  return Math.floor(Math.random() * (max - min + 1)) + min;
			}


function count_ones(soln){
	var c=0;
for (var i=0;i<9;i++){
	for(var j=0;j<9;j++)
	if (soln[i][j]==1)
	c++;
}
solm.push(c);

}

function getpath_helper(soln,x,y,n,mat){

	if ( (x===n-1) && (y===n-1)){
		soln[x][y]=1;
		count_ones(soln)

		return;
	}
if (x<0 || y<0 || x>=n || y>=n || mat[x][y]=="x" || soln[x][y]==1 )
return;
soln[x][y]=1
getpath_helper(soln,x+1,y,n,mat);
getpath_helper(soln,x,y+1,n,mat);
getpath_helper(soln,x-1,y,n,mat);
getpath_helper(soln,x,y-1,n,mat);
soln[x][y]=0;
return;

}


function getpath(mat){
var min=82;
	for(var i=0;i<9;i++){
		soln[i]=[0,0,0,0,0,0,0,0,0];
		}
	getpath_helper(soln,0,0,9,mat)

	for (var i=0;i<solm.length-1;i++){
		if (solm[i]<min){
			min=solm[i];
		}
		console.log(solm[i])
	}
if (min>=82){
	location.reload();
}
var r=randomNumber(2,7);
minpath=min+r;
console.log(min);
document.getElementById("min").innerHTML="Max Star: "+minpath;

}

window.onload=init;
