"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9605],{9605:(t,e,a)=>{a.d(e,{diagram:()=>j});var r=a(7601),i=a(1883),n=a(3011),s=(a(7851),a(1485)),o=(a(6772),a(9913),a(1869),a(6375)),l=function(){var t=(0,o.a)((function(t,e,a,r){for(a=a||{},r=t.length;r--;a[t[r]]=e);return a}),"o"),e=[6,8,10,20,22,24,26,27,28],a=[1,10],r=[1,11],i=[1,12],n=[1,13],s=[1,14],l=[1,15],c=[1,21],h=[1,22],d=[1,23],u=[1,24],y=[1,25],p=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],_=[1,34],f=[27,28,46,47],g=[41,42,43,44,45],E=[17,34],m=[1,54],b=[1,53],O=[17,34,36,38],k={trace:(0,o.a)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:(0,o.a)((function(t,e,a,r,i,n,s){var o=n.length-1;switch(i){case 1:break;case 2:case 6:case 7:this.$=[];break;case 3:n[o-1].push(n[o]),this.$=n[o-1];break;case 4:case 5:case 19:case 43:case 27:case 28:case 31:this.$=n[o];break;case 8:r.addEntity(n[o-4]),r.addEntity(n[o-2]),r.addRelationship(n[o-4],n[o],n[o-2],n[o-3]);break;case 9:r.addEntity(n[o-3]),r.addAttributes(n[o-3],n[o-1]);break;case 10:r.addEntity(n[o-2]);break;case 11:r.addEntity(n[o]);break;case 12:r.addEntity(n[o-6],n[o-4]),r.addAttributes(n[o-6],n[o-1]);break;case 13:r.addEntity(n[o-5],n[o-3]);break;case 14:r.addEntity(n[o-3],n[o-1]);break;case 15:case 16:this.$=n[o].trim(),r.setAccTitle(this.$);break;case 17:case 18:this.$=n[o].trim(),r.setAccDescription(this.$);break;case 20:case 41:case 42:case 32:this.$=n[o].replace(/"/g,"");break;case 21:case 29:this.$=[n[o]];break;case 22:n[o].push(n[o-1]),this.$=n[o];break;case 23:this.$={attributeType:n[o-1],attributeName:n[o]};break;case 24:this.$={attributeType:n[o-2],attributeName:n[o-1],attributeKeyTypeList:n[o]};break;case 25:this.$={attributeType:n[o-2],attributeName:n[o-1],attributeComment:n[o]};break;case 26:this.$={attributeType:n[o-3],attributeName:n[o-2],attributeKeyTypeList:n[o-1],attributeComment:n[o]};break;case 30:n[o-2].push(n[o]),this.$=n[o-2];break;case 33:this.$={cardA:n[o],relType:n[o-1],cardB:n[o-2]};break;case 34:this.$=r.Cardinality.ZERO_OR_ONE;break;case 35:this.$=r.Cardinality.ZERO_OR_MORE;break;case 36:this.$=r.Cardinality.ONE_OR_MORE;break;case 37:this.$=r.Cardinality.ONLY_ONE;break;case 38:this.$=r.Cardinality.MD_PARENT;break;case 39:this.$=r.Identification.NON_IDENTIFYING;break;case 40:this.$=r.Identification.IDENTIFYING}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:a,22:r,24:i,26:n,27:s,28:l},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:a,22:r,24:i,26:n,27:s,28:l},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:c,42:h,43:d,44:u,45:y}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(p,[2,19]),t(p,[2,20]),t(e,[2,4]),{11:29,27:s,28:l},{16:30,17:[1,31],29:32,30:33,34:_},{11:35,27:s,28:l},{40:36,46:[1,37],47:[1,38]},t(f,[2,34]),t(f,[2,35]),t(f,[2,36]),t(f,[2,37]),t(f,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:_},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:c,42:h,43:d,44:u,45:y},t(g,[2,39]),t(g,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(E,[2,23],{32:50,33:51,35:52,37:m,38:b}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(E,[2,24],{33:56,36:[1,57],38:b}),t(E,[2,25]),t(O,[2,29]),t(E,[2,32]),t(O,[2,31]),{16:58,17:[1,59],29:32,30:33,34:_},t(E,[2,26]),{35:60,37:m},{17:[1,61]},t(e,[2,13]),t(O,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:(0,o.a)((function(t,e){if(!e.recoverable){var a=new Error(t);throw a.hash=e,a}this.trace(t)}),"parseError"),parse:(0,o.a)((function(t){var e=this,a=[0],r=[],i=[null],n=[],s=this.table,l="",c=0,h=0,d=0,u=n.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(p.yy[_]=this.yy[_]);y.setInput(t,p.yy),p.yy.lexer=y,p.yy.parser=this,typeof y.yylloc>"u"&&(y.yylloc={});var f=y.yylloc;n.push(f);var g=y.options&&y.options.ranges;function E(){var t;return"number"!=typeof(t=r.pop()||y.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.a)((function(t){a.length=a.length-2*t,i.length=i.length-t,n.length=n.length-t}),"popStack"),(0,o.a)(E,"lex");for(var m,b,O,k,R,N,x,T,A,M={};;){if(O=a[a.length-1],this.defaultActions[O]?k=this.defaultActions[O]:((null===m||typeof m>"u")&&(m=E()),k=s[O]&&s[O][m]),typeof k>"u"||!k.length||!k[0]){var w;for(N in A=[],s[O])this.terminals_[N]&&N>2&&A.push("'"+this.terminals_[N]+"'");w=y.showPosition?"Parse error on line "+(c+1)+":\n"+y.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[m]||m)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==m?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(w,{text:y.match,token:this.terminals_[m]||m,line:y.yylineno,loc:f,expected:A})}if(k[0]instanceof Array&&k.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+m);switch(k[0]){case 1:a.push(m),i.push(y.yytext),n.push(y.yylloc),a.push(k[1]),m=null,b?(m=b,b=null):(h=y.yyleng,l=y.yytext,c=y.yylineno,f=y.yylloc,d>0&&d--);break;case 2:if(x=this.productions_[k[1]][1],M.$=i[i.length-x],M._$={first_line:n[n.length-(x||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(x||1)].first_column,last_column:n[n.length-1].last_column},g&&(M._$.range=[n[n.length-(x||1)].range[0],n[n.length-1].range[1]]),typeof(R=this.performAction.apply(M,[l,h,c,p.yy,k[1],i,n].concat(u)))<"u")return R;x&&(a=a.slice(0,-1*x*2),i=i.slice(0,-1*x),n=n.slice(0,-1*x)),a.push(this.productions_[k[1]][0]),i.push(M.$),n.push(M._$),T=s[a[a.length-2]][a[a.length-1]],a.push(T);break;case 3:return!0}}return!0}),"parse")},R={EOF:1,parseError:(0,o.a)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,o.a)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,o.a)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,o.a)((function(t){var e=t.length,a=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===r.length?this.yylloc.first_column:0)+r[r.length-a.length].length-a[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,o.a)((function(){return this._more=!0,this}),"more"),reject:(0,o.a)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,o.a)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,o.a)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,o.a)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,o.a)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,o.a)((function(t,e){var a,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],a=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var n in i)this[n]=i[n];return!1}return!1}),"test_match"),next:(0,o.a)((function(){if(this.done)return this.EOF;var t,e,a,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),n=0;n<i.length;n++)if((a=this._input.match(this.rules[i[n]]))&&(!e||a[0].length>e[0].length)){if(e=a,r=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(a,i[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,i[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,o.a)((function(){return this.next()||this.lex()}),"lex"),begin:(0,o.a)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,o.a)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,o.a)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,o.a)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,o.a)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,o.a)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.a)((function(t,e,a,r){switch(a){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:case 15:case 20:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 16:return 37;case 17:case 18:return 34;case 19:return 38;case 21:return this.popState(),17;case 22:case 54:return e.yytext[0];case 23:return 18;case 24:return 19;case 25:case 29:case 30:case 43:return 41;case 26:case 27:case 28:case 36:case 38:case 45:return 43;case 31:case 32:case 33:case 34:case 35:case 37:case 44:return 42;case 39:case 40:case 41:case 42:return 44;case 46:return 45;case 47:case 50:case 51:case 52:return 46;case 48:case 49:return 47;case 53:return 27;case 55:return 6}}),"anonymous"),rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};function N(){this.yy={}}return k.lexer=R,(0,o.a)(N,"Parser"),N.prototype=k,k.Parser=N,new N}();l.parser=l;var c=l,h=new Map,d=[],u=(0,o.a)((function(t,e=void 0){return h.has(t)?!h.get(t).alias&&e&&(h.get(t).alias=e,s.b.info(`Add alias '${e}' to entity '${t}'`)):(h.set(t,{attributes:[],alias:e}),s.b.info("Added new entity :",t)),h.get(t)}),"addEntity"),y=(0,o.a)((()=>h),"getEntities"),p=(0,o.a)((function(t,e){let a,r=u(t);for(a=e.length-1;a>=0;a--)r.attributes.push(e[a]),s.b.debug("Added attribute ",e[a].attributeName)}),"addAttributes"),_=(0,o.a)((function(t,e,a,r){let i={entityA:t,roleA:e,entityB:a,relSpec:r};d.push(i),s.b.debug("Added new relationship :",i)}),"addRelationship"),f=(0,o.a)((()=>d),"getRelationships"),g=(0,o.a)((function(){h=new Map,d=[],(0,s.P)()}),"clear"),E={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},getConfig:(0,o.a)((()=>(0,s.X)().er),"getConfig"),addEntity:u,addAttributes:p,getEntities:y,addRelationship:_,getRelationships:f,clear:g,setAccTitle:s.Q,getAccTitle:s.R,setAccDescription:s.S,getAccDescription:s.T,setDiagramTitle:s.U,getDiagramTitle:s.V},m={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},b=(0,o.a)((function(t,e){let a;t.append("defs").append("marker").attr("id",m.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",m.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",m.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",m.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),a=t.append("defs").append("marker").attr("id",m.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),a.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),a.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),a=t.append("defs").append("marker").attr("id",m.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),a.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),a.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",m.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",m.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),a=t.append("defs").append("marker").attr("id",m.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),a.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),a.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),a=t.append("defs").append("marker").attr("id",m.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),a.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),a.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")}),"insertMarkers"),O={ERMarkers:m,insertMarkers:b},k=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function R(t){return"string"==typeof t&&k.test(t)}(0,o.a)(R,"validate");var N=R,x=[];for(let t=0;t<256;++t)x.push((t+256).toString(16).slice(1));function T(t,e=0){return x[t[e+0]]+x[t[e+1]]+x[t[e+2]]+x[t[e+3]]+"-"+x[t[e+4]]+x[t[e+5]]+"-"+x[t[e+6]]+x[t[e+7]]+"-"+x[t[e+8]]+x[t[e+9]]+"-"+x[t[e+10]]+x[t[e+11]]+x[t[e+12]]+x[t[e+13]]+x[t[e+14]]+x[t[e+15]]}function A(t){if(!N(t))throw TypeError("Invalid UUID");let e,a=new Uint8Array(16);return a[0]=(e=parseInt(t.slice(0,8),16))>>>24,a[1]=e>>>16&255,a[2]=e>>>8&255,a[3]=255&e,a[4]=(e=parseInt(t.slice(9,13),16))>>>8,a[5]=255&e,a[6]=(e=parseInt(t.slice(14,18),16))>>>8,a[7]=255&e,a[8]=(e=parseInt(t.slice(19,23),16))>>>8,a[9]=255&e,a[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,a[11]=e/4294967296&255,a[12]=e>>>24&255,a[13]=e>>>16&255,a[14]=e>>>8&255,a[15]=255&e,a}(0,o.a)(T,"unsafeStringify"),(0,o.a)(A,"parse");var M=A;function w(t){t=unescape(encodeURIComponent(t));let e=[];for(let a=0;a<t.length;++a)e.push(t.charCodeAt(a));return e}function I(t,e,a){function r(t,r,i,n){var s;if("string"==typeof t&&(t=w(t)),"string"==typeof r&&(r=M(r)),16!==(null===(s=r)||void 0===s?void 0:s.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let o=new Uint8Array(16+t.length);if(o.set(r),o.set(t,r.length),o=a(o),o[6]=15&o[6]|e,o[8]=63&o[8]|128,i){n=n||0;for(let t=0;t<16;++t)i[n+t]=o[t];return i}return T(o)}(0,o.a)(r,"generateUUID");try{r.name=t}catch{}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function S(t,e,a,r){switch(t){case 0:return e&a^~e&r;case 1:case 3:return e^a^r;case 2:return e&a^e&r^a&r}}function D(t,e){return t<<e|t>>>32-e}function v(t){let e=[1518500249,1859775393,2400959708,3395469782],a=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){let e=unescape(encodeURIComponent(t));t=[];for(let a=0;a<e.length;++a)t.push(e.charCodeAt(a))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);let r=t.length/4+2,i=Math.ceil(r/16),n=new Array(i);for(let e=0;e<i;++e){let a=new Uint32Array(16);for(let r=0;r<16;++r)a[r]=t[64*e+4*r]<<24|t[64*e+4*r+1]<<16|t[64*e+4*r+2]<<8|t[64*e+4*r+3];n[e]=a}n[i-1][14]=8*(t.length-1)/Math.pow(2,32),n[i-1][14]=Math.floor(n[i-1][14]),n[i-1][15]=8*(t.length-1)&4294967295;for(let t=0;t<i;++t){let r=new Uint32Array(80);for(let e=0;e<16;++e)r[e]=n[t][e];for(let t=16;t<80;++t)r[t]=D(r[t-3]^r[t-8]^r[t-14]^r[t-16],1);let i=a[0],s=a[1],o=a[2],l=a[3],c=a[4];for(let t=0;t<80;++t){let a=Math.floor(t/20),n=D(i,5)+S(a,s,o,l)+c+e[a]+r[t]>>>0;c=l,l=o,o=D(s,30)>>>0,s=i,i=n}a[0]=a[0]+i>>>0,a[1]=a[1]+s>>>0,a[2]=a[2]+o>>>0,a[3]=a[3]+l>>>0,a[4]=a[4]+c>>>0}return[a[0]>>24&255,a[0]>>16&255,a[0]>>8&255,255&a[0],a[1]>>24&255,a[1]>>16&255,a[1]>>8&255,255&a[1],a[2]>>24&255,a[2]>>16&255,a[2]>>8&255,255&a[2],a[3]>>24&255,a[3]>>16&255,a[3]>>8&255,255&a[3],a[4]>>24&255,a[4]>>16&255,a[4]>>8&255,255&a[4]]}(0,o.a)(w,"stringToBytes"),(0,o.a)(I,"v35"),(0,o.a)(S,"f"),(0,o.a)(D,"ROTL"),(0,o.a)(v,"sha1");var L=I("v5",80,v),$=/[^\dA-Za-z](\W)*/g,C={},B=new Map,P=(0,o.a)((function(t){let e=Object.keys(t);for(let a of e)C[a]=t[a]}),"setConf"),Y=(0,o.a)(((t,e,a)=>{let r=C.entityPadding/3,i=C.entityPadding/3,n=.85*C.fontSize,o=e.node().getBBox(),l=[],c=!1,h=!1,d=0,u=0,y=0,p=0,_=o.height+2*r,f=1;a.forEach((t=>{void 0!==t.attributeKeyTypeList&&t.attributeKeyTypeList.length>0&&(c=!0),void 0!==t.attributeComment&&(h=!0)})),a.forEach((a=>{let i=`${e.node().id}-attr-${f}`,o=0,g=(0,s.H)(a.attributeType),E=t.append("text").classed("er entityLabel",!0).attr("id",`${i}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,s.X)().fontFamily).style("font-size",n+"px").text(g),m=t.append("text").classed("er entityLabel",!0).attr("id",`${i}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,s.X)().fontFamily).style("font-size",n+"px").text(a.attributeName),b={};b.tn=E,b.nn=m;let O=E.node().getBBox(),k=m.node().getBBox();if(d=Math.max(d,O.width),u=Math.max(u,k.width),o=Math.max(O.height,k.height),c){let e=void 0!==a.attributeKeyTypeList?a.attributeKeyTypeList.join(","):"",r=t.append("text").classed("er entityLabel",!0).attr("id",`${i}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,s.X)().fontFamily).style("font-size",n+"px").text(e);b.kn=r;let l=r.node().getBBox();y=Math.max(y,l.width),o=Math.max(o,l.height)}if(h){let e=t.append("text").classed("er entityLabel",!0).attr("id",`${i}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,s.X)().fontFamily).style("font-size",n+"px").text(a.attributeComment||"");b.cn=e;let r=e.node().getBBox();p=Math.max(p,r.width),o=Math.max(o,r.height)}b.height=o,l.push(b),_+=o+2*r,f+=1}));let g=4;c&&(g+=2),h&&(g+=2);let E=d+u+y+p,m={width:Math.max(C.minEntityWidth,Math.max(o.width+2*C.entityPadding,E+i*g)),height:a.length>0?_:Math.max(C.minEntityHeight,o.height+2*C.entityPadding)};if(a.length>0){let a=Math.max(0,(m.width-E-i*g)/(g/2));e.attr("transform","translate("+m.width/2+","+(r+o.height/2)+")");let n=o.height+2*r,s="attributeBoxOdd";l.forEach((e=>{let o=n+r+e.height/2;e.tn.attr("transform","translate("+i+","+o+")");let l=t.insert("rect","#"+e.tn.node().id).classed(`er ${s}`,!0).attr("x",0).attr("y",n).attr("width",d+2*i+a).attr("height",e.height+2*r),_=parseFloat(l.attr("x"))+parseFloat(l.attr("width"));e.nn.attr("transform","translate("+(_+i)+","+o+")");let f=t.insert("rect","#"+e.nn.node().id).classed(`er ${s}`,!0).attr("x",_).attr("y",n).attr("width",u+2*i+a).attr("height",e.height+2*r),g=parseFloat(f.attr("x"))+parseFloat(f.attr("width"));if(c){e.kn.attr("transform","translate("+(g+i)+","+o+")");let l=t.insert("rect","#"+e.kn.node().id).classed(`er ${s}`,!0).attr("x",g).attr("y",n).attr("width",y+2*i+a).attr("height",e.height+2*r);g=parseFloat(l.attr("x"))+parseFloat(l.attr("width"))}h&&(e.cn.attr("transform","translate("+(g+i)+","+o+")"),t.insert("rect","#"+e.cn.node().id).classed(`er ${s}`,"true").attr("x",g).attr("y",n).attr("width",p+2*i+a).attr("height",e.height+2*r)),n+=e.height+2*r,s="attributeBoxOdd"===s?"attributeBoxEven":"attributeBoxOdd"}))}else m.height=Math.max(C.minEntityHeight,_),e.attr("transform","translate("+m.width/2+","+m.height/2+")");return m}),"drawAttributes"),Z=(0,o.a)((function(t,e,a){let r;return[...e.keys()].forEach((function(i){let n=G(i,"entity");B.set(i,n);let o=t.append("g").attr("id",n);r=void 0===r?n:r;let l="text-"+n,c=o.append("text").classed("er entityLabel",!0).attr("id",l).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",(0,s.X)().fontFamily).style("font-size",C.fontSize+"px").text(e.get(i).alias??i),{width:h,height:d}=Y(o,c,e.get(i).attributes),u=o.insert("rect","#"+l).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",h).attr("height",d).node().getBBox();a.setNode(n,{width:u.width,height:u.height,shape:"rect",id:n})})),r}),"drawEntities"),F=(0,o.a)((function(t,e){e.nodes().forEach((function(a){void 0!==a&&void 0!==e.node(a)&&t.select("#"+a).attr("transform","translate("+(e.node(a).x-e.node(a).width/2)+","+(e.node(a).y-e.node(a).height/2)+" )")}))}),"adjustEntities"),z=(0,o.a)((function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")}),"getEdgeName"),U=(0,o.a)((function(t,e){return t.forEach((function(t){e.setEdge(B.get(t.entityA),B.get(t.entityB),{relationship:t},z(t))})),t}),"addRelationships"),W=0,X=(0,o.a)((function(t,e,a,r,i){W++;let n=a.edge(B.get(e.entityA),B.get(e.entityB),z(e)),o=(0,s.Da)().x((function(t){return t.x})).y((function(t){return t.y})).curve(s.Ha),l=t.insert("path","#"+r).classed("er relationshipLine",!0).attr("d",o(n.points)).style("stroke",C.stroke).style("fill","none");e.relSpec.relType===i.db.Identification.NON_IDENTIFYING&&l.attr("stroke-dasharray","8,8");let c="";switch(C.arrowMarkerAbsolute&&(c=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,c=c.replace(/\(/g,"\\("),c=c.replace(/\)/g,"\\)")),e.relSpec.cardA){case i.db.Cardinality.ZERO_OR_ONE:l.attr("marker-end","url("+c+"#"+O.ERMarkers.ZERO_OR_ONE_END+")");break;case i.db.Cardinality.ZERO_OR_MORE:l.attr("marker-end","url("+c+"#"+O.ERMarkers.ZERO_OR_MORE_END+")");break;case i.db.Cardinality.ONE_OR_MORE:l.attr("marker-end","url("+c+"#"+O.ERMarkers.ONE_OR_MORE_END+")");break;case i.db.Cardinality.ONLY_ONE:l.attr("marker-end","url("+c+"#"+O.ERMarkers.ONLY_ONE_END+")");break;case i.db.Cardinality.MD_PARENT:l.attr("marker-end","url("+c+"#"+O.ERMarkers.MD_PARENT_END+")")}switch(e.relSpec.cardB){case i.db.Cardinality.ZERO_OR_ONE:l.attr("marker-start","url("+c+"#"+O.ERMarkers.ZERO_OR_ONE_START+")");break;case i.db.Cardinality.ZERO_OR_MORE:l.attr("marker-start","url("+c+"#"+O.ERMarkers.ZERO_OR_MORE_START+")");break;case i.db.Cardinality.ONE_OR_MORE:l.attr("marker-start","url("+c+"#"+O.ERMarkers.ONE_OR_MORE_START+")");break;case i.db.Cardinality.ONLY_ONE:l.attr("marker-start","url("+c+"#"+O.ERMarkers.ONLY_ONE_START+")");break;case i.db.Cardinality.MD_PARENT:l.attr("marker-start","url("+c+"#"+O.ERMarkers.MD_PARENT_START+")")}let h=l.node().getTotalLength(),d=l.node().getPointAtLength(.5*h),u="rel"+W,y=e.roleA.split(/<br ?\/>/g),p=t.append("text").classed("er relationshipLabel",!0).attr("id",u).attr("x",d.x).attr("y",d.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",(0,s.X)().fontFamily).style("font-size",C.fontSize+"px");if(1==y.length)p.text(e.roleA);else{let t=.5*-(y.length-1);y.forEach(((e,a)=>{p.append("tspan").attr("x",d.x).attr("dy",`${0===a?t:1}em`).text(e)}))}let _=p.node().getBBox();t.insert("rect","#"+u).classed("er relationshipLabelBox",!0).attr("x",d.x-_.width/2).attr("y",d.y-_.height/2).attr("width",_.width).attr("height",_.height)}),"drawRelationshipFromLayout"),H=(0,o.a)((function(t,e,a,o){C=(0,s.X)().er,s.b.info("Drawing ER diagram");let l,c=(0,s.X)().securityLevel;"sandbox"===c&&(l=(0,s.ga)("#i"+e));let h,d=("sandbox"===c?(0,s.ga)(l.nodes()[0].contentDocument.body):(0,s.ga)("body")).select(`[id='${e}']`);O.insertMarkers(d,C),h=new i.a({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:C.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));let u=Z(d,o.db.getEntities(),h),y=U(o.db.getRelationships(),h);(0,r.a)(h),F(d,h),y.forEach((function(t){X(d,t,h,u,o)}));let p=C.diagramPadding;n.m.insertTitle(d,"entityTitleText",C.titleTopMargin,o.db.getDiagramTitle());let _=d.node().getBBox(),f=_.width+2*p,g=_.height+2*p;(0,s.M)(d,g,f,C.useMaxWidth),d.attr("viewBox",`${_.x-p} ${_.y-p} ${f} ${g}`)}),"draw"),K="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function G(t="",e=""){let a=t.replace($,"");return`${Q(e)}${Q(a)}${L(t,K)}`}function Q(t=""){return t.length>0?`${t}-`:""}(0,o.a)(G,"generateId"),(0,o.a)(Q,"strWithHyphen");var j={parser:c,db:E,renderer:{setConf:P,draw:H},styles:(0,o.a)((t=>`\n  .entityBox {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxOdd {\n    fill: ${t.attributeBackgroundColorOdd};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxEven {\n    fill:  ${t.attributeBackgroundColorEven};\n    stroke: ${t.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${t.tertiaryColor};\n    opacity: 0.7;\n    background-color: ${t.tertiaryColor};\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n    .relationshipLine {\n      stroke: ${t.lineColor};\n    }\n\n  .entityTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }    \n  #MD_PARENT_START {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  #MD_PARENT_END {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  \n`),"getStyles")}}}]);