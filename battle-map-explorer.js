/*
battle-map-explorer version 1.0

This code is released into the public domain - attribution is appreciated but not required.
Made by Byron Knoll.

https://github.com/byronknoll/battle-map-explorer
*/

window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(q,g){window.setTimeout(q,1E3/60)}}();function BattleMapExplorer(){}
BattleMapExplorer.run=function(q,g,H,C){function I(a){return 87==a||38==a||104==a?!0:!1}function J(a){return 65==a||37==a||100==a?!0:!1}function K(a){return 68==a||39==a||102==a?!0:!1}function L(a){return 83==a||40==a||98==a?!0:!1}function x(a,b){for(var c=0;c<segments.length-D;++c)if(VisibilityPolygon.doLineSegmentsIntersect(l,m,a,b,segments[c][0][0],segments[c][0][1],segments[c][1][0],segments[c][1][1]))return;l=a;m=b;f=!0}function M(){var a=canvas.getContext("2d");if(!N){if(O){N=!0;var b=n.width,
c=n.height;H.push([[-1,-1],[b+1,-1],[b+1,c+1],[-1,c+1]]);segments=VisibilityPolygon.convertToSegments(H);segments=VisibilityPolygon.breakIntersections(segments);for(b=0;b<C.length;++b)segments.push(C[b]);D=C.length}a.save()}else if(f){f=!1;E||(y&&(x(l-v,m),f=!0),z&&(x(l+v,m),f=!0),A&&(x(l,m-v),f=!0),B&&(x(l,m+v),f=!0));F&&(y||z||A||B)&&(E=!0);var b=r/2,c=t/2,e=Math.min(r,t)/2;a.restore();a.save();a.clearRect(0,0,r,t);a.beginPath();a.arc(b,c,e,0,2*Math.PI,!0);a.clip();var h=b-l,p=c-m,k=VisibilityPolygon.computeViewport([l,
m],segments,[-h,-p],[r-h,t-p]);a.beginPath();a.moveTo(k[0][0]+h,k[0][1]+p);for(var d=1;d<k.length;++d)a.lineTo(k[d][0]+h,k[d][1]+p);a.clip();var k=l-e,d=m-e,g=2*e,w=2*e,q=b-e,u=c-e;0>k&&(q-=k,g+=k,k=0);0>d&&(u-=d,w+=d,d=0);k+g>=n.width&&(g=n.width-k-1);d+w>=n.height&&(w=n.height-d-1);a.drawImage(n,k,d,g,w,q,u,g,w);for(d=segments.length-D;d<segments.length;++d)a.beginPath(),a.lineWidth=10,a.strokeStyle="black",a.moveTo(segments[d][0][0]+h,segments[d][0][1]+p),a.lineTo(segments[d][1][0]+h,segments[d][1][1]+
p),a.stroke(),a.beginPath(),a.lineWidth=6,a.strokeStyle="white",a.moveTo(segments[d][0][0]+h,segments[d][0][1]+p),a.lineTo(segments[d][1][0]+h,segments[d][1][1]+p),a.stroke();a.beginPath();a.lineWidth=2;a.strokeStyle="black";a.fillStyle="white";a.fillRect(b-2,c-25,4,20);a.rect(b-2,c-25,4,20);a.stroke();a.fillRect(b-2,c+5,4,20);a.rect(b-2,c+5,4,20);a.stroke();a.fillRect(b-25,c-2,20,4);a.rect(b-25,c-2,20,4);a.stroke();a.fillRect(b+5,c-2,20,4);a.rect(b+5,c-2,20,4);a.stroke();h=a.createRadialGradient(b,
c,10,b,c,e);h.addColorStop(0,"rgba(0,0,0,0)");h.addColorStop(.7,"rgba(0,0,0,0)");h.addColorStop(1,"rgba(0,0,0,1)");a.fillStyle=h;a.fillRect(b-e,c-e,2*e,2*e)}requestAnimFrame(M)}var r=window.innerWidth,t=window.innerHeight;canvas.getContext("2d").canvas.width=r;canvas.getContext("2d").canvas.height=t;var f=!0,D=0,N=!1,l=g[0],m=g[1],y=!1,z=!1,A=!1,B=!1,F=!1,E=!1,P=0,Q=0,u=0,G=0;g=new Hammer(document.getElementById("canvas"));g.get("pan").set({direction:Hammer.DIRECTION_ALL});var v=5,n=new Image,O=!1;
n.onload=function(){O=!0};n.src=q;requestAnimFrame(M);window.onresize=function(a){r=window.innerWidth;t=window.innerHeight;canvas.getContext("2d").canvas.width=r;canvas.getContext("2d").canvas.height=t;f=!0};document.addEventListener("touchmove",function(a){a.preventDefault()},!1);document.onkeydown=function(a){I(a.keyCode)?f=A=!0:J(a.keyCode)?f=y=!0:K(a.keyCode)?f=z=!0:L(a.keyCode)?f=B=!0:16==a.keyCode&&(F=!0)};document.onkeyup=function(a){I(a.keyCode)?(A=!1,f=!0):J(a.keyCode)?(y=!1,f=!0):K(a.keyCode)?
(z=!1,f=!0):L(a.keyCode)?(B=!1,f=!0):32==a.keyCode?console.log("["+Math.round(l)+","+Math.round(m)+"],"):191==a.keyCode||96==a.keyCode?v=Number(prompt("Enter movement speed:",v)):16==a.keyCode&&(F=!1);E=!1};g.on("pan",function(a){var b=a.center.x,c=a.center.y,e=a.deltaX;a=a.deltaY;b-=e;c-=a;if(b!=P||c!=Q)G=u=0;P=b;Q=c;b=e;c=a;e-=u;a-=G;u=b;G=c;x(l-e,m-a)})};
