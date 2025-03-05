"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3668],{3668:(t,e,n)=>{n.d(e,{diagram:()=>O});var i=n(5165),s=n(7133),r=n(3696),a=(n(2091),n(3222),n(2533),n(3011),n(7851),n(1485)),o=(n(1869),n(6375)),l=function(){var t=(0,o.a)((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),e=[1,4],n=[1,13],i=[1,12],s=[1,15],r=[1,16],a=[1,20],l=[1,19],c=[6,7,8],h=[1,26],u=[1,24],g=[1,25],d=[6,7,11],p=[1,31],y=[6,7,11,24],f=[1,6,13,16,17,20,23],m=[1,35],b=[1,36],_=[1,6,7,11,13,16,17,20,23],k=[1,38],E={trace:(0,o.a)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:(0,o.a)((function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 6:case 7:return i;case 8:i.getLogger().trace("Stop NL ");break;case 9:i.getLogger().trace("Stop EOF ");break;case 11:i.getLogger().trace("Stop NL2 ");break;case 12:i.getLogger().trace("Stop EOF2 ");break;case 15:i.getLogger().info("Node: ",r[o-1].id),i.addNode(r[o-2].length,r[o-1].id,r[o-1].descr,r[o-1].type,r[o]);break;case 16:i.getLogger().info("Node: ",r[o].id),i.addNode(r[o-1].length,r[o].id,r[o].descr,r[o].type);break;case 17:i.getLogger().trace("Icon: ",r[o]),i.decorateNode({icon:r[o]});break;case 18:case 23:i.decorateNode({class:r[o]});break;case 19:i.getLogger().trace("SPACELIST");break;case 20:i.getLogger().trace("Node: ",r[o-1].id),i.addNode(0,r[o-1].id,r[o-1].descr,r[o-1].type,r[o]);break;case 21:i.getLogger().trace("Node: ",r[o].id),i.addNode(0,r[o].id,r[o].descr,r[o].type);break;case 22:i.decorateNode({icon:r[o]});break;case 27:i.getLogger().trace("node found ..",r[o-2]),this.$={id:r[o-1],descr:r[o-1],type:i.getType(r[o-2],r[o])};break;case 28:this.$={id:r[o],descr:r[o],type:0};break;case 29:i.getLogger().trace("node found ..",r[o-3]),this.$={id:r[o-3],descr:r[o-1],type:i.getType(r[o-2],r[o])};break;case 30:this.$=r[o-1]+r[o];break;case 31:this.$=r[o]}}),"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:e},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:e},{6:n,7:[1,10],9:9,12:11,13:i,14:14,16:s,17:r,18:17,19:18,20:a,23:l},t(c,[2,3]),{1:[2,2]},t(c,[2,4]),t(c,[2,5]),{1:[2,6],6:n,12:21,13:i,14:14,16:s,17:r,18:17,19:18,20:a,23:l},{6:n,9:22,12:11,13:i,14:14,16:s,17:r,18:17,19:18,20:a,23:l},{6:h,7:u,10:23,11:g},t(d,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:a,23:l}),t(d,[2,19]),t(d,[2,21],{15:30,24:p}),t(d,[2,22]),t(d,[2,23]),t(y,[2,25]),t(y,[2,26]),t(y,[2,28],{20:[1,32]}),{21:[1,33]},{6:h,7:u,10:34,11:g},{1:[2,7],6:n,12:21,13:i,14:14,16:s,17:r,18:17,19:18,20:a,23:l},t(f,[2,14],{7:m,11:b}),t(_,[2,8]),t(_,[2,9]),t(_,[2,10]),t(d,[2,16],{15:37,24:p}),t(d,[2,17]),t(d,[2,18]),t(d,[2,20],{24:k}),t(y,[2,31]),{21:[1,39]},{22:[1,40]},t(f,[2,13],{7:m,11:b}),t(_,[2,11]),t(_,[2,12]),t(d,[2,15],{24:k}),t(y,[2,30]),{22:[1,41]},t(y,[2,27]),t(y,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:(0,o.a)((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:(0,o.a)((function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,l="",c=0,h=0,u=0,g=r.slice.call(arguments,1),d=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);d.setInput(t,p.yy),p.yy.lexer=d,p.yy.parser=this,typeof d.yylloc>"u"&&(d.yylloc={});var f=d.yylloc;r.push(f);var m=d.options&&d.options.ranges;function b(){var t;return"number"!=typeof(t=i.pop()||d.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.a)((function(t){n.length=n.length-2*t,s.length=s.length-t,r.length=r.length-t}),"popStack"),(0,o.a)(b,"lex");for(var _,k,E,S,N,x,L,D,I,C={};;){if(E=n[n.length-1],this.defaultActions[E]?S=this.defaultActions[E]:((null===_||typeof _>"u")&&(_=b()),S=a[E]&&a[E][_]),typeof S>"u"||!S.length||!S[0]){var O;for(x in I=[],a[E])this.terminals_[x]&&x>2&&I.push("'"+this.terminals_[x]+"'");O=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+I.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(O,{text:d.match,token:this.terminals_[_]||_,line:d.yylineno,loc:f,expected:I})}if(S[0]instanceof Array&&S.length>1)throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+_);switch(S[0]){case 1:n.push(_),s.push(d.yytext),r.push(d.yylloc),n.push(S[1]),_=null,k?(_=k,k=null):(h=d.yyleng,l=d.yytext,c=d.yylineno,f=d.yylloc,u>0&&u--);break;case 2:if(L=this.productions_[S[1]][1],C.$=s[s.length-L],C._$={first_line:r[r.length-(L||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(L||1)].first_column,last_column:r[r.length-1].last_column},m&&(C._$.range=[r[r.length-(L||1)].range[0],r[r.length-1].range[1]]),typeof(N=this.performAction.apply(C,[l,h,c,p.yy,S[1],s,r].concat(g)))<"u")return N;L&&(n=n.slice(0,-1*L*2),s=s.slice(0,-1*L),r=r.slice(0,-1*L)),n.push(this.productions_[S[1]][0]),s.push(C.$),r.push(C._$),D=a[n[n.length-2]][n[n.length-1]],n.push(D);break;case 3:return!0}}return!0}),"parse")},S={EOF:1,parseError:(0,o.a)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,o.a)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,o.a)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,o.a)((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,o.a)((function(){return this._more=!0,this}),"more"),reject:(0,o.a)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,o.a)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,o.a)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,o.a)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,o.a)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,o.a)((function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1}),"test_match"),next:(0,o.a)((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,o.a)((function(){return this.next()||this.lex()}),"lex"),begin:(0,o.a)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,o.a)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,o.a)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,o.a)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,o.a)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,o.a)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.a)((function(t,e,n,i){switch(n){case 0:return this.pushState("shapeData"),e.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:let n=/\n\s*/g;return e.yytext=e.yytext.replace(n,"<br/>"),24;case 4:return 24;case 5:case 10:case 29:case 32:this.popState();break;case 6:return t.getLogger().trace("Found comment",e.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 11:t.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return t.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:t.getLogger().trace("end icon"),this.popState();break;case 16:return t.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return t.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return t.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return t.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:case 21:case 22:case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 30:t.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return t.getLogger().trace("description:",e.yytext),"NODE_DESCR";case 33:return this.popState(),t.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),t.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),t.getLogger().trace("node end ...",e.yytext),"NODE_DEND";case 36:case 39:case 40:return this.popState(),t.getLogger().trace("node end (("),"NODE_DEND";case 37:case 38:return this.popState(),t.getLogger().trace("node end (-"),"NODE_DEND";case 41:case 42:return t.getLogger().trace("Long description:",e.yytext),21}}),"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}};function N(){this.yy={}}return E.lexer=S,(0,o.a)(N,"Parser"),N.prototype=E,E.Parser=N,new N}();l.parser=l;var c=l,h=[],u=[],g=0,d={},p=(0,o.a)((()=>{h=[],u=[],g=0,d={}}),"clear"),y=(0,o.a)((t=>{if(0===h.length)return null;let e=h[0].level,n=null;for(let t=h.length-1;t>=0;t--)if(h[t].level===e&&!n&&(n=h[t]),h[t].level<e)throw new Error('Items without section detected, found section ("'+h[t].label+'")');return t===n?.level?null:n}),"getSection"),f=(0,o.a)((function(){return u}),"getSections"),m=(0,o.a)((function(){let t=[],e=f(),n=(0,a.X)();for(let i of e){let e={id:i.id,label:(0,a.F)(i.label??"",n),isGroup:!0,ticket:i.ticket,shape:"kanbanSection",level:i.level,look:n.look};t.push(e);let s=h.filter((t=>t.parentId===i.id));for(let e of s){let s={id:e.id,parentId:i.id,label:(0,a.F)(e.label??"",n),isGroup:!1,ticket:e?.ticket,priority:e?.priority,assigned:e?.assigned,icon:e?.icon,shape:"kanbanItem",level:e.level,rx:5,ry:5,cssStyles:["text-align: left"]};t.push(s)}}return{nodes:t,edges:[],other:{},config:(0,a.X)()}}),"getData"),b=(0,o.a)(((t,e,n,i,r)=>{let o=(0,a.X)(),l=o.mindmap?.padding??a.s.mindmap.padding;switch(i){case _.ROUNDED_RECT:case _.RECT:case _.HEXAGON:l*=2}let c={id:(0,a.F)(e,o)||"kbn"+g++,level:t,label:(0,a.F)(n,o),width:o.mindmap?.maxNodeWidth??a.s.mindmap.maxNodeWidth,padding:l,isGroup:!1};if(void 0!==r){let t;t=r.includes("\n")?r+"\n":"{\n"+r+"\n}";let e=(0,s.b)(t,{schema:s.a});if(e.shape&&(e.shape!==e.shape.toLowerCase()||e.shape.includes("_")))throw new Error(`No such shape: ${e.shape}. Shape names should be lowercase.`);e?.shape&&"kanbanItem"===e.shape&&(c.shape=e?.shape),e?.label&&(c.label=e?.label),e?.icon&&(c.icon=e?.icon.toString()),e?.assigned&&(c.assigned=e?.assigned.toString()),e?.ticket&&(c.ticket=e?.ticket.toString()),e?.priority&&(c.priority=e?.priority)}let d=y(t);d?c.parentId=d.id||"kbn"+g++:u.push(c),h.push(c)}),"addNode"),_={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},k=(0,o.a)(((t,e)=>{switch(a.b.debug("In get type",t,e),t){case"[":return _.RECT;case"(":return")"===e?_.ROUNDED_RECT:_.CLOUD;case"((":return _.CIRCLE;case")":return _.CLOUD;case"))":return _.BANG;case"{{":return _.HEXAGON;default:return _.DEFAULT}}),"getType"),E=(0,o.a)(((t,e)=>{d[t]=e}),"setElementForId"),S=(0,o.a)((t=>{if(!t)return;let e=(0,a.X)(),n=h[h.length-1];t.icon&&(n.icon=(0,a.F)(t.icon,e)),t.class&&(n.cssClasses=(0,a.F)(t.class,e))}),"decorateNode"),N=(0,o.a)((t=>{switch(t){case _.DEFAULT:return"no-border";case _.RECT:return"rect";case _.ROUNDED_RECT:return"rounded-rect";case _.CIRCLE:return"circle";case _.CLOUD:return"cloud";case _.BANG:return"bang";case _.HEXAGON:return"hexgon";default:return"no-border"}}),"type2Str"),x=(0,o.a)((()=>a.b),"getLogger"),L=(0,o.a)((t=>d[t]),"getElementById"),D={clear:p,addNode:b,getSections:f,getData:m,nodeType:_,getType:k,setElementForId:E,decorateNode:S,type2Str:N,getLogger:x,getElementById:L},I={draw:(0,o.a)((async(t,e,n,s)=>{a.b.debug("Rendering kanban diagram\n"+t);let o=s.db.getData(),l=(0,a.X)();l.htmlLabels=!1;let c=(0,i.a)(e),h=c.append("g");h.attr("class","sections");let u=c.append("g");u.attr("class","items");let g=o.nodes.filter((t=>t.isGroup)),d=0,p=[],y=25;for(let t of g){let e=l?.kanban?.sectionWidth||200;d+=1,t.x=e*d+10*(d-1)/2,t.width=e,t.y=0,t.height=3*e,t.rx=5,t.ry=5,t.cssClasses=t.cssClasses+" section-"+d;let n=await(0,r.f)(h,t);y=Math.max(y,n?.labelBBox?.height),p.push(n)}let f=0;for(let t of g){let e=p[f];f+=1;let n=l?.kanban?.sectionWidth||200,i=3*-n/2+y,s=i,a=o.nodes.filter((e=>e.parentId===t.id));for(let e of a){if(e.isGroup)throw new Error("Groups within groups are not allowed in Kanban diagrams");e.x=t.x,e.width=n-15;let i=(await(0,r.h)(u,e,{config:l})).node().getBBox();e.y=s+i.height/2,await(0,r.k)(e),s=e.y+i.height/2+5}let c=e.cluster.select("rect"),h=Math.max(s-i+30,50)+(y-25);c.attr("height",h)}(0,a.N)(void 0,c,l.mindmap?.padding??a.s.kanban.padding,l.mindmap?.useMaxWidth??a.s.kanban.useMaxWidth)}),"draw")},C=(0,o.a)((t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,a.n)(t["lineColor"+e])?t["lineColor"+e]=(0,a.o)(t["lineColor"+e],20):t["lineColor"+e]=(0,a.p)(t["lineColor"+e],20);let n=(0,o.a)(((e,n)=>t.darkMode?(0,a.p)(e,n):(0,a.o)(e,n)),"adjuster");for(let i=0;i<t.THEME_COLOR_LIMIT;i++){let s=""+(17-3*i);e+=`\n    .section-${i-1} rect, .section-${i-1} path, .section-${i-1} circle, .section-${i-1} polygon, .section-${i-1} path  {\n      fill: ${n(t["cScale"+i],10)};\n      stroke: ${n(t["cScale"+i],10)};\n\n    }\n    .section-${i-1} text {\n     fill: ${t["cScaleLabel"+i]};\n    }\n    .node-icon-${i-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+i]};\n    }\n    .section-edge-${i-1}{\n      stroke: ${t["cScale"+i]};\n    }\n    .edge-depth-${i-1}{\n      stroke-width: ${s};\n    }\n    .section-${i-1} line {\n      stroke: ${t["cScaleInv"+i]} ;\n      stroke-width: 3;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.background};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .kanban-ticket-link {\n    fill: ${t.background};\n    stroke: ${t.nodeBorder};\n    text-decoration: underline;\n  }\n    `}return e}),"genSections"),O={db:D,renderer:I,parser:c,styles:(0,o.a)((t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${C(t)}\n  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .cluster-label, .label {\n    color: ${t.textColor};\n    fill: ${t.textColor};\n    }\n  .kanban-label {\n    dy: 1em;\n    alignment-baseline: middle;\n    text-anchor: middle;\n    dominant-baseline: middle;\n    text-align: center;\n  }\n`),"getStyles")}}}]);