!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);
/**
 * dropload
 * 西门(http://ons.me/526.html)
 * 0.9.1(161205)
 */
!function(a){"use strict";function g(a){a.touches||(a.touches=a.originalEvent.touches)}function h(a,b){b._startY=a.touches[0].pageY,b.touchScrollTop=b.$scrollArea.scrollTop()}function i(b,c){c._curY=b.touches[0].pageY,c._moveY=c._curY-c._startY,c._moveY>0?c.direction="down":c._moveY<0&&(c.direction="up");var d=Math.abs(c._moveY);""!=c.opts.loadUpFn&&c.touchScrollTop<=0&&"down"==c.direction&&!c.isLockUp&&(b.preventDefault(),c.$domUp=a("."+c.opts.domUp.domClass),c.upInsertDOM||(c.$element.prepend('<div class="'+c.opts.domUp.domClass+'"></div>'),c.upInsertDOM=!0),n(c.$domUp,0),d<=c.opts.distance?(c._offsetY=d,c.$domUp.html(c.opts.domUp.domRefresh)):d>c.opts.distance&&d<=2*c.opts.distance?(c._offsetY=c.opts.distance+.5*(d-c.opts.distance),c.$domUp.html(c.opts.domUp.domUpdate)):c._offsetY=c.opts.distance+.5*c.opts.distance+.2*(d-2*c.opts.distance),c.$domUp.css({height:c._offsetY}))}function j(b){var c=Math.abs(b._moveY);""!=b.opts.loadUpFn&&b.touchScrollTop<=0&&"down"==b.direction&&!b.isLockUp&&(n(b.$domUp,300),c>b.opts.distance?(b.$domUp.css({height:b.$domUp.children().height()}),b.$domUp.html(b.opts.domUp.domLoad),b.loading=!0,b.opts.loadUpFn(b)):b.$domUp.css({height:"0"}).on("webkitTransitionEnd mozTransitionEnd transitionend",function(){b.upInsertDOM=!1,a(this).remove()}),b._moveY=0)}function k(a){""!=a.opts.loadDownFn&&a.opts.autoLoad&&a._scrollContentHeight-a._threshold<=a._scrollWindowHeight&&m(a)}function l(a){a._scrollContentHeight=a.opts.scrollArea==b?e.height():a.$element[0].scrollHeight}function m(a){a.direction="up",a.$domDown.html(a.opts.domDown.domLoad),a.loading=!0,a.opts.loadDownFn(a)}function n(a,b){a.css({"-webkit-transition":"all "+b+"ms",transition:"all "+b+"ms"})}var f,b=window,c=document,d=a(b),e=a(c);a.fn.dropload=function(a){return new f(this,a)},f=function(a,b){var c=this;c.$element=a,c.upInsertDOM=!1,c.loading=!1,c.isLockUp=!1,c.isLockDown=!1,c.isData=!0,c._scrollTop=0,c._threshold=0,c.init(b)},f.prototype.init=function(f){var l=this;l.opts=a.extend(!0,{},{scrollArea:l.$element,domUp:{domClass:"dropload-up",domRefresh:'<div class="dropload-refresh">↓下拉刷新</div>',domUpdate:'<div class="dropload-update">↑释放更新</div>',domLoad:'<div class="dropload-load"><span class="loading"></span>加载中...</div>'},domDown:{domClass:"dropload-down",domRefresh:'<div class="dropload-refresh">↑上拉加载更多</div>',domLoad:'<div class="dropload-load"><span class="loading"></span>加载中...</div>',domNoData:'<div class="dropload-noData">暂无数据</div>'},autoLoad:!0,distance:50,threshold:"",loadUpFn:"",loadDownFn:""},f),""!=l.opts.loadDownFn&&(l.$element.append('<div class="'+l.opts.domDown.domClass+'">'+l.opts.domDown.domRefresh+"</div>"),l.$domDown=a("."+l.opts.domDown.domClass)),l._threshold=l.$domDown&&""===l.opts.threshold?Math.floor(1*l.$domDown.height()/3):l.opts.threshold,l.opts.scrollArea==b?(l.$scrollArea=d,l._scrollContentHeight=e.height(),l._scrollWindowHeight=c.documentElement.clientHeight):(l.$scrollArea=l.opts.scrollArea,l._scrollContentHeight=l.$element[0].scrollHeight,l._scrollWindowHeight=l.$element.height()),k(l),d.on("resize",function(){clearTimeout(l.timer),l.timer=setTimeout(function(){l._scrollWindowHeight=l.opts.scrollArea==b?b.innerHeight:l.$element.height(),k(l)},150)}),l.$element.on("touchstart",function(a){l.loading||(g(a),h(a,l))}),l.$element.on("touchmove",function(a){l.loading||(g(a,l),i(a,l))}),l.$element.on("touchend",function(){l.loading||j(l)}),l.$scrollArea.on("scroll",function(){l._scrollTop=l.$scrollArea.scrollTop(),""!=l.opts.loadDownFn&&!l.loading&&!l.isLockDown&&l._scrollContentHeight-l._threshold<=l._scrollWindowHeight+l._scrollTop&&m(l)})},f.prototype.lock=function(a){var b=this;void 0===a?"up"==b.direction?b.isLockDown=!0:"down"==b.direction?b.isLockUp=!0:(b.isLockUp=!0,b.isLockDown=!0):"up"==a?b.isLockUp=!0:"down"==a&&(b.isLockDown=!0,b.direction="up")},f.prototype.unlock=function(){var a=this;a.isLockUp=!1,a.isLockDown=!1,a.direction="up"},f.prototype.noData=function(a){var b=this;void 0===a||1==a?b.isData=!1:0==a&&(b.isData=!0)},f.prototype.resetload=function(){var b=this;"down"==b.direction&&b.upInsertDOM?b.$domUp.css({height:"0"}).on("webkitTransitionEnd mozTransitionEnd transitionend",function(){b.loading=!1,b.upInsertDOM=!1,a(this).remove(),l(b)}):"up"==b.direction&&(b.loading=!1,b.isData?(b.$domDown.html(b.opts.domDown.domRefresh),l(b),k(b)):b.$domDown.html(b.opts.domDown.domNoData))}}(window.Zepto||window.jQuery);
/** 
 * 和PHP一样的时间戳格式化函数 
 * @param {string} format 格式 
 * @param {int} timestamp 要格式化的时间 默认为当前时间 
 * @return {string}   格式化的时间字符串 
 */
function date(format, timestamp) {
  var a, jsdate = ((timestamp) ? new Date(timestamp * 1000) : new Date());
  var pad = function (n, c) {
    if ((n = n + "").length < c) {
      return new Array(++c - n.length).join("0") + n;
    } else {
      return n;
    }
  };
  var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var txt_ordin = { 1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st" };
  var txt_months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var f = {
    // Day 
    d: function () { return pad(f.j(), 2) },
    D: function () { return f.l().substr(0, 3) },
    j: function () { return jsdate.getDate() },
    l: function () { return txt_weekdays[f.w()] },
    N: function () { return f.w() + 1 },
    S: function () { return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th' },
    w: function () { return jsdate.getDay() },
    z: function () { return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0 },

    // Week 
    W: function () {
      var a = f.z(), b = 364 + f.L() - a;
      var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;
      if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b) {
        return 1;
      } else {
        if (a <= 2 && nd >= 4 && a >= (6 - nd)) {
          nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
          return date("W", Math.round(nd2.getTime() / 1000));
        } else {
          return (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);
        }
      }
    },

    // Month 
    F: function () { return txt_months[f.n()] },
    m: function () { return pad(f.n(), 2) },
    M: function () { return f.F().substr(0, 3) },
    n: function () { return jsdate.getMonth() + 1 },
    t: function () {
      var n;
      if ((n = jsdate.getMonth() + 1) == 2) {
        return 28 + f.L();
      } else {
        if (n & 1 && n < 8 || !(n & 1) && n > 7) {
          return 31;
        } else {
          return 30;
        }
      }
    },

    // Year 
    L: function () { var y = f.Y(); return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0 },
    //o not supported yet 
    Y: function () { return jsdate.getFullYear() },
    y: function () { return (jsdate.getFullYear() + "").slice(2) },

    // Time 
    a: function () { return jsdate.getHours() > 11 ? "pm" : "am" },
    A: function () { return f.a().toUpperCase() },
    B: function () {
      // peter paul koch: 
      var off = (jsdate.getTimezoneOffset() + 60) * 60;
      var theSeconds = (jsdate.getHours() * 3600) + (jsdate.getMinutes() * 60) + jsdate.getSeconds() + off;
      var beat = Math.floor(theSeconds / 86.4);
      if (beat > 1000) beat -= 1000;
      if (beat < 0) beat += 1000;
      if ((String(beat)).length == 1) beat = "00" + beat;
      if ((String(beat)).length == 2) beat = "0" + beat;
      return beat;
    },
    g: function () { return jsdate.getHours() % 12 || 12 },
    G: function () { return jsdate.getHours() },
    h: function () { return pad(f.g(), 2) },
    H: function () { return pad(jsdate.getHours(), 2) },
    i: function () { return pad(jsdate.getMinutes(), 2) },
    s: function () { return pad(jsdate.getSeconds(), 2) },
    //u not supported yet 

    // Timezone 
    //e not supported yet 
    //I not supported yet 
    O: function () {
      var t = pad(Math.abs(jsdate.getTimezoneOffset() / 60 * 100), 4);
      if (jsdate.getTimezoneOffset() > 0) t = "-" + t; else t = "+" + t;
      return t;
    },
    P: function () { var O = f.O(); return (O.substr(0, 3) + ":" + O.substr(3, 2)) },
    //T not supported yet 
    //Z not supported yet 

    // Full Date/Time 
    c: function () { return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P() },
    //r not supported yet 
    U: function () { return Math.round(jsdate.getTime() / 1000) }
  }; 
  return format.replace(/([a-zA-Z])/g, function (t, s) { 
    var ret=''; 
    if (t != s) {
      // escaped 
      ret = s;
    } else if (f[s]) {
      // a date function exists 
      ret = f[s]();
    } else {
      // nothing special 
      ret = s;
    }
    return ret;
  });
}

/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(B){throw B.temp="function anonymous($data,$filename) {"+z+"}",B}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(j){return j.filename=h||"anonymous",j.name="Syntax Error",p(j)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;e.openTag="{",e.closeTag="}";var z=function(a,b){var c=b.split(":"),d=c.shift(),e=c.join(":")||"";return e&&(e=", "+e),"$helpers."+d+"("+a+e+")"};e.parser=function(a){a=a.replace(/^\s/,"");var b=a.split(" "),c=b.shift(),e=b.join(" ");switch(c){case"if":a="if("+e+"){";break;case"else":b="if"===b.shift()?" if("+b.join(" ")+")":"",a="}else"+b+"{";break;case"/if":a="}";break;case"each":var f=b[0]||"$data",g=b[1]||"as",h=b[2]||"$value",i=b[3]||"$index",j=h+","+i;"as"!==g&&(f="[]"),a="$each("+f+",function("+j+"){";break;case"/each":a="});";break;case"echo":a="print("+e+");";break;case"print":case"include":a=c+"("+b.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(e)){var k=!0;0===a.indexOf("#")&&(a=a.substr(1),k=!1);for(var l=0,m=a.split("|"),n=m.length,o=m[l++];n>l;l++)o=z(o,m[l]);a=(k?"=":"=#")+o}else a=d.helpers[c]?"=#"+c+"("+b.join(",")+");":"="+a}return a},"function"==typeof define?define(function(){return d}):"undefined"!=typeof exports?module.exports=d:this.template=d}();




var webapi = (function() {
  var cache = {
    /**
     * 缓存从服务端获取的数据
     * @param key
     * @param value
     */
    set: function(key, value) {
      window.localStorage.setItem("_admin_" + key, value);
    },
    /**
     * 获取本地已缓存的数据
     */
    get: function(key) {
      return window.localStorage.getItem("_admin_" + key);
    },
    /**
     * 删除本地已缓存的数据
     */
    del: function(key) {
      return window.localStorage.removeItem("_admin_" + key);
    },
    key: function(k) {
      return "_admin_" + k;
    }
  };
  var sign = function(param) {
    var str =
      "client_id=" +
      window.appid +
      "&timestamp=" +
      param.timestamp +
      "&url=" +
      encodeURIComponent(window.website_uri || "") +
      "&version=" +
      param.version +
      encodeURIComponent(window.secret || "");
    return md5(str);
  };
  var headers = function() {
    var data = {
      "content-type": "application/x-www-form-urlencoded",
      "client-id": window.appid
    };
    data.sn = window.sn;
    data.token = window.token;
    data.timestamp = Date.parse(new Date()) / 1000;
    data.version = cache.get("version") || "1.0";
    data.sign = sign(data);
    return data;
  };

  var ajax = {
    get: function(url, data, success, header, error,dataType) {
      return this.request("get", url, data, success, header, error,dataType);
    },
    post: function(url, data, success, header, error,dataType) {
      return this.request("post", url, data, success, header, error,dataType);
    },
    put: function(url, data, success, header, error,dataType) {
      return this.request("put", url, data, success, header, error,dataType);
    },
    del: function(url, data, success, header, error,dataType) {
      return this.request("delete", url, data, success, error,dataType);
    },
    request: function(method, url, data, success, header, error,dataType) {
      var that = this;
      var data = data || {};
      data.format = data.format ? data.format : "json";
      var opt = {
        url: url,
        type: method || "get",
        data: data,
        headers: headers(header),
        timeout: 7200,
        success: function(data,xhr,e) { 
            success && success(data,xhr,e); 
        }, 
        error: function(xhr, type) {
          error && error(xhr, type);
        },
        dataType:dataType||"json"
      };
      $.ajax(opt);
    }
  };
  return { headers, cache, ajax };
})();



var myJs = {
  // 1、获取浏览器参数
  GetQueryString: function (name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  },
  // 2、转化百分比
  toPercent: function(num, total) { 
    return (Math.round(num / total * 10000) / 100.00 + "%");// 小数点后两位百分比
  },

  // 3、截取空格前的字符串
  splitStr: function (str) {
    return str.split(" ")[0];
  },

  // 4、封装jsonp
  package_jsonp: function(url, callback, params = null) {
    var script = document.createElement("script");
    var functionName = "callfunction" + Date.now() + Math.random().toString().substr(2, 5);
    var data = params != null ? "&" + params : "";
    script.src = url + "&callback=" + functionName + data;
    document.body.appendChild(script);

    window[functionName] = function(res) {
      delete window[functionName];
      typeof callback == "function" && callback(res);
    }

    document.body.removeChild(script);

  },

  // 5、打开app
  openWithApp: function(webLink) {
		var device_type = navigator.userAgent; //获取userAgent信息
			let ua_pub = window.navigator.userAgent;
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			var ua = window.navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
      var href = window.location.href;
      console.log(window.location.search);
      var source = myJs.GetQueryString('source');
      var marketId = "";
      if (source == 247) {
        marketId = "com.listen.quting";
      } else if (source == 251) {
        marketId = "com.youshengxiaoshuo.tingshushenqi";
      } else if (source == 304) {
        marketId = "com.youyan.qingxiaoshuo";
      }
      // 判断苹果
			if (!!ua_pub.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        // alert(webLink + "给爷死！！！");
				window.location.href = webLink;
			}
			if (ua.match(/MicroMessenger/i) == 'micromessenger' && isAndroid) {
        // 应用宝
        if (source == 247) {
          window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.listen.quting';
        } else if (source == 251) {
          window.location.href = 'https://sj.qq.com/myapp/detail.htm?apkName=com.youshengxiaoshuo.tingshushenqi';
        } else if (source == 304) {
          window.location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.youyan.qingxiaoshuo';
        } 
					$('body,html').animate({ scrollTop: 0 }, 300);
      }
     console.log(source);
    myJs.package_jsonp('https://w.huaxi.net/server_version?appid=' + source + '&format=jsonp', function (res) {
		var new_version = res.data.url;
      if (href.indexOf('dym') !== -1) { // 大姨妈渠道
				console.log("get1" + new_version);
				window.location.href = new_version;
			} else {
					setTimeout(function() {
						if (device_type.indexOf('HUAWEI') > -1 || device_type.indexOf('Huawei') > -1) {
							window.location.href = "market://details?id=" + marketId;
						} 
						else if (device_type.indexOf('OPPO') > -1 || device_type.indexOf('Oppo') > -1 || device_type.indexOf('oppo') > -1) {
              window.location.href = "market://details?id=" + marketId;
							// window.location.href = "oppomarket://details?packagename=" + marketId;
              
						} else if (device_type.indexOf('vivo') > -1 || device_type.indexOf('Vivo') > -1) {
							window.location.href = "vivoMarket://details?id=" + marketId;
						} else if (device_type.indexOf('MI') > -1 || device_type.indexOf('Mi') > -1) {
							window.location.href = "mimarket://details?id" + marketId;
						} else if (device_type.indexOf('baidu') > -1) {
							window.location.href = "https://mobile.baidu.com/item?docid=26109070&source=mobres&from=1010680m";
						} else if (device_type.indexOf('360') > -1) {
							window.location.href = "https://m.app.so.com/detail/index?from=qing&id=4015411";
						}else if (device_type.indexOf('sm-') > -1) {
              window.location.href = "http://www.samsungapps.com/appquery/appDetail.as?appId=" + marketId;
            } 
            else { ///其他安卓手机
							console.log("get2" + new_version);
							window.location.href = new_version;
						};
					}, 1000)
				}
	  });
  },
  
  // 6、保留两位小数
  getNum: function (num) {
    return Number(num.toString().match(/^\d+(?:\:\d{0,2})?/));
  },

  // 7、秒转化为分钟小时
  turnMin: function(num) {
    var num = parseInt(num);
    var h = Math.floor(num / 3600) < 10 ?  Math.floor(num / 3600) : Math.floor(num / 3600);
    var m = Math.floor(num / 60 % 60) < 10 ? '0' + Math.floor(num / 60 % 60) : Math.floor(num / 60 % 60);
    var s = Math.floor(num % 60) < 10 ? '0' + Math.floor(num % 60) : Math.floor(num % 60);
    var res = '';
    if (h == '00' && m == '00') {
      res = "00:" + s;
    } else if (h == '00' && m !== '00') {
      res = m + ":" + s;
    } else if (h !== '00') {
      res = h + ":" + m + s;
    }
    var result = res.substring(0,res.indexOf(":") + 3);
    return result;	
  },

  // 8、分转化为元
  turnYuan: function(count) {
    var yuan = count / 100;
    return yuan;
  },

   /// 9、时间戳转换
  timestampFormat: function( timestamp ) {
    function zeroize( num ) {
        return (String(num).length == 1 ? '0' : '') + num;
    }

    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
    var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

    if ( timestampDiff < 60 ) { // 一分钟以内
        return "刚刚";
    } else if( timestampDiff < 3600 ) { // 一小时前之内
        return Math.floor( timestampDiff / 60 ) + "分钟前";
    } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
        return '今天' + zeroize(H) + ':' + zeroize(i);
    } else {
        var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
        if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
            return '昨天' + zeroize(H) + ':' + zeroize(i);
        } else if ( curDate.getFullYear() == Y ) {
            return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        } else {
            return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        }
    }
},

// 10、时间戳转换年月日
 timestamp: function(timestamp) {
  function zeroize( num ) {
      return (String(num).length == 1 ? '0' : '') + num;
  }
  var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
  var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

  var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
  var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象

  var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
  var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
  return  Y + '-' + zeroize(m) + '-' + zeroize(d);

},

// 11、万分位
tenThousand: function(param) {
  var str = param;
  if (param.length > 4) {
      //获取万位长度字符串
      var str1 = str.substring(0, str.length - 4);
      var str2 = str.substring(str1.length, 1);
      if (str2.length == 0) {
          var str3 = str1 + "." + 0;
      } else {
          var str3 = str1 + "." + str2;
      }
      return str3;
  } else {
      var str1 = str.substring(0, 1);
      var str2 = "0." + str1;
      return str2;
  }
},

// 12、时间戳年月日时分
timeMinuteStamp: function(timestamp) {
  function zeroize( num ) {
    return (String(num).length == 1 ? '0' : '') + num;
    }
    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
    var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
    return  Y + '-' + zeroize(m) + '-' + zeroize(d) + '-' + zeroize(H) + '-' + zeroize(i);
}


}

