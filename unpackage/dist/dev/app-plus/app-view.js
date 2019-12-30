var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'movie-star'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'starNum']])
Z(z[1])
Z([3,'star-icon'])
Z([3,'../static/index/star.png'])
Z(z[1])
Z(z[2])
Z([[7],[3,'grayNum']])
Z(z[1])
Z(z[5])
Z([3,'../static/index/star1.png'])
Z([3,'star-score'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'score']]],[1,'分']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrapper'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'longpress']],[[4],[[5],[[4],[[5],[[5],[1,'actionSheet']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'widthFix'])
Z([[7],[3,'imgUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([1,true])
Z([3,'swiper'])
Z([1,1000])
Z(z[1])
Z([1,3000])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'swiperList']])
Z(z[6])
Z([3,'__e'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'previewSwiper']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'swiperList']],[1,'']],[[7],[3,'i']]],[1,'imgSrc']]]]]]]]]]]]]]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'imgSrc']])
Z([3,'page-block hot-movie'])
Z([3,'hot-wrapper'])
Z([3,'../../static/index/hot.png'])
Z([3,'hot-title'])
Z([3,'热门电影'])
Z([3,'page-block hot-swiper'])
Z([3,'true'])
Z(z[6])
Z(z[7])
Z([[7],[3,'movieList']])
Z(z[6])
Z([3,'hot-movie-content'])
Z([3,'single-movie'])
Z(z[10])
Z([3,'single-movie-img'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'previewImage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'movieList']],[1,'']],[[7],[3,'i']]],[1,'imgSrc']]]]]]]]]]]]]]])
Z(z[14])
Z([3,'movie-name'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]],[1,'']]])
Z([3,'__l'])
Z([3,'star-center'])
Z([[6],[[7],[3,'item']],[3,'score']])
Z([[2,'+'],[1,'1-'],[[7],[3,'i']]])
Z(z[15])
Z(z[16])
Z([3,'../../static/index/trailer.png'])
Z(z[18])
Z([3,'热门预告'])
Z([3,'page-block hot-trailer'])
Z(z[6])
Z(z[7])
Z([[7],[3,'trailerList']])
Z(z[6])
Z(z[10])
Z([3,'hot-trailer-single'])
Z([[4],[[5],[[4],[[5],[[5],[1,'play']],[[4],[[5],[[4],[[5],[[5],[1,'trailerPlay']],[[4],[[5],[[7],[3,'i']]]]]]]]]]]])
Z([[2,'+'],[1,'trailerVideo'],[[7],[3,'i']]])
Z([[6],[[7],[3,'item']],[3,'video']])
Z(z[15])
Z(z[16])
Z([3,'../../static/index/guess.png'])
Z(z[18])
Z([3,'猜你喜欢'])
Z([3,'guess-single page-block'])
Z([3,'guess-img'])
Z([3,'https://s2.ax1x.com/2019/11/24/MLQKw4.png'])
Z([3,'guess-content'])
Z([3,'guess-title'])
Z([3,'罗小黑战记'])
Z(z[34])
Z([3,'8.2'])
Z([3,'2'])
Z([3,'guess-info'])
Z([3,'2019/冒险/动画/奇幻'])
Z(z[67])
Z([3,'山新/刘明月/郝祥海/夏侯落枫/叮当/图特哈蒙'])
Z(z[10])
Z([3,'guess-praise'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'praise']],[[4],[[5],[1,0]]]]]]]]]]])
Z([3,'praise-icon'])
Z([3,'../../static/index/praise.png'])
Z([3,'praise-name'])
Z([3,'点赞'])
Z([[6],[[7],[3,'animationData']],[1,0]])
Z([3,'praise-name praise-animation'])
Z([3,'+1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'header'])
Z([[7],[3,'userIsLogin']])
Z([3,'face'])
Z([[6],[[7],[3,'userObj']],[3,'avatarUrl']])
Z(z[3])
Z([3,'https://s2.ax1x.com/2019/12/24/l949fK.png'])
Z(z[2])
Z([3,'info-wrapper'])
Z([3,'userName'])
Z([a,[[6],[[7],[3,'userObj']],[3,'username']]])
Z([3,'userId'])
Z([a,[[2,'+'],[1,'ID:'],[[6],[[7],[3,'userObj']],[3,'id']]]])
Z(z[8])
Z([3,'../regist/regist'])
Z(z[9])
Z([3,'注册/登录'])
Z(z[2])
Z([3,'set-wrapper'])
Z([3,'../meInfo/meInfo'])
Z([3,'setting'])
Z([3,'../../static/me/setting.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'header-wrap'])
Z([3,'single-header'])
Z([3,'words'])
Z([3,'头像'])
Z([3,'portrait'])
Z([[6],[[7],[3,'userObj']],[3,'avatarUrl']])
Z([3,'arrow'])
Z([3,'../../static/meInfo/arrow.png'])
Z(z[2])
Z(z[3])
Z([3,'昵称'])
Z([3,'right-words'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'userObj']],[3,'username']]],[1,'']]])
Z(z[7])
Z(z[8])
Z(z[2])
Z(z[3])
Z([3,'生日'])
Z(z[12])
Z([3,'2222-01-01'])
Z(z[7])
Z(z[8])
Z([3,'single-header clear-bottom'])
Z(z[3])
Z([3,'性别'])
Z(z[12])
Z([3,'男'])
Z(z[7])
Z(z[8])
Z([3,'footer'])
Z([3,'__e'])
Z([3,'footer-words'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearStorage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清理缓存'])
Z(z[32])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'我是一个movie'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'portrait'])
Z([3,'https://s2.ax1x.com/2019/12/24/l949fK.png'])
Z([3,'info-wrapper'])
Z([3,'lb-color'])
Z([3,'帐号'])
Z([3,'info-input'])
Z([3,'username'])
Z([3,'请输入用户名'])
Z([3,'text'])
Z(z[5])
Z(z[6])
Z([3,'密码'])
Z(z[8])
Z([3,'password'])
Z([3,'true'])
Z([3,'请输入密码'])
Z(z[11])
Z([3,'regist-bt'])
Z([3,'submit'])
Z([3,'primary'])
Z([3,'注册/登录'])
Z([3,'third-login'])
Z([3,'third-words'])
Z([3,'line'])
Z([3,'login-words'])
Z([3,'第三方帐号登陆'])
Z(z[26])
Z([3,'third-image'])
Z(z[1])
Z([3,'third-button'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuth']],[[4],[[5],[1,'weixin']]]]]]]]]]])
Z([3,'login-icon'])
Z([3,'../../static/me/wechat.png'])
Z(z[1])
Z(z[32])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'appOAuth']],[[4],[[5],[1,'qq']]]]]]]]]]])
Z(z[34])
Z([3,'../../static/me/qq.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page'])
Z([3,'search-bar'])
Z([3,'search-icon'])
Z([3,'../../static/tabBarIcon/search.png'])
Z([3,'__e'])
Z([3,'search-text'])
Z([3,'search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'search']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'10'])
Z([3,'搜索预告'])
Z([3,'text'])
Z([3,''])
Z([3,'page-block search-content'])
Z(z[4])
Z([3,'search-img'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showTralier']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,1])
Z([3,'https://s2.ax1x.com/2019/11/24/MLRPHS.png'])
Z(z[14])
Z([3,'https://s2.ax1x.com/2019/11/24/MLRCB8.png'])
Z(z[14])
Z([3,'https://s2.ax1x.com/2019/11/24/MLR9nf.png'])
Z(z[14])
Z([3,'https://s2.ax1x.com/2019/11/24/MLQKw4.png'])
Z(z[14])
Z([3,'https://s2.ax1x.com/2019/11/24/MLRFAg.png'])
Z(z[14])
Z(z[25])
Z(z[14])
Z(z[25])
Z(z[14])
Z(z[25])
Z(z[14])
Z(z[21])
Z(z[14])
Z(z[21])
Z(z[14])
Z(z[21])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/star.wxml','./pages/cover/cover.wxml','./pages/index/index.wxml','./pages/me/me.wxml','./pages/meInfo/meInfo.wxml','./pages/movie/movie.wxml','./pages/regist/regist.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'image',['class',5,'src',1],[],cF,fE,gg)
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,3,oD,e,s,gg,xC,'item','i','i')
var oJ=_v()
_(oB,oJ)
var lK=function(tM,aL,eN,gg){
var oP=_mz(z,'image',['class',11,'src',1],[],tM,aL,gg)
_(eN,oP)
return eN
}
oJ.wxXCkey=2
_2z(z,9,lK,e,s,gg,oJ,'item','i','i')
var xQ=_n('view')
_rz(z,xQ,'class',13,e,s,gg)
var oR=_oz(z,14,e,s,gg)
_(xQ,oR)
_(oB,xQ)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var hU=_mz(z,'image',['bindlongpress',1,'data-event-opts',1,'mode',2,'src',3],[],e,s,gg)
_(cT,hU)
_(r,cT)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cW=_n('view')
_rz(z,cW,'class',0,e,s,gg)
var oX=_mz(z,'swiper',['autoplay',1,'class',1,'duration',2,'indicatorDots',3,'interval',4],[],e,s,gg)
var lY=_v()
_(oX,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_n('swiper-item')
var o6=_mz(z,'image',['bindtap',10,'class',1,'data-event-opts',2,'mode',3,'src',4],[],e2,t1,gg)
_(x5,o6)
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,8,aZ,e,s,gg,lY,'item','i','i')
_(cW,oX)
var f7=_n('view')
_rz(z,f7,'class',15,e,s,gg)
var c8=_n('view')
_rz(z,c8,'class',16,e,s,gg)
var h9=_n('image')
_rz(z,h9,'src',17,e,s,gg)
_(c8,h9)
var o0=_n('view')
_rz(z,o0,'class',18,e,s,gg)
var cAB=_oz(z,19,e,s,gg)
_(o0,cAB)
_(c8,o0)
_(f7,c8)
_(cW,f7)
var oBB=_mz(z,'scroll-view',['class',20,'scrollX',1],[],e,s,gg)
var lCB=_v()
_(oBB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_n('view')
_rz(z,xIB,'class',26,eFB,tEB,gg)
var oJB=_n('view')
_rz(z,oJB,'class',27,eFB,tEB,gg)
var fKB=_mz(z,'image',['bindtap',28,'class',1,'data-event-opts',2,'src',3],[],eFB,tEB,gg)
_(oJB,fKB)
var cLB=_n('view')
_rz(z,cLB,'class',32,eFB,tEB,gg)
var hMB=_oz(z,33,eFB,tEB,gg)
_(cLB,hMB)
_(oJB,cLB)
var oNB=_mz(z,'star',['bind:__l',34,'class',1,'fatherScore',2,'vueId',3],[],eFB,tEB,gg)
_(oJB,oNB)
_(xIB,oJB)
_(bGB,xIB)
return bGB
}
lCB.wxXCkey=4
_2z(z,24,aDB,e,s,gg,lCB,'item','i','i')
_(cW,oBB)
var cOB=_n('view')
_rz(z,cOB,'class',38,e,s,gg)
var oPB=_n('view')
_rz(z,oPB,'class',39,e,s,gg)
var lQB=_n('image')
_rz(z,lQB,'src',40,e,s,gg)
_(oPB,lQB)
var aRB=_n('view')
_rz(z,aRB,'class',41,e,s,gg)
var tSB=_oz(z,42,e,s,gg)
_(aRB,tSB)
_(oPB,aRB)
_(cOB,oPB)
_(cW,cOB)
var eTB=_n('view')
_rz(z,eTB,'class',43,e,s,gg)
var bUB=_v()
_(eTB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_mz(z,'video',['controls',-1,'bindplay',48,'class',1,'data-event-opts',2,'id',3,'src',4],[],oXB,xWB,gg)
_(fYB,h1B)
return fYB
}
bUB.wxXCkey=2
_2z(z,46,oVB,e,s,gg,bUB,'item','i','i')
_(cW,eTB)
var o2B=_n('view')
_rz(z,o2B,'class',53,e,s,gg)
var c3B=_n('view')
_rz(z,c3B,'class',54,e,s,gg)
var o4B=_n('image')
_rz(z,o4B,'src',55,e,s,gg)
_(c3B,o4B)
var l5B=_n('view')
_rz(z,l5B,'class',56,e,s,gg)
var a6B=_oz(z,57,e,s,gg)
_(l5B,a6B)
_(c3B,l5B)
_(o2B,c3B)
_(cW,o2B)
var t7B=_n('view')
_rz(z,t7B,'class',58,e,s,gg)
var e8B=_mz(z,'image',['class',59,'src',1],[],e,s,gg)
_(t7B,e8B)
var b9B=_n('view')
_rz(z,b9B,'class',61,e,s,gg)
var o0B=_n('view')
_rz(z,o0B,'class',62,e,s,gg)
var xAC=_oz(z,63,e,s,gg)
_(o0B,xAC)
_(b9B,o0B)
var oBC=_mz(z,'star',['bind:__l',64,'fatherScore',1,'vueId',2],[],e,s,gg)
_(b9B,oBC)
var fCC=_n('view')
_rz(z,fCC,'class',67,e,s,gg)
var cDC=_oz(z,68,e,s,gg)
_(fCC,cDC)
_(b9B,fCC)
var hEC=_n('view')
_rz(z,hEC,'class',69,e,s,gg)
var oFC=_oz(z,70,e,s,gg)
_(hEC,oFC)
_(b9B,hEC)
_(t7B,b9B)
var cGC=_mz(z,'view',['bindtap',71,'class',1,'data-event-opts',2],[],e,s,gg)
var oHC=_mz(z,'image',['class',74,'src',1],[],e,s,gg)
_(cGC,oHC)
var lIC=_n('view')
_rz(z,lIC,'class',76,e,s,gg)
var aJC=_oz(z,77,e,s,gg)
_(lIC,aJC)
_(cGC,lIC)
var tKC=_mz(z,'view',['animation',78,'class',1],[],e,s,gg)
var eLC=_oz(z,80,e,s,gg)
_(tKC,eLC)
_(cGC,tKC)
_(t7B,cGC)
_(cW,t7B)
_(r,cW)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oNC=_n('view')
_rz(z,oNC,'class',0,e,s,gg)
var xOC=_n('view')
_rz(z,xOC,'class',1,e,s,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,2,e,s,gg)){oPC.wxVkey=1
var hSC=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(oPC,hSC)
}
else{oPC.wxVkey=2
var oTC=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(oPC,oTC)
}
var fQC=_v()
_(xOC,fQC)
if(_oz(z,7,e,s,gg)){fQC.wxVkey=1
var cUC=_n('view')
_rz(z,cUC,'class',8,e,s,gg)
var oVC=_n('view')
_rz(z,oVC,'class',9,e,s,gg)
var lWC=_oz(z,10,e,s,gg)
_(oVC,lWC)
_(cUC,oVC)
var aXC=_n('view')
_rz(z,aXC,'class',11,e,s,gg)
var tYC=_oz(z,12,e,s,gg)
_(aXC,tYC)
_(cUC,aXC)
_(fQC,cUC)
}
else{fQC.wxVkey=2
var eZC=_n('view')
_rz(z,eZC,'class',13,e,s,gg)
var b1C=_n('navigator')
_rz(z,b1C,'url',14,e,s,gg)
var o2C=_n('view')
_rz(z,o2C,'class',15,e,s,gg)
var x3C=_oz(z,16,e,s,gg)
_(o2C,x3C)
_(b1C,o2C)
_(eZC,b1C)
_(fQC,eZC)
}
var cRC=_v()
_(xOC,cRC)
if(_oz(z,17,e,s,gg)){cRC.wxVkey=1
var o4C=_n('view')
_rz(z,o4C,'class',18,e,s,gg)
var f5C=_n('navigator')
_rz(z,f5C,'url',19,e,s,gg)
var c6C=_mz(z,'image',['class',20,'src',1],[],e,s,gg)
_(f5C,c6C)
_(o4C,f5C)
_(cRC,o4C)
}
oPC.wxXCkey=1
fQC.wxXCkey=1
cRC.wxXCkey=1
_(oNC,xOC)
_(r,oNC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var o8C=_n('view')
_rz(z,o8C,'class',0,e,s,gg)
var c9C=_n('view')
_rz(z,c9C,'class',1,e,s,gg)
var o0C=_n('view')
_rz(z,o0C,'class',2,e,s,gg)
var lAD=_n('view')
_rz(z,lAD,'class',3,e,s,gg)
var aBD=_oz(z,4,e,s,gg)
_(lAD,aBD)
_(o0C,lAD)
var tCD=_mz(z,'image',['mode',-1,'class',5,'src',1],[],e,s,gg)
_(o0C,tCD)
var eDD=_mz(z,'image',['mode',-1,'class',7,'src',1],[],e,s,gg)
_(o0C,eDD)
_(c9C,o0C)
var bED=_n('view')
_rz(z,bED,'class',9,e,s,gg)
var oFD=_n('view')
_rz(z,oFD,'class',10,e,s,gg)
var xGD=_oz(z,11,e,s,gg)
_(oFD,xGD)
_(bED,oFD)
var oHD=_n('view')
_rz(z,oHD,'class',12,e,s,gg)
var fID=_oz(z,13,e,s,gg)
_(oHD,fID)
_(bED,oHD)
var cJD=_mz(z,'image',['mode',-1,'class',14,'src',1],[],e,s,gg)
_(bED,cJD)
_(c9C,bED)
var hKD=_n('view')
_rz(z,hKD,'class',16,e,s,gg)
var oLD=_n('view')
_rz(z,oLD,'class',17,e,s,gg)
var cMD=_oz(z,18,e,s,gg)
_(oLD,cMD)
_(hKD,oLD)
var oND=_n('view')
_rz(z,oND,'class',19,e,s,gg)
var lOD=_oz(z,20,e,s,gg)
_(oND,lOD)
_(hKD,oND)
var aPD=_mz(z,'image',['mode',-1,'class',21,'src',1],[],e,s,gg)
_(hKD,aPD)
_(c9C,hKD)
var tQD=_n('view')
_rz(z,tQD,'class',23,e,s,gg)
var eRD=_n('view')
_rz(z,eRD,'class',24,e,s,gg)
var bSD=_oz(z,25,e,s,gg)
_(eRD,bSD)
_(tQD,eRD)
var oTD=_n('view')
_rz(z,oTD,'class',26,e,s,gg)
var xUD=_oz(z,27,e,s,gg)
_(oTD,xUD)
_(tQD,oTD)
var oVD=_mz(z,'image',['mode',-1,'class',28,'src',1],[],e,s,gg)
_(tQD,oVD)
_(c9C,tQD)
_(o8C,c9C)
var fWD=_n('view')
_rz(z,fWD,'class',30,e,s,gg)
var cXD=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var hYD=_oz(z,34,e,s,gg)
_(cXD,hYD)
_(fWD,cXD)
var oZD=_n('view')
_rz(z,oZD,'class',35,e,s,gg)
var c1D=_oz(z,36,e,s,gg)
_(oZD,c1D)
_(fWD,oZD)
_(o8C,fWD)
_(r,o8C)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var l3D=_n('view')
var a4D=_oz(z,0,e,s,gg)
_(l3D,a4D)
_(r,l3D)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var e6D=_n('view')
_rz(z,e6D,'class',0,e,s,gg)
var b7D=_mz(z,'form',['bindsubmit',1,'data-event-opts',1],[],e,s,gg)
var o8D=_n('view')
_rz(z,o8D,'class',3,e,s,gg)
var x9D=_mz(z,'image',['mode',-1,'src',4],[],e,s,gg)
_(o8D,x9D)
_(b7D,o8D)
var o0D=_n('view')
_rz(z,o0D,'class',5,e,s,gg)
var fAE=_mz(z,'label',['for',-1,'class',6],[],e,s,gg)
var cBE=_oz(z,7,e,s,gg)
_(fAE,cBE)
_(o0D,fAE)
var hCE=_mz(z,'input',['class',8,'name',1,'placeholder',2,'type',3],[],e,s,gg)
_(o0D,hCE)
_(b7D,o0D)
var oDE=_n('view')
_rz(z,oDE,'class',12,e,s,gg)
var cEE=_mz(z,'label',['for',-1,'class',13],[],e,s,gg)
var oFE=_oz(z,14,e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
var lGE=_mz(z,'input',['class',15,'name',1,'password',2,'placeholder',3,'type',4],[],e,s,gg)
_(oDE,lGE)
_(b7D,oDE)
var aHE=_mz(z,'button',['class',20,'formType',1,'type',2],[],e,s,gg)
var tIE=_oz(z,23,e,s,gg)
_(aHE,tIE)
_(b7D,aHE)
_(e6D,b7D)
var eJE=_n('view')
_rz(z,eJE,'class',24,e,s,gg)
var bKE=_n('view')
_rz(z,bKE,'class',25,e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',26,e,s,gg)
_(bKE,oLE)
var xME=_n('view')
_rz(z,xME,'class',27,e,s,gg)
var oNE=_oz(z,28,e,s,gg)
_(xME,oNE)
_(bKE,xME)
var fOE=_n('view')
_rz(z,fOE,'class',29,e,s,gg)
_(bKE,fOE)
_(eJE,bKE)
var cPE=_n('view')
_rz(z,cPE,'class',30,e,s,gg)
var hQE=_mz(z,'button',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var oRE=_mz(z,'image',['mode',-1,'class',34,'src',1],[],e,s,gg)
_(hQE,oRE)
_(cPE,hQE)
var cSE=_mz(z,'button',['bindtap',36,'class',1,'data-event-opts',2],[],e,s,gg)
var oTE=_mz(z,'image',['mode',-1,'class',39,'src',1],[],e,s,gg)
_(cSE,oTE)
_(cPE,cSE)
_(eJE,cPE)
_(e6D,eJE)
_(r,e6D)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var aVE=_n('view')
_rz(z,aVE,'class',0,e,s,gg)
var tWE=_n('view')
_rz(z,tWE,'class',1,e,s,gg)
var eXE=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(tWE,eXE)
var bYE=_mz(z,'input',['bindconfirm',4,'class',1,'confirmType',2,'data-event-opts',3,'maxlength',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
_(tWE,bYE)
_(aVE,tWE)
var oZE=_n('view')
_rz(z,oZE,'class',12,e,s,gg)
var x1E=_mz(z,'image',['bindtap',13,'class',1,'data-event-opts',2,'data-trailerid',3,'src',4],[],e,s,gg)
_(oZE,x1E)
var o2E=_mz(z,'image',['class',18,'src',1],[],e,s,gg)
_(oZE,o2E)
var f3E=_mz(z,'image',['class',20,'src',1],[],e,s,gg)
_(oZE,f3E)
var c4E=_mz(z,'image',['class',22,'src',1],[],e,s,gg)
_(oZE,c4E)
var h5E=_mz(z,'image',['class',24,'src',1],[],e,s,gg)
_(oZE,h5E)
var o6E=_mz(z,'image',['class',26,'src',1],[],e,s,gg)
_(oZE,o6E)
var c7E=_mz(z,'image',['class',28,'src',1],[],e,s,gg)
_(oZE,c7E)
var o8E=_mz(z,'image',['class',30,'src',1],[],e,s,gg)
_(oZE,o8E)
var l9E=_mz(z,'image',['class',32,'src',1],[],e,s,gg)
_(oZE,l9E)
var a0E=_mz(z,'image',['class',34,'src',1],[],e,s,gg)
_(oZE,a0E)
var tAF=_mz(z,'image',['class',36,'src',1],[],e,s,gg)
_(oZE,tAF)
_(aVE,oZE)
_(r,aVE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var usingStyleSheetManager = !!window.__styleSheetManager__
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"page{ width: 100%; height: 100%; background-color: #f7f7f7; position: absolute; }\n.",[1],"page-block{ background-color: #FFFFFF }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (usingStyleSheetManager) {
window.__styleSheetManager__.setCss(info.path, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
if (usingStyleSheetManager) {
window.__styleSheetManager__.addPath(info.path);
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/star.wxss']=setCssToHead([".",[1],"movie-star{ display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"star-icon{ width: ",[0,20],"; height: ",[0,20],"; margin-top: ",[0,6],"; }\n.",[1],"star-score{ font-size:12px; color: #bfbfbf; margin-left: ",[0,6],"; }\n",],undefined,{path:"./components/star.wxss"});    
__wxAppCode__['components/star.wxml']=$gwx('./components/star.wxml');

__wxAppCode__['pages/cover/cover.wxss']=setCssToHead([".",[1],"wrapper { background-color: black; width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; position: fixed; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n",],undefined,{path:"./pages/cover/cover.wxss"});    
__wxAppCode__['pages/cover/cover.wxml']=$gwx('./pages/cover/cover.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"swiper{ width: 100%; height: ",[0,440],"; }\n.",[1],"hot-movie{ margin-top: ",[0,12],"; padding: ",[0,20],"; }\n.",[1],"hot-wrapper{ display: -webkit-box; display: -webkit-flex; display: flex; margin-bottom: ",[0,8],"; }\n.",[1],"hot-wrapper wx-image{ width: ",[0,40],"; height: ",[0,40],"; margin-top: ",[0,8],"; }\n.",[1],"hot-title{ font-size: 20px; font-weight: bold; margin-left: ",[0,15],"; }\n.",[1],"hot-swiper{ white-space:nowrap ; }\n.",[1],"hot{ width: 100%; white-space: nowrap; }\n.",[1],"hot-movie-content{ display: inline-block; margin-left: ",[0,20],"; }\n.",[1],"single-movie{ display:-webkit-box; display:-webkit-flex; display:flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; width: 100px; }\n.",[1],"single-movie-img{ width: ",[0,200],"; height: ",[0,266],"; }\n.",[1],"movie-name{ width: ",[0,200],"; font-size: 14px; margin-top: ",[0,5],"; overflow: hidden; text-overflow: ellipsis; text-align: center; }\n.",[1],"hot-trailer{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding: 0 ",[0,20],"; }\n.",[1],"hot-trailer-single{ width: ",[0,350],"; height: ",[0,220],"; }\n.",[1],"guess-single{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; padding: ",[0,10]," ",[0,20],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }\n.",[1],"guess-img{ width: ",[0,200],"; height: ",[0,266],"; }\n.",[1],"guess-content{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-justify-content:space-around; justify-content:space-around; width: ",[0,300],"; }\n.",[1],"guess-title{ white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.",[1],"guess-info{ font-size: 14px; color: #8a8a8a; }\n.",[1],"guess-praise{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; width: ",[0,150],"; border-left: 2px dashed #bfbfbf; }\n.",[1],"praise-icon{ width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"praise-name{ font-size: 14px; color: #fcb914; }\n.",[1],"praise-animation{ font-weight: bold; opacity: 0; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/index/index.wxss:17:14)",{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/me/me.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header { background-color: #ffd350; width: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; box-sizing: border-box; }\n.",[1],"header .",[1],"face { width: ",[0,110],"; height: ",[0,110],"; border-radius: 50%; }\n.",[1],"header .",[1],"info-wrapper { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-align-self: flex-start; align-self: flex-start; padding-left: ",[0,20],"; -webkit-box-flex: 1; -webkit-flex-grow: 1; flex-grow: 1; }\n.",[1],"header .",[1],"info-wrapper .",[1],"userName { font-size: 20px; color: #6a5018; font-weight: bold; }\n.",[1],"header .",[1],"info-wrapper .",[1],"userId { color: #a38e62; font-size: 14px; margin-top: ",[0,10],"; }\n.",[1],"header .",[1],"setting { width: ",[0,40],"; height: ",[0,40],"; }\n",],undefined,{path:"./pages/me/me.wxss"});    
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/meInfo/meInfo.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"header-wrap { background-color: #fff; padding: 0 ",[0,20],"; margin-top: ",[0,15],"; }\n.",[1],"header-wrap .",[1],"single-header { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: ",[0,20]," ",[0,5],"; border-bottom: 1px solid #dfdfdf; }\n.",[1],"header-wrap .",[1],"single-header .",[1],"words { color: #333333; -webkit-box-flex: 1; -webkit-flex-grow: 1; flex-grow: 1; }\n.",[1],"header-wrap .",[1],"single-header .",[1],"portrait { width: ",[0,80],"; height: ",[0,80],"; border-radius: 50%; }\n.",[1],"header-wrap .",[1],"single-header .",[1],"right-words { font-size: 14px; line-height: ",[0,40],"; color: #bfbfbf; }\n.",[1],"header-wrap .",[1],"single-header .",[1],"arrow { width: ",[0,40],"; height: ",[0,40],"; }\n.",[1],"header-wrap .",[1],"clear-bottom { border-bottom: 0; }\n.",[1],"footer { position: fixed; bottom: 0; width: 100%; }\n.",[1],"footer .",[1],"footer-words { text-align: center; background-color: #fff; line-height: ",[0,100],"; color: #333333; margin-top: ",[0,5],"; }\n",],undefined,{path:"./pages/meInfo/meInfo.wxss"});    
__wxAppCode__['pages/meInfo/meInfo.wxml']=$gwx('./pages/meInfo/meInfo.wxml');

__wxAppCode__['pages/movie/movie.wxss']=undefined;    
__wxAppCode__['pages/movie/movie.wxml']=$gwx('./pages/movie/movie.wxml');

__wxAppCode__['pages/regist/regist.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"container { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"container .",[1],"portrait { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; margin: ",[0,70]," 0; }\n.",[1],"container .",[1],"portrait wx-image { width: ",[0,110],"; height: ",[0,110],"; }\n.",[1],"container .",[1],"info-wrapper { display: -webkit-box; display: -webkit-flex; display: flex; border-bottom: 1px solid #dbdbda; padding: ",[0,20],"; padding-bottom: ",[0,20],"; }\n.",[1],"container .",[1],"info-wrapper .",[1],"lb-color { color: #808080; }\n.",[1],"container .",[1],"info-wrapper .",[1],"info-input { width: ",[0,500],"; margin-left: ",[0,40],"; }\n.",[1],"container .",[1],"regist-bt { width: 75%; margin-top: ",[0,60],"; background-color: skyblue; }\n.",[1],"container .",[1],"third-login { width: 100%; }\n.",[1],"container .",[1],"third-login .",[1],"third-words { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; box-sizing: border-box; -webkit-box-align: center; -webkit-align-items: center; align-items: center; padding: ",[0,60]," ",[0,80],"; }\n.",[1],"container .",[1],"third-login .",[1],"third-words .",[1],"line { height: 1px; border-bottom: 1px solid #c7c7c7; -webkit-box-flex: 1; -webkit-flex-grow: 1; flex-grow: 1; }\n.",[1],"container .",[1],"third-login .",[1],"third-words .",[1],"login-words { -webkit-flex-shrink: 0; flex-shrink: 0; color: #8a8a8a; }\n.",[1],"container .",[1],"third-login .",[1],"third-image { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"container .",[1],"third-login .",[1],"third-image .",[1],"third-button { margin: 0 ",[0,10]," 0; padding: 0; width: ",[0,80],"; height: ",[0,80],"; background-color: #fff; }\n.",[1],"container .",[1],"third-login .",[1],"third-image .",[1],"third-button::after { border: 0; }\n.",[1],"container .",[1],"third-login .",[1],"third-image .",[1],"login-icon { width: ",[0,80],"; height: ",[0,80],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/regist/regist.wxss:48:22)",{path:"./pages/regist/regist.wxss"});    
__wxAppCode__['pages/regist/regist.wxml']=$gwx('./pages/regist/regist.wxml');

__wxAppCode__['pages/search/search.wxss']=setCssToHead([".",[1],"search-bar{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; margin-top: ",[0,-3],"; padding: ",[0,0]," ",[0,20]," ",[0,20]," ",[0,20],"; position: fixed; z-index: 1; }\n.",[1],"search-icon{ width: ",[0,40],"; height: ",[0,40],"; background-color: #eaeaea; padding: ",[0,6],"; }\n.",[1],"search-text{ width: ",[0,650],"; background-color: #eaeaea; font-size: 14px; height: ",[0,50],"; }\n.",[1],"search-content{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,65]," ",[0,20]," ",[0,10],"; }\n.",[1],"search-img{ width: ",[0,200],"; height: ",[0,266],"; padding: ",[0,10]," ",[0,17],"; }\n",],undefined,{path:"./pages/search/search.wxss"});    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
