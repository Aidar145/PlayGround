(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const mo="186",Lu=0,cl=1,Du=2,cr=1,Iu=2,is=3,ni=0,Wt=1,vn=2,cn=0,as=1,hs=2,ul=3,hl=4,Uu=5,Ci=100,Nu=101,Fu=102,Ou=103,Bu=104,zu=200,Gu=201,Hu=202,Vu=203,Cc=204,Rc=205,ku=206,Wu=207,Xu=208,qu=209,Yu=210,Zu=211,Ju=212,Ku=213,$u=214,Sa=0,ya=1,Ea=2,fs=3,ba=4,Ta=5,wa=6,Aa=7,Pc=0,Qu=1,ju=2,Sn=0,go=1,_o=2,vo=3,Tr=4,xo=5,Mo=6,So=7,Lc=300,ii=301,Oi=302,ur=303,Fr=304,wr=306,Un=1e3,Pn=1001,Ca=1002,yt=1003,eh=1004,As=1005,At=1006,Or=1007,ei=1008,Zt=1009,Dc=1010,Ic=1011,ds=1012,yo=1013,yn=1014,ln=1015,Bt=1016,Eo=1017,bo=1018,ps=1020,Uc=35902,Nc=35899,Fc=1021,Oc=1022,en=1023,Nn=1026,ti=1027,Bc=1028,To=1029,si=1030,wo=1031,Ao=1033,hr=33776,fr=33777,dr=33778,pr=33779,Ra=35840,Pa=35841,La=35842,Da=35843,Ia=36196,Ua=37492,Na=37496,Fa=37488,Oa=37489,_r=37490,Ba=37491,za=37808,Ga=37809,Ha=37810,Va=37811,ka=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,Za=37817,Ja=37818,Ka=37819,$a=37820,Qa=37821,ja=36492,eo=36494,to=36495,no=36283,io=36284,vr=36285,so=36286,th=3200,nh=3201,ro=0,ih=1,on="",Gt="srgb",ms="srgb-linear",xr="linear",at="srgb",Br=7680,sh=519,rh=512,ah=513,oh=514,Co=515,lh=516,ch=517,Ro=518,uh=519,hh=35044,fl="300 es",Mn=2e3,gs=2001;function fh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dh(){const i=Mr("canvas");return i.style.display="block",i}const dl={};function pl(...i){const e="THREE."+i.shift();console.log(e,...i)}function zc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=zc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=zc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ui(...i){const e=i.join(" ");e in dl||(dl[e]=!0,Ge(...i))}function ph(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const mh={[Sa]:ya,[Ea]:wa,[ba]:Aa,[fs]:Ta,[ya]:Sa,[wa]:Ea,[Aa]:ba,[Ta]:fs};class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ml=1234567;const Ni=Math.PI/180,Bi=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Po(i,e){return(i%e+e)%e}function gh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _h(i,e,t){return i!==e?(t-i)/(e-i):0}function os(i,e,t){return(1-t)*i+t*e}function vh(i,e,t,n){return os(i,e,1-Math.exp(-t*n))}function xh(i,e=1){return e-Math.abs(Po(i,e*2)-e)}function Mh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Eh(i,e){return i+Math.random()*(e-i)}function bh(i){return i*(.5-Math.random())}function Th(i){i!==void 0&&(ml=i);let e=ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wh(i){return i*Ni}function Ah(i){return i*Bi}function Ch(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ph(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*d,o*u,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ln={DEG2RAD:Ni,RAD2DEG:Bi,generateUUID:ui,clamp:Ke,euclideanModulo:Po,mapLinear:gh,inverseLerp:_h,lerp:os,damp:vh,pingpong:xh,smoothstep:Mh,smootherstep:Sh,randInt:yh,randFloat:Eh,randFloatSpread:bh,seededRandom:Th,degToRad:wh,radToDeg:Ah,isPowerOfTwo:Ch,ceilPowerOfTwo:Rh,floorPowerOfTwo:Ph,setQuaternionFromProperEuler:Lh,normalize:Ft,denormalize:Ri},Zo=class Zo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zo.prototype.isVector2=!0;let re=Zo;class Dn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],_=r[a+2],y=r[a+3];if(f!==y||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*y;m<0&&(h=-h,d=-d,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),A=Math.sin(w);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+y*o;const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jo=class Jo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jo.prototype.isVector3=!0;let D=Jo;const zr=new D,gl=new Dn,Ko=class Ko{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],y=s[0],m=s[3],p=s[6],w=s[1],A=s[4],M=s[7],E=s[2],b=s[5],C=s[8];return r[0]=a*y+o*w+l*E,r[3]=a*m+o*A+l*b,r[6]=a*p+o*M+l*C,r[1]=c*y+u*w+f*E,r[4]=c*m+u*A+f*b,r[7]=c*p+u*M+f*C,r[2]=h*y+d*w+_*E,r[5]=h*m+d*A+_*b,r[8]=h*p+d*M+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,_=t*f+n*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ko.prototype.isMatrix3=!0;let ke=Ko;const Gr=new ke,_l=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vl=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dh(){const i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===on?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:e,whitePoint:n,transfer:xr,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:_l,fromXYZ:vl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const Qe=Dh();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class Ih{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mi===void 0&&(mi=Mr("canvas")),mi.width=e.width,mi.height=e.height;const s=mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uh=0;class Lo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hr(s[a].image)):r.push(Hr(s[a]))}else r=Hr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Nh=0;const Vr=new D;class It extends ci{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Pn,s=Pn,r=At,a=ei,o=en,l=Zt,c=It.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ui(),this.name="",this.source=new Lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vr).x}get height(){return this.source.getSize(Vr).y}get depth(){return this.source.getSize(Vr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Lc;It.DEFAULT_ANISOTROPY=1;const $o=class $o{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(d+1)/2,E=(p+1)/2,b=(u+h)/4,C=(f+y)/4,v=(_+m)/4;return A>M&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=C/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=v/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=v/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-y)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$o.prototype.isVector4=!0;let pt=$o;class Fh extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new It(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ut extends Fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gc extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const br=class br{constructor(e,t,n,s,r,a,o,l,c,u,f,h,d,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,d,_,y,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,d,_,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new br().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h+y*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,y=c*f;t[0]=h-y*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,y=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,zh)}lookAt(e,t,n){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Gn.crossVectors(n,qt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Gn.crossVectors(n,qt)),Gn.normalize(),Cs.crossVectors(qt,Gn),s[0]=Gn.x,s[4]=Cs.x,s[8]=qt.x,s[1]=Gn.y,s[5]=Cs.y,s[9]=qt.y,s[2]=Gn.z,s[6]=Cs.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],y=n[6],m=n[10],p=n[14],w=n[3],A=n[7],M=n[11],E=n[15],b=s[0],C=s[4],v=s[8],T=s[12],R=s[1],I=s[5],O=s[9],G=s[13],N=s[2],B=s[6],K=s[10],W=s[14],ie=s[3],Y=s[7],Q=s[11],ne=s[15];return r[0]=a*b+o*R+l*N+c*ie,r[4]=a*C+o*I+l*B+c*Y,r[8]=a*v+o*O+l*K+c*Q,r[12]=a*T+o*G+l*W+c*ne,r[1]=u*b+f*R+h*N+d*ie,r[5]=u*C+f*I+h*B+d*Y,r[9]=u*v+f*O+h*K+d*Q,r[13]=u*T+f*G+h*W+d*ne,r[2]=_*b+y*R+m*N+p*ie,r[6]=_*C+y*I+m*B+p*Y,r[10]=_*v+y*O+m*K+p*Q,r[14]=_*T+y*G+m*W+p*ne,r[3]=w*b+A*R+M*N+E*ie,r[7]=w*C+A*I+M*B+E*Y,r[11]=w*v+A*O+M*K+E*Q,r[15]=w*T+A*G+M*W+E*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],y=e[7],m=e[11],p=e[15],w=l*d-c*h,A=o*d-c*f,M=o*h-l*f,E=a*d-c*u,b=a*h-l*u,C=a*f-o*u;return t*(y*w-m*A+p*M)-n*(_*w-m*E+p*b)+s*(_*A-y*E+p*C)-r*(_*M-y*b+m*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],y=e[13],m=e[14],p=e[15],w=t*o-n*a,A=t*l-s*a,M=t*c-r*a,E=n*l-s*o,b=n*c-r*o,C=s*c-r*l,v=u*y-f*_,T=u*m-h*_,R=u*p-d*_,I=f*m-h*y,O=f*p-d*y,G=h*p-d*m,N=w*G-A*O+M*I+E*R-b*T+C*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=(o*G-l*O+c*I)*B,e[1]=(s*O-n*G-r*I)*B,e[2]=(y*C-m*b+p*E)*B,e[3]=(h*b-f*C-d*E)*B,e[4]=(l*R-a*G-c*T)*B,e[5]=(t*G-s*R+r*T)*B,e[6]=(m*M-_*C-p*A)*B,e[7]=(u*C-h*M+d*A)*B,e[8]=(a*O-o*R+c*v)*B,e[9]=(n*R-t*O-r*v)*B,e[10]=(_*b-y*M+p*w)*B,e[11]=(f*M-u*b-d*w)*B,e[12]=(o*T-a*I-l*v)*B,e[13]=(t*I-n*T+s*v)*B,e[14]=(y*A-_*E-m*w)*B,e[15]=(u*E-f*A+h*w)*B,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,_=r*f,y=a*u,m=a*f,p=o*f,w=l*c,A=l*u,M=l*f,E=n.x,b=n.y,C=n.z;return s[0]=(1-(y+p))*E,s[1]=(d+M)*E,s[2]=(_-A)*E,s[3]=0,s[4]=(d-M)*b,s[5]=(1-(h+p))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(_+A)*C,s[9]=(m-w)*C,s[10]=(1-(h+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=gi.set(s[0],s[1],s[2]).length();const o=gi.set(s[4],s[5],s[6]).length(),l=gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),sn.copy(this);const c=1/a,u=1/o,f=1/l;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Mn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let _,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===Mn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===gs)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let _,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===Mn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===gs)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};br.prototype.isMatrix4=!0;let dt=br;const gi=new D,sn=new dt,Bh=new D(0,0,0),zh=new D(1,1,1),Gn=new D,Cs=new D,qt=new D,xl=new dt,Ml=new Dn;class Yn{constructor(e=0,t=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gh=0;const Sl=new D,_i=new Dn,Tn=new dt,Rs=new D,Xi=new D,Hh=new D,Vh=new Dn,yl=new D(1,0,0),El=new D(0,1,0),bl=new D(0,0,1),Tl={type:"added"},kh={type:"removed"},vi={type:"childadded",child:null},kr={type:"childremoved",child:null};class vt extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new D,t=new Yn,n=new Dn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(El,e)}rotateZ(e){return this.rotateOnAxis(bl,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(El,e)}translateZ(e){return this.translateOnAxis(bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Xi,Rs,this.up):Tn.lookAt(Rs,Xi,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(Tn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tl),vi.child=e,this.dispatchEvent(vi),vi.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kh),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tl),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,Hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gt extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wh={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Xr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Po(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xr(a,r,e+1/3),this.g=Xr(a,r,e),this.b=Xr(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Qe.workingToColorSpace(Lt.copy(this),e),Math.round(Ke(Lt.r*255,0,255))*65536+Math.round(Ke(Lt.g*255,0,255))*256+Math.round(Ke(Lt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Gt){Qe.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Ps);const n=os(Hn.h,Ps.h,t),s=os(Hn.s,Ps.s,t),r=os(Hn.l,Ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ve;Ve.NAMES=Vc;class Xh extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rn=new D,wn=new D,qr=new D,An=new D,xi=new D,Mi=new D,wl=new D,Yr=new D,Zr=new D,Jr=new D,Kr=new pt,$r=new pt,Qr=new pt;class jt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),rn.subVectors(e,t),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){rn.subVectors(s,t),wn.subVectors(n,t),qr.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(wn),l=rn.dot(qr),c=wn.dot(wn),u=wn.dot(qr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Kr.setScalar(0),$r.setScalar(0),Qr.setScalar(0),Kr.fromBufferAttribute(e,t),$r.fromBufferAttribute(e,n),Qr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Kr,r.x),a.addScaledVector($r,r.y),a.addScaledVector(Qr,r.z),a}static isFrontFacing(e,t,n,s){return rn.subVectors(n,t),wn.subVectors(e,t),rn.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),rn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;xi.subVectors(s,n),Mi.subVectors(r,n),Yr.subVectors(e,n);const l=xi.dot(Yr),c=Mi.dot(Yr);if(l<=0&&c<=0)return t.copy(n);Zr.subVectors(e,s);const u=xi.dot(Zr),f=Mi.dot(Zr);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xi,a);Jr.subVectors(e,r);const d=xi.dot(Jr),_=Mi.dot(Jr);if(_>=0&&d<=_)return t.copy(r);const y=d*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Mi,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return wl.subVectors(r,s),o=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(wl,o);const p=1/(m+y+h);return a=y*p,o=h*p,t.copy(n).addScaledVector(xi,a).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ys{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qi),Ds.subVectors(this.max,qi),Si.subVectors(e.a,qi),yi.subVectors(e.b,qi),Ei.subVectors(e.c,qi),Vn.subVectors(yi,Si),kn.subVectors(Ei,yi),Jn.subVectors(Si,Ei);let t=[0,-Vn.z,Vn.y,0,-kn.z,kn.y,0,-Jn.z,Jn.y,Vn.z,0,-Vn.x,kn.z,0,-kn.x,Jn.z,0,-Jn.x,-Vn.y,Vn.x,0,-kn.y,kn.x,0,-Jn.y,Jn.x,0];return!jr(t,Si,yi,Ei,Ds)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Si,yi,Ei,Ds))?!1:(Is.crossVectors(Vn,kn),t=[Is.x,Is.y,Is.z],jr(t,Si,yi,Ei,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,Ls=new ys,Si=new D,yi=new D,Ei=new D,Vn=new D,kn=new D,Jn=new D,qi=new D,Ds=new D,Is=new D,Kn=new D;function jr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);const o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Mt=new D,Us=new re;let qh=0;class un extends ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class kc extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wc extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Yh=new ys,Yi=new D,ea=new D;class Es{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(ea)),this.expandByPoint(Yi.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Zh=0;const Kt=new dt,ta=new vt,bi=new D,Yt=new ys,Zi=new ys,wt=new D;class Tt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fh(e)?Wc:kc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Yt.min,Zi.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,Zi.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(Zi.min),Yt.expandByPoint(Zi.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(bi.fromBufferAttribute(e,c),wt.add(bi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new D,l[v]=new D;const c=new D,u=new D,f=new D,h=new re,d=new re,_=new re,y=new D,m=new D;function p(v,T,R){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,T),_.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const I=1/(d.x*_.y-_.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(I),o[v].add(y),o[T].add(y),o[R].add(y),l[v].add(m),l[T].add(m),l[R].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,T=w.length;v<T;++v){const R=w[v],I=R.start,O=R.count;for(let G=I,N=I+O;G<N;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new D,M=new D,E=new D,b=new D;function C(v){E.fromBufferAttribute(s,v),b.copy(E);const T=o[v];A.copy(T),A.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(b,T);const I=M.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,I)}for(let v=0,T=w.length;v<T;++v){const R=w[v],I=R.start,O=R.count;for(let G=I,N=I+O;G<N;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new un(h,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const na=new D,Jh=new D,Kh=new ke;class qn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=na.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(na),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kh.getNormalMatrix(e),s=this.coplanarPoint(na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let $h=0;class hi extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=as,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Rc,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Rn=new D,ia=new D,Ns=new D,Fs=new D;class Do{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ia.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Fs.dot(this.direction),l=-Fs.dot(Ns),c=Fs.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ia).addScaledVector(Ns,h),d}intersectSphere(e,t){if(e.radius<0)return null;Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,w=n.y-a.y,A=n.z-a.z,M=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let C,v,T,R,I,O,G,N,B,K,W,ie;if(M>=E&&M>=b?(T=l,O=f,B=_,ie=p,l>=0?(C=c,v=u,R=h,I=d,G=y,N=m,K=w,W=A):(C=u,v=c,R=d,I=h,G=m,N=y,K=A,W=w)):E>=b?(T=c,O=h,B=y,ie=w,c>=0?(C=u,v=l,R=d,I=f,G=m,N=_,K=A,W=p):(C=l,v=u,R=f,I=d,G=_,N=m,K=p,W=A)):(T=u,O=d,B=m,ie=A,u>=0?(C=l,v=c,R=f,I=h,G=_,N=y,K=p,W=w):(C=c,v=l,R=h,I=f,G=y,N=_,K=w,W=p)),T===0)return null;const Y=C/T,Q=v/T,ne=1/T,Te=R-Y*O,pe=I-Q*O,je=G-Y*B,Xe=N-Q*B,qe=K-Y*ie,Z=W-Q*ie,ee=qe*Xe-Z*je,de=Te*Z-pe*qe,De=je*pe-Xe*Te;if(s){if(ee<0||de<0||De<0)return null}else if((ee<0||de<0||De<0)&&(ee>0||de>0||De>0))return null;const ye=ee+de+De;if(ye===0)return null;const Be=ne*(ee*O+de*B+De*ie);return(ye>0?Be<0:Be>0)?null:this.at(Be/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ar extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Al=new dt,$n=new Do,Os=new Es,Cl=new D,Bs=new D,zs=new D,Gs=new D,sa=new D,Hs=new D,Rl=new D,Vs=new D;class Ne extends vt{constructor(e=new Tt,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(sa.fromBufferAttribute(f,e),a?Hs.addScaledVector(sa,u):Hs.addScaledVector(sa.sub(t),u))}t.add(Hs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(Os.containsPoint($n.origin)===!1&&($n.intersectSphere(Os,Cl)===null||$n.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Al.copy(r).invert(),$n.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],w=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,E=A;M<E;M+=3){const b=o.getX(M),C=o.getX(M+1),v=o.getX(M+2);s=ks(this,p,e,n,c,u,f,b,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const w=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=ks(this,a,e,n,c,u,f,w,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const m=h[_],p=a[m.materialIndex],w=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,E=A;M<E;M+=3){const b=M,C=M+1,v=M+2;s=ks(this,p,e,n,c,u,f,b,C,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const w=m,A=m+1,M=m+2;s=ks(this,a,e,n,c,u,f,w,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Qh(i,e,t,n,s,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ni,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:i}}function ks(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Bs),i.getVertexPosition(l,zs),i.getVertexPosition(c,Gs);const u=Qh(i,e,t,n,Bs,zs,Gs,Rl);if(u){const f=new D;jt.getBarycoord(Rl,Bs,zs,Gs,f),s&&(u.uv=jt.getInterpolatedAttribute(s,o,l,c,f,new re)),r&&(u.uv1=jt.getInterpolatedAttribute(r,o,l,c,f,new re)),a&&(u.normal=jt.getInterpolatedAttribute(a,o,l,c,f,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};jt.getNormal(Bs,zs,Gs,h.normal),u.face=h,u.barycoord=f}return u}class Xc extends It{constructor(e=null,t=1,n=1,s,r,a,o,l,c=yt,u=yt,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qn=new Es,jh=new re(.5,.5),Ws=new D;class Io{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],y=r[9],m=r[10],p=r[11],w=r[12],A=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-a,d-u,p-_,E-w).normalize(),s[1].setComponents(c+a,d+u,p+_,E+w).normalize(),s[2].setComponents(c+o,d+f,p+y,E+A).normalize(),s[3].setComponents(c-o,d-f,p-y,E-A).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,E-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,E-M).normalize(),t===Mn)s[5].setComponents(c+l,d+h,p+m,E+M).normalize();else if(t===gs)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=jh.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ws.x=s.normal.x>0?e.max.x:e.min.x,Ws.y=s.normal.y>0?e.max.y:e.min.y,Ws.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qc extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sr=new D,yr=new D,Pl=new dt,Ji=new Do,Xs=new Es,ra=new D,Ll=new D;class ef extends vt{constructor(e=new Tt,t=new qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sr.fromBufferAttribute(t,s-1),yr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sr.distanceTo(yr);e.setAttribute("lineDistance",new lt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,e.ray.intersectsSphere(Xs)===!1)return;Pl.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=u.getX(y),w=u.getX(y+1),A=qs(this,e,Ji,l,p,w,y);A&&t.push(A)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(d),p=qs(this,e,Ji,l,y,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=d,m=_-1;y<m;y+=c){const p=qs(this,e,Ji,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=qs(this,e,Ji,l,_-1,d,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Sr.fromBufferAttribute(o,s),yr.fromBufferAttribute(o,r),t.distanceSqToSegment(Sr,yr,ra,Ll)>n)return;ra.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ra);if(!(c<e.near||c>e.far))return{distance:c,point:Ll.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Dl=new D,Il=new D;class Uo extends ef{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Dl.fromBufferAttribute(t,s),Il.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Dl.distanceTo(Il);e.setAttribute("lineDistance",new lt(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yc extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ul=new dt,ao=new Do,Ys=new Es,Zs=new D;class tf extends vt{constructor(e=new Tt,t=new Yc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,e.ray.intersectsSphere(Ys)===!1)return;Ul.copy(s).invert(),ao.copy(e.ray).applyMatrix4(Ul);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=h,y=d;_<y;_++){const m=c.getX(_);Zs.fromBufferAttribute(f,m),Nl(Zs,m,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,y=d;_<y;_++)Zs.fromBufferAttribute(f,_),Nl(Zs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nl(i,e,t,n,s,r,a){const o=ao.distanceSqToPoint(i);if(o<t){const l=new D;ao.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zc extends It{constructor(e=[],t=ii,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cr extends It{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _s extends It{constructor(e,t,n=yn,s,r,a,o=yt,l=yt,c,u=Nn,f=1){if(u!==Nn&&u!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class nf extends _s{constructor(e,t=yn,n=ii,s,r,a=yt,o=yt,l,c=Nn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jc extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tn extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function _(y,m,p,w,A,M,E,b,C,v,T){const R=M/C,I=E/v,O=M/2,G=E/2,N=b/2,B=C+1,K=v+1;let W=0,ie=0;const Y=new D;for(let Q=0;Q<K;Q++){const ne=Q*I-G;for(let Te=0;Te<B;Te++){const pe=Te*R-O;Y[y]=pe*w,Y[m]=ne*A,Y[p]=N,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Te/C),f.push(1-Q/v),W+=1}}for(let Q=0;Q<v;Q++)for(let ne=0;ne<C;ne++){const Te=h+ne+B*Q,pe=h+ne+B*(Q+1),je=h+(ne+1)+B*(Q+1),Xe=h+(ne+1)+B*Q;l.push(Te,pe,Xe),l.push(pe,je,Xe),ie+=6}o.addGroup(d,ie,T),d+=ie,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class No extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new D,u=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class St extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let _=0;const y=[],m=n/2;let p=0;w(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function w(){const M=new D,E=new D;let b=0;const C=(t-e)/n;for(let v=0;v<=r;v++){const T=[],R=v/r,I=R*(t-e)+e;for(let O=0;O<=s;O++){const G=O/s,N=G*l+o,B=Math.sin(N),K=Math.cos(N);E.x=I*B,E.y=-R*n+m,E.z=I*K,f.push(E.x,E.y,E.z),M.set(B,C,K).normalize(),h.push(M.x,M.y,M.z),d.push(G,1-R),T.push(_++)}y.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){const R=y[T][v],I=y[T+1][v],O=y[T+1][v+1],G=y[T][v+1];(e>0||T!==0)&&(u.push(R,I,G),b+=3),(t>0||T!==r-1)&&(u.push(I,O,G),b+=3)}c.addGroup(p,b,0),p+=b}function A(M){const E=_,b=new re,C=new D;let v=0;const T=M===!0?e:t,R=M===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),_++;const I=_;for(let O=0;O<=s;O++){const N=O/s*l+o,B=Math.cos(N),K=Math.sin(N);C.x=T*K,C.y=m*R,C.z=T*B,f.push(C.x,C.y,C.z),h.push(0,R,0),b.x=B*.5+.5,b.y=K*.5*R+.5,d.push(b.x,b.y),_++}for(let O=0;O<s;O++){const G=E+O,N=I+O;M===!0?u.push(N,N+1,G):u.push(N+1,N,G),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Js=new D,Ks=new D,aa=new D,$s=new jt;class Fo extends Tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ni*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:m,c:p}=$s;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),$s.getNormal(aa),f[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){const A=(w+1)%3,M=f[w],E=f[A],b=$s[u[w]],C=$s[u[A]],v=`${M}_${E}`,T=`${E}_${M}`;T in h&&h[T]?(aa.dot(h[T].normal)<=r&&(d.push(b.x,b.y,b.z),d.push(C.x,C.y,C.z)),h[T]=null):v in h||(h[v]={index0:c[w],index1:c[A],normal:aa.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:m}=h[_];Js.fromBufferAttribute(o,y),Ks.fromBufferAttribute(o,m),d.push(Js.x,Js.y,Js.z),d.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new lt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],a=[],o=new D,l=new dt;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Oo extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sf extends Oo{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bo(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Fl=new D,Ol=new D,oa=new Bo,la=new Bo,ca=new Bo;class zo extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ol.subVectors(s[0],s[1]).add(s[0]),c=Ol);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Fl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),oa.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,y,m),la.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,y,m),ca.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,y,m)}else this.curveType==="catmullrom"&&(oa.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),la.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ca.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(oa.calc(l),la.calc(l),ca.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bl(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function rf(i,e){const t=1-i;return t*t*e}function af(i,e){return 2*(1-i)*i*e}function of(i,e){return i*i*e}function ls(i,e,t,n){return rf(i,e)+af(i,t)+of(i,n)}function lf(i,e){const t=1-i;return t*t*t*e}function cf(i,e){const t=1-i;return 3*t*t*i*e}function uf(i,e){return 3*(1-i)*i*i*e}function hf(i,e){return i*i*i*e}function cs(i,e,t,n,s){return lf(i,e)+cf(i,t)+uf(i,n)+hf(i,s)}class Kc extends bn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ff extends bn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cs(e,s.x,r.x,a.x,o.x),cs(e,s.y,r.y,a.y,o.y),cs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $c extends bn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends bn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qc extends bn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jc extends bn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ls(e,s.x,r.x,a.x),ls(e,s.y,r.y,a.y),ls(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eu extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Bl(o,l.x,c.x,u.x,f.x),Bl(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var Er=Object.freeze({__proto__:null,ArcCurve:sf,CatmullRomCurve3:zo,CubicBezierCurve:Kc,CubicBezierCurve3:ff,EllipseCurve:Oo,LineCurve:$c,LineCurve3:df,QuadraticBezierCurve:Qc,QuadraticBezierCurve3:jc,SplineCurve:eu});class pf extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Er[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Er[s.type]().fromJSON(s))}return this}}class ri extends pf{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $c(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Qc(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Kc(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new eu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Oo(e,t,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class En extends ri{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ri().fromJSON(s))}return this}}function mf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=tu(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Mf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let h=t;h<s;h+=t){const d=i[h],_=i[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return vs(r,a,t,o,l,c,0),a}function tu(i,e,t,n,s){let r;if(s===Lf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=zl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=zl(a/n|0,i[a],i[a+1],r);return r&&zi(r,r.next)&&(Ms(r),r=r.next),r}function ai(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zi(t,t.next)||mt(t.prev,t,t.next)===0)){if(Ms(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Tf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?_f(i,n,s,r):gf(i)){e.push(l.i,i.i,c.i),Ms(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vf(ai(i),e),vs(i,e,t,n,s,r,2)):a===2&&xf(i,e,t,n,s,r):vs(ai(i),e,t,n,s,r,1);break}}}function gf(i){const e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&ss(s,o,r,l,a,c,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function _f(i,e,t,n){const s=i.prev,r=i,a=i.next;if(mt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),y=Math.max(o,l,c),m=Math.max(u,f,h),p=oo(d,_,e,t,n),w=oo(y,m,e,t,n);let A=i.prevZ,M=i.nextZ;for(;A&&A.z>=p&&M&&M.z<=w;){if(A.x>=d&&A.x<=y&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&ss(o,u,l,f,c,h,A.x,A.y)&&mt(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&ss(o,u,l,f,c,h,M.x,M.y)&&mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=y&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&ss(o,u,l,f,c,h,A.x,A.y)&&mt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&ss(o,u,l,f,c,h,M.x,M.y)&&mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!zi(n,s)&&iu(n,t,t.next,s)&&xs(n,s)&&xs(s,n)&&(e.push(n.i,t.i,s.i),Ms(t),Ms(t.next),t=i=s),t=t.next}while(t!==i);return ai(t)}function xf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cf(a,o)){let l=su(a,o);a=ai(a,a.next),l=ai(l,l.next),vs(a,e,t,n,s,r,0),vs(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mf(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=tu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Af(c))}s.sort(Sf);for(let r=0;r<s.length;r++)t=yf(s[r],t);return t}function Sf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function yf(i,e){const t=Ef(i,e);if(!t)return e;const n=su(t,i);return ai(n,n.next),ai(t,t.next)}function Ef(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(zi(i,t))return t;do{if(zi(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&nu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);xs(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&bf(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function bf(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function Tf(i,e,t,n){let s=i;do s.z===0&&(s.z=oo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wf(s)}function wf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function oo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Af(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function nu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ss(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&nu(i,e,t,n,s,r,a,o)}function Cf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rf(i,e)&&(xs(i,e)&&xs(e,i)&&Pf(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||zi(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zi(i,e){return i.x===e.x&&i.y===e.y}function iu(i,e,t,n){const s=js(mt(i,e,t)),r=js(mt(i,e,n)),a=js(mt(t,n,i)),o=js(mt(t,n,e));return!!(s!==r&&a!==o||s===0&&Qs(i,t,e)||r===0&&Qs(i,n,e)||a===0&&Qs(t,i,n)||o===0&&Qs(t,e,n))}function Qs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function js(i){return i>0?1:i<0?-1:0}function Rf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&iu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xs(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Pf(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function su(i,e){const t=lo(i.i,i.x,i.y),n=lo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zl(i,e,t,n){const s=lo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Df{static triangulate(e,t,n=2){return mf(e,t,n)}}class Li{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Li.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Gl(e),Hl(n,e);let a=e.length;t.forEach(Gl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Hl(n,t[l]);const o=Df.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Gl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Go extends Tt{constructor(e=new En([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:If;let A,M=!1,E,b,C,v;if(p){A=p.getSpacedPoints(u),M=!0,h=!1;const te=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,te),b=new D,C=new D,v=new D}h||(m=0,d=0,_=0,y=0);const T=o.extractPoints(c);let R=T.shape;const I=T.holes;if(!Li.isClockWise(R)){R=R.reverse();for(let te=0,ae=I.length;te<ae;te++){const oe=I[te];Li.isClockWise(oe)&&(I[te]=oe.reverse())}}function G(te){const oe=10000000000000001e-36;let le=te[0];for(let he=1;he<=te.length;he++){const Fe=he%te.length,Pe=te[Fe],Oe=Pe.x-le.x,He=Pe.y-le.y,P=Oe*Oe+He*He,nt=Math.max(Math.abs(Pe.x),Math.abs(Pe.y),Math.abs(le.x),Math.abs(le.y)),Je=oe*nt*nt;if(P<=Je){te.splice(Fe,1),he--;continue}le=Pe}}G(R),I.forEach(G);const N=I.length,B=R;for(let te=0;te<N;te++){const ae=I[te];R=R.concat(ae)}function K(te,ae,oe){return ae||tt("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ae,oe)}const W=R.length;function ie(te,ae,oe){let le,he,Fe;const Pe=te.x-ae.x,Oe=te.y-ae.y,He=oe.x-te.x,P=oe.y-te.y,nt=Pe*Pe+Oe*Oe,Je=Pe*P-Oe*He;if(Math.abs(Je)>Number.EPSILON){const S=Math.sqrt(nt),g=Math.sqrt(He*He+P*P),L=ae.x-Oe/S,z=ae.y+Pe/S,k=oe.x-P/g,j=oe.y+He/g,ce=((k-L)*P-(j-z)*He)/(Pe*P-Oe*He);le=L+Pe*ce-te.x,he=z+Oe*ce-te.y;const J=le*le+he*he;if(J<=2)return new re(le,he);Fe=Math.sqrt(J/2)}else{let S=!1;Pe>Number.EPSILON?He>Number.EPSILON&&(S=!0):Pe<-Number.EPSILON?He<-Number.EPSILON&&(S=!0):Math.sign(Oe)===Math.sign(P)&&(S=!0),S?(le=-Oe,he=Pe,Fe=Math.sqrt(nt)):(le=Pe,he=Oe,Fe=Math.sqrt(nt/2))}return new re(le/Fe,he/Fe)}const Y=[];for(let te=0,ae=B.length,oe=ae-1,le=te+1;te<ae;te++,oe++,le++)oe===ae&&(oe=0),le===ae&&(le=0),Y[te]=ie(B[te],B[oe],B[le]);const Q=[];let ne,Te=Y.concat();for(let te=0,ae=N;te<ae;te++){const oe=I[te];ne=[];for(let le=0,he=oe.length,Fe=he-1,Pe=le+1;le<he;le++,Fe++,Pe++)Fe===he&&(Fe=0),Pe===he&&(Pe=0),ne[le]=ie(oe[le],oe[Fe],oe[Pe]);Q.push(ne),Te=Te.concat(ne)}let pe;if(m===0)pe=Li.triangulateShape(B,I);else{const te=[],ae=[];for(let oe=0;oe<m;oe++){const le=oe/m,he=d*Math.cos(le*Math.PI/2),Fe=_*Math.sin(le*Math.PI/2)+y;for(let Pe=0,Oe=B.length;Pe<Oe;Pe++){const He=K(B[Pe],Y[Pe],Fe);de(He.x,He.y,-he),le===0&&te.push(He)}for(let Pe=0,Oe=N;Pe<Oe;Pe++){const He=I[Pe];ne=Q[Pe];const P=[];for(let nt=0,Je=He.length;nt<Je;nt++){const S=K(He[nt],ne[nt],Fe);de(S.x,S.y,-he),le===0&&P.push(S)}le===0&&ae.push(P)}}pe=Li.triangulateShape(te,ae)}const je=pe.length,Xe=_+y;for(let te=0;te<W;te++){const ae=h?K(R[te],Te[te],Xe):R[te];M?(C.copy(E.normals[0]).multiplyScalar(ae.x),b.copy(E.binormals[0]).multiplyScalar(ae.y),v.copy(A[0]).add(C).add(b),de(v.x,v.y,v.z)):de(ae.x,ae.y,0)}for(let te=1;te<=u;te++)for(let ae=0;ae<W;ae++){const oe=h?K(R[ae],Te[ae],Xe):R[ae];M?(C.copy(E.normals[te]).multiplyScalar(oe.x),b.copy(E.binormals[te]).multiplyScalar(oe.y),v.copy(A[te]).add(C).add(b),de(v.x,v.y,v.z)):de(oe.x,oe.y,f/u*te)}for(let te=m-1;te>=0;te--){const ae=te/m,oe=d*Math.cos(ae*Math.PI/2),le=_*Math.sin(ae*Math.PI/2)+y;for(let he=0,Fe=B.length;he<Fe;he++){const Pe=K(B[he],Y[he],le);de(Pe.x,Pe.y,f+oe)}for(let he=0,Fe=I.length;he<Fe;he++){const Pe=I[he];ne=Q[he];for(let Oe=0,He=Pe.length;Oe<He;Oe++){const P=K(Pe[Oe],ne[Oe],le);M?de(P.x,P.y+A[u-1].y,A[u-1].x+oe):de(P.x,P.y,f+oe)}}}qe(),Z();function qe(){const te=s.length/3;if(h){let ae=0,oe=W*ae;for(let le=0;le<je;le++){const he=pe[le];De(he[2]+oe,he[1]+oe,he[0]+oe)}ae=u+m*2,oe=W*ae;for(let le=0;le<je;le++){const he=pe[le];De(he[0]+oe,he[1]+oe,he[2]+oe)}}else{for(let ae=0;ae<je;ae++){const oe=pe[ae];De(oe[2],oe[1],oe[0])}for(let ae=0;ae<je;ae++){const oe=pe[ae];De(oe[0]+W*u,oe[1]+W*u,oe[2]+W*u)}}n.addGroup(te,s.length/3-te,0)}function Z(){const te=s.length/3;let ae=0;ee(B,ae),ae+=B.length;for(let oe=0,le=I.length;oe<le;oe++){const he=I[oe];ee(he,ae),ae+=he.length}n.addGroup(te,s.length/3-te,1)}function ee(te,ae){let oe=te.length;for(;--oe>=0;){const le=oe;let he=oe-1;he<0&&(he=te.length-1);for(let Fe=0,Pe=u+m*2;Fe<Pe;Fe++){const Oe=W*Fe,He=W*(Fe+1),P=ae+le+Oe,nt=ae+he+Oe,Je=ae+he+He,S=ae+le+He;ye(P,nt,Je,S)}}}function de(te,ae,oe){l.push(te),l.push(ae),l.push(oe)}function De(te,ae,oe){Be(te),Be(ae),Be(oe);const le=s.length/3,he=w.generateTopUV(n,s,le-3,le-2,le-1);it(he[0]),it(he[1]),it(he[2])}function ye(te,ae,oe,le){Be(te),Be(ae),Be(le),Be(ae),Be(oe),Be(le);const he=s.length/3,Fe=w.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);it(Fe[0]),it(Fe[1]),it(Fe[3]),it(Fe[1]),it(Fe[2]),it(Fe[3])}function Be(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function it(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Uf(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Er[s.type]().fromJSON(s)),new Go(n,e.options)}}const If={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],_=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-f),new re(h,1-_),new re(y,1-p)]:[new re(o,1-l),new re(u,1-f),new re(d,1-_),new re(m,1-p)]}};function Uf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bs extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],y=[],m=[];for(let p=0;p<u;p++){const w=p*h-a;for(let A=0;A<c;A++){const M=A*f-r;_.push(M,-w,0),y.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const A=w+c*p,M=w+c*(p+1),E=w+1+c*(p+1),b=w+1+c*p;d.push(A,M,b),d.push(M,E,b)}this.setIndex(d),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(y,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class oi extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],h=new D,d=new D,_=new D;for(let y=0;y<=n;y++){const m=a+y/n*o;for(let p=0;p<=s;p++){const w=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(w),d.y=(e+t*Math.cos(m))*Math.sin(w),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),_.subVectors(d,h).normalize(),u.push(_.x,_.y,_.z),f.push(p/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){const p=(s+1)*y+m-1,w=(s+1)*(y-1)+m-1,A=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(p,w,M),l.push(w,A,M)}this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ho extends Tt{constructor(e=new jc(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new re;let u=new D;const f=[],h=[],d=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(d,2));function y(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),w(),p()}function m(A){u=e.getPointAt(A/t,u);const M=a.normals[A],E=a.binormals[A];for(let b=0;b<=s;b++){const C=b/s*Math.PI*2,v=Math.sin(C),T=-Math.cos(C);l.x=T*M.x+v*E.x,l.y=T*M.y+v*E.y,l.z=T*M.z+v*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=t;A++)for(let M=1;M<=s;M++){const E=(s+1)*(A-1)+(M-1),b=(s+1)*A+(M-1),C=(s+1)*A+M,v=(s+1)*(A-1)+M;_.push(E,b,v),_.push(b,C,v)}}function w(){for(let A=0;A<=t;A++)for(let M=0;M<=s;M++)c.x=A/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ho(new Er[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Vl(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const s in n)e[s]=n[s]}return e}function Vl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ru(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Hi={clone:Gi,merge:Ot};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class au extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ou extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ro,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $t extends ou{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lu extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bf extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rr extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zf extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ua=new dt,kl=new D,Wl=new D;class Vo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(kl),Wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ua,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const er=new D,tr=new Dn,dn=new D;class cu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(er,tr,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(er,tr,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(er,tr,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new D,Xl=new re,ql=new re;class Vt extends cu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ni*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Xl,ql),t.subVectors(ql,Xl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ni*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gf extends Vo{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Bi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Hf extends Rr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Vf extends Vo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ki extends Rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pr extends cu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kf extends Vo{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wf extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new kf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ti=-90,wi=1;class Xf extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(Ti,wi,e,t);s.layers=this.layers,this.add(s);const r=new Vt(Ti,wi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Ti,wi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Ti,wi,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Ti,wi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Ti,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class qf extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Zf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Zf(){this._document.hidden===!1&&this.reset()}class Jf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Qo=class Qo{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Qo.prototype.isMatrix2=!0;let Yl=Qo;function Zl(i,e,t,n){const s=Kf(n);switch(t){case Fc:return i*e;case Bc:return i*e/s.components*s.byteLength;case To:return i*e/s.components*s.byteLength;case si:return i*e*2/s.components*s.byteLength;case wo:return i*e*2/s.components*s.byteLength;case Oc:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case Ao:return i*e*4/s.components*s.byteLength;case hr:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(e,8)/4;case Ra:case La:return Math.max(i,8)*Math.max(e,8)/2;case Ia:case Ua:case Fa:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case _r:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case eo:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16;case no:case io:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vr:case so:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kf(i){switch(i){case Zt:case Dc:return{byteLength:1,components:1};case ds:case Ic:case Bt:return{byteLength:2,components:1};case Eo:case bo:return{byteLength:2,components:4};case yn:case yo:case ln:return{byteLength:4,components:1};case Uc:case Nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);function uu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $f(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],y=f[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,f[h]=y)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const y=f[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ed=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$d=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Qf,alphahash_pars_fragment:jf,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:ud,iridescence_fragment:hd,bumpmap_pars_fragment:fd,clipping_planes_fragment:dd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:vd,color_pars_vertex:xd,color_vertex:Md,common:Sd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:bd,displacementmap_vertex:Td,emissivemap_fragment:wd,emissivemap_pars_fragment:Ad,colorspace_fragment:Cd,colorspace_pars_fragment:Rd,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Wd,envmap_vertex:Ud,fog_vertex:Nd,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:kd,lights_toon_fragment:Xd,lights_toon_pars_fragment:qd,lights_phong_fragment:Yd,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:$d,lights_fragment_maps:Qd,lights_fragment_end:jd,lightprobes_pars_fragment:ep,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:ap,map_particle_fragment:op,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:up,morphinstance_vertex:hp,morphcolor_vertex:fp,morphnormal_vertex:dp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:vp,normal_pars_vertex:xp,normal_vertex:Mp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Tp,opaque_fragment:wp,packing:Ap,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:Gp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:kp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:Kp,worldpos_vertex:$p,background_vert:Qp,background_frag:jp,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distance_vert:am,distance_frag:om,equirect_vert:lm,equirect_frag:cm,linedashed_vert:um,linedashed_frag:hm,meshbasic_vert:fm,meshbasic_frag:dm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:vm,meshnormal_frag:xm,meshphong_vert:Mm,meshphong_frag:Sm,meshphysical_vert:ym,meshphysical_frag:Em,meshtoon_vert:bm,meshtoon_frag:Tm,points_vert:wm,points_frag:Am,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Lm},ve={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},_n={basic:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ot([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ot([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ot([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ot([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ot([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ot([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ot([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ot([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Ot([ve.common,ve.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Ot([ve.lights,ve.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};_n.physical={uniforms:Ot([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const nr={r:0,b:0,g:0},Dm=new dt,hu=new ke;hu.set(-1,0,0,0,1,0,0,0,1);function Im(i,e,t,n,s,r){const a=new Ve(0);let o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){const M=w.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(w){let A=!1;const M=d(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(w,A){const M=d(A);M&&(M.isCubeTexture||M.mapping===wr)?(c===void 0&&(c=new Ne(new tn(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Gi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hu),c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==at,(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ne(new bs(2,2),new Ct({name:"BackgroundMaterial",uniforms:Gi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,A){w.getRGB(nr,ru(i)),t.buffers.color.setClear(nr.r,nr.g,nr.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:y,dispose:p}}function Um(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(I,O,G,N,B){let K=!1;const W=f(I,N,G,O);r!==W&&(r=W,c(r.object)),K=d(I,N,G,B),K&&_(I,N,G,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(I,O,G,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,O,G,N){const B=N.wireframe===!0;let K=n[O.id];K===void 0&&(K={},n[O.id]=K);const W=I.isInstancedMesh===!0?I.id:0;let ie=K[W];ie===void 0&&(ie={},K[W]=ie);let Y=ie[G.id];Y===void 0&&(Y={},ie[G.id]=Y);let Q=Y[B];return Q===void 0&&(Q=h(l()),Y[B]=Q),Q}function h(I){const O=[],G=[],N=[];for(let B=0;B<t;B++)O[B]=0,G[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,O,G,N){const B=r.attributes,K=O.attributes;let W=0;const ie=G.getAttributes();for(const Y in ie)if(ie[Y].location>=0){const ne=B[Y];let Te=K[Y];if(Te===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor)),ne===void 0||ne.attribute!==Te||Te&&ne.data!==Te.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function _(I,O,G,N){const B={},K=O.attributes;let W=0;const ie=G.getAttributes();for(const Y in ie)if(ie[Y].location>=0){let ne=K[Y];ne===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const Te={};Te.attribute=ne,ne&&ne.data&&(Te.data=ne.data),B[Y]=Te,W++}r.attributes=B,r.attributesNum=W,r.index=N}function y(){const I=r.newAttributes;for(let O=0,G=I.length;O<G;O++)I[O]=0}function m(I){p(I,0)}function p(I,O){const G=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;G[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),B[I]!==O&&(i.vertexAttribDivisor(I,O),B[I]=O)}function w(){const I=r.newAttributes,O=r.enabledAttributes;for(let G=0,N=O.length;G<N;G++)O[G]!==I[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function A(I,O,G,N,B,K,W){W===!0?i.vertexAttribIPointer(I,O,G,B,K):i.vertexAttribPointer(I,O,G,N,B,K)}function M(I,O,G,N){y();const B=N.attributes,K=G.getAttributes(),W=O.defaultAttributeValues;for(const ie in K){const Y=K[ie];if(Y.location>=0){let Q=B[ie];if(Q===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const ne=Q.normalized,Te=Q.itemSize,pe=e.get(Q);if(pe===void 0)continue;const je=pe.buffer,Xe=pe.type,qe=pe.bytesPerElement,Z=Xe===i.INT||Xe===i.UNSIGNED_INT||Q.gpuType===yo;if(Q.isInterleavedBufferAttribute){const ee=Q.data,de=ee.stride,De=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye,ee.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ye=0;ye<Y.locationSize;ye++)A(Y.location+ye,Te/Y.locationSize,Xe,ne,de*qe,(De+Te/Y.locationSize*ye)*qe,Z)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee,Q.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ee=0;ee<Y.locationSize;ee++)A(Y.location+ee,Te/Y.locationSize,Xe,ne,Te*qe,Te/Y.locationSize*ee*qe,Z)}}else if(W!==void 0){const ne=W[ie];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Y.location,ne);break;case 3:i.vertexAttrib3fv(Y.location,ne);break;case 4:i.vertexAttrib4fv(Y.location,ne);break;default:i.vertexAttrib1fv(Y.location,ne)}}}}w()}function E(){T();for(const I in n){const O=n[I];for(const G in O){const N=O[G];for(const B in N){const K=N[B];for(const W in K)u(K[W].object),delete K[W];delete N[B]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const G in O){const N=O[G];for(const B in N){const K=N[B];for(const W in K)u(K[W].object),delete K[W];delete N[B]}}delete n[I.id]}function C(I){for(const O in n){const G=n[O];for(const N in G){const B=G[N];if(B[I.id]===void 0)continue;const K=B[I.id];for(const W in K)u(K[W].object),delete K[W];delete B[I.id]}}}function v(I){for(const O in n){const G=n[O],N=I.isInstancedMesh===!0?I.id:0,B=G[N];if(B!==void 0){for(const K in B){const W=B[K];for(const ie in W)u(W[ie].object),delete W[ie];delete B[K]}delete G[N],Object.keys(G).length===0&&delete n[O]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function Nm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==en&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Bt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zt&&C!==ln&&!v&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:M,maxSamples:E,samples:b}}function Om(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new qn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const w=r?0:n,A=w*4;let M=p.clippingState||null;l.value=M,M=u(_,h,A,d);for(let E=0;E!==A;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=d+y*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==y;++A,M+=4)a.copy(f[A]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Di=4,Bm=6,zm=20,Gm=256,$i=new Pr,Jl=new Ve;let ha=null,fa=0,da=0,pa=!1;const Hm=new D,jn=new D;class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Hm}=r;ha=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ha,fa,da),this._renderer.xr.enabled=pa,e.scissorTest=!1,Ai(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ha=this._renderer.getRenderTarget(),fa=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Bt,format:en,colorSpace:ms,depthBuffer:!1},s=Kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vm(r)),this._blurMaterial=Wm(r,e,t),this._ggxMaterial=km(r,e,t)}return s}_compileMaterial(e){const t=new Ne(new Tt,e);this._renderer.compile(t,$i)}_sceneToCubeUV(e,t,n,s,r){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Jl),f.toneMapping=Sn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new tn,new Ar({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Jl),p=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const E=this._cubeSize;Ai(s,M*E,A>2?E:0,E,E),f.setRenderTarget(s),p&&f.render(y,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ii||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ai(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$i)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,y=this._sizeLods[n],m=3*y*(n>_-Di?n-_+Di:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Ai(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,$i),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ai(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,$i)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[s],f=3*u*(s>this._lodMax-Di?s-this._lodMax+Di:0),h=4*(this._cubeSize-u);Ai(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,$i)}}function Vm(i){const e=[],t=[];let n=i;const s=i-Di+1+Bm;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),y=new Float32Array(d*h*f);for(let p=0;p<f;p++){const w=p%3*2/3-1,A=p>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];_.set(M,d*h*p);for(let E=0;E<h;E++){const b=u[E*2]*2-1,C=u[E*2+1]*2-1;p===0?jn.set(1,C,b):p===1?jn.set(-b,1,-C):p===2?jn.set(-b,C,1):p===3?jn.set(-1,C,-b):p===4?jn.set(-b,-1,C):jn.set(b,C,-1),jn.toArray(y,(p*h+E)*d)}}const m=new Tt;m.setAttribute("position",new un(_,d)),m.setAttribute("outputDirection",new un(y,d)),t.push(new Ne(m,null)),n>Di&&n--}return{lodMeshes:t,sizeLods:e}}function Kl(i,e,t){const n=new Ut(i,e,t);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ai(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function km(i,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Wm(i,e,t){return new Ct({name:"SphericalGaussianBlur",defines:{SAMPLES:zm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function $l(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ql(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Lr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class fu extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:cn});r.uniforms.tEquirect.value=t;const a=new Ne(s,r),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=At),new Xf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function Xm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ur||d===Fr)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const y=new fu(_.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===ur||d===Fr,y=d===ii||d===Oi;if(_||y){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new co(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const w=h.image;return _&&w&&w.height>0||y&&w&&l(w)?(n===null&&(n=new co(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===ur?h.mapping=ii:d===Fr&&(h.mapping=Oi),h}function l(h){let d=0;const _=6;for(let y=0;y<_;y++)h[y]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function qm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ui("WebGLRenderer: "+n+" extension not supported."),s}}}function Ym(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let y=0;if(_===void 0)return;if(d!==null){const w=d.array;y=d.version;for(let A=0,M=w.length;A<M;A+=3){const E=w[A+0],b=w[A+1],C=w[A+2];h.push(E,b,b,C,C,E)}}else{const w=_.array;y=_.version;for(let A=0,M=w.length/3-1;A<M;A+=3){const E=A+0,b=A+1,C=A+2;h.push(E,b,b,C,C,E)}}const m=new(_.count>=65535?Wc:kc)(h,1);m.version=y;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Zm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Jm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Km(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let R=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var d=R;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let E=o.attributes.position.count*M,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*b*4*f),v=new Gc(C,E,b,f);v.type=ln,v.needsUpdate=!0;const T=M*4;for(let I=0;I<f;I++){const O=p[I],G=w[I],N=A[I],B=E*b*4*I;for(let K=0;K<O.count;K++){const W=K*T;_===!0&&(s.fromBufferAttribute(O,K),C[B+W+0]=s.x,C[B+W+1]=s.y,C[B+W+2]=s.z,C[B+W+3]=0),y===!0&&(s.fromBufferAttribute(G,K),C[B+W+4]=s.x,C[B+W+5]=s.y,C[B+W+6]=s.z,C[B+W+7]=0),m===!0&&(s.fromBufferAttribute(N,K),C[B+W+8]=s.x,C[B+W+9]=s.y,C[B+W+10]=s.z,C[B+W+11]=N.itemSize===4?s.w:1)}}h={count:f,texture:v,size:new re(E,b)},n.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function $m(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Qm={[go]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[Tr]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[So]:"NEUTRAL_TONE_MAPPING",[xo]:"CUSTOM_TONE_MAPPING"};function jm(i,e,t,n,s,r){const a=new Ut(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Tt;c.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new lt([0,2,0,0,2,0],2));const u=new au({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ne(c,u),h=new Pr(-1,1,1,-1,0,1);let d=null,_=null,y=!1,m,p=null,w=[],A=!1;this.setSize=function(M,E){a.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let b=0;b<w.length;b++){const C=w[b];C.setSize&&C.setSize(M,E)}},this.setEffects=function(M){w=M,A=w.length>0&&w[0].isRenderPass===!0;const E=a.width,b=a.height;w.length>0&&o===null&&(o=new Ut(E,b,{type:Bt,depthBuffer:!1,stencilBuffer:!1}),l=new Ut(E,b,{type:Bt,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){const v=w[C];v.setSize&&v.setSize(E,b)}},this.begin=function(M,E){if(y||M.toneMapping===Sn&&w.length===0)return!1;if(p=E,E!==null){const b=E.width,C=E.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return A===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Sn,!0},this.hasRenderPass=function(){return A},this.end=function(M,E){M.toneMapping=m,y=!0;let b=a,C=o;for(let v=0;v<w.length;v++){const T=w[v];T.enabled!==!1&&(T.render(M,C,b,E),T.needsSwap!==!1&&(b=C,C=C===o?l:o))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,u.defines={},Qe.getTransfer(d)===at&&(u.defines.SRGB_TRANSFER="");const v=Qm[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const du=new It,uo=new _s(1,1),pu=new Gc,mu=new Oh,gu=new Zc,jl=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function Wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dr(i,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function i0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),bt(t,n)}}function r0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),bt(t,n)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;tc.set(n),i.uniformMatrix4fv(this.addr,!1,tc),bt(t,n)}}function o0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function p0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function m0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uo.compareFunction=t.isReversedDepthBuffer()?Ro:Co,r=uo):r=du,t.setTexture2D(e||r,s)}function g0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mu,s)}function _0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||gu,s)}function v0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pu,s)}function x0(i){switch(i){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return f0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}function M0(i,e){i.uniform1fv(this.addr,e)}function S0(i,e){const t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function y0(i,e){const t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function E0(i,e){const t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function b0(i,e){const t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function T0(i,e){const t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function w0(i,e){const t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A0(i,e){i.uniform1iv(this.addr,e)}function C0(i,e){i.uniform2iv(this.addr,e)}function R0(i,e){i.uniform3iv(this.addr,e)}function P0(i,e){i.uniform4iv(this.addr,e)}function L0(i,e){i.uniform1uiv(this.addr,e)}function D0(i,e){i.uniform2uiv(this.addr,e)}function I0(i,e){i.uniform3uiv(this.addr,e)}function U0(i,e){i.uniform4uiv(this.addr,e)}function N0(i,e,t){const n=this.cache,s=e.length,r=Dr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uo:a=du;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function F0(i,e,t){const n=this.cache,s=e.length,r=Dr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||mu,r[a])}function O0(i,e,t){const n=this.cache,s=e.length,r=Dr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||gu,r[a])}function B0(i,e,t){const n=this.cache,s=e.length,r=Dr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pu,r[a])}function z0(i){switch(i){case 5126:return M0;case 35664:return S0;case 35665:return y0;case 35666:return E0;case 35674:return b0;case 35675:return T0;case 35676:return w0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return D0;case 36295:return I0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z0(t.type)}}class V0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function sc(i,e){i.seq.push(e),i.map[e.id]=e}function k0(i,e,t){const n=i.name,s=n.length;for(ma.lastIndex=0;;){const r=ma.exec(n),a=ma.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){sc(t,c===void 0?new G0(o,i,e):new H0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new V0(o),sc(t,f)),t=f}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);k0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function rc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const W0=37297;let X0=0;function q0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ac=new ke;function Y0(i){Qe._getMatrix(ac,Qe.workingColorSpace,i);const e=`mat3( ${ac.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case xr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+q0(i.getShaderSource(e),o)}else return r}function Z0(i,e){const t=Y0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const J0={[go]:"Linear",[_o]:"Reinhard",[vo]:"Cineon",[Tr]:"ACESFilmic",[Mo]:"AgX",[So]:"Neutral",[xo]:"Custom"};function K0(i,e){const t=J0[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new D;function $0(){Qe.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function j0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function eg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rs(i){return i!==""}function lc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(tg,ig)}const ng=new Map;function ig(i,e){let t=Ze[e];if(t===void 0){const n=ng.get(e);if(n!==void 0)t=Ze[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ho(t)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(i){return i.replace(sg,rg)}function rg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ag={[cr]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function og(i){return ag[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lg={[ii]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE_UV"};function cg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ug={[Oi]:"ENVMAP_MODE_REFRACTION"};function hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ug[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fg={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[ju]:"ENVMAP_BLENDING_ADD"};function dg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fg[i.combine]||"ENVMAP_BLENDING_NONE"}function pg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=og(t),c=cg(t),u=hg(t),f=dg(t),h=pg(t),d=Q0(t),_=j0(r),y=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Sn?K0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),$0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=ho(a),a=lc(a,t),a=cc(a,t),o=ho(o),o=lc(o,t),o=cc(o,t),a=uc(a),o=uc(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=w+m+a,M=w+p+o,E=rc(s,s.VERTEX_SHADER,A),b=rc(s,s.FRAGMENT_SHADER,M);s.attachShader(y,E),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(I){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(b)||"",B=O.trim(),K=G.trim(),W=N.trim();let ie=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,b);else{const Q=oc(s,E,"vertex"),ne=oc(s,b,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Q+`
`+ne)}else B!==""?Ge("WebGLProgram: Program Info Log:",B):(K===""||W==="")&&(Y=!1);Y&&(I.diagnostics={runnable:ie,programLog:B,vertexShader:{log:K,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(E),s.deleteShader(b),v=new mr(s,y),T=eg(s,y)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,W0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}let gg=0;class _g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vg(e),t.set(e,n)),n}}class vg{constructor(e){this.id=gg++,this.code=e,this.usedTimes=0}}function xg(i){return i===si||i===_r||i===vr}function Mg(i,e,t,n,s,r){const a=new Hc,o=new _g,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,T,R,I,O,G){const N=I.fog,B=O.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ie=e.get(v.envMap||K,W),Y=ie&&ie.mapping===wr?ie.image.height:null,Q=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Te=ne!==void 0?ne.length:0;let pe=0;B.morphAttributes.position!==void 0&&(pe=1),B.morphAttributes.normal!==void 0&&(pe=2),B.morphAttributes.color!==void 0&&(pe=3);let je,Xe,qe,Z;if(Q){const ut=_n[Q];je=ut.vertexShader,Xe=ut.fragmentShader}else{je=v.vertexShader,Xe=v.fragmentShader;const ut=o.getVertexShaderStage(v),st=o.getFragmentShaderStage(v);o.update(v,ut,st),qe=ut.id,Z=st.id}const ee=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,Be=!!v.map,it=!!v.matcap,te=!!ie,ae=!!v.aoMap,oe=!!v.lightMap,le=!!v.bumpMap&&v.wireframe===!1,he=!!v.normalMap,Fe=!!v.displacementMap,Pe=!!v.emissiveMap,Oe=!!v.metalnessMap,He=!!v.roughnessMap,P=v.anisotropy>0,nt=v.clearcoat>0,Je=v.dispersion>0,S=v.retroreflectivity>0,g=v.iridescence>0,L=v.sheen>0,z=v.transmission>0,k=P&&!!v.anisotropyMap,j=nt&&!!v.clearcoatMap,ce=nt&&!!v.clearcoatNormalMap,J=nt&&!!v.clearcoatRoughnessMap,X=g&&!!v.iridescenceMap,ue=g&&!!v.iridescenceThicknessMap,Le=L&&!!v.sheenColorMap,fe=L&&!!v.sheenRoughnessMap,me=!!v.specularMap,Ie=!!v.specularColorMap,ze=!!v.specularIntensityMap,We=z&&!!v.transmissionMap,F=z&&!!v.thicknessMap,ge=!!v.gradientMap,$=!!v.alphaMap,_e=v.alphaTest>0,Se=!!v.alphaHash,se=!!v.extensions;let Ue=Sn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const Ce={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:je,fragmentShader:Xe,defines:v.defines,customVertexShaderID:qe,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Be,matcap:it,envMap:te,envMapMode:te&&ie.mapping,envMapCubeUVHeight:Y,aoMap:ae,lightMap:oe,bumpMap:le,normalMap:he,displacementMap:Fe,emissiveMap:Pe,normalMapObjectSpace:he&&v.normalMapType===ih,normalMapTangentSpace:he&&v.normalMapType===ro,packedNormalMap:he&&v.normalMapType===ro&&xg(v.normalMap.format),metalnessMap:Oe,roughnessMap:He,anisotropy:P,anisotropyMap:k,clearcoat:nt,clearcoatMap:j,clearcoatNormalMap:ce,clearcoatRoughnessMap:J,dispersion:Je,retroreflection:S,iridescence:g,iridescenceMap:X,iridescenceThicknessMap:ue,sheen:L,sheenColorMap:Le,sheenRoughnessMap:fe,specularMap:me,specularColorMap:Ie,specularIntensityMap:ze,transmission:z,transmissionMap:We,thicknessMap:F,gradientMap:ge,opaque:v.transparent===!1&&v.blending===as&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:_e,alphaHash:Se,combine:v.combine,mapUv:Be&&_(v.map.channel),aoMapUv:ae&&_(v.aoMap.channel),lightMapUv:oe&&_(v.lightMap.channel),bumpMapUv:le&&_(v.bumpMap.channel),normalMapUv:he&&_(v.normalMap.channel),displacementMapUv:Fe&&_(v.displacementMap.channel),emissiveMapUv:Pe&&_(v.emissiveMap.channel),metalnessMapUv:Oe&&_(v.metalnessMap.channel),roughnessMapUv:He&&_(v.roughnessMap.channel),anisotropyMapUv:k&&_(v.anisotropyMap.channel),clearcoatMapUv:j&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(v.sheenRoughnessMap.channel),specularMapUv:me&&_(v.specularMap.channel),specularColorMapUv:Ie&&_(v.specularColorMap.channel),specularIntensityMapUv:ze&&_(v.specularIntensityMap.channel),transmissionMapUv:We&&_(v.transmissionMap.channel),thicknessMapUv:F&&_(v.thicknessMap.channel),alphaMapUv:$&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(he||P),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Be||$),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&he===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Be&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:Pe&&v.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vn,flipSided:v.side===Wt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)T.push(R),T.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(T,v),w(T,v),T.push(i.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function w(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const T=d[v.type];let R;if(T){const I=_n[T];R=Hi.clone(I.uniforms)}else R=v.uniforms;return R}function M(v,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new mg(i,T,v,s),c.push(R),u.set(T,R)),R}function E(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:C}}function Sg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,y,m,p){let w=i[e];return w===void 0?(w={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},i[e]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=_,w.materialVariant=a(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=m,w.group=p),e++,w}function l(h,d,_,y,m,p,w){w.reversedDepth===!0&&(m=-m);const A=o(h,d,_,y,m,p);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(h,d,_,y,m,p){const w=o(h,d,_,y,m,p);_.transmission>0?n.unshift(w):_.transparent===!0?s.unshift(w):t.unshift(w)}function u(h,d){t.length>1&&t.sort(h||yg),n.length>1&&n.sort(d||fc),s.length>1&&s.sort(d||fc)}function f(){for(let h=e,d=i.length;h<d;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function Eg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new dc,i.set(n,[a])):s>=r.length?(a=new dc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function bg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Tg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wg=0;function Ag(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cg(i){const e=new bg,t=Tg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new dt,a=new dt;function o(c){let u=0,f=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,_=0,y=0,m=0,p=0,w=0,A=0,M=0,E=0,b=0,C=0,v=0,T=0,R=0;c.sort(Ag);for(let O=0,G=c.length;O<G;O++){const N=c[O],B=N.color,K=N.intensity,W=N.distance;let ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===si?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=B.r*K,f+=B.g*K,h+=B.b*K;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],K);R++}else if(N.isSunLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=ne,n.sunShadowMap[_]=ie;const Te=Q.getViewportCount();for(let pe=0;pe<Te;pe++)n.sunShadowMatrix[y+pe]=Q.getMatrix(pe),n.sunShadowCascade[y+pe]=Q._cascadeData[pe];y+=Te,_++}n.sun[d]=Y,d++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=N.shadow.matrix,E++}n.directional[m]=Y,m++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(B).multiplyScalar(K),Y.distance=W,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[w]=Y;const Q=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,Q.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[w]=Q.matrix,N.castShadow){const ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.spotShadow[w]=ne,n.spotShadowMap[w]=ie,C++}w++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(B).multiplyScalar(K),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=Y,A++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const Q=N.shadow,ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=N.shadow.matrix,b++}n.point[p]=Y,p++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(K),Y.groundColor.copy(N.groundColor).multiplyScalar(K),n.hemi[M]=Y,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==w||I.rectAreaLength!==A||I.hemiLength!==M||I.numSunShadows!==_||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==C||I.numSpotMaps!==v||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=w,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=p,I.spotLength=w,I.rectAreaLength=A,I.hemiLength=M,I.numSunShadows=_,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=C,I.numSpotMaps=v,I.numLightProbes=R,n.version=wg++)}function l(c,u){let f=0,h=0,d=0,_=0,y=0,m=0;const p=u.matrixWorldInverse;for(let w=0,A=c.length;w<A;w++){const M=c[w];if(M.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const E=n.rectArea[y];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function pc(i){const e=new Cg(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new pc(i),e.set(s,[o])):r>=a.length?(o=new pc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Ig=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],mc=new dt,Qi=new D,ga=new D;function Ug(i,e,t){let n=new Io;const s=new re,r=new re,a=new pt,o=new lu,l=new Bf,c={},u=t.maxTextureSize,f={[ni]:Wt,[Wt]:ni,[vn]:vn},h=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Pg,fragmentShader:Lg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Tt;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ne(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let p=this.type;this.render=function(b,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Iu&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(cn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=b.length;N<B;N++){const K=b[N],W=K.shadow;if(W===void 0){Ge("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ie=W.getFrameExtents();s.multiply(ie),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===is){if(K.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ut(s.x,s.y,{format:si,type:Bt,minFilter:At,magFilter:At,generateMipmaps:!1}),W.map.texture.name=K.name+".shadowMap",W.map.depthTexture=new _s(s.x,s.y,ln),W.map.depthTexture.name=K.name+".shadowMapDepth",W.map.depthTexture.format=Nn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt}else K.isPointLight?(W.map=new fu(s.x),W.map.depthTexture=new nf(s.x,yn)):(W.map=new Ut(s.x,s.y),W.map.depthTexture=new _s(s.x,s.y,yn)),W.map.depthTexture.name=K.name+".shadowMap",W.map.depthTexture.format=Nn,this.type===cr?(W.map.depthTexture.compareFunction=Y?Ro:Co,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=yt,W.map.depthTexture.magFilter=yt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();K.isPointLight!==!0&&W.updateMatrices(K,v);for(let ne=0;ne<Q;ne++){const Te=W.getCamera(ne);if(K.isPointLight){const pe=W.camera,je=W.matrix,Xe=K.distance||pe.far;Xe!==pe.far&&(pe.far=Xe,pe.updateProjectionMatrix()),Qi.setFromMatrixPosition(K.matrixWorld),pe.position.copy(Qi),ga.copy(pe.position),ga.add(Dg[ne]),pe.up.copy(Ig[ne]),pe.lookAt(ga),pe.updateMatrixWorld(),je.makeTranslation(-Qi.x,-Qi.y,-Qi.z),mc.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(mc,pe.coordinateSystem,pe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(W.map),i.clear());const pe=W.getViewport(ne);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),O.viewport(a)}n=W.getFrustum(ne),M(C,v,Te,K,this.type)}W.isPointLightShadow!==!0&&this.type===is&&w(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,I)};function w(b,C){const v=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ut(s.x,s.y,{format:si,type:Bt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,v,h,y,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,v,d,y,null)}function A(b,C,v,T){let R=null;const I=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=R.uuid,G=C.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let B=N[G];B===void 0&&(B=R.clone(),N[G]=B,C.addEventListener("dispose",E)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,T===is?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const O=i.properties.get(R);O.light=v}return R}function M(b,C,v,T,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===is)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const G=e.update(b),N=b.material;if(Array.isArray(N)){const B=G.groups;for(let K=0,W=B.length;K<W;K++){const ie=B[K],Y=N[ie.materialIndex];if(Y&&Y.visible){const Q=A(b,Y,T,R);b.onBeforeShadow(i,b,C,v,G,Q,ie),i.renderBufferDirect(v,null,G,Q,b,ie),b.onAfterShadow(i,b,C,v,G,Q,ie)}}}else if(N.visible){const B=A(b,N,T,R);b.onBeforeShadow(i,b,C,v,G,B,null),i.renderBufferDirect(v,null,G,B,b,null),b.onAfterShadow(i,b,C,v,G,B,null)}}const O=b.children;for(let G=0,N=O.length;G<N;G++)M(O[G],C,v,T,R)}function E(b){b.target.removeEventListener("dispose",E);for(const v in c){const T=c[v],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Ng(i,e){function t(){let F=!1;const ge=new pt;let $=null;const _e=new pt(0,0,0,0);return{setMask:function(Se){$!==Se&&!F&&(i.colorMask(Se,Se,Se,Se),$=Se)},setLocked:function(Se){F=Se},setClear:function(Se,se,Ue,Ce,ut){ut===!0&&(Se*=Ce,se*=Ce,Ue*=Ce),ge.set(Se,se,Ue,Ce),_e.equals(ge)===!1&&(i.clearColor(Se,se,Ue,Ce),_e.copy(ge))},reset:function(){F=!1,$=null,_e.set(-1,0,0,0)}}}function n(){let F=!1,ge=!1,$=null,_e=null,Se=null;return{setReversed:function(se){if(ge!==se){const Ue=e.get("EXT_clip_control");se?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ge=se;const Ce=Se;Se=null,this.setClear(Ce)}},getReversed:function(){return ge},setTest:function(se){se?ee(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(se){$!==se&&!F&&(i.depthMask(se),$=se)},setFunc:function(se){if(ge&&(se=mh[se]),_e!==se){switch(se){case Sa:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=se}},setLocked:function(se){F=se},setClear:function(se){Se!==se&&(Se=se,ge&&(se=1-se),i.clearDepth(se))},reset:function(){F=!1,$=null,_e=null,Se=null,ge=!1}}}function s(){let F=!1,ge=null,$=null,_e=null,Se=null,se=null,Ue=null,Ce=null,ut=null;return{setTest:function(st){F||(st?ee(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(st){ge!==st&&!F&&(i.stencilMask(st),ge=st)},setFunc:function(st,nn,hn){($!==st||_e!==nn||Se!==hn)&&(i.stencilFunc(st,nn,hn),$=st,_e=nn,Se=hn)},setOp:function(st,nn,hn){(se!==st||Ue!==nn||Ce!==hn)&&(i.stencilOp(st,nn,hn),se=st,Ue=nn,Ce=hn)},setLocked:function(st){F=st},setClear:function(st){ut!==st&&(i.clearStencil(st),ut=st)},reset:function(){F=!1,ge=null,$=null,_e=null,Se=null,se=null,Ue=null,Ce=null,ut=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,w=null,A=null,M=null,E=null,b=null,C=null,v=new Ve(0,0,0),T=0,R=!1,I=null,O=null,G=null,N=null,B=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=ie>=2);let Q=null,ne={};const Te=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),je=new pt().fromArray(Te),Xe=new pt().fromArray(pe);function qe(F,ge,$,_e){const Se=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<$;Ue++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(ge+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return se}const Z={};Z[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(fs),le(!1),he(cl),ee(i.CULL_FACE),ae(cn);function ee(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function de(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function De(F,ge){return h[F]!==ge?(i.bindFramebuffer(F,ge),h[F]=ge,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function ye(F,ge){let $=_,_e=!1;if(F){$=d.get(ge),$===void 0&&($=[],d.set(ge,$));const Se=F.textures;if($.length!==Se.length||$[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ue=Se.length;se<Ue;se++)$[se]=i.COLOR_ATTACHMENT0+se;$.length=Se.length,_e=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,_e=!0);_e&&i.drawBuffers($)}function Be(F){return y!==F?(i.useProgram(F),y=F,!0):!1}const it={[Ci]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};it[Ou]=i.MIN,it[Bu]=i.MAX;const te={[zu]:i.ZERO,[Gu]:i.ONE,[Hu]:i.SRC_COLOR,[Cc]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[ku]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Rc]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(F,ge,$,_e,Se,se,Ue,Ce,ut,st){if(F===cn){m===!0&&(de(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),F!==Uu){if(F!==p||st!==R){if((w!==Ci||E!==Ci)&&(i.blendEquation(i.FUNC_ADD),w=Ci,E=Ci),st)switch(F){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",F);break}else switch(F){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ul:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",F);break}A=null,M=null,b=null,C=null,v.set(0,0,0),T=0,p=F,R=st}return}Se=Se||ge,se=se||$,Ue=Ue||_e,(ge!==w||Se!==E)&&(i.blendEquationSeparate(it[ge],it[Se]),w=ge,E=Se),($!==A||_e!==M||se!==b||Ue!==C)&&(i.blendFuncSeparate(te[$],te[_e],te[se],te[Ue]),A=$,M=_e,b=se,C=Ue),(Ce.equals(v)===!1||ut!==T)&&(i.blendColor(Ce.r,Ce.g,Ce.b,ut),v.copy(Ce),T=ut),p=F,R=!1}function oe(F,ge){F.side===vn?de(i.CULL_FACE):ee(i.CULL_FACE);let $=F.side===Wt;ge&&($=!$),le($),F.blending===as&&F.transparent===!1?ae(cn):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const _e=F.stencilWrite;o.setTest(_e),_e&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function he(F){F!==Lu?(ee(i.CULL_FACE),F!==O&&(F===cl?i.cullFace(i.BACK):F===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),O=F}function Fe(F){F!==G&&(W&&i.lineWidth(F),G=F)}function Pe(F,ge,$){F?(ee(i.POLYGON_OFFSET_FILL),(N!==ge||B!==$)&&(N=ge,B=$,a.getReversed()&&(ge=-ge),i.polygonOffset(ge,$))):de(i.POLYGON_OFFSET_FILL)}function Oe(F){F?ee(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function He(F){F===void 0&&(F=i.TEXTURE0+K-1),Q!==F&&(i.activeTexture(F),Q=F)}function P(F,ge,$){$===void 0&&(Q===null?$=i.TEXTURE0+K-1:$=Q);let _e=ne[$];_e===void 0&&(_e={type:void 0,texture:void 0},ne[$]=_e),(_e.type!==F||_e.texture!==ge)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(F,ge||Z[F]),_e.type=F,_e.texture=ge)}function nt(){const F=ne[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function g(){try{i.texSubImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function L(){try{i.texSubImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function k(){try{i.compressedTexSubImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function j(){try{i.texStorage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function ce(){try{i.texStorage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){tt("WebGLState:",F)}}function X(){try{i.texImage3D(...arguments)}catch(F){tt("WebGLState:",F)}}function ue(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function Le(F,ge){f[F]!==ge&&(i.pixelStorei(F,ge),f[F]=ge)}function fe(F){je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function me(F){Xe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Xe.copy(F))}function Ie(F,ge){let $=c.get(ge);$===void 0&&($=new WeakMap,c.set(ge,$));let _e=$.get(F);_e===void 0&&(_e=i.getUniformBlockIndex(ge,F.name),$.set(F,_e))}function ze(F,ge){const _e=c.get(ge).get(F);l.get(ge)!==_e&&(i.uniformBlockBinding(ge,_e,F.__bindingPointIndex),l.set(ge,_e))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,ne={},h={},d=new WeakMap,_=[],y=null,m=!1,p=null,w=null,A=null,M=null,E=null,b=null,C=null,v=new Ve(0,0,0),T=0,R=!1,I=null,O=null,G=null,N=null,B=null,je.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:de,bindFramebuffer:De,drawBuffers:ye,useProgram:Be,setBlending:ae,setMaterial:oe,setFlipSided:le,setCullFace:he,setLineWidth:Fe,setPolygonOffset:Pe,setScissorTest:Oe,activeTexture:He,bindTexture:P,unbindTexture:nt,compressedTexImage2D:Je,compressedTexImage3D:S,texImage2D:J,texImage3D:X,pixelStorei:Le,getParameter:ue,updateUBOMapping:Ie,uniformBlockBinding:ze,texStorage2D:j,texStorage3D:ce,texSubImage2D:g,texSubImage3D:L,compressedTexSubImage2D:z,compressedTexSubImage3D:k,scissor:fe,viewport:me,reset:We}}function Fg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,g){return _?new OffscreenCanvas(S,g):Mr("canvas")}function m(S,g,L){let z=1;const k=Je(S);if((k.width>L||k.height>L)&&(z=L/Math.max(k.width,k.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const j=Math.floor(z*k.width),ce=Math.floor(z*k.height);h===void 0&&(h=y(j,ce));const J=g?y(j,ce):h;return J.width=j,J.height=ce,J.getContext("2d").drawImage(S,0,0,j,ce),Ge("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+j+"x"+ce+")."),J}else return"data"in S&&Ge("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),S;return S}function p(S){return S.generateMipmaps}function w(S){i.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(S,g,L,z,k,j=!1){if(S!==null){if(i[S]!==void 0)return i[S];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce;z&&(ce=e.get("EXT_texture_norm16"),ce||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(L===i.FLOAT&&(J=i.R32F),L===i.HALF_FLOAT&&(J=i.R16F),L===i.UNSIGNED_BYTE&&(J=i.R8),L===i.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),L===i.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),g===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.R8UI),L===i.UNSIGNED_SHORT&&(J=i.R16UI),L===i.UNSIGNED_INT&&(J=i.R32UI),L===i.BYTE&&(J=i.R8I),L===i.SHORT&&(J=i.R16I),L===i.INT&&(J=i.R32I)),g===i.RG&&(L===i.FLOAT&&(J=i.RG32F),L===i.HALF_FLOAT&&(J=i.RG16F),L===i.UNSIGNED_BYTE&&(J=i.RG8),L===i.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),L===i.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.RG8UI),L===i.UNSIGNED_SHORT&&(J=i.RG16UI),L===i.UNSIGNED_INT&&(J=i.RG32UI),L===i.BYTE&&(J=i.RG8I),L===i.SHORT&&(J=i.RG16I),L===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.RGB8UI),L===i.UNSIGNED_SHORT&&(J=i.RGB16UI),L===i.UNSIGNED_INT&&(J=i.RGB32UI),L===i.BYTE&&(J=i.RGB8I),L===i.SHORT&&(J=i.RGB16I),L===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),L===i.UNSIGNED_INT&&(J=i.RGBA32UI),L===i.BYTE&&(J=i.RGBA8I),L===i.SHORT&&(J=i.RGBA16I),L===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(L===i.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),L===i.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){const X=j?xr:Qe.getTransfer(k);L===i.FLOAT&&(J=i.RGBA32F),L===i.HALF_FLOAT&&(J=i.RGBA16F),L===i.UNSIGNED_BYTE&&(J=X===at?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),L===i.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(S,g){let L;return S?g===null||g===yn||g===ps?L=i.DEPTH24_STENCIL8:g===ln?L=i.DEPTH32F_STENCIL8:g===ds&&(L=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yn||g===ps?L=i.DEPTH_COMPONENT24:g===ln?L=i.DEPTH_COMPONENT32F:g===ds&&(L=i.DEPTH_COMPONENT16),L}function b(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==yt&&S.minFilter!==At?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function C(S){const g=S.target;g.removeEventListener("dispose",C),T(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function v(S){const g=S.target;g.removeEventListener("dispose",v),I(g)}function T(S){const g=n.get(S);if(g.__webglInit===void 0)return;const L=S.source,z=d.get(L);if(z){const k=z[g.__cacheKey];k.usedTimes--,k.usedTimes===0&&R(S),Object.keys(z).length===0&&d.delete(L)}n.remove(S)}function R(S){const g=n.get(S);i.deleteTexture(g.__webglTexture);const L=S.source,z=d.get(L);delete z[g.__cacheKey],a.memory.textures--}function I(S){const g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let k=0;k<g.__webglFramebuffer[z].length;k++)i.deleteFramebuffer(g.__webglFramebuffer[z][k]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=S.textures;for(let z=0,k=L.length;z<k;z++){const j=n.get(L[z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(L[z])}n.remove(S)}let O=0;function G(){O=0}function N(){return O}function B(S){O=S}function K(){const S=O;return S>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,S}function W(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function ie(S,g){const L=n.get(S);if(S.isVideoTexture&&P(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){const z=S.image;if(z===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{de(L,S,g);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+g)}function Y(S,g){const L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){de(L,S,g);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+g)}function Q(S,g){const L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){de(L,S,g);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+g)}function ne(S,g){const L=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){De(L,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+g)}const Te={[Un]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},pe={[yt]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[At]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},je={[rh]:i.NEVER,[uh]:i.ALWAYS,[ah]:i.LESS,[Co]:i.LEQUAL,[oh]:i.EQUAL,[Ro]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function Xe(S,g){if(g.type===ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===At||g.magFilter===Or||g.magFilter===As||g.magFilter===ei||g.minFilter===At||g.minFilter===Or||g.minFilter===As||g.minFilter===ei)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,Te[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Te[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Te[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pe[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,je[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===yt||g.minFilter!==As&&g.minFilter!==ei||g.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function qe(S,g){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",C));const z=g.source;let k=d.get(z);k===void 0&&(k={},d.set(z,k));const j=W(g);if(j!==S.__cacheKey){k[j]===void 0&&(k[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),k[j].usedTimes++;const ce=k[S.__cacheKey];ce!==void 0&&(k[S.__cacheKey].usedTimes--,ce.usedTimes===0&&R(g)),S.__cacheKey=j,S.__webglTexture=k[j].texture}return L}function Z(S,g,L){return Math.floor(Math.floor(S/L)/g)}function ee(S,g,L,z){const j=S.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,L,z,g.data);else{j.sort((Le,fe)=>Le.start-fe.start);let ce=0;for(let Le=1;Le<j.length;Le++){const fe=j[ce],me=j[Le],Ie=fe.start+fe.count,ze=Z(me.start,g.width,4),We=Z(fe.start,g.width,4);me.start<=Ie+1&&ze===We&&Z(me.start+me.count-1,g.width,4)===ze?fe.count=Math.max(fe.count,me.start+me.count-fe.start):(++ce,j[ce]=me)}j.length=ce+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),X=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Le=0,fe=j.length;Le<fe;Le++){const me=j[Le],Ie=Math.floor(me.start/4),ze=Math.ceil(me.count/4),We=Ie%g.width,F=Math.floor(Ie/g.width),ge=ze,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,We,F,ge,$,L,z,g.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,X),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function de(S,g,L){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);const k=qe(S,g),j=g.source;t.bindTexture(z,S.__webglTexture,i.TEXTURE0+L);const ce=n.get(j);if(j.version!==ce.__version||k===!0){if(t.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const $=Qe.getPrimaries(Qe.workingColorSpace),_e=g.colorSpace===on?null:Qe.getPrimaries(g.colorSpace),Se=g.colorSpace===on||$===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let X=m(g.image,!1,s.maxTextureSize);X=nt(g,X);const ue=r.convert(g.format,g.colorSpace),Le=r.convert(g.type);let fe=M(g.internalFormat,ue,Le,g.normalized,g.colorSpace,g.isVideoTexture);Xe(z,g);let me;const Ie=g.mipmaps,ze=g.isVideoTexture!==!0,We=ce.__version===void 0||k===!0,F=j.dataReady,ge=b(g,X);if(g.isDepthTexture)fe=E(g.format===ti,g.type),We&&(ze?t.texStorage2D(i.TEXTURE_2D,1,fe,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,ue,Le,null));else if(g.isDataTexture)if(Ie.length>0){ze&&We&&t.texStorage2D(i.TEXTURE_2D,ge,fe,Ie[0].width,Ie[0].height);for(let $=0,_e=Ie.length;$<_e;$++)me=Ie[$],ze?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,me.width,me.height,ue,Le,me.data):t.texImage2D(i.TEXTURE_2D,$,fe,me.width,me.height,0,ue,Le,me.data);g.generateMipmaps=!1}else ze?(We&&t.texStorage2D(i.TEXTURE_2D,ge,fe,X.width,X.height),F&&ee(g,X,ue,Le)):t.texImage2D(i.TEXTURE_2D,0,fe,X.width,X.height,0,ue,Le,X.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,fe,Ie[0].width,Ie[0].height,X.depth);for(let $=0,_e=Ie.length;$<_e;$++)if(me=Ie[$],g.format!==en)if(ue!==null)if(ze){if(F)if(g.layerUpdates.size>0){const Se=Zl(me.width,me.height,g.format,g.type);for(const se of g.layerUpdates){const Ue=me.data.subarray(se*Se/me.data.BYTES_PER_ELEMENT,(se+1)*Se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,se,me.width,me.height,1,ue,Ue)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,me.width,me.height,X.depth,ue,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,fe,me.width,me.height,X.depth,0,me.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,me.width,me.height,X.depth,ue,Le,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,fe,me.width,me.height,X.depth,0,ue,Le,me.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ze&&We&&t.texStorage2D(i.TEXTURE_2D,ge,fe,Ie[0].width,Ie[0].height);for(let $=0,_e=Ie.length;$<_e;$++)me=Ie[$],g.format!==en?ue!==null?ze?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,me.width,me.height,ue,me.data):t.compressedTexImage2D(i.TEXTURE_2D,$,fe,me.width,me.height,0,me.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,me.width,me.height,ue,Le,me.data):t.texImage2D(i.TEXTURE_2D,$,fe,me.width,me.height,0,ue,Le,me.data)}else if(g.isDataArrayTexture)if(ze){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,fe,X.width,X.height,X.depth),F)if(g.layerUpdates.size>0){const $=Zl(X.width,X.height,g.format,g.type);for(const _e of g.layerUpdates){const Se=X.data.subarray(_e*$/X.data.BYTES_PER_ELEMENT,(_e+1)*$/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,X.width,X.height,1,ue,Le,Se)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,ue,Le,X.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,X.width,X.height,X.depth,0,ue,Le,X.data);else if(g.isData3DTexture)ze?(We&&t.texStorage3D(i.TEXTURE_3D,ge,fe,X.width,X.height,X.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,ue,Le,X.data)):t.texImage3D(i.TEXTURE_3D,0,fe,X.width,X.height,X.depth,0,ue,Le,X.data);else if(g.isFramebufferTexture){if(We)if(ze)t.texStorage2D(i.TEXTURE_2D,ge,fe,X.width,X.height);else{let $=X.width,_e=X.height;for(let Se=0;Se<ge;Se++)t.texImage2D(i.TEXTURE_2D,Se,fe,$,_e,0,ue,Le,null),$>>=1,_e>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),X.parentNode!==$){$.appendChild(X),f.add(g),$.onpaint=_e=>{const Se=_e.changedElements;for(const se of f)Se.includes(se.image)&&(se.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,X);else{const Se=i.RGBA,se=i.RGBA,Ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,se,Ue,X)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ze&&We){const $=Je(Ie[0]);t.texStorage2D(i.TEXTURE_2D,ge,fe,$.width,$.height)}for(let $=0,_e=Ie.length;$<_e;$++)me=Ie[$],ze?F&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ue,Le,me):t.texImage2D(i.TEXTURE_2D,$,fe,ue,Le,me);g.generateMipmaps=!1}else if(ze){if(We){const $=Je(X);t.texStorage2D(i.TEXTURE_2D,ge,fe,$.width,$.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Le,X)}else t.texImage2D(i.TEXTURE_2D,0,fe,ue,Le,X);p(g)&&w(z),ce.__version=j.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function De(S,g,L){if(g.image.length!==6)return;const z=qe(S,g),k=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+L);const j=n.get(k);if(k.version!==j.__version||z===!0){t.activeTexture(i.TEXTURE0+L);const ce=Qe.getPrimaries(Qe.workingColorSpace),J=g.colorSpace===on?null:Qe.getPrimaries(g.colorSpace),X=g.colorSpace===on||ce===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Le=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let se=0;se<6;se++)!ue&&!Le?fe[se]=m(g.image[se],!0,s.maxCubemapSize):fe[se]=Le?g.image[se].image:g.image[se],fe[se]=nt(g,fe[se]);const me=fe[0],Ie=r.convert(g.format,g.colorSpace),ze=r.convert(g.type),We=M(g.internalFormat,Ie,ze,g.normalized,g.colorSpace),F=g.isVideoTexture!==!0,ge=j.__version===void 0||z===!0,$=k.dataReady;let _e=b(g,me);Xe(i.TEXTURE_CUBE_MAP,g);let Se;if(ue){F&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,We,me.width,me.height);for(let se=0;se<6;se++){Se=fe[se].mipmaps;for(let Ue=0;Ue<Se.length;Ue++){const Ce=Se[Ue];g.format!==en?Ie!==null?F?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,We,Ce.width,Ce.height,0,Ce.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,0,0,Ce.width,Ce.height,Ie,ze,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue,We,Ce.width,Ce.height,0,Ie,ze,Ce.data)}}}else{if(Se=g.mipmaps,F&&ge){Se.length>0&&_e++;const se=Je(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,We,se.width,se.height)}for(let se=0;se<6;se++)if(Le){F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe[se].width,fe[se].height,Ie,ze,fe[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,fe[se].width,fe[se].height,0,Ie,ze,fe[se].data);for(let Ue=0;Ue<Se.length;Ue++){const ut=Se[Ue].image[se].image;F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,ut.width,ut.height,Ie,ze,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,We,ut.width,ut.height,0,Ie,ze,ut.data)}}else{F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,ze,fe[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,Ie,ze,fe[se]);for(let Ue=0;Ue<Se.length;Ue++){const Ce=Se[Ue];F?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,0,0,Ie,ze,Ce.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ue+1,We,Ie,ze,Ce.image[se])}}}p(g)&&w(i.TEXTURE_CUBE_MAP),j.__version=k.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ye(S,g,L,z,k,j){const ce=r.convert(L.format,L.colorSpace),J=r.convert(L.type),X=M(L.internalFormat,ce,J,L.normalized,L.colorSpace),ue=n.get(g),Le=n.get(L);if(Le.__renderTarget=g,!ue.__hasExternalTextures){const fe=Math.max(1,g.width>>j),me=Math.max(1,g.height>>j);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,j,X,fe,me,g.depth,0,ce,J,null):t.texImage2D(k,j,X,fe,me,0,ce,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,k,Le.__webglTexture,0,Oe(g)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,k,Le.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(S,g,L){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){const z=g.depthTexture,k=z&&z.isDepthTexture?z.type:null,j=E(g.stencilBuffer,k),ce=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(g),j,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,S)}else{const z=g.textures;for(let k=0;k<z.length;k++){const j=z[k],ce=r.convert(j.format,j.colorSpace),J=r.convert(j.type),X=M(j.internalFormat,ce,J,j.normalized,j.colorSpace);He(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe(g),X,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe(g),X,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,X,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(S,g,L){const z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const k=n.get(g.depthTexture);if(k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(k.__webglInit===void 0&&(k.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),k.__webglTexture===void 0){k.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,g.depthTexture);const ue=r.convert(g.depthTexture.format),Le=r.convert(g.depthTexture.type);let fe;g.depthTexture.format===Nn?fe=i.DEPTH_COMPONENT24:g.depthTexture.format===ti&&(fe=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,fe,g.width,g.height,0,ue,Le,null)}}else ie(g.depthTexture,0);const j=k.__webglTexture,ce=Oe(g),J=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,X=g.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Nn)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,j,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,X,J,j,0);else if(g.depthTexture.format===ti)He(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,j,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,X,J,j,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(S){const g=n.get(S),L=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const k=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",k)};z.addEventListener("dispose",k),g.__depthDisposeCallback=k}g.__boundDepthTexture=z}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let z=0;z<6;z++)it(g.__webglFramebuffer[z],S,z);else{const z=S.texture.mipmaps;z&&z.length>0?it(g.__webglFramebuffer[0],S,0):it(g.__webglFramebuffer,S,0)}else if(L){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),Be(g.__webglDepthbuffer[z],S,!1);else{const k=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,j)}}else{const z=S.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Be(g.__webglDepthbuffer,S,!1);else{const k=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(S,g,L){const z=n.get(S);g!==void 0&&ye(z.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&te(S)}function oe(S){const g=S.texture,L=n.get(S),z=n.get(g);S.addEventListener("dispose",v);const k=S.textures,j=S.isWebGLCubeRenderTarget===!0,ce=k.length>1;if(ce||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),j){L.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[J]=[];for(let X=0;X<g.mipmaps.length;X++)L.__webglFramebuffer[J][X]=i.createFramebuffer()}else L.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)L.__webglFramebuffer[J]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ce)for(let J=0,X=k.length;J<X;J++){const ue=n.get(k[J]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&He(S)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let J=0;J<k.length;J++){const X=k[J];L.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[J]);const ue=r.convert(X.format,X.colorSpace),Le=r.convert(X.type),fe=M(X.internalFormat,ue,Le,X.normalized,X.colorSpace,S.isXRRenderTarget===!0),me=Oe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,fe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,L.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let X=0;X<g.mipmaps.length;X++)ye(L.__webglFramebuffer[J][X],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,X);else ye(L.__webglFramebuffer[J],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(g)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let J=0,X=k.length;J<X;J++){const ue=k[J],Le=n.get(ue);let fe=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Le.__webglTexture),Xe(fe,ue),ye(L.__webglFramebuffer,S,ue,i.COLOR_ATTACHMENT0+J,fe,0),p(ue)&&w(fe)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(J=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,z.__webglTexture),Xe(J,g),g.mipmaps&&g.mipmaps.length>0)for(let X=0;X<g.mipmaps.length;X++)ye(L.__webglFramebuffer[X],S,g,i.COLOR_ATTACHMENT0,J,X);else ye(L.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,J,0);p(g)&&w(J),t.unbindTexture()}S.depthBuffer&&te(S)}function le(S){const g=S.textures;for(let L=0,z=g.length;L<z;L++){const k=g[L];if(p(k)){const j=A(S),ce=n.get(k).__webglTexture;t.bindTexture(j,ce),w(j),t.unbindTexture()}}}const he=[],Fe=[];function Pe(S){if(S.samples>0){if(He(S)===!1){const g=S.textures,L=S.width,z=S.height;let k=i.COLOR_BUFFER_BIT;const j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(S),J=g.length>1;if(J)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const X=S.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Le=n.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,L,z,0,0,L,z,k,i.NEAREST),l===!0&&(he.length=0,Fe.length=0,he.push(i.COLOR_ATTACHMENT0+ue),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&(he.push(j),Fe.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Le=n.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&l){const g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Oe(S){return Math.min(s.maxSamples,S.samples)}function He(S){const g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function P(S){const g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function nt(S,g){const L=S.colorSpace,z=S.format,k=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==ms&&L!==on&&(Qe.getTransfer(L)===at?(z!==en||k!==Zt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",L)),g}function Je(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=ie,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Og(i,e){function t(n,s=on){let r;const a=Qe.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dc)return i.BYTE;if(n===Ic)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Bt)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===en)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===To)return i.RED_INTEGER;if(n===si)return i.RG;if(n===wo)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===hr||n===fr||n===dr||n===pr)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Pa||n===La||n===Da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===_r||n===Ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Ua)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fa)return r.COMPRESSED_R11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===za||n===Ga||n===Ha||n===Va||n===ka||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===Ka||n===$a||n===Qa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ka)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===eo||n===to)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===no||n===io||n===vr||n===so)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===no)return r.COMPRESSED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Jc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hg extends ci{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const y=typeof XRWebGLBinding<"u",m=new Gg,p={},w=t.getContextAttributes();let A=null,M=null;const E=[],b=[],C=new re;let v=null,T=null;const R=new Vt;R.viewport=new pt;const I=new Vt;I.viewport=new pt;const O=[R,I],G=new qf;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=E[Z];return ee===void 0&&(ee=new Wr,E[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=E[Z];return ee===void 0&&(ee=new Wr,E[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=E[Z];return ee===void 0&&(ee=new Wr,E[Z]=ee),ee.getHandSpace()};function K(Z){const ee=b.indexOf(Z.inputSource);if(ee===-1)return;const de=E[ee];de!==void 0&&(de.update(Z.inputSource,Z.frame,c||a),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<E.length;Z++){const ee=b[Z];ee!==null&&(b[Z]=null,E[Z].disconnect(ee))}N=null,B=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(A),d=null,h=null,f=null,s=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,De=null,ye=null;w.depth&&(ye=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=w.stencil?ti:Nn,De=w.stencil?ps:yn);const Be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Ut(h.textureWidth,h.textureHeight,{format:en,type:Zt,depthTexture:new _s(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ut(d.framebufferWidth,d.framebufferHeight,{format:en,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(Z){for(let ee=0;ee<Z.removed.length;ee++){const de=Z.removed[ee],De=b.indexOf(de);De>=0&&(b[De]=null,E[De].disconnect(de))}for(let ee=0;ee<Z.added.length;ee++){const de=Z.added[ee];let De=b.indexOf(de);if(De===-1){for(let Be=0;Be<E.length;Be++)if(Be>=b.length){b.push(de),De=Be;break}else if(b[Be]===null){b[Be]=de,De=Be;break}if(De===-1)break}const ye=E[De];ye&&ye.connect(de)}}const Y=new D,Q=new D;function ne(Z,ee,de){Y.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const De=Y.distanceTo(Q),ye=ee.projectionMatrix.elements,Be=de.projectionMatrix.elements,it=ye[14]/(ye[10]-1),te=ye[14]/(ye[10]+1),ae=(ye[9]+1)/ye[5],oe=(ye[9]-1)/ye[5],le=(ye[8]-1)/ye[0],he=(Be[8]+1)/Be[0],Fe=it*le,Pe=it*he,Oe=De/(-le+he),He=Oe*-le;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ye[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const P=it+Oe,nt=te+Oe,Je=Fe-He,S=Pe+(De-He),g=ae*te/nt*P,L=oe*te/nt*P;Z.projectionMatrix.makePerspective(Je,S,g,L,P,nt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Te(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ee=Z.near,de=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(de=m.depthFar)),G.near=I.near=R.near=ee,G.far=I.far=R.far=de,(N!==G.near||B!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,B=G.far),G.layers.mask=Z.layers.mask|6,R.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const De=Z.parent,ye=G.cameras;Te(G,De);for(let Be=0;Be<ye.length;Be++)Te(ye[Be],De);ye.length===2?ne(G,R,I):G.projectionMatrix.copy(R.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),pe(Z,G,De)};function pe(Z,ee,de){de===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Bi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let je=null;function Xe(Z,ee){if(u=ee.getViewerPose(c||a),_=ee,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let De=!1;de.length!==G.cameras.length&&(G.cameras.length=0,De=!0);for(let te=0;te<de.length;te++){const ae=de[te];let oe=null;if(d!==null)oe=d.getViewport(ae);else{const he=f.getViewSubImage(h,ae);oe=he.viewport,te===0&&(e.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(M))}let le=O[te];le===void 0&&(le=new Vt,le.layers.enable(te),le.viewport=new pt,O[te]=le),le.matrix.fromArray(ae.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ae.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(oe.x,oe.y,oe.width,oe.height),te===0&&(G.matrix.copy(le.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),De===!0&&G.cameras.push(le)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const te=f.getDepthInformation(de[0]);te&&te.isValid&&te.texture&&m.init(te,s.renderState)}if(ye&&ye.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let te=0;te<de.length;te++){const ae=de[te].camera;if(ae){let oe=p[ae];oe||(oe=new Jc,p[ae]=oe);const le=f.getCameraImage(ae);oe.sourceTexture=le}}}}for(let de=0;de<E.length;de++){const De=b[de],ye=E[de];De!==null&&ye!==void 0&&ye.update(De,ee,c||a)}je&&je(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const qe=new uu;qe.setAnimationLoop(Xe),this.setAnimationLoop=function(Z){je=Z},this.dispose=function(){}}}const Vg=new dt,_u=new ke;_u.set(-1,0,0,0,1,0,0,0,1);function kg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ru(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),A=w.envMap,M=w.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_u),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const b=E.program;n.uniformBlockBinding(M,b)}function c(M,E){let b=s[M.id];b===void 0&&(m(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",w));const C=E.program;n.updateUBOMapping(M,C);const v=e.render.frame;r[M.id]!==v&&(h(M),r[M.id]=v)}function u(M){const E=f();M.__bindingPointIndex=E;const b=i.createBuffer(),C=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const E=s[M.id],b=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let v=0,T=b.length;v<T;v++){const R=b[v];if(Array.isArray(R))for(let I=0,O=R.length;I<O;I++)d(R[I],v,I,C);else d(R,v,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,E,b,C){if(y(M,E,b,C)===!0){const v=M.__offset,T=M.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){const O=T[I],G=p(O);_(O,M.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function _(M,E,b){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,b)}function y(M,E,b,C){const v=M.value,T=E+"_"+b;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{const R=C[T];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(M){const E=M.uniforms;let b=0;const C=16;for(let T=0,R=E.length;T<R;T++){const I=Array.isArray(E[T])?E[T]:[E[T]];for(let O=0,G=I.length;O<G;O++){const N=I[O],B=Array.isArray(N.value)?N.value:[N.value];for(let K=0,W=B.length;K<W;K++){const ie=B[K],Y=p(ie),Q=b%C,ne=Q%Y.boundary,Te=Q+ne;b+=ne,Te!==0&&C-Te<Y.storage&&(b+=C-Te),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=Y.storage}}}const v=b%C;return v>0&&(b+=C-v),M.__size=b,M.__cache={},this}function p(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",M),E}function w(M){const E=M.target;E.removeEventListener("dispose",w);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const Xg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function qg(){return pn===null&&(pn=new Xc(Xg,16,16,si,Bt),pn.name="DFG_LUT",pn.minFilter=At,pn.magFilter=At,pn.wrapS=Pn,pn.wrapT=Pn,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class Yg{constructor(e={}){const{canvas:t=dh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Zt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const y=d,m=new Set([Ao,wo,To]),p=new Set([Zt,yn,ds,ps,Eo,bo]),w=new Uint32Array(4),A=new Int32Array(4),M=new D;let E=null,b=null;const C=[],v=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,O=null,G=null,N=null,B=null;this._outputColorSpace=Gt;let K=0,W=0,ie=null,Y=-1,Q=null;const ne=new pt,Te=new pt;let pe=null;const je=new Ve(0);let Xe=0,qe=t.width,Z=t.height,ee=1,de=null,De=null;const ye=new pt(0,0,qe,Z),Be=new pt(0,0,qe,Z);let it=!1;const te=new Io;let ae=!1,oe=!1;const le=new dt,he=new D,Fe=new pt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function He(){return ie===null?ee:1}let P=n;function nt(x,U){return t.getContext(x,U)}let Je,S,g,L,z,k,j,ce,J,X,ue,Le,fe,me,Ie,ze,We,F,ge,$,_e,Se,se;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",nn,!1),P===null){const U="webgl2";if(P=nt(U,x),P===null)throw nt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(x){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),tt("WebGLRenderer: "+x.message),x}function Ue(){Je=new qm(P),Je.init(),_e=new Og(P,Je),S=new Fm(P,Je,e,_e),g=new Ng(P,Je),S.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=P.createFramebuffer(),N=P.createFramebuffer(),B=P.createFramebuffer(),L=new Jm(P),z=new Sg,k=new Fg(P,Je,g,z,S,_e,L),j=new Xm(R),ce=new $f(P),Se=new Um(P,ce),J=new Ym(P,ce,L,Se),X=new $m(P,J,ce,Se,L),F=new Km(P,S,k),Ie=new Om(z),ue=new Mg(R,j,Je,S,Se,Ie),Le=new kg(R,z),fe=new Eg,me=new Rg(Je),We=new Im(R,j,g,X,_,l),ze=new Ug(R,X,S),se=new Wg(P,L,S,g),ge=new Nm(P,Je,L),$=new Zm(P,Je,L),L.programs=ue.programs,R.capabilities=S,R.extensions=Je,R.properties=z,R.renderLists=fe,R.shadowMap=ze,R.state=g,R.info=L}y!==Zt&&(T=new jm(y,t.width,t.height,o,s,r));const Ce=new Hg(R,P);this.xr=Ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=Je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(x){x!==void 0&&(ee=x,this.setSize(qe,Z,!1))},this.getSize=function(x){return x.set(qe,Z)},this.setSize=function(x,U,q=!0){if(Ce.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=x,Z=U,t.width=Math.floor(x*ee),t.height=Math.floor(U*ee),q===!0&&(t.style.width=x+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(qe*ee,Z*ee).floor()},this.setDrawingBufferSize=function(x,U,q){qe=x,Z=U,ee=q,t.width=Math.floor(x*q),t.height=Math.floor(U*q),this.setViewport(0,0,x,U)},this.setEffects=function(x){if(y===Zt){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let U=0;U<x.length;U++)if(x[U].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ne)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,U,q,H){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,U,q,H),g.viewport(ne.copy(ye).multiplyScalar(ee).round())},this.getScissor=function(x){return x.copy(Be)},this.setScissor=function(x,U,q,H){x.isVector4?Be.set(x.x,x.y,x.z,x.w):Be.set(x,U,q,H),g.scissor(Te.copy(Be).multiplyScalar(ee).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(x){g.setScissorTest(it=x)},this.setOpaqueSort=function(x){de=x},this.setTransparentSort=function(x){De=x},this.getClearColor=function(x){return x.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,q=!0){let H=0;if(x){let V=!1;if(ie!==null){const Me=ie.texture.format;V=m.has(Me)}if(V){const Me=ie.texture.type,be=p.has(Me),xe=We.getClearColor(),we=We.getClearAlpha(),Re=xe.r,Ye=xe.g,$e=xe.b;be?(w[0]=Re,w[1]=Ye,w[2]=$e,w[3]=we,P.clearBufferuiv(P.COLOR,0,w)):(A[0]=Re,A[1]=Ye,A[2]=$e,A[3]=we,P.clearBufferiv(P.COLOR,0,A))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),We.dispose(),fe.dispose(),me.dispose(),z.dispose(),j.dispose(),X.dispose(),Se.dispose(),se.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",el),Ce.removeEventListener("sessionend",tl),Zn.stop()};function ut(x){x.preventDefault(),pl("WebGLRenderer: Context Lost."),I=!0}function st(){pl("WebGLRenderer: Context Restored."),I=!1;const x=L.autoReset,U=ze.enabled,q=ze.autoUpdate,H=ze.needsUpdate,V=ze.type;Ue(),L.autoReset=x,ze.enabled=U,ze.autoUpdate=q,ze.needsUpdate=H,ze.type=V}function nn(x){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function hn(x){const U=x.target;U.removeEventListener("dispose",hn),bu(U)}function bu(x){Tu(x),z.remove(x)}function Tu(x){const U=z.get(x).programs;U!==void 0&&(U.forEach(function(q){ue.releaseProgram(q)}),x.isShaderMaterial&&ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,q,H,V,Me){U===null&&(U=Pe);const be=V.isMesh&&V.matrixWorld.determinantAffine()<0,xe=Cu(x,U,q,H,V);g.setMaterial(H,be);let we=q.index,Re=1;if(H.wireframe===!0){if(we=J.getWireframeAttribute(q),we===void 0)return;Re=2}const Ye=q.drawRange,$e=q.attributes.position;let Ae=Ye.start*Re,rt=(Ye.start+Ye.count)*Re;Me!==null&&(Ae=Math.max(Ae,Me.start*Re),rt=Math.min(rt,(Me.start+Me.count)*Re)),we!==null?(Ae=Math.max(Ae,0),rt=Math.min(rt,we.count)):$e!=null&&(Ae=Math.max(Ae,0),rt=Math.min(rt,$e.count));const xt=rt-Ae;if(xt<0||xt===1/0)return;Se.setup(V,H,xe,q,we);let ft,ct=ge;if(we!==null&&(ft=ce.get(we),ct=$,ct.setIndex(ft)),V.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*He()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(V.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),g.setLineWidth(Rt*He()),V.isLineSegments?ct.setMode(P.LINES):V.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else V.isPoints?ct.setMode(P.POINTS):V.isSprite&&ct.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Rt=V._multiDrawStarts,Ee=V._multiDrawCounts,Nt=V._multiDrawCount,et=we?ce.get(we).bytesPerElement:1,Jt=z.get(H).currentProgram.getUniforms();for(let fn=0;fn<Nt;fn++)Jt.setValue(P,"_gl_DrawID",fn),ct.render(Rt[fn]/et,Ee[fn])}else if(V.isInstancedMesh)ct.renderInstances(Ae,xt,V.count);else if(q.isInstancedBufferGeometry){const Rt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,Rt);ct.renderInstances(Ae,xt,Ee)}else ct.render(Ae,xt)};function jo(x,U,q,H){O!==null&&x.isNodeMaterial&&O.setObject(H,x),ae===!0&&Ie.setState(x,q,!1),x.transparent===!0&&x.side===vn&&x.forceSinglePass===!1?(x.side=Wt,x.needsUpdate=!0,ws(x,U,H),x.side=ni,x.needsUpdate=!0,ws(x,U,H),x.side=vn):ws(x,U,H)}this.compile=function(x,U,q=null){q===null&&(q=x),O!==null&&O.renderStart(x,U,q),b=me.get(q),b.init(U),v.push(b),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),x!==q&&x.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,ae=Ie.init(this.clippingPlanes,oe),ae===!0&&Ie.setGlobalState(this.clippingPlanes,U),O!==null&&ze.render(b.state.shadowsArray,q,U);const H=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const xe=Me[be];jo(xe,q,U,V),H.add(xe)}else jo(Me,q,U,V),H.add(Me)}),b=v.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(x,U,q=null){const H=this.compile(x,U,q);return new Promise(V=>{function Me(){if(H.forEach(function(be){const we=z.get(be).currentProgram;(we===void 0||we.isReady())&&H.delete(be)}),H.size===0){V(x);return}setTimeout(Me,10)}Je.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ur=null;function wu(x){Ur&&Ur(x)}function el(){Zn.stop()}function tl(){Zn.start()}const Zn=new uu;Zn.setAnimationLoop(wu),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(x){Ur=x,Ce.setAnimationLoop(x),x===null?Zn.stop():Zn.start()},Ce.addEventListener("sessionstart",el),Ce.addEventListener("sessionend",tl),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(x,U);const q=Ce.enabled===!0&&Ce.isPresenting===!0,H=T!==null&&(ie===null||q)&&T.begin(R,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(U),U=Ce.getCamera()),x.isScene===!0&&x.onBeforeRender(R,x,U,ie),b=me.get(x,v.length),b.init(U),b.state.textureUnits=k.getTextureUnits(),v.push(b),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(le,Mn,U.reversedDepth),oe=this.localClippingEnabled,ae=Ie.init(this.clippingPlanes,oe),E=fe.get(x,C.length),E.init(),C.push(E),Ce.enabled===!0&&Ce.isPresenting===!0){const be=R.xr.getDepthSensingMesh();be!==null&&Nr(be,U,-1/0,R.sortObjects)}Nr(x,U,0,R.sortObjects),E.finish(),O!==null&&O.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(de,De),Oe=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Oe&&We.addToRenderList(E,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ie.beginShadows();const V=b.state.shadowsArray;if(ze.render(V,x,U),ae===!0&&Ie.endShadows(),(H&&T.hasRenderPass())===!1){const be=E.opaque,xe=E.transmissive;if(b.setupLights(),U.isArrayCamera){const we=U.cameras;if(xe.length>0)for(let Re=0,Ye=we.length;Re<Ye;Re++){const $e=we[Re];il(be,xe,x,$e)}Oe&&We.render(x);for(let Re=0,Ye=we.length;Re<Ye;Re++){const $e=we[Re];nl(E,x,$e,$e.viewport)}}else xe.length>0&&il(be,xe,x,U),Oe&&We.render(x),nl(E,x,U)}ie!==null&&W===0&&(k.updateMultisampleRenderTarget(ie),k.updateRenderTargetMipmap(ie)),H&&T.end(R),x.isScene===!0&&x.onAfterRender(R,x,U),Se.resetDefaultState(),Y=-1,Q=null,v.pop(),v.length>0?(b=v[v.length-1],k.setTextureUnits(b.state.textureUnits),ae===!0&&Ie.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,O!==null&&O.renderEnd()};function Nr(x,U,q,H){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLightProbeGrid)b.pushLightProbeGrid(x);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(te)){H&&Fe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(le);const be=X.update(x),xe=x.material;xe.visible&&E.push(x,be,xe,q,Fe.z,null,U)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(te))){const be=X.update(x),xe=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Fe.copy(x.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Fe.copy(be.boundingSphere.center)),Fe.applyMatrix4(x.matrixWorld).applyMatrix4(le)),Array.isArray(xe)){const we=be.groups;for(let Re=0,Ye=we.length;Re<Ye;Re++){const $e=we[Re],Ae=xe[$e.materialIndex];Ae&&Ae.visible&&E.push(x,be,Ae,q,Fe.z,$e,U)}}else xe.visible&&E.push(x,be,xe,q,Fe.z,null,U)}}const Me=x.children;for(let be=0,xe=Me.length;be<xe;be++)Nr(Me[be],U,q,H)}function nl(x,U,q,H){const{opaque:V,transmissive:Me,transparent:be}=x;b.setupLightsView(q),ae===!0&&Ie.setGlobalState(R.clippingPlanes,q),H&&g.viewport(ne.copy(H)),V.length>0&&Ts(V,U,q),Me.length>0&&Ts(Me,U,q),be.length>0&&Ts(be,U,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function il(x,U,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Ae=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Ut(1,1,{generateMipmaps:!0,type:Ae?Bt:Zt,minFilter:ei,samples:Math.max(4,S.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const Me=b.state.transmissionRenderTarget[H.id],be=H.viewport||ne;Me.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const xe=R.getRenderTarget(),we=R.getActiveCubeFace(),Re=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(je),Xe=R.getClearAlpha(),Xe<1&&R.setClearColor(16777215,.5),R.clear(),Oe&&We.render(q);const Ye=R.toneMapping;R.toneMapping=Sn;const $e=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ae===!0&&Ie.setGlobalState(R.clippingPlanes,H),Ts(x,q,H),k.updateMultisampleRenderTarget(Me),k.updateRenderTargetMipmap(Me),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let rt=0,xt=U.length;rt<xt;rt++){const ft=U[rt],{object:ct,geometry:Rt,material:Ee,group:Nt}=ft;if(Ee.side===vn&&ct.layers.test(H.layers)){const et=Ee.side;Ee.side=Wt,Ee.needsUpdate=!0,sl(ct,q,H,Rt,Ee,Nt),Ee.side=et,Ee.needsUpdate=!0,Ae=!0}}Ae===!0&&(k.updateMultisampleRenderTarget(Me),k.updateRenderTargetMipmap(Me))}R.setRenderTarget(xe,we,Re),R.setClearColor(je,Xe),$e!==void 0&&(H.viewport=$e),R.toneMapping=Ye}function Ts(x,U,q){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Me=x.length;V<Me;V++){const be=x[V],{object:xe,geometry:we,group:Re}=be;let Ye=be.material;Ye.allowOverride===!0&&H!==null&&(Ye=H),xe.layers.test(q.layers)&&sl(xe,U,q,we,Ye,Re)}}function sl(x,U,q,H,V,Me){O!==null&&V.isNodeMaterial&&O.setObject(x,V),x.onBeforeRender(R,U,q,H,V,Me),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(R,U,q,H,x,Me),V.transparent===!0&&V.side===vn&&V.forceSinglePass===!1?(V.side=Wt,V.needsUpdate=!0,R.renderBufferDirect(q,U,H,V,x,Me),V.side=ni,V.needsUpdate=!0,R.renderBufferDirect(q,U,H,V,x,Me),V.side=vn):R.renderBufferDirect(q,U,H,V,x,Me),x.onAfterRender(R,U,q,H,V,Me)}function ws(x,U,q){U.isScene!==!0&&(U=Pe);const H=z.get(x),V=b.state.lights,Me=b.state.shadowsArray,be=V.state.version,xe=ue.getParameters(x,V.state,Me,U,q,b.state.lightProbeGridArray),we=ue.getProgramCacheKey(xe);let Re=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const Ye=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=j.get(x.envMap||H.environment,Ye),H.envMapRotation=H.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",hn),Re=new Map,H.programs=Re);let $e=Re.get(we);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===be)return al(x,xe),$e}else xe.uniforms=ue.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,q,xe),x.onBeforeCompile(xe,R),$e=ue.acquireProgram(xe,we),Re.set(we,$e),H.uniforms=xe.uniforms;const Ae=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),al(x,xe),H.needsLights=Pu(x),H.lightsStateVersion=be,H.needsLights&&(Ae.ambientLightColor.value=V.state.ambient,Ae.lightProbe.value=V.state.probe,Ae.sunLights.value=V.state.sun,Ae.sunLightShadows.value=V.state.sunShadow,Ae.directionalLights.value=V.state.directional,Ae.directionalLightShadows.value=V.state.directionalShadow,Ae.spotLights.value=V.state.spot,Ae.spotLightShadows.value=V.state.spotShadow,Ae.rectAreaLights.value=V.state.rectArea,Ae.ltc_1.value=V.state.rectAreaLTC1,Ae.ltc_2.value=V.state.rectAreaLTC2,Ae.pointLights.value=V.state.point,Ae.pointLightShadows.value=V.state.pointShadow,Ae.hemisphereLights.value=V.state.hemi,Ae.sunShadowMatrix.value=V.state.sunShadowMatrix,Ae.sunShadowCascade.value=V.state.sunShadowCascade,Ae.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ae.spotLightMatrix.value=V.state.spotLightMatrix,Ae.spotLightMap.value=V.state.spotLightMap,Ae.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=$e,H.uniformsList=null,$e}function rl(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=mr.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function al(x,U){const q=z.get(x);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Au(x,U){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let q=0,H=x.length;q<H;q++){const V=x[q];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function Cu(x,U,q,H,V){U.isScene!==!0&&(U=Pe),k.resetTextureUnits();const Me=U.fog,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,xe=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qe.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=j.get(H.envMap||be,we),Ye=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color;let ft=Sn;H.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=R.toneMapping);const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Rt=ct!==void 0?ct.length:0,Ee=z.get(H),Nt=b.state.lights;if(ae===!0&&(oe===!0||x!==Q)){const ht=x===Q&&H.id===Y;Ie.setState(H,x,ht)}let et=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Nt.state.version||Ee.outputColorSpace!==xe||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Re||H.fog===!0&&Ee.fog!==Me||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Ie.numPlanes||Ee.numIntersection!==Ie.numIntersection)||Ee.vertexAlphas!==Ye||Ee.vertexTangents!==$e||Ee.morphTargets!==Ae||Ee.morphNormals!==rt||Ee.morphColors!==xt||Ee.toneMapping!==ft||Ee.morphTargetsCount!==Rt||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Ee.__version=H.version);let Jt=Ee.currentProgram;et===!0&&(Jt=ws(H,U,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Jt,Ee));let fn=!1,On=!1,di=!1;const ot=Jt.getUniforms(),_t=Ee.uniforms;if(g.useProgram(Jt.program)&&(fn=!0,On=!0,di=!0),H.id!==Y&&(Y=H.id,On=!0),Ee.needsLights){const ht=Au(b.state.lightProbeGridArray,V);Ee.lightProbeGrid!==ht&&(Ee.lightProbeGrid=ht,On=!0)}if(fn||Q!==x){g.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ot.setValue(P,"projectionMatrix",x.projectionMatrix),ot.setValue(P,"viewMatrix",x.matrixWorldInverse);const zn=ot.map.cameraPosition;zn!==void 0&&zn.setValue(P,he.setFromMatrixPosition(x.matrixWorld)),S.logarithmicDepthBuffer&&ot.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ot.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,On=!0,di=!0)}if(Ee.needsLights&&(Nt.state.sunShadowMap.length>0&&ot.setValue(P,"sunShadowMap",Nt.state.sunShadowMap,k),Nt.state.directionalShadowMap.length>0&&ot.setValue(P,"directionalShadowMap",Nt.state.directionalShadowMap,k),Nt.state.spotShadowMap.length>0&&ot.setValue(P,"spotShadowMap",Nt.state.spotShadowMap,k),Nt.state.pointShadowMap.length>0&&ot.setValue(P,"pointShadowMap",Nt.state.pointShadowMap,k)),V.isSkinnedMesh){ot.setOptional(P,V,"bindMatrix"),ot.setOptional(P,V,"bindMatrixInverse");const ht=V.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ot.setValue(P,"boneTexture",ht.boneTexture,k))}V.isBatchedMesh&&(ot.setOptional(P,V,"batchingTexture"),ot.setValue(P,"batchingTexture",V._matricesTexture,k),ot.setOptional(P,V,"batchingIdTexture"),ot.setValue(P,"batchingIdTexture",V._indirectTexture,k),ot.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&ot.setValue(P,"batchingColorTexture",V._colorsTexture,k));const Bn=q.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&F.update(V,q,Jt),(On||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,ot.setValue(P,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(_t.envMapIntensity.value=U.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=qg()),On){if(ot.setValue(P,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&Ru(_t,di),Me&&H.fog===!0&&Le.refreshFogUniforms(_t,Me),Le.refreshMaterialUniforms(_t,H,ee,Z,b.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.lightProbeGrid){const ht=Ee.lightProbeGrid;_t.probesSH.value=ht.texture,_t.probesMin.value.copy(ht.boundingBox.min),_t.probesMax.value.copy(ht.boundingBox.max),_t.probesResolution.value.copy(ht.resolution)}mr.upload(P,rl(Ee),_t,k)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(mr.upload(P,rl(Ee),_t,k),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ot.setValue(P,"center",V.center),ot.setValue(P,"modelViewMatrix",V.modelViewMatrix),ot.setValue(P,"normalMatrix",V.normalMatrix),ot.setValue(P,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const ht=H.uniformsGroups;for(let zn=0,pi=ht.length;zn<pi;zn++){const ll=ht[zn];se.update(ll,Jt),se.bind(ll,Jt)}}return Jt}function Ru(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.sunLights.needsUpdate=U,x.sunLightShadows.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Pu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,U,q){const H=z.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),z.get(x.texture).__webglTexture=U,z.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const q=z.get(x);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,q=0){ie=x,K=U,W=q;let H=null,V=!1,Me=!1;if(x){const xe=z.get(x);if(xe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(P.FRAMEBUFFER,xe.__webglFramebuffer),ne.copy(x.viewport),Te.copy(x.scissor),pe=x.scissorTest,g.viewport(ne),g.scissor(Te),g.setScissorTest(pe),Y=-1;return}else if(xe.__webglFramebuffer===void 0)k.setupRenderTarget(x);else if(xe.__hasExternalTextures)k.rebindTextures(x,z.get(x.texture).__webglTexture,z.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ye=x.depthTexture;if(xe.__boundDepthTexture!==Ye){if(Ye!==null&&z.has(Ye)&&(x.width!==Ye.image.width||x.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(x)}}const we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const Re=z.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?H=Re[U][q]:H=Re[U],V=!0):x.samples>0&&k.useMultisampledRTT(x)===!1?H=z.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[q]:H=Re,ne.copy(x.viewport),Te.copy(x.scissor),pe=x.scissorTest}else ne.copy(ye).multiplyScalar(ee).floor(),Te.copy(Be).multiplyScalar(ee).floor(),pe=it;if(q!==0&&(H=G),g.bindFramebuffer(P.FRAMEBUFFER,H)&&g.drawBuffers(x,H),g.viewport(ne),g.scissor(Te),g.setScissorTest(pe),V){const xe=z.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,q)}else if(Me){const xe=U;for(let we=0;we<x.textures.length;we++){const Re=z.get(x.textures[we]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+we,Re.__webglTexture,q,xe)}}else if(x!==null&&q!==0){const xe=z.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,q)}Y=-1};function ol(x){const U=z.get(x);return(U.__readFormat!==x.format||U.__readType!==x.type)&&(U.__readFormat=x.format,U.__readType=x.type,U.__formatReadable=S.textureFormatReadable(x.format),U.__typeReadable=S.textureTypeReadable(x.type)),U}this.readRenderTargetPixels=function(x,U,q,H,V,Me,be,xe=0){if(!(x&&x.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we){g.bindFramebuffer(P.FRAMEBUFFER,we);try{const Re=x.textures[xe],Ye=Re.format,$e=Re.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe);const Ae=ol(Re);if(Ae.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-H&&q>=0&&q<=x.height-V&&P.readPixels(U,q,H,V,_e.convert(Ye),_e.convert($e),Me)}finally{const Re=ie!==null?z.get(ie).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,U,q,H,V,Me,be,xe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=z.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(we=we[be]),we)if(U>=0&&U<=x.width-H&&q>=0&&q<=x.height-V){g.bindFramebuffer(P.FRAMEBUFFER,we);const Re=x.textures[xe],Ye=Re.format,$e=Re.type;x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe);const Ae=ol(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,rt),P.bufferData(P.PIXEL_PACK_BUFFER,Me.byteLength,P.STREAM_READ),P.readPixels(U,q,H,V,_e.convert(Ye),_e.convert($e),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const xt=ie!==null?z.get(ie).__webglFramebuffer:null;g.bindFramebuffer(P.FRAMEBUFFER,xt);const ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ph(P,ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,rt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Me),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(rt),P.deleteSync(ft),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,q=0){const H=Math.pow(2,-q),V=Math.floor(x.image.width*H),Me=Math.floor(x.image.height*H),be=U!==null?U.x:0,xe=U!==null?U.y:0;k.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,be,xe,V,Me),g.unbindTexture()},this.copyTextureToTexture=function(x,U,q=null,H=null,V=0,Me=0){let be,xe,we,Re,Ye,$e,Ae,rt,xt;const ft=x.isCompressedTexture?x.mipmaps[Me]:x.image;if(q!==null)be=q.max.x-q.min.x,xe=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Ye=q.min.y,$e=q.isBox3?q.min.z:0;else{const _t=Math.pow(2,-V);be=Math.floor(ft.width*_t),xe=Math.floor(ft.height*_t),x.isDataArrayTexture?we=ft.depth:x.isData3DTexture?we=Math.floor(ft.depth*_t):we=1,Re=0,Ye=0,$e=0}H!==null?(Ae=H.x,rt=H.y,xt=H.z):(Ae=0,rt=0,xt=0);const ct=_e.convert(U.format),Rt=_e.convert(U.type);let Ee;U.isData3DTexture?(k.setTexture3D(U,0),Ee=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(k.setTexture2DArray(U,0),Ee=P.TEXTURE_2D_ARRAY):(k.setTexture2D(U,0),Ee=P.TEXTURE_2D),g.activeTexture(P.TEXTURE0),g.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Nt=g.getParameter(P.UNPACK_ROW_LENGTH),et=g.getParameter(P.UNPACK_IMAGE_HEIGHT),Jt=g.getParameter(P.UNPACK_SKIP_PIXELS),fn=g.getParameter(P.UNPACK_SKIP_ROWS),On=g.getParameter(P.UNPACK_SKIP_IMAGES);g.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),g.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),g.pixelStorei(P.UNPACK_SKIP_IMAGES,$e);const di=x.isDataArrayTexture||x.isData3DTexture,ot=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const _t=z.get(x),Bn=z.get(U),ht=z.get(_t.__renderTarget),zn=z.get(Bn.__renderTarget);g.bindFramebuffer(P.READ_FRAMEBUFFER,ht.__webglFramebuffer),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let pi=0;pi<we;pi++)di&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(x).__webglTexture,V,$e+pi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(U).__webglTexture,Me,xt+pi)),P.blitFramebuffer(Re,Ye,be,xe,Ae,rt,be,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||z.has(x)){const _t=z.get(x),Bn=z.get(U);g.bindFramebuffer(P.READ_FRAMEBUFFER,N),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let ht=0;ht<we;ht++)di?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.__webglTexture,V,$e+ht):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_t.__webglTexture,V),ot?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bn.__webglTexture,Me,xt+ht):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bn.__webglTexture,Me),V!==0?P.blitFramebuffer(Re,Ye,be,xe,Ae,rt,be,xe,P.COLOR_BUFFER_BIT,P.NEAREST):ot?P.copyTexSubImage3D(Ee,Me,Ae,rt,xt+ht,Re,Ye,be,xe):P.copyTexSubImage2D(Ee,Me,Ae,rt,Re,Ye,be,xe);g.bindFramebuffer(P.READ_FRAMEBUFFER,null),g.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ot?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(Ee,Me,Ae,rt,xt,be,xe,we,ct,Rt,ft.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,Me,Ae,rt,xt,be,xe,we,ct,ft.data):P.texSubImage3D(Ee,Me,Ae,rt,xt,be,xe,we,ct,Rt,ft):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Me,Ae,rt,be,xe,ct,Rt,ft.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Me,Ae,rt,ft.width,ft.height,ct,ft.data):P.texSubImage2D(P.TEXTURE_2D,Me,Ae,rt,be,xe,ct,Rt,ft);g.pixelStorei(P.UNPACK_ROW_LENGTH,Nt),g.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),g.pixelStorei(P.UNPACK_SKIP_PIXELS,Jt),g.pixelStorei(P.UNPACK_SKIP_ROWS,fn),g.pixelStorei(P.UNPACK_SKIP_IMAGES,On),Me===0&&U.generateMipmaps&&P.generateMipmap(Ee),g.unbindTexture()},this.initRenderTarget=function(x){z.get(x).__webglFramebuffer===void 0&&k.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?k.setTextureCube(x,0):x.isData3DTexture?k.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?k.setTexture2DArray(x,0):k.setTexture2D(x,0),g.unbindTexture()},this.resetState=function(){K=0,W=0,ie=null,g.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function mn(i,e,t,n,s,r,a,o,l){const c=Math.cos(n),u=Math.sin(n),f=Math.cos(s),h=Math.sin(s);for(let d=0;d<t;d++){const y=((d+.5)/t-.5)*Math.PI,m=Math.abs(y-s);if(m>a*1.8)continue;const p=1-Ln.smoothstep(m,a*.72,a);for(let w=0;w<e;w++){const M=((w+.5)/e-.5)*Math.PI*2;let E=M-n;E=Math.atan2(Math.sin(E),Math.cos(E));const b=Math.abs(E);if(b>r*1.8)continue;const C=1-Ln.smoothstep(b,r*.7,r),v=p*C;if(v<=0)continue;const T=f*Math.sin(M),R=h,I=f*Math.cos(M),O=Math.max(0,T*f*u+R*h+I*f*c),G=v*(.55+.45*O),N=(d*e+w)*4;i[N]+=o[0]*l*G,i[N+1]+=o[1]*l*G,i[N+2]+=o[2]*l*G}}}function Zg(i){const n=new Float32Array(2097152);for(let o=0;o<512;o++){const c=((o+.5)/512-.5)*Math.PI;for(let u=0;u<1024;u++){const f=Math.exp(-Math.pow((c-.08)/.32,2)),h=Math.exp(-Math.pow((c-1.15)/.7,2)),d=(o*1024+u)*4;n[d]=.013+f*.014+h*.016,n[d+1]=.0135+f*.015+h*.017,n[d+2]=.015+f*.018+h*.021,n[d+3]=1}}mn(n,1024,512,.32,.44,.21,.28,[1,1.02,1.08],3.15),mn(n,1024,512,-1.22,-.03,.52,.16,[1,.92,.8],.9),mn(n,1024,512,-.72,.32,.16,.26,[1,.92,.8],1.4),mn(n,1024,512,2.62,.31,.2,.44,[.62,.76,1],.55),mn(n,1024,512,-2.02,.82,.1,.16,[1,1,1],2),mn(n,1024,512,1.12,.38,.07,.34,[.92,.96,1],1.6),mn(n,1024,512,-.55,.55,.1,.24,[.97,.99,1],1.4),mn(n,1024,512,1.72,1.05,.42,.09,[.78,.86,1],.8),mn(n,1024,512,-.18,-1.12,.62,.12,[.4,.48,.6],.3),mn(n,1024,512,.02,.1,.5,.25,[1,.98,.95],.55);const s=new Xc(n,1024,512,en,ln);s.mapping=ur,s.colorSpace=ms,s.minFilter=At,s.magFilter=At,s.needsUpdate=!0;const r=new co(i);r.compileEquirectangularShader();const a=r.fromEquirectangular(s).texture;return s.dispose(),r.dispose(),a}function Jg(i){const e=new Wf(16186367,.8);e.position.set(-5,8,9),i.add(e);const t=new Hf(14674687,4.5,80,Math.PI/5.4,.7,1.5);t.position.set(7,2,14),t.target.position.set(0,0,0),i.add(t,t.target);const n=new Ki(13820671,3.5,60,1.8);n.position.set(-7,4,-9),i.add(n);const s=new Ki(16767146,3,45,1.8);s.position.set(6,-7,5),i.add(s);const r=new Ki(15922943,8.5,38,1.7);r.position.set(0,2,15),i.add(r);const a=new Ki(14674431,4,32,1.8);a.position.set(-2,-7,11),i.add(a);const o=new Ki(16758904,8,45,1.8);o.position.set(8,-4,-6),i.add(o),i.add(new zf(2767442,0,.16))}function Kg(){const i=new bs(140,180),e=new Ct({depthWrite:!1,depthTest:!1,toneMapped:!1,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      void main() {
        vec2 p = vUv - vec2(0.5, 0.47);
        float d = length(p * vec2(1.0, 1.35));
        vec3 center = vec3(0.004, 0.0055, 0.008);
        vec3 edge = vec3(0.0, 0.0, 0.0);
        vec3 color = mix(center, edge, smoothstep(0.02, 0.52, d));
        float halo = exp(-d * 12.0) * 0.008;
        color += vec3(0.24, 0.38, 0.62) * halo;
        gl_FragColor = vec4(color, 1.0);
      }
    `}),t=new Ne(i,e);return t.position.z=-34,t.renderOrder=-10,t}function $g(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(215,230,255,0.55)"),n.addColorStop(1,"rgba(140,170,220,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const s=new Cr(e);return s.colorSpace=Gt,s}function Qg(i=90){const e=new Float32Array(i*3),t=new Float32Array(i);for(let a=0;a<i;a++)e[a*3]=(Math.random()-.5)*26,e[a*3+1]=(Math.random()-.5)*34,e[a*3+2]=-14+Math.random()*22,t[a]=.018+Math.random()*.045;const n=new Tt;n.setAttribute("position",new un(e,3)),n.setAttribute("size",new un(t,1));const s=new Yc({map:$g(),color:11125992,size:.085,sizeAttenuation:!0,transparent:!0,opacity:.24,depthWrite:!1,blending:hs}),r=new tf(n,s);return r.renderOrder=-5,r}function jg(i=512){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d"),n=t.createImageData(i,i);let s=1337;const r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=new Float32Array(i);for(let l=0;l<i;l++)a[l]=r();for(let l=0;l<i;l++)for(let c=0;c<i;c++){const u=(r()-.5)*16,f=(a[l]-.5)*26,h=Math.sin((c*.14+l*.035)*Math.PI)*5,d=Ln.clamp(205+u+f+h,0,255),_=(l*i+c)*4;n.data[_]=d,n.data[_+1]=d,n.data[_+2]=d,n.data[_+3]=255}t.putImageData(n,0,0);const o=new Cr(e);return o.wrapS=Un,o.wrapT=Un,o.repeat.set(3,3),o.anisotropy=8,o.colorSpace=on,o}function e_(i=512){const e=new Float32Array(i*i);for(let o=0;o<i;o++)for(let l=0;l<i;l++){const c=Math.sin((l+o)*.036)*.5+.5,u=Math.sin((l-o)*.29)*.06,f=Math.sin(l*.93+o*1.71)*.02;e[o*i+l]=c*.6+u+f}const t=document.createElement("canvas");t.width=i,t.height=i;const n=t.getContext("2d"),s=n.createImageData(i,i),r=1.65;for(let o=0;o<i;o++)for(let l=0;l<i;l++){const c=e[o*i+(l-1+i)%i],u=e[o*i+(l+1)%i],f=e[(o-1+i)%i*i+l],h=e[(o+1)%i*i+l];let d=(c-u)*r,_=(f-h)*r;const y=1,m=Math.hypot(d,_,y);d/=m,_/=m;const p=(o*i+l)*4;s.data[p]=(d*.5+.5)*255,s.data[p+1]=(_*.5+.5)*255,s.data[p+2]=(y/m*.5+.5)*255,s.data[p+3]=255}n.putImageData(s,0,0);const a=new Cr(t);return a.wrapS=Un,a.wrapT=Un,a.repeat.set(2.2,2.2),a.anisotropy=8,a.colorSpace=on,a}function t_(i=512){const e=document.createElement("canvas");e.width=i,e.height=i;const t=e.getContext("2d");t.fillStyle="#b8b8b8",t.fillRect(0,0,i,i);const n=14;for(let r=-n;r<i+n;r+=n)for(let a=-n;a<i+n;a+=n){const o=Math.floor(r/n)%2*n*.5,l=a+o,c=t.createRadialGradient(l-2,r-2,1,l,r,n*.64);c.addColorStop(0,"rgba(255,255,255,0.32)"),c.addColorStop(.55,"rgba(135,135,135,0.2)"),c.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=c,t.beginPath(),t.arc(l,r,n*.64,0,Math.PI*2),t.fill()}const s=new Cr(e);return s.wrapS=Un,s.wrapT=Un,s.repeat.set(4,4),s.anisotropy=8,s.colorSpace=on,s}function n_(i){const e=jg(),t=e_(),n=t_(),s=i.capabilities.getMaxAnisotropy();for(const E of[e,t,n])E.anisotropy=Math.min(8,s);const r=new $t({color:14541544,metalness:1,roughness:.17,roughnessMap:e,normalMap:t,normalScale:new re(.22,.22),anisotropy:.55,anisotropyRotation:Math.PI*.25,clearcoat:.35,clearcoatRoughness:.18,envMapIntensity:1.3}),a=new $t({color:14081767,metalness:.84,roughness:.3,clearcoat:.5,clearcoatRoughness:.16,envMapIntensity:1.1,emissive:1318184,emissiveIntensity:.18}),o=new qc({color:13624052,transparent:!0,opacity:.1,blending:hs,depthWrite:!1}),l=new $t({color:13489630,metalness:1,roughness:.3,roughnessMap:e,normalMap:t,normalScale:new re(.38,.38),anisotropy:.5,anisotropyRotation:Math.PI*.25,clearcoat:.25,clearcoatRoughness:.22,envMapIntensity:1.15}),c=new $t({color:15199215,metalness:1,roughness:.07,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),u=new $t({color:11186876,metalness:1,roughness:.29,roughnessMap:e,anisotropy:.42,anisotropyRotation:Math.PI*.12,envMapIntensity:.95}),f=new $t({color:10134704,metalness:1,roughness:.28,roughnessMap:n,normalMap:n,normalScale:new re(.3,.3),envMapIntensity:1.1}),h=new $t({color:2237996,metalness:1,roughness:.3,envMapIntensity:.9}),d=new $t({color:14201450,metalness:1,roughness:.23,roughnessMap:e,anisotropy:.3,clearcoat:.25,clearcoatRoughness:.16,envMapIntensity:1.05}),_=new $t({color:13207914,metalness:1,roughness:.22,envMapIntensity:1}),y=new $t({color:2906790,metalness:1,roughness:.22,clearcoat:.55,clearcoatRoughness:.18,envMapIntensity:.95}),m=new $t({color:10687018,metalness:.05,roughness:.1,clearcoat:1,clearcoatRoughness:.04,emissive:5898768,emissiveIntensity:1.15,envMapIntensity:1.2}),p=new ou({color:15135210,emissive:12451824,emissiveIntensity:.4,roughness:.42,metalness:0}),w=new $t({color:16054525,metalness:0,roughness:.09,transmission:1,thickness:.85,ior:1.77,clearcoat:.35,clearcoatRoughness:.09,attenuationColor:new Ve(16514559),attenuationDistance:55,transparent:!0,depthWrite:!1,envMapIntensity:.5,side:vn}),A=w.clone();A.thickness=.3,A.attenuationDistance=70,A.roughness=.035;const M=new Ar({color:0,transparent:!0,opacity:.55,depthWrite:!1});return{silver:r,screwMetal:a,edgeLine:o,bridge:l,polished:c,titanium:u,rhodium:f,darkMetal:h,gold:d,roseGold:_,blued:y,ruby:m,lume:p,sapphire:w,sapphireCrystal:A,shadow:M,textures:{brushed:e,geneva:t,perlage:n}}}const Dt=Math.PI*2,sr=20,ji=3,es=6.5,ts=10.5,gc=15,_c=i=>Math.min(1,Math.max(0,i)),vc=i=>1-Math.pow(1-i,3),xc=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;let _a=5370206;function zt(){return _a=_a*1664525+1013904223>>>0,_a/4294967296}function fo(i,e,t,n=180){const s=[];for(let r=0;r<n;r++){const a=r/n*Dt,o=Math.cos(a),l=Math.sin(a),c=i*Math.sign(o)*Math.pow(Math.abs(o),2/t),u=e*Math.sign(l)*Math.pow(Math.abs(l),2/t);s.push(new re(c,u))}return s}function rr(i,e,t,n=180){return new En(fo(i,e,t,n))}function Ht(i,e,t=.025,n=3){const s=new Go(i,{depth:e,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:n,steps:1,curveSegments:16});return s.translate(0,0,-e/2),s.computeVertexNormals(),s}function Qt(i,e,t,n,s=28){const r=[];for(let a=0;a<s;a++){const o=-(a/s)*Dt;r.push(new re(e+Math.cos(o)*n,t+Math.sin(o)*n))}i.holes.push(new ri(r))}function us(i,e,t,n,s,r=.06,a=0){const o=new ri,l=n/2,c=s/2,u=Math.min(r,l,c),f=Math.cos(a),h=Math.sin(a),d=(_,y)=>new re(e+_*f-y*h,t+_*h+y*f);o.moveTo(...d(-l+u,-c).toArray()),o.lineTo(...d(l-u,-c).toArray()),o.absarc(...d(l-u,-c+u).toArray(),u,-Math.PI/2,0,!1),o.lineTo(...d(l,c-u).toArray()),o.absarc(...d(l-u,c-u).toArray(),u,0,Math.PI/2,!1),o.lineTo(...d(-l+u,c).toArray()),o.absarc(...d(-l+u,c-u).toArray(),u,Math.PI/2,Math.PI,!1),o.lineTo(...d(-l,-c+u).toArray()),o.absarc(...d(-l+u,-c+u).toArray(),u,Math.PI,Math.PI*1.5,!1),i.holes.push(o)}function Mc(i,e,t){const n=[],s=Dt/e,r=i-t,a=[[-.5,r],[-.34,r],[-.24,i],[.24,i],[.34,r],[.5,r]];for(let o=0;o<e;o++){const l=o*s;for(const[c,u]of a){const f=l+c*s;n.push(new re(Math.cos(f)*u,Math.sin(f)*u))}}return new En(n)}function Sc(i,e){const{radius:t,teeth:n=30,thickness:s=.1,material:r=i.silver,spokes:a=5,skeleton:o=!0,pinion:l=!0}=e,c=new gt,u=new gt;c.add(u);const f=Mc(t,n,Math.max(.035,t*.085));if(Qt(f,0,0,t*.17,22),o&&t>.34){const y=a,m=t*.54,p=t*.205;for(let w=0;w<y;w++){const A=w/y*Dt+Math.PI/y;Qt(f,Math.cos(A)*m,Math.sin(A)*m,p,20)}}const h=new Ne(Ht(f,s,Math.min(.02,s*.25),2),r);u.add(h);const d=new Ne(new St(t*.16,t*.16,s*1.45,20),i.polished);d.rotation.x=Math.PI/2,u.add(d);const _=new Ne(new St(Math.max(.028,t*.035),Math.max(.028,t*.035),.62,12),i.blued);if(_.rotation.x=Math.PI/2,u.add(_),l&&t>.45){const y=Mc(t*.2,8,t*.026);Qt(y,0,0,t*.045,10);const m=new Ne(Ht(y,.075,.008,2),i.silver);m.position.z=s*.95,u.add(m)}return{group:c,spin:u}}function va(i,e=.16,t=.08){const n=new gt,s=[],r=6,a=72;for(let d=0;d<a;d++){const _=d/a*Dt,y=e*(1+.085*Math.cos(_*r));s.push(new re(Math.cos(_)*y,Math.sin(_)*y))}const o=new En(s),l=new Ne(Ht(o,t,.012,2),i.screwMetal);l.position.z=t*.5,n.add(l);const c=new Ne(new oi(e*.97,e*.09,6,40),i.polished);c.position.z=t+.001,n.add(c);const u=new Ne(new No(e*.32,20),i.darkMetal);u.position.z=t+.004,n.add(u);const f=new Ne(new St(e*.085,e*.085,t*.5,10),i.polished);f.rotation.x=Math.PI/2,f.position.z=t+.012,n.add(f);const h=new Ne(new St(e*.34,e*.34,t*2.4,12),i.titanium);return h.rotation.x=Math.PI/2,h.position.z=-t*.8,n.add(h),n}function i_(i,e=.11){const t=new gt,n=new Ne(new oi(e*1.2,e*.27,8,26),i.gold);t.add(n);const s=new Ne(new St(e,e,e*.7,22),i.ruby);return s.rotation.x=Math.PI/2,t.add(s),t}function s_(i,e,t=130){const n=new zo(i.map(([o,l])=>new D(o,l,0)),!1,"centripetal"),s=[],r=[];for(let o=0;o<=t;o++){const l=o/t,c=n.getPoint(l),u=n.getTangent(l),f=-u.y,h=u.x,d=.72+.28*Math.sin(Math.PI*l),_=e*d/2;s.push(new re(c.x+f*_,c.y+h*_)),r.push(new re(c.x-f*_,c.y-h*_))}const a=new En;a.moveTo(s[0].x,s[0].y);for(let o=1;o<s.length;o++)a.lineTo(s[o].x,s[o].y);for(let o=r.length-1;o>=0;o--)a.lineTo(r[o].x,r[o].y);return a.closePath(),{shape:a,ends:[i[0],i[i.length-1]]}}function ar(i,e,t,n,s,r=null){const a=new gt,o=[e];r&&o.push(r);for(const l of o){const{shape:c,ends:u}=s_(l,t),f=Ht(c,n,.035,4),h=new Ne(f,i.bridge);h.add(new Uo(new Fo(f,28),i.edgeLine)),a.add(h);for(const[d,_]of u){const y=new Ne(new St(t*.74,t*.74,n*1.12,28),i.silver);y.rotation.x=Math.PI/2,y.position.set(d,_,0),a.add(y);const m=new Ne(new oi(t*.62,t*.09,8,32),i.polished);m.position.set(d,_,n*.68),a.add(m)}}return a.position.z=s,a}function xa(i,e,t,n,s,r={}){const a=new gt,{seconds:o=!1}=r;if(o){const l=new Ne(new tn(t,e,.028),i.polished);l.position.y=e*.5-.18,a.add(l);const c=new Ne(new St(t*2.6,t*2.6,.032,24),i.polished);c.rotation.x=Math.PI/2,c.position.y=-.26,a.add(c);const u=new Ne(new tn(t*1.2,.28,.034),i.lume);u.position.y=e-.14,a.add(u)}else{const l=new En;l.moveTo(-t*.5,-.2),l.lineTo(t*.5,-.2),l.lineTo(t*.44,e*.4),l.lineTo(t*.2,e*.86),l.lineTo(0,e),l.lineTo(-t*.2,e*.86),l.lineTo(-t*.44,e*.4),l.closePath();const c=new ri,u=e*.64,f=.12,h=t*.17;c.moveTo(-h,f),c.lineTo(h,f),c.lineTo(h*.72,u),c.lineTo(0,u+t*.55),c.lineTo(-h*.72,u),c.closePath(),l.holes.push(c);const d=new Ne(Ht(l,.05,.014,3),i.silver);a.add(d);const _=new Uo(new Fo(d.geometry,30),i.edgeLine);d.add(_);const y=new Ne(new tn(t*.24,e*.14,.022),i.lume);y.position.set(0,e*.79,.035),a.add(y);const m=new Ne(new St(t*.62,t*.62,.055,24),i.polished);m.rotation.x=Math.PI/2,a.add(m)}return a.rotation.z=n,a.position.z=s,a}function r_(i,e,t){const n=new Ne(new tn(.055,t,.035),i.lume);return n.position.set(3.48*Math.sin(e),4.24*Math.cos(e),.892),n.rotation.z=-e,n}function yc(i,e,t,n,s,r,a){const o=[],l=e*80;for(let h=0;h<=l;h++){const d=h/l,_=d*e*Dt,y=t+(n-t)*d;o.push(new D(Math.cos(_)*y,Math.sin(_)*y,0))}const c=new zo(o),u=new Ho(c,420,s,5,!1),f=new Ne(u,a||i.blued);return f.position.z=r,f}function a_(i){const e=new En;e.absarc(0,0,3,Math.PI*.5,Math.PI*1.5,!1),e.absarc(0,0,1.95,Math.PI*1.5,Math.PI*.5,!0),e.closePath(),Qt(e,-2.48,.55,.33,22),Qt(e,-2.48,-.55,.33,22),us(e,-1.85,1.08,.72,.22,.08,-.65),us(e,-1.85,-1.08,.72,.22,.08,.65);const t=new gt,n=new gt;t.add(n);const s=new Ne(Ht(e,.085,.02,3),i.titanium);n.add(s);const r=new En;r.absarc(0,0,3,Math.PI*.62,Math.PI*1.38,!1),r.absarc(0,0,2.4,Math.PI*1.38,Math.PI*.62,!0),r.closePath(),us(r,-2.72,0,.2,.6,.08,Math.PI/2);const a=new Ne(Ht(r,.06,.012,2),i.roseGold);a.position.z=.075,n.add(a);const o=new Ne(new St(.42,.42,.18,32),i.polished);return o.rotation.x=Math.PI/2,n.add(o),{group:t,spin:n}}function o_(i){const e=new gt;e.scale.setScalar(.9);const t=[],n=[],s=new Dn,r=new Dn;function a(S,g={}){const L={object:S,basePosition:S.position.clone(),baseQuaternion:S.quaternion.clone(),direction:new D(...g.direction||[0,0,1]),delay:g.delay??zt()*.8,spinAxis:new D(zt()-.5,zt()-.5,zt()-.5).normalize(),spinSpeed:g.spinSpeed??.32+zt()*.62,phase:zt()*Dt,spinQuaternion:new Dn,fadeMaterial:g.fadeTo!=null?S.material:null,fadeTo:g.fadeTo??1};return t.push(L),L}function o(S,g){return e.add(S),a(S,g),S}const l=rr(3.98,4.79,3.35,200),c=fo(3.61,4.4,3.35,200).reverse();l.holes.push(new ri(c));const u=i.sapphire.clone(),f=new Ne(Ht(l,2.14,.075,4),u);o(f,{direction:[0,.02,-2.8],delay:.12,spinSpeed:.2,fadeTo:.42});const h=rr(3.9,4.7,3.35,200),d=i.sapphireCrystal.clone(),_=new Ne(Ht(h,.17,.04,3),d);_.position.z=1.05,o(_,{direction:[2.5,1.8,1.45],delay:.04,spinSpeed:.38,fadeTo:.05});const y=i.sapphireCrystal.clone(),m=new Ne(Ht(h,.15,.035,3),y);m.position.z=-1,o(m,{direction:[.45,-.3,-4],delay:.26,spinSpeed:.26,fadeTo:.12}),[[-1.85,4.38,.16,1],[1.85,4.38,-.16,1],[-1.85,-4.38,Math.PI-.16,-1],[1.85,-4.38,Math.PI+.16,-1]].forEach(([S,g,L,z],k)=>{const j=new En;j.moveTo(-.34,-.42),j.bezierCurveTo(-.4,.08,-.28,.52,0,.62),j.bezierCurveTo(.28,.52,.4,.08,.34,-.42),j.lineTo(.13,-.45),j.bezierCurveTo(.14,-.1,.09,.16,0,.2),j.bezierCurveTo(-.09,.16,-.14,-.1,-.13,-.45),j.closePath();const ce=new Ne(Ht(j,.46,.05,3),i.bridge);ce.position.set(S,g,-.02),ce.rotation.z=L,o(ce,{direction:[Math.sign(S)*.9,z*(1.3+k*.06),-1.1-k*.22],delay:.13+k*.035,spinSpeed:.4})});const w=new gt,A=new Ne(new St(.36,.4,.42,36),i.titanium);A.rotation.z=Math.PI/2,w.add(A);const M=new Ne(new St(.36,.36,.07,36),i.polished);M.rotation.z=Math.PI/2,M.position.x=.23,w.add(M);for(let S=0;S<18;S++){const g=new Ne(new tn(.47,.045,.07),i.darkMetal),L=S/18*Dt;g.position.set(0,Math.cos(L)*.385,Math.sin(L)*.385),g.rotation.x=-L,w.add(g)}w.position.set(4.16,0,0),o(w,{direction:[2,.12,1.1],delay:.18,spinSpeed:.5});const E=[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5];for(let S=0;S<E.length;S++){const g=Ln.degToRad(E[S]),L=3.73*Math.sin(g),z=4.51*Math.cos(g),k=va(i,.235,.085);k.position.set(L,z,1.142),k.rotation.z=zt()*Dt;const j=new D(L,z,0).normalize().multiplyScalar(1.45);j.z=1.7+zt()*1.6,j.x*=1.5,j.y*=1.5,o(k,{direction:j.toArray(),delay:.08+S*.036,spinSpeed:.5+zt()*.4})}const b=rr(3.57,4.35,3.35,180),C=fo(3.3,4.08,3.35,180).reverse();b.holes.push(new ri(C));const v=new gt,T=new Ne(Ht(b,.07,.018,3),i.titanium);v.add(T);for(let S=0;S<12;S++){const g=S/12*Dt;v.add(r_(i,g,S%3===0?.38:.24))}v.position.z=.82,o(v,{direction:[1.45,1.55,1.25],delay:.1,spinSpeed:.3});const R=rr(3.34,4.14,3.3,180);Qt(R,0,2.48,1.03,38),Qt(R,.1,.25,.52,30),Qt(R,-1.92,1.84,.46,26),Qt(R,2.04,1.65,.4,26),Qt(R,-1.92,-1.23,.43,26),Qt(R,1.07,-1.55,.36,24),Qt(R,0,-2.74,.92,34),us(R,-1.18,2.62,.5,.18,.06,.5),us(R,1.44,2.78,.46,.16,.06,-.4);const I=Ht(R,.18,.03,3),O=new Ne(I,i.rhodium);O.add(new Uo(new Fo(I,26),i.edgeLine)),O.position.z=-.55,o(O,{direction:[-.3,-1.55,-5],delay:.2,spinSpeed:.22});const G=a_(i);G.group.position.z=-.93,o(G.group,{direction:[.35,-.2,-5.4],delay:.3,spinSpeed:.18});const N=[];N.push(ar(i,[[-2.92,1.98],[-2.42,3.06],[-1.42,3.52],[0,3.24],[1.42,3.52],[2.42,3.06],[2.92,1.98]],.44,.14,.44)),N.push(ar(i,[[.18,1.22],[1.12,1.46],[2.22,1.02],[2.86,.22],[2.56,-.68],[1.66,-1]],.38,.13,.4)),N.push(ar(i,[[-.24,1.22],[-1.15,1.66],[-2.06,1.4],[-2.72,.72]],.38,.13,.36,[[-2.52,-.22],[-2.8,-.86],[-2.16,-1.62]])),N.push(ar(i,[[-2.6,-1.4],[-1.4,-1.98],[.1,-1.82],[1.6,-2],[2.5,-1.42]],.4,.14,.46,[[2.4,-1.62],[1.75,-2.25],[1.05,-2.72]]));const B=[[.45,2.65,2.3],[2.85,.82,1.55],[-2.85,1,1.25],[.18,-3,1.95]];N.forEach((S,g)=>{o(S,{direction:B[g],delay:.16+g*.03,spinSpeed:.34+g*.06})});const K=[{name:"barrel",x:0,y:2.46,z:.02,radius:1.42,teeth:48,material:i.silver,thickness:.13,speed:.07},{name:"center",x:.02,y:.16,z:.16,radius:.88,teeth:36,material:i.silver,thickness:.11,speed:-.14},{name:"third",x:1.12,y:.9,z:.24,radius:.7,teeth:30,material:i.gold,thickness:.1,speed:.22},{name:"fourth",x:-1.16,y:.42,z:.28,radius:.62,teeth:28,material:i.silver,thickness:.1,speed:-.3},{name:"escape",x:1.02,y:-1.55,z:.38,radius:.4,teeth:20,material:i.gold,thickness:.085,speed:.8},{name:"upperLeft",x:-1.93,y:1.87,z:.12,radius:.55,teeth:24,material:i.silver,thickness:.09,speed:-.16},{name:"upperRight",x:2.05,y:1.66,z:.2,radius:.46,teeth:22,material:i.gold,thickness:.085,speed:.36},{name:"lowerLeft",x:-1.95,y:-1.24,z:.14,radius:.52,teeth:24,material:i.silver,thickness:.09,speed:-.24},{name:"lowerRight",x:1.28,y:-2.52,z:.22,radius:.43,teeth:20,material:i.silver,thickness:.08,speed:.44}],W=[[.62,2.1,1.5],[.05,.05,3],[2.25,.62,2.2],[-2.35,.52,1.55],[2.2,-1.3,2.8],[-2.45,1,1.05],[2.5,1.42,.72],[-2.4,-1.48,1.22],[2.05,-2.2,2.4]];K.forEach((S,g)=>{const L=Sc(i,{radius:S.radius,teeth:S.teeth,thickness:S.thickness,material:S.material,spokes:S.radius>.6?5:4,pinion:S.name!=="escape"&&S.name!=="lowerRight"});L.group.position.set(S.x,S.y,S.z),o(L.group,{direction:W[g],delay:.18+g*.025,spinSpeed:.42+zt()*.4}),n.push({spin:L.spin,speed:S.speed,angle:zt()*Dt})});const ie=new gt,Y=new Ne(new St(.98,.98,.19,40,1,!0),i.gold);Y.rotation.x=Math.PI/2,ie.add(Y);const Q=new Ne(new St(.98,.98,.05,40),i.titanium);Q.rotation.x=Math.PI/2,Q.position.z=-.09,ie.add(Q);const ne=yc(i,5.5,.18,.84,.012,.1,i.blued);ie.add(ne),ie.position.set(0,2.46,.06),o(ie,{direction:[.35,1.75,.75],delay:.24,spinSpeed:.32});const Te=Sc(i,{radius:.58,teeth:22,thickness:.08,material:i.gold,spokes:4,pinion:!1});Te.group.position.set(0,2.46,.22),o(Te.group,{direction:[-.4,1.18,2.1],delay:.28,spinSpeed:.55}),n.push({spin:Te.spin,speed:-.5,angle:0});const pe=new En;pe.moveTo(-.07,-.16),pe.lineTo(.07,-.16),pe.lineTo(.1,.32),pe.lineTo(.34,.52),pe.lineTo(.28,.63),pe.lineTo(.03,.46),pe.lineTo(-.03,.46),pe.lineTo(-.28,.63),pe.lineTo(-.34,.52),pe.lineTo(-.1,.32),pe.closePath();const je=new Ne(Ht(pe,.06,.012,2),i.polished);je.position.set(.46,-1.72,.44),je.rotation.z=-.5,o(je,{direction:[1,-1.65,2.6],delay:.3,spinSpeed:.7});const Xe=new gt,qe=new gt;Xe.add(qe);const Z=new Ne(new oi(.87,.035,10,80),i.silver);qe.add(Z);for(let S=0;S<3;S++){const g=new Ne(new tn(.87,.055,.055),i.silver);g.position.x=.435;const L=new gt;L.rotation.z=S/3*Dt,L.add(g),qe.add(L)}const ee=new Ne(new St(.17,.17,.13,24),i.gold);ee.rotation.x=Math.PI/2,qe.add(ee);for(let S=0;S<3;S++){const g=va(i,.055,.035),L=S/3*Dt+.5;g.position.set(Math.cos(L)*.75,Math.sin(L)*.75,.04),qe.add(g)}Xe.position.set(0,-2.74,.12),o(Xe,{direction:[.6,-2.4,1.35],delay:.22,spinSpeed:.5});const de=new gt,De=new gt;de.add(De);const ye=new Ne(new oi(.72,.055,12,96),i.gold);De.add(ye);for(let S=0;S<4;S++){const g=new Ne(new tn(.72,.045,.045),i.gold);g.position.x=.36;const L=new gt;L.rotation.z=S/4*Dt+Math.PI/4,L.add(g),De.add(L)}for(let S=0;S<8;S++){const g=S/8*Dt,L=new Ne(new St(.05,.05,.09,12),i.gold);L.position.set(Math.cos(g)*.72,Math.sin(g)*.72,0),De.add(L)}const Be=new Ne(new St(.11,.11,.15,20),i.polished);Be.rotation.x=Math.PI/2,De.add(Be);const it=yc(i,5,.09,.52,.009,.09,i.blued);De.add(it),de.position.set(0,-2.74,.34),o(de,{direction:[.05,-2.75,3.15],delay:.26,spinSpeed:.62}),[[0,2.46,.58],[.02,.16,.55],[1.12,.9,.52],[-1.16,.42,.5],[1.02,-1.55,.56],[-1.93,1.87,.45],[2.05,1.66,.48],[-1.95,-1.24,.45],[0,-2.74,.68],[-.86,-2.52,.55],[.86,-2.52,.55]].forEach(([S,g,L],z)=>{const k=i_(i,z>=8?.075:.095);k.position.set(S,g,L);const j=new D(S,g,0);j.lengthSq()<.01&&j.set(.2,.2,0),j.normalize().multiplyScalar(1.85),j.z=2.1+zt()*1.1,o(k,{direction:j.toArray(),delay:.34+z*.015,spinSpeed:.8})}),[[-2.42,3.06],[-1.42,3.52],[1.42,3.52],[2.42,3.06],[1.12,1.46],[2.86,.22],[-1.2,1.58],[-2.9,.4],[-1.5,-1.94],[1.5,-1.94],[1.7,-2.35],[0,-1.8]].forEach(([S,g],L)=>{const z=va(i,.105,.05);z.position.set(S,g,.59),z.rotation.z=zt()*Dt;const k=new D(S,g,0).normalize().multiplyScalar(1.15);k.z=2.4+zt()*1.3,o(z,{direction:k.toArray(),delay:.35+L*.012,spinSpeed:.72})});const oe=-Ln.degToRad((10+10/60)*30),le=-Ln.degToRad((10+35/60)*6),he=-Ln.degToRad(210),Fe=xa(i,2.15,.5,oe,.84);Fe.position.set(0,.16,.84),Fe.rotation.z=oe,o(Fe,{direction:[-1.75,1.95,3.6],delay:.06,spinSpeed:.58});const Pe=xa(i,2.92,.4,le,.87);Pe.position.set(0,.16,.87),Pe.rotation.z=le,o(Pe,{direction:[1.85,2.2,3.85],delay:.05,spinSpeed:.52});const Oe=xa(i,3.2,.035,he,.9,{seconds:!0});Oe.position.set(0,.16,.9),Oe.rotation.z=he,o(Oe,{direction:[.55,2.85,4.2],delay:.03,spinSpeed:.66});const He=new Ne(new St(.18,.2,.075,32),i.polished);He.rotation.x=Math.PI/2,He.position.set(0,.16,.925),o(He,{direction:[.1,.05,4.5],delay:.02,spinSpeed:.7});let P=0;function nt(S,g,L,z){const k=(g%sr+sr)%sr;let j="idle",ce=0;k>=ji&&k<es?(j="explode",ce=(k-ji)/(es-ji)):k>=es&&k<ts?(j="float",ce=(k-es)/(ts-es)):k>=ts&&k<gc&&(j="assemble",ce=(k-ts)/(gc-ts)),P=j==="explode"?vc(ce):j==="float"?1:j==="assemble"?1-xc(ce):0;for(const X of t){let ue=0;if(j==="explode"){const fe=X.delay*.28;ue=vc(_c((ce-fe)/(1-fe)))}else if(j==="float")ue=1;else if(j==="assemble"){const fe=X.delay*.22;ue=1-xc(_c((ce-fe)/(1-fe)))}if((j==="explode"||j==="float")&&ue>.001)r.setFromAxisAngle(X.spinAxis,X.spinSpeed*L),X.spinQuaternion.multiply(r).normalize();else if(ue<=1e-4)X.spinQuaternion.copy(s);else{const fe=1-Math.exp(-L*7);X.spinQuaternion.slerp(s,fe)}X.object.position.copy(X.basePosition).addScaledVector(X.direction,ue),ue>0&&(X.object.position.x+=Math.sin(S*.52+X.phase)*.055*ue,X.object.position.y+=Math.cos(S*.44+X.phase*1.3)*.05*ue,X.object.position.z+=Math.sin(S*.37+X.phase*.7)*.04*ue),X.object.quaternion.copy(X.baseQuaternion).multiply(X.spinQuaternion),X.fadeMaterial&&(X.fadeMaterial.opacity=1-ue*(1-X.fadeTo))}for(const X of n)X.angle+=L*X.speed*(1+P*1.8),X.spin.rotation.z=X.angle;De.rotation.z=Math.sin(S*11.4)*.52,qe.rotation.z=S*.42+Math.sin(S*.7)*.04,G.spin.rotation.z=-S*.22+Math.sin(S*.53)*.14,z&&(G.spin.position.x=-z.x*.08,G.spin.position.y=z.y*.06)}function Je(S){return ji-.001}return{group:e,parts:t,update:nt,trigger:Je,getExplosionAmount:()=>P,cycle:sr,explodeStart:ji}}const gr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const l_=new Pr(-1,1,1,-1,0,1);class c_ extends Tt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const u_=new c_;class Ir{constructor(e){this._mesh=new Ne(u_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,l_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class h_ extends fi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hi.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ir(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ec extends fi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class f_ extends fi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class d_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new h_(gr),this.copyPass.material.blending=cn,this.timer=new Yf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ec!==void 0&&(a instanceof Ec?n=!0:a instanceof f_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p_ extends fi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const or={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class m_ extends fi{constructor(e,t,n){super(),this.scene=e,this.camera=t;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Ut(1,1,{minFilter:yt,magFilter:yt,type:Bt}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new lu,this._materialDepth.depthPacking=nh,this._materialDepth.blending=cn;const o=Hi.clone(or.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new Ct({defines:Object.assign({},or.defines),uniforms:o,vertexShader:or.vertexShader,fragmentShader:or.fragmentShader}),this.uniforms=o,this._fsQuad=new Ir(this.materialBokeh),this._oldClearColor=new Ve}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);const s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const g_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vi extends fi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,a,{type:Bt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ut(r,a,{type:Bt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new Ut(r,a,{type:Bt,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=g_;this.highPassUniforms=Hi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hi.clone(gr.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,premultipliedAlpha:!0,blending:hs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Ar,this._fsQuad=new Ir(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ct({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Vi.BlurDirectionX=new re(1,0);Vi.BlurDirectionY=new re(0,1);const lr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class __ extends fi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Hi.clone(lr.uniforms),this.material=new au({name:lr.name,uniforms:this.uniforms,vertexShader:lr.vertexShader,fragmentShader:lr.fragmentShader}),this._fsQuad=new Ir(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qe.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===go?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===So?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function v_(i,e,t,n={}){const s=new d_(i);s.setPixelRatio(i.getPixelRatio());const r=new p_(e,t);s.addPass(r);const a=new m_(e,t,{focus:34.5,aperture:.00105,maxblur:.0034});n.depthOfField!==!1&&s.addPass(a);const o=new Vi(new re(window.innerWidth,window.innerHeight),.045,.4,1.25);n.bloom===!0&&s.addPass(o);const l=new __;s.addPass(l);function c(u,f){s.setPixelRatio(i.getPixelRatio()),s.setSize(u,f),a.setSize(u,f),o.setSize(u,f)}return{composer:s,bokeh:a,bloom:o,resize:c,setDepthOfField(u){const f=s.passes.includes(a);u&&!f&&s.insertPass(a,1),!u&&f&&s.removePass(a)}}}const ko=document.getElementById("stage"),Xt=new Yg({canvas:ko,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0});Xt.outputColorSpace=Gt;Xt.toneMapping=Tr;Xt.toneMappingExposure=1.36;Xt.setClearColor(0,1);const x_=window.devicePixelRatio||1,vu=window.matchMedia("(pointer: coarse)").matches;let Ii=Math.min(x_,vu?2:1.7);Xt.setPixelRatio(Ii);Xt.setSize(window.innerWidth,window.innerHeight,!1);const Fn=new Xh;Fn.background=new Ve(0);function xu(){return window.innerWidth/window.innerHeight>1.25?30.5:34.5}const xn=new Vt(33,window.innerWidth/window.innerHeight,.1,140);xn.position.set(0,0,xu());Fn.environment=Zg(Xt);Fn.environmentIntensity=1;Jg(Fn);const M_=Kg();Fn.add(M_);const po=Qg(vu?58:90);Fn.add(po);const S_=n_(Xt),kt=o_(S_);kt.group.position.y=.12;Fn.add(kt.group);const li=v_(Xt,Fn,xn,{bloom:!1}),gn=new re(0,0);let Wo=0,Xo=0;function Mu(i,e){Wo=i/window.innerWidth*2-1,Xo=e/window.innerHeight*2-1}window.addEventListener("pointermove",i=>{Mu(i.clientX,i.clientY)},{passive:!0});window.addEventListener("pointerdown",i=>{Mu(i.clientX,i.clientY)},{passive:!0});window.addEventListener("deviceorientation",i=>{i.gamma==null||i.beta==null||(Wo=Ln.clamp(i.gamma/32,-1,1),Xo=Ln.clamp((i.beta-45)/36,-1,1))});const qo=new Jf;let Xn=0,ki=0,ns=0,Ss=!1;const bc=new URLSearchParams(window.location.search);if(bc.has("t")){const i=Number(bc.get("t"));Number.isFinite(i)&&(ki=i)}function Yo(){ki=kt.explodeStart-.001}function y_(i){Number.isFinite(i)&&(ki=(i%kt.cycle+kt.cycle)%kt.cycle,Xn=i)}let Pi=null;ko.addEventListener("pointerdown",i=>{Pi={x:i.clientX,y:i.clientY,at:performance.now()}});ko.addEventListener("pointerup",i=>{if(!Pi)return;const e=Math.hypot(i.clientX-Pi.x,i.clientY-Pi.y),t=performance.now()-Pi.at;Pi=null,e<12&&t<450&&Yo()});window.addEventListener("keydown",i=>{(i.code==="Space"||i.code==="Enter")&&(i.preventDefault(),Yo())});document.addEventListener("visibilitychange",()=>{Ss=document.hidden,Ss||qo.getDelta()});const Tc=new D(0,.12,0);let wc=0,Ma=0,Ac=!1;function E_(i){if(Ac||(wc+=i,Ma++,Ma<120))return;wc/Ma>.026&&Ii>1.05&&(Ii=Math.max(1,Ii*.78),Xt.setPixelRatio(Ii),Xt.setSize(window.innerWidth,window.innerHeight,!1),li.resize(window.innerWidth,window.innerHeight)),Ac=!0}function Su(i,e=!0){e&&(Xn+=i,ki+=i);const t=1-Math.exp(-i*3.4);gn.x+=(Wo-gn.x)*t,gn.y+=(Xo-gn.y)*t;const n=20,s=Math.sin(Xn/n*Math.PI*2),r=Math.sin(Xn/n*Math.PI*2+1.15);kt.update(Xn,ki,i,gn);const a=kt.getExplosionAmount();i>0?ns+=(a-ns)*(1-Math.exp(-i*4.2)):ns=a,kt.group.rotation.y=.045+s*.21+gn.x*.26,kt.group.rotation.x=r*.095+gn.y*.14,kt.group.rotation.z=Math.sin(Xn/n*Math.PI*2-.6)*.012-gn.x*.028,xn.position.x=gn.x*1.25,xn.position.y=-gn.y*.9+.1,xn.position.z=xu()-s*.75+ns*4,xn.lookAt(Tc);const o=xn.position.distanceTo(Tc);li.bokeh.uniforms.focus.value=o,li.bokeh.uniforms.aperture.value=.00112+ns*3e-4,po.rotation.z=Xn*.006,po.position.y=Math.sin(Xn*.07)*.3}function b_(){Su(0,!1),li.composer.render(0),document.body.classList.add("ready"),document.body.dataset.ready="true"}function yu(){if(requestAnimationFrame(yu),Ss)return;const i=Math.min(qo.getDelta(),.05);Su(i,!0),li.composer.render(i),E_(i),document.body.classList.contains("ready")||(document.body.classList.add("ready"),document.body.dataset.ready="true")}function Eu(){const i=window.innerWidth,e=window.innerHeight;xn.aspect=i/e,xn.updateProjectionMatrix(),Xt.setPixelRatio(Ii),Xt.setSize(i,e,!1),li.resize(i,e)}window.addEventListener("resize",Eu);window.addEventListener("orientationchange",()=>setTimeout(Eu,200));window.__wallpaper={trigger:Yo,seek:y_,pause:()=>{Ss=!0},resume:()=>{Ss=!1,qo.getDelta()},renderOnce:b_,getState:()=>({cycleTime:ki%kt.cycle,explosion:kt.getExplosionAmount(),ready:document.body.dataset.ready==="true"}),watch:kt,post:li,renderer:Xt,scene:Fn,camera:xn};yu();
