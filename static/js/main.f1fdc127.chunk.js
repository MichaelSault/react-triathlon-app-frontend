(window["webpackJsonpreact-triathlon-app-frontend"]=window["webpackJsonpreact-triathlon-app-frontend"]||[]).push([[0],{47:function(e,t,a){e.exports=a(79)},52:function(e,t,a){},54:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(42),c=a.n(r),o=a(18),m=(a(52),a(53),a(54),a(6)),i=a(9),s=a(10),u=a(12),p=a(11),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("h3",null,"Sign In"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email address"),n.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter password"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"custom-control custom-checkbox"},n.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),n.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),n.a.createElement("button",{type:"submit",className:"wide_button"},"Submit"),n.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",n.a.createElement("a",{href:"recover-password"},"password?")))}}]),a}(l.Component),E=a(19),v=a.n(E),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).createUser=function(e){v.a.post("http://localhost:8000/api/user/create/",{email:document.getElementById("email").value,password:document.getElementById("pword").value,name:document.getElementById("first").value+" "+document.getElementById("last").value}).then((function(e){window.location="/sign-in"})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("h3",null,"Sign Up"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"First name"),n.a.createElement("input",{type:"text",id:"first",className:"form-control",placeholder:"First name"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Last name"),n.a.createElement("input",{type:"text",id:"last",className:"form-control",placeholder:"Last name"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email address"),n.a.createElement("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{type:"password",id:"pword",className:"form-control",placeholder:"Enter password"})),n.a.createElement("button",{type:"button",className:"wide_button",onClick:this.createUser},"Sign Up"),n.a.createElement("p",{className:"subscript text-right"},"Already registered ",n.a.createElement("a",{href:"sign-in"},"sign in?")))}}]),a}(l.Component),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("h3",null,"Recover Password"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email address"),n.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email"}),n.a.createElement("p",{className:"subscipt-login"},n.a.createElement("i",null,"Enter the email associated with your account and a temporary password will be sent to you."))),n.a.createElement("button",{type:"submit",className:"wide_button"},"Recover Password"))}}]),a}(l.Component),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("h3",null,"Reset Password"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Email address"),n.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Old Password"),n.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter old password"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"New Password"),n.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter new password"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Repeat New Password"),n.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repeat new password"})),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Change Password"))}}]),a}(l.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedFile:null},e.onFileChange=function(t){e.setState({selectedFile:t.target.files[0]}),console.log(v.a.get("https://reqres.in/api/users/2"))},e.onFileUpload=function(){(new FormData).append("myFile",e.state.selectedFile,e.state.selectedFile.name)},e.fileData=function(){return e.state.selectedFile?n.a.createElement("div",{className:"input-div"},n.a.createElement("br",null),n.a.createElement("h6",null,"File Details:"),n.a.createElement("p",null,"File Name: ",e.state.selectedFile.name),n.a.createElement("p",null,"File Type: ",e.state.selectedFile.type),n.a.createElement("p",null,"Last Modified:"," ",e.state.selectedFile.lastModifiedDate.toDateString())):n.a.createElement("p",{className:"subscript text-right"},"Add entry manually?  ",n.a.createElement("a",{href:"create-activity"},"Click here!"))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("h3",null,"Upload from .gpx file (WIP)"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Upload Activity:"),n.a.createElement("input",{type:"file",onChange:this.onFileChange})),n.a.createElement("div",null,n.a.createElement("button",{onClick:this.onFileUpload,className:"wide_button"},"Upload Activity!")),this.fileData())}}]),a}(l.Component),g=a(82),N=a(43),w=a(81),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).activitySubmit=function(e){v.a.post("http://localhost:8000/api/activity/activities/",{distance:document.getElementById("distance").value,time_hours:document.getElementById("hr").value,time_minutes:document.getElementById("min").value,time_seconds:document.getElementById("sec").value,elevation:document.getElementById("elevation").value,sport:document.getElementById("sport").value,date:document.getElementById("start_date").value,start_time:document.getElementById("start_time").value,title:document.getElementById("title").value,description:document.getElementById("description").value,type:document.getElementById("type").value,effort:document.getElementById("effort").value}).then((function(e){window.location="/view-activity"})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("form",null,n.a.createElement("h3",null,"Create A Manual Activity:"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Distance"),n.a.createElement(g.a,null,n.a.createElement(N.a,{id:"distance",placeholder:"0"}),n.a.createElement(g.a.Text,null,"km"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Duration"),n.a.createElement(g.a,null,n.a.createElement(N.a,{id:"hr",placeholder:"00",default:"0"}),n.a.createElement(g.a.Text,null,"hr"),n.a.createElement(N.a,{id:"min",placeholder:"00",default:"0"}),n.a.createElement(g.a.Text,null,"min"),n.a.createElement(N.a,{id:"sec",placeholder:"00",default:"0"}),n.a.createElement(g.a.Text,null,"s"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Elevation"),n.a.createElement(g.a,null,n.a.createElement(N.a,{id:"elevation",placeholder:"0",default:"0"}),n.a.createElement(g.a.Text,null,"meters"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Sport"),n.a.createElement("select",{name:"Sport",id:"sport",className:"form-control"},n.a.createElement("option",{value:"run"},"Run"),n.a.createElement("option",{value:"bike"},"Bike"),n.a.createElement("option",{value:"swim"},"Swim"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Date and Time"),n.a.createElement(g.a,null,n.a.createElement("input",{id:"start_date",type:"date",className:"form-control",default:!0}),n.a.createElement("input",{id:"start_time",type:"time",className:"form-control"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Title"),n.a.createElement("input",{id:"title",type:"text",className:"form-control",placeholder:"My Run"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Description"),n.a.createElement("textarea",{rows:4,id:"description",type:"list",className:"form-control",placeholder:"How'd it go?  Anything eventful happen?"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Activity Type"),n.a.createElement("select",{name:"Type",id:"type",className:"form-control"},n.a.createElement("option",{value:"race"},"Race"),n.a.createElement("option",{value:"workout"},"Workout"),n.a.createElement("option",{value:"wu"},"Warm Up"),n.a.createElement("option",{value:"cd"},"Cool Down"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Effort"),n.a.createElement(w.a.Range,{id:"effort",name:"effort",min:"1",max:"10",className:"form-control"})),n.a.createElement("div",null,n.a.createElement("button",{type:"submit",className:"wide_button",onClick:this.activitySubmit},"Log Activity")))}}]),a}(l.Component),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={activities:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("http://localhost:8000/api/activity/activities/").then((function(t){var a=t.data;e.setState({activities:a}),console.log(e.state.activities)}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Recent Activities:"),this.state.activities.slice(0,10).map((function(e){return n.a.createElement("div",{key:e.id,className:"activitybox"},n.a.createElement("h4",null,e.title),n.a.createElement("pbot",null,n.a.createElement("b",null,"Date: "),e.date," at ",e.start_time," ",n.a.createElement("br",null)),n.a.createElement("pbot",null,n.a.createElement("b",null,"Distance: "),e.distance,"km\u2003",n.a.createElement("b",null,"Time: "),e.time_hours,":",e.time_minutes,":",e.time_seconds),n.a.createElement("p",null,n.a.createElement("b",null,"Elevation: "),e.elevation,"m"),n.a.createElement("p",null,n.a.createElement("i",null,e.description)),n.a.createElement("p",null,n.a.createElement("b",null,"Tags: "),e.sport,", ",e.type),n.a.createElement("button",null,"View"),n.a.createElement("button",null,"Edit"),n.a.createElement("button",null,"Delete"))})))}}]),a}(l.Component);var j=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light fixed-top"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"https://michaelsault.ca/"},"michaelsault.ca"),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/sign-in"},"Login")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/sign-up"},"Sign up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/reset-password"},"Reset(temp)")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/upload-activity"},"Activity")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/view-activity"},"Recent Activities")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",to:"/create-activity"},"New Activity"))))),n.a.createElement("div",{className:"auth-wrapper"},n.a.createElement("div",{className:"auth-inner"},n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:O}),n.a.createElement(m.a,{path:"/sign-in",component:d}),n.a.createElement(m.a,{path:"/sign-up",component:f}),n.a.createElement(m.a,{path:"/recover-password",component:h}),n.a.createElement(m.a,{path:"/reset-password",component:b}),n.a.createElement(m.a,{path:"/upload-activity",component:y}),n.a.createElement(m.a,{path:"/create-activity",component:k}),n.a.createElement(m.a,{path:"/view-activity",component:O}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(o.a,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.f1fdc127.chunk.js.map