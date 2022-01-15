webpackJsonp([1],{"5SIM":function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),s=o("Dd8w"),a=o.n(s),i=o("NYxO"),r={name:"AddTodo",data:function(){return{title:""}},methods:a()({},Object(i.b)({addTodo:"addTodo"}),{onSubmit:function(t){t.preventDefault(),this.addTodo(this.title),this.title=""}})},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Add todo")]),t._v(" "),o("form",{on:{submit:t.onSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"title",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),o("input",{staticClass:"add-todo-button",attrs:{type:"submit",value:"Add"}})])])},staticRenderFns:[]};var c=o("VU/8")(r,d,!1,function(t){o("wdaE")},"data-v-5588698e",null).exports,u={name:"FilterTodos",methods:a()({},Object(i.b)({filterTodosByLimit:"filterTodosByLimit"}),{onFilterTodos:function(t){var e=t.target.options[t.target.options.selectedIndex];this.filterTodosByLimit(parseInt(e.innerText))}})},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._v("\n  Filter Todos:\n  "),o("select",{on:{change:function(e){return t.onFilterTodos(e)}}},[o("option",{attrs:{value:"200"}},[t._v("200")]),t._v(" "),o("option",{attrs:{value:"100"}},[t._v("100")]),t._v(" "),o("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),o("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),o("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),o("option",{attrs:{value:"5"}},[t._v("5")])])])},staticRenderFns:[]};var p=o("VU/8")(u,l,!1,function(t){o("5SIM")},"data-v-000f7a20",null).exports,v={name:"Todos",computed:a()({},Object(i.c)({allTodos:"allTodos"})),created:function(){this.getTodos()},methods:a()({},Object(i.b)({getTodos:"fetchTodos",deleteTodo:"deleteTodo",updateTodo:"updateTodo"}),{onDeleteTodo:function(t){this.deleteTodo(t)},onDoubleClick:function(t){var e={id:t.id,title:t.title,completed:!t.completed};this.updateTodo(e)}})},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h3",[t._v("Todos")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"todos"},t._l(t.allTodos,function(e){return o("div",{key:e.id,staticClass:"todo",class:{"is-complete":e.completed},on:{dblclick:function(o){return t.onDoubleClick(e)}}},[t._v("\n        "+t._s(e.title)+"\n        "),o("div",{on:{click:function(o){return t.onDeleteTodo(e.id)}}},[o("i",{staticClass:"fas fa-trash-alt delete-icon"})])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"legend"},[e("div",[e("span",[this._v("Double click to mark as complete")])]),this._v(" "),e("div",[e("span",{staticClass:"incomplete-todo-box"}),this._v(" Incomplete\n      ")]),this._v(" "),e("div",[e("span",{staticClass:"complete-todo-box"}),this._v(" Complete\n      ")])])}]};var m={name:"App",components:{AddTodo:c,FilterTodos:p,Todos:o("VU/8")(v,f,!1,function(t){o("uLhd")},"data-v-0ca222f0",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("AddTodo"),this._v(" "),e("FilterTodos"),this._v(" "),e("Todos")],1)])},staticRenderFns:[]};var T=o("VU/8")(m,h,!1,function(t){o("WNHv")},null,null).exports,_=o("Xxa5"),x=o.n(_),b=o("exGp"),w=o.n(b),g=o("mtWM"),k=o.n(g),y={state:{todos:[]},getters:{allTodos:function(t){return t.todos}},mutations:{setTodos:function(t,e){return t.todos=e},addTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter(function(t){return t.id!==e})},updateTodo:function(t,e){var o=t.todos.findIndex(function(t){return t.id===e.id});-1!==o&&t.todos.splice(o,1,e)}},actions:{fetchTodos:function(t){var e=this,o=t.commit;return w()(x.a.mark(function t(){var n;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://jsonplaceholder.typicode.com/todos");case 2:n=t.sent,o("setTodos",n.data);case 4:case"end":return t.stop()}},t,e)}))()},addTodo:function(t,e){var o=this,n=t.commit;return w()(x.a.mark(function t(){var s;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1});case 2:s=t.sent,n("addTodo",s.data);case 4:case"end":return t.stop()}},t,o)}))()},deleteTodo:function(t,e){var o=this,n=t.commit;return w()(x.a.mark(function t(){return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.delete("https://jsonplaceholder.typicode.com/todos/"+e);case 2:n("removeTodo",e);case 3:case"end":return t.stop()}},t,o)}))()},filterTodosByLimit:function(t,e){var o=this,n=t.commit;return w()(x.a.mark(function t(){var s;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://jsonplaceholder.typicode.com/todos?_limit="+e);case 2:s=t.sent,n("setTodos",s.data);case 4:case"end":return t.stop()}},t,o)}))()},updateTodo:function(t,e){var o=this,n=t.commit;return w()(x.a.mark(function t(){var s;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.put("https://jsonplaceholder.typicode.com/todos/"+e.id,e);case 2:s=t.sent,n("updateTodo",s.data);case 4:case"end":return t.stop()}},t,o)}))()}}};n.a.use(i.a);var C=new i.a.Store({modules:{todos:y}});o("ao2D");n.a.config.productionTip=!1,new n.a({store:C,el:"#app",components:{App:T},template:"<App/>"})},WNHv:function(t,e){},ao2D:function(t,e){},uLhd:function(t,e){},wdaE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ef1f411ec3172b5e92cf.js.map