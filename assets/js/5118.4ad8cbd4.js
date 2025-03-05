"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5118],{5118:(t,e,s)=>{s.d(e,{a:()=>c,b:()=>N,c:()=>Pt,d:()=>Yt});var i=s(7665),n=s(9356),r=s(3011),a=s(1485),o=s(6375),l=function(){var t=(0,o.a)((function(t,e,s,i){for(s=s||{},i=t.length;i--;s[t[i]]=e);return s}),"o"),e=[1,2],s=[1,3],i=[1,4],n=[2,4],r=[1,9],a=[1,11],l=[1,16],c=[1,17],h=[1,18],d=[1,19],u=[1,32],p=[1,20],y=[1,21],g=[1,22],f=[1,23],S=[1,24],m=[1,26],b=[1,27],_=[1,28],T=[1,29],k=[1,30],E=[1,31],x=[1,34],C=[1,35],$=[1,36],D=[1,37],L=[1,33],v=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],I=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],A=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],w={trace:(0,o.a)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"--\x3e":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"--\x3e",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,o.a)((function(t,e,s,i,n,r,a){var o=r.length-1;switch(n){case 3:return i.setRootDoc(r[o]),r[o];case 4:this.$=[];break;case 5:"nl"!=r[o]&&(r[o-1].push(r[o]),this.$=r[o-1]);break;case 6:case 7:case 12:this.$=r[o];break;case 8:this.$="nl";break;case 13:let t=r[o-1];t.description=i.trimColon(r[o]),this.$=t;break;case 14:this.$={stmt:"relation",state1:r[o-2],state2:r[o]};break;case 15:let e=i.trimColon(r[o]);this.$={stmt:"relation",state1:r[o-3],state2:r[o-1],description:e};break;case 19:this.$={stmt:"state",id:r[o-3],type:"default",description:"",doc:r[o-1]};break;case 20:var l=r[o],c=r[o-2].trim();if(r[o].match(":")){var h=r[o].split(":");l=h[0],c=[c,h[1]]}this.$={stmt:"state",id:l,type:"default",description:c};break;case 21:this.$={stmt:"state",id:r[o-3],type:"default",description:r[o-5],doc:r[o-1]};break;case 22:this.$={stmt:"state",id:r[o],type:"fork"};break;case 23:this.$={stmt:"state",id:r[o],type:"join"};break;case 24:this.$={stmt:"state",id:r[o],type:"choice"};break;case 25:this.$={stmt:"state",id:i.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[o-1].trim(),note:{position:r[o-2].trim(),text:r[o].trim()}};break;case 29:this.$=r[o].trim(),i.setAccTitle(this.$);break;case 30:case 31:this.$=r[o].trim(),i.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:r[o-1].trim(),classes:r[o].trim()};break;case 34:this.$={stmt:"style",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 35:this.$={stmt:"applyClass",id:r[o-1].trim(),styleClass:r[o].trim()};break;case 36:i.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:i.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:i.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:i.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:r[o].trim(),type:"default",description:""};break;case 44:case 45:this.$={stmt:"state",id:r[o-2].trim(),classes:[r[o].trim()],type:"default",description:""}}}),"anonymous"),table:[{3:1,4:e,5:s,6:i},{1:[3]},{3:5,4:e,5:s,6:i},{3:6,4:e,5:s,6:i},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],n,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:b,37:_,38:T,42:k,45:E,48:x,49:C,50:$,51:D,54:L},t(v,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:l,17:c,19:h,22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:b,37:_,38:T,42:k,45:E,48:x,49:C,50:$,51:D,54:L},t(v,[2,7]),t(v,[2,8]),t(v,[2,9]),t(v,[2,10]),t(v,[2,11]),t(v,[2,12],{14:[1,39],15:[1,40]}),t(v,[2,16]),{18:[1,41]},t(v,[2,18],{20:[1,42]}),{23:[1,43]},t(v,[2,22]),t(v,[2,23]),t(v,[2,24]),t(v,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(v,[2,28]),{34:[1,48]},{36:[1,49]},t(v,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(I,[2,42],{55:[1,54]}),t(I,[2,43],{55:[1,55]}),t(v,[2,36]),t(v,[2,37]),t(v,[2,38]),t(v,[2,39]),t(v,[2,6]),t(v,[2,13]),{13:56,24:u,54:L},t(v,[2,17]),t(A,n,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(v,[2,29]),t(v,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(v,[2,14],{14:[1,67]}),{4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,68],22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:b,37:_,38:T,42:k,45:E,48:x,49:C,50:$,51:D,54:L},t(v,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(v,[2,32]),t(v,[2,33]),t(v,[2,34]),t(v,[2,35]),t(I,[2,44]),t(I,[2,45]),t(v,[2,15]),t(v,[2,19]),t(A,n,{7:72}),t(v,[2,26]),t(v,[2,27]),{4:r,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:l,17:c,19:h,21:[1,73],22:d,24:u,25:p,26:y,27:g,28:f,29:S,32:25,33:m,35:b,37:_,38:T,42:k,45:E,48:x,49:C,50:$,51:D,54:L},t(v,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:(0,o.a)((function(t,e){if(!e.recoverable){var s=new Error(t);throw s.hash=e,s}this.trace(t)}),"parseError"),parse:(0,o.a)((function(t){var e=this,s=[0],i=[],n=[null],r=[],a=this.table,l="",c=0,h=0,d=0,u=r.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,typeof p.yylloc>"u"&&(p.yylloc={});var f=p.yylloc;r.push(f);var S=p.options&&p.options.ranges;function m(){var t;return"number"!=typeof(t=i.pop()||p.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.a)((function(t){s.length=s.length-2*t,n.length=n.length-t,r.length=r.length-t}),"popStack"),(0,o.a)(m,"lex");for(var b,_,T,k,E,x,C,$,D,L={};;){if(T=s[s.length-1],this.defaultActions[T]?k=this.defaultActions[T]:((null===b||typeof b>"u")&&(b=m()),k=a[T]&&a[T][b]),typeof k>"u"||!k.length||!k[0]){var v;for(x in D=[],a[T])this.terminals_[x]&&x>2&&D.push("'"+this.terminals_[x]+"'");v=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+D.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(v,{text:p.match,token:this.terminals_[b]||b,line:p.yylineno,loc:f,expected:D})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+T+", token: "+b);switch(k[0]){case 1:s.push(b),n.push(p.yytext),r.push(p.yylloc),s.push(k[1]),b=null,_?(b=_,_=null):(h=p.yyleng,l=p.yytext,c=p.yylineno,f=p.yylloc,d>0&&d--);break;case 2:if(C=this.productions_[k[1]][1],L.$=n[n.length-C],L._$={first_line:r[r.length-(C||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(C||1)].first_column,last_column:r[r.length-1].last_column},S&&(L._$.range=[r[r.length-(C||1)].range[0],r[r.length-1].range[1]]),typeof(E=this.performAction.apply(L,[l,h,c,y.yy,k[1],n,r].concat(u)))<"u")return E;C&&(s=s.slice(0,-1*C*2),n=n.slice(0,-1*C),r=r.slice(0,-1*C)),s.push(this.productions_[k[1]][0]),n.push(L.$),r.push(L._$),$=a[s[s.length-2]][s[s.length-1]],s.push($);break;case 3:return!0}}return!0}),"parse")},O={EOF:1,parseError:(0,o.a)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,o.a)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,o.a)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,o.a)((function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,o.a)((function(){return this._more=!0,this}),"more"),reject:(0,o.a)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,o.a)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,o.a)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,o.a)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,o.a)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,o.a)((function(t,e){var s,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1}),"test_match"),next:(0,o.a)((function(){if(this.done)return this.EOF;var t,e,s,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((s=this._input.match(this.rules[n[r]]))&&(!e||s[0].length>e[0].length)){if(e=s,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(s,n[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,o.a)((function(){return this.next()||this.lex()}),"lex"),begin:(0,o.a)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,o.a)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,o.a)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,o.a)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,o.a)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,o.a)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.a)((function(t,e,s,i){switch(s){case 0:return 41;case 1:case 42:return 48;case 2:case 43:return 49;case 3:case 44:return 50;case 4:case 45:return 51;case 5:case 6:case 8:case 9:case 10:case 11:case 54:case 56:case 62:break;case 7:case 77:return 5;case 12:case 32:return this.pushState("SCALE"),17;case 13:case 33:return 18;case 14:case 20:case 34:case 49:case 52:this.popState();break;case 15:return this.begin("acc_title"),33;case 16:return this.popState(),"acc_title_value";case 17:return this.begin("acc_descr"),35;case 18:return this.popState(),"acc_descr_value";case 19:this.begin("acc_descr_multiline");break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 24:return this.popState(),this.pushState("CLASSDEFID"),39;case 25:return this.popState(),40;case 26:return this.pushState("CLASS"),45;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;case 28:return this.popState(),47;case 29:return this.pushState("STYLE"),42;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;case 31:return this.popState(),44;case 35:this.pushState("STATE");break;case 36:case 39:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),25;case 37:case 40:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),26;case 38:case 41:return this.popState(),e.yytext=e.yytext.slice(0,-10).trim(),27;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";case 48:case 64:return this.popState(),"ID";case 50:return"STATE_DESCR";case 51:return 19;case 53:return this.popState(),this.pushState("struct"),20;case 55:return this.popState(),21;case 57:return this.begin("NOTE"),29;case 58:return this.popState(),this.pushState("NOTE_ID"),56;case 59:return this.popState(),this.pushState("NOTE_ID"),57;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:return"NOTE_TEXT";case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;case 66:return this.popState(),e.yytext=e.yytext.substr(2).trim(),31;case 67:return this.popState(),e.yytext=e.yytext.slice(0,-8).trim(),31;case 68:case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return e.yytext=e.yytext.trim(),14;case 74:return 15;case 75:return 28;case 76:return 55;case 78:return"INVALID"}}),"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};function R(){this.yy={}}return w.lexer=O,(0,o.a)(R,"Parser"),R.prototype=w,w.Parser=R,new R}();l.parser=l;var c=l,h="state",d="relation",u="default",p="divider",y="fill:none",g="fill: #333",f="text",S="normal",m="rect",b="rectWithTitle",_="divider",T="roundedWithTitle",k="statediagram",E=`${k}-state`,x="transition",C=`${x} note-edge`,$=`${k}-note`,D=`${k}-cluster`,L=`${k}-cluster-alt`,v="parent",I="note",A="----",w=`${A}${I}`,O=`${A}${v}`,R=(0,o.a)(((t,e="TB")=>{if(!t.doc)return e;let s=e;for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s}),"getDir"),N={getClasses:(0,o.a)((function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()}),"getClasses"),draw:(0,o.a)((async function(t,e,s,o){a.b.info("REF0:"),a.b.info("Drawing state diagram (v2)",e);let{securityLevel:l,state:c,layout:h}=(0,a.X)();o.db.extract(o.db.getRootDocV2());let d=o.db.getData(),u=(0,i.a)(e,l);d.type=o.type,d.layoutAlgorithm=h,d.nodeSpacing=c?.nodeSpacing||50,d.rankSpacing=c?.rankSpacing||50,d.markers=["barb"],d.diagramId=e,await(0,n.b)(d,u),r.m.insertTitle(u,"statediagramTitleText",c?.titleTopMargin??25,o.db.getDiagramTitle()),(0,i.b)(u,8,k,c?.useMaxWidth??!0)}),"draw"),getDir:R},B=new Map,F=0;function P(t="",e=0,s="",i=A){return`state-${t}${null!==s&&s.length>0?`${i}${s}`:""}-${e}`}(0,o.a)(P,"stateDomId");var Y=(0,o.a)(((t,e,s,i,n,r,o,l)=>{a.b.trace("items",e),e.forEach((e=>{switch(e.stmt){case h:case u:U(t,e,s,i,n,r,o,l);break;case d:{U(t,e.state1,s,i,n,r,o,l),U(t,e.state2,s,i,n,r,o,l);let c={id:"edge"+F,start:e.state1.id,end:e.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:y,labelStyle:"",label:a.L.sanitizeText(e.description,(0,a.X)()),arrowheadStyle:g,labelpos:"c",labelType:f,thickness:S,classes:x,look:o};n.push(c),F++}}}))}),"setupDoc"),G=(0,o.a)(((t,e="TB")=>{let s=e;if(t.doc)for(let e of t.doc)"dir"===e.stmt&&(s=e.value);return s}),"getDir");function X(t,e,s){if(!e.id||"</join></fork>"===e.id||"</choice>"===e.id)return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach((t=>{if(s.get(t)){let i=s.get(t);e.cssCompiledStyles=[...e.cssCompiledStyles,...i.styles]}})));let i=t.find((t=>t.id===e.id));i?Object.assign(i,e):t.push(e)}function j(t){return t?.classes?.join(" ")??""}function z(t){return t?.styles??[]}(0,o.a)(X,"insertOrUpdateNode"),(0,o.a)(j,"getClassesFromDbInfo"),(0,o.a)(z,"getStylesFromDbInfo");var U=(0,o.a)(((t,e,s,i,n,r,o,l)=>{let c=e.id,h=s.get(c),d=j(h),k=z(h);if(a.b.info("dataFetcher parsedItem",e,h,k),"root"!==c){let s=m;!0===e.start?s="stateStart":!1===e.start&&(s="stateEnd"),e.type!==u&&(s=e.type),B.get(c)||B.set(c,{id:c,shape:s,description:a.L.sanitizeText(c,(0,a.X)()),cssClasses:`${d} ${E}`,cssStyles:k});let h=B.get(c);e.description&&(Array.isArray(h.description)?(h.shape=b,h.description.push(e.description)):h.description?.length>0?(h.shape=b,h.description===c?h.description=[e.description]:h.description=[h.description,e.description]):(h.shape=m,h.description=e.description),h.description=a.L.sanitizeTextOrArray(h.description,(0,a.X)())),1===h.description?.length&&h.shape===b&&("group"===h.type?h.shape=T:h.shape=m),!h.type&&e.doc&&(a.b.info("Setting cluster for XCX",c,G(e)),h.type="group",h.isGroup=!0,h.dir=G(e),h.shape=e.type===p?_:T,h.cssClasses=`${h.cssClasses} ${D} ${r?L:""}`);let x={labelStyle:"",shape:h.shape,label:h.description,cssClasses:h.cssClasses,cssCompiledStyles:[],cssStyles:h.cssStyles,id:c,dir:h.dir,domId:P(c,F),type:h.type,isGroup:"group"===h.type,padding:8,rx:10,ry:10,look:o};if(x.shape===_&&(x.label=""),t&&"root"!==t.id&&(a.b.trace("Setting node ",c," to be child of its parent ",t.id),x.parentId=t.id),x.centerLabel=!0,e.note){let t={labelStyle:"",shape:"note",label:e.note.text,cssClasses:$,cssStyles:[],cssCompilesStyles:[],id:c+w+"-"+F,domId:P(c,F,I),type:h.type,isGroup:"group"===h.type,padding:(0,a.X)().flowchart.padding,look:o,position:e.note.position},s=c+O,r={labelStyle:"",shape:"noteGroup",label:e.note.text,cssClasses:h.cssClasses,cssStyles:[],id:c+O,domId:P(c,F,v),type:"group",isGroup:!0,padding:16,look:o,position:e.note.position};F++,r.id=s,t.parentId=s,X(i,r,l),X(i,t,l),X(i,x,l);let d=c,u=t.id;"left of"===e.note.position&&(d=t.id,u=c),n.push({id:d+"-"+u,start:d,end:u,arrowhead:"none",arrowTypeEnd:"",style:y,labelStyle:"",classes:C,arrowheadStyle:g,labelpos:"c",labelType:f,thickness:S,look:o})}else X(i,x,l)}e.doc&&(a.b.trace("Adding nodes children "),Y(e,e.doc,s,i,n,!r,o,l))}),"dataFetcher"),M=(0,o.a)((()=>{B.clear(),F=0}),"reset"),V="[*]",W="start",H=V,J="color",K="fill";function Q(){return new Map}(0,o.a)(Q,"newClassesList");var q=[],Z=[],tt="LR",et=[],st=Q(),it=(0,o.a)((()=>({relations:[],states:new Map,documents:{}})),"newDoc"),nt={root:it()},rt=nt.root,at=0,ot=0,lt=(0,o.a)((t=>JSON.parse(JSON.stringify(t))),"clone"),ct=(0,o.a)((t=>{a.b.info("Setting root doc",t),et=t}),"setRootDoc"),ht=(0,o.a)((()=>et),"getRootDoc"),dt=(0,o.a)(((t,e,s)=>{if(e.stmt===d)dt(t,e.state1,!0),dt(t,e.state2,!1);else if(e.stmt===h&&("[*]"===e.id?(e.id=s?t.id+"_start":t.id+"_end",e.start=s):e.id=e.id.trim()),e.doc){let t,s=[],i=[];for(t=0;t<e.doc.length;t++)if(e.doc[t].type===p){let n=lt(e.doc[t]);n.doc=lt(i),s.push(n),i=[]}else i.push(e.doc[t]);if(s.length>0&&i.length>0){let t={stmt:h,id:(0,r.e)(),type:"divider",doc:lt(i)};s.push(lt(t)),e.doc=s}e.doc.forEach((t=>dt(e,t,!0)))}}),"docTranslator"),ut=(0,o.a)((()=>(dt({id:"root"},{id:"root",doc:et},!0),{id:"root",doc:et})),"getRootDocV2"),pt=(0,o.a)((t=>{let e;e=t.doc?t.doc:t,a.b.info(e),gt(!0),a.b.info("Extract initial document:",e),e.forEach((t=>{switch(a.b.warn("Statement",t.stmt),t.stmt){case h:yt(t.id.trim(),t.type,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles);break;case d:Ct(t.state1,t.state2,t.description);break;case"classDef":vt(t.id.trim(),t.classes);break;case"style":{let e=t.id.trim().split(","),s=t.styleClass.split(",");e.forEach((t=>{let e=ft(t);if(void 0===e){let s=t.trim();yt(s),e=ft(s)}e.styles=s.map((t=>t.replace(/;/g,"")?.trim()))}))}break;case"applyClass":At(t.id.trim(),t.styleClass)}}));let s=St(),i=(0,a.X)().look;M(),U(void 0,ut(),s,q,Z,!0,i,st),q.forEach((t=>{if(Array.isArray(t.label)){if(t.description=t.label.slice(1),t.isGroup&&t.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+t.id+"]");t.label=t.label[0]}}))}),"extract"),yt=(0,o.a)((function(t,e=u,s=null,i=null,n=null,r=null,o=null,l=null){let c=t?.trim();if(rt.states.has(c)?(rt.states.get(c).doc||(rt.states.get(c).doc=s),rt.states.get(c).type||(rt.states.get(c).type=e)):(a.b.info("Adding state ",c,i),rt.states.set(c,{id:c,descriptions:[],type:e,doc:s,note:n,classes:[],styles:[],textStyles:[]})),i&&(a.b.info("Setting state description",c,i),"string"==typeof i&&$t(c,i.trim()),"object"==typeof i&&i.forEach((t=>$t(c,t.trim())))),n){let t=rt.states.get(c);t.note=n,t.note.text=a.L.sanitizeText(t.note.text,(0,a.X)())}r&&(a.b.info("Setting state classes",c,r),("string"==typeof r?[r]:r).forEach((t=>At(c,t.trim())))),o&&(a.b.info("Setting state styles",c,o),("string"==typeof o?[o]:o).forEach((t=>wt(c,t.trim())))),l&&(a.b.info("Setting state styles",c,o),("string"==typeof l?[l]:l).forEach((t=>Ot(c,t.trim()))))}),"addState"),gt=(0,o.a)((function(t){q=[],Z=[],nt={root:it()},rt=nt.root,at=0,st=Q(),t||(0,a.P)()}),"clear"),ft=(0,o.a)((function(t){return rt.states.get(t)}),"getState"),St=(0,o.a)((function(){return rt.states}),"getStates"),mt=(0,o.a)((function(){a.b.info("Documents = ",nt)}),"logDocuments"),bt=(0,o.a)((function(){return rt.relations}),"getRelations");function _t(t=""){let e=t;return t===V&&(at++,e=`${W}${at}`),e}function Tt(t="",e=u){return t===V?W:e}function kt(t=""){let e=t;return t===H&&(e="end"+ ++at),e}function Et(t="",e=u){return t===H?"end":e}function xt(t,e,s){let i=_t(t.id.trim()),n=Tt(t.id.trim(),t.type),r=_t(e.id.trim()),o=Tt(e.id.trim(),e.type);yt(i,n,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),yt(r,o,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),rt.relations.push({id1:i,id2:r,relationTitle:a.L.sanitizeText(s,(0,a.X)())})}(0,o.a)(_t,"startIdIfNeeded"),(0,o.a)(Tt,"startTypeIfNeeded"),(0,o.a)(kt,"endIdIfNeeded"),(0,o.a)(Et,"endTypeIfNeeded"),(0,o.a)(xt,"addRelationObjs");var Ct=(0,o.a)((function(t,e,s){if("object"==typeof t)xt(t,e,s);else{let i=_t(t.trim()),n=Tt(t),r=kt(e.trim()),o=Et(e);yt(i,n),yt(r,o),rt.relations.push({id1:i,id2:r,title:a.L.sanitizeText(s,(0,a.X)())})}}),"addRelation"),$t=(0,o.a)((function(t,e){let s=rt.states.get(t),i=e.startsWith(":")?e.replace(":","").trim():e;s.descriptions.push(a.L.sanitizeText(i,(0,a.X)()))}),"addDescription"),Dt=(0,o.a)((function(t){return":"===t.substring(0,1)?t.substr(2).trim():t.trim()}),"cleanupLabel"),Lt=(0,o.a)((()=>"divider-id-"+ ++ot),"getDividerId"),vt=(0,o.a)((function(t,e=""){st.has(t)||st.set(t,{id:t,styles:[],textStyles:[]});let s=st.get(t);e?.split(",").forEach((t=>{let e=t.replace(/([^;]*);/,"$1").trim();if(RegExp(J).exec(t)){let t=e.replace(K,"bgFill").replace(J,K);s.textStyles.push(t)}s.styles.push(e)}))}),"addStyleClass"),It=(0,o.a)((function(){return st}),"getClasses"),At=(0,o.a)((function(t,e){t.split(",").forEach((function(t){let s=ft(t);if(void 0===s){let e=t.trim();yt(e),s=ft(e)}s.classes.push(e)}))}),"setCssClass"),wt=(0,o.a)((function(t,e){let s=ft(t);void 0!==s&&s.styles.push(e)}),"setStyle"),Ot=(0,o.a)((function(t,e){let s=ft(t);void 0!==s&&s.textStyles.push(e)}),"setTextStyle"),Rt=(0,o.a)((()=>tt),"getDirection"),Nt=(0,o.a)((t=>{tt=t}),"setDirection"),Bt=(0,o.a)((t=>t&&":"===t[0]?t.substr(1).trim():t.trim()),"trimColon"),Ft=(0,o.a)((()=>{let t=(0,a.X)();return{nodes:q,edges:Z,other:{},config:t,direction:R(ut())}}),"getData"),Pt={getConfig:(0,o.a)((()=>(0,a.X)().state),"getConfig"),getData:Ft,addState:yt,clear:gt,getState:ft,getStates:St,getRelations:bt,getClasses:It,getDirection:Rt,addRelation:Ct,getDividerId:Lt,setDirection:Nt,cleanupLabel:Dt,lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},logDocuments:mt,getRootDoc:ht,setRootDoc:ct,getRootDocV2:ut,extract:pt,trimColon:Bt,getAccTitle:a.R,setAccTitle:a.Q,getAccDescription:a.T,setAccDescription:a.S,addStyleClass:vt,setCssClass:At,addDescription:$t,setDiagramTitle:a.U,getDiagramTitle:a.V},Yt=(0,o.a)((t=>`\ndefs #statediagram-barbEnd {\n    fill: ${t.transitionColor};\n    stroke: ${t.transitionColor};\n  }\ng.stateGroup text {\n  fill: ${t.nodeBorder};\n  stroke: none;\n  font-size: 10px;\n}\ng.stateGroup text {\n  fill: ${t.textColor};\n  stroke: none;\n  font-size: 10px;\n\n}\ng.stateGroup .state-title {\n  font-weight: bolder;\n  fill: ${t.stateLabelColor};\n}\n\ng.stateGroup rect {\n  fill: ${t.mainBkg};\n  stroke: ${t.nodeBorder};\n}\n\ng.stateGroup line {\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.transition {\n  stroke: ${t.transitionColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.stateGroup .composit {\n  fill: ${t.background};\n  border-bottom: 1px\n}\n\n.stateGroup .alt-composit {\n  fill: #e0e0e0;\n  border-bottom: 1px\n}\n\n.state-note {\n  stroke: ${t.noteBorderColor};\n  fill: ${t.noteBkgColor};\n\n  text {\n    fill: ${t.noteTextColor};\n    stroke: none;\n    font-size: 10px;\n  }\n}\n\n.stateLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${t.mainBkg};\n  opacity: 0.5;\n}\n\n.edgeLabel .label rect {\n  fill: ${t.labelBackgroundColor};\n  opacity: 0.5;\n}\n.edgeLabel {\n  background-color: ${t.edgeLabelBackground};\n  p {\n    background-color: ${t.edgeLabelBackground};\n  }\n  rect {\n    opacity: 0.5;\n    background-color: ${t.edgeLabelBackground};\n    fill: ${t.edgeLabelBackground};\n  }\n  text-align: center;\n}\n.edgeLabel .label text {\n  fill: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n.label div .edgeLabel {\n  color: ${t.transitionLabelColor||t.tertiaryTextColor};\n}\n\n.stateLabel text {\n  fill: ${t.stateLabelColor};\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.node circle.state-start {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node .fork-join {\n  fill: ${t.specialStateColor};\n  stroke: ${t.specialStateColor};\n}\n\n.node circle.state-end {\n  fill: ${t.innerEndBackground};\n  stroke: ${t.background};\n  stroke-width: 1.5\n}\n.end-state-inner {\n  fill: ${t.compositeBackground||t.background};\n  // stroke: ${t.background};\n  stroke-width: 1.5\n}\n\n.node rect {\n  fill: ${t.stateBkg||t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n.node polygon {\n  fill: ${t.mainBkg};\n  stroke: ${t.stateBorder||t.nodeBorder};;\n  stroke-width: 1px;\n}\n#statediagram-barbEnd {\n  fill: ${t.lineColor};\n}\n\n.statediagram-cluster rect {\n  fill: ${t.compositeTitleBackground};\n  stroke: ${t.stateBorder||t.nodeBorder};\n  stroke-width: 1px;\n}\n\n.cluster-label, .nodeLabel {\n  color: ${t.stateLabelColor};\n  // line-height: 1;\n}\n\n.statediagram-cluster rect.outer {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state .divider {\n  stroke: ${t.stateBorder||t.nodeBorder};\n}\n\n.statediagram-state .title-state {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-cluster.statediagram-cluster .inner {\n  fill: ${t.compositeBackground||t.background};\n}\n.statediagram-cluster.statediagram-cluster-alt .inner {\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.statediagram-cluster .inner {\n  rx:0;\n  ry:0;\n}\n\n.statediagram-state rect.basic {\n  rx: 5px;\n  ry: 5px;\n}\n.statediagram-state rect.divider {\n  stroke-dasharray: 10,10;\n  fill: ${t.altBackground?t.altBackground:"#efefef"};\n}\n\n.note-edge {\n  stroke-dasharray: 5;\n}\n\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n.statediagram-note rect {\n  fill: ${t.noteBkgColor};\n  stroke: ${t.noteBorderColor};\n  stroke-width: 1px;\n  rx: 0;\n  ry: 0;\n}\n\n.statediagram-note text {\n  fill: ${t.noteTextColor};\n}\n\n.statediagram-note .nodeLabel {\n  color: ${t.noteTextColor};\n}\n.statediagram .edgeLabel {\n  color: red; // ${t.noteTextColor};\n}\n\n#dependencyStart, #dependencyEnd {\n  fill: ${t.lineColor};\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n}\n\n.statediagramTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${t.textColor};\n}\n`),"getStyles")},7665:(t,e,s)=>{s.d(e,{a:()=>r,b:()=>a});var i=s(1485),n=s(6375),r=(0,n.a)(((t,e)=>{let s;return"sandbox"===e&&(s=(0,i.ga)("#i"+t)),("sandbox"===e?(0,i.ga)(s.nodes()[0].contentDocument.body):(0,i.ga)("body")).select(`[id="${t}"]`)}),"getDiagramElement"),a=(0,n.a)(((t,e,s,n)=>{t.attr("class",s);let{width:r,height:a,x:c,y:h}=o(t,e);(0,i.M)(t,a,r,n);let d=l(c,h,r,a,e);t.attr("viewBox",d),i.b.debug(`viewBox configured: ${d} with padding: ${e}`)}),"setupViewPortForSVG"),o=(0,n.a)(((t,e)=>{let s=t.node()?.getBBox()||{width:0,height:0,x:0,y:0};return{width:s.width+2*e,height:s.height+2*e,x:s.x,y:s.y}}),"calculateDimensionsWithPadding"),l=(0,n.a)(((t,e,s,i,n)=>`${t-n} ${e-n} ${s} ${i}`),"createViewBox")}}]);