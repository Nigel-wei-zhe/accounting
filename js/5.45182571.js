(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center"},[n("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[n("q-form",{staticClass:"q-gutter-md"},[n("q-input",{attrs:{filled:"",label:"姓名"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"face"}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.name=""}}})]},proxy:!0}]),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("q-input",{attrs:{filled:"",label:"金額"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"attach_money"}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.money=""}}})]},proxy:!0}]),model:{value:e.money,callback:function(t){e.money=t},expression:"money"}}),n("q-select",{attrs:{color:"teal",filled:"",options:e.options,label:"類別"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"category"}})]},proxy:!0}]),model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}),n("q-input",{attrs:{label:"日期",filled:"",mask:"date",rules:["date"]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),n("div",{staticClass:"row justify-end"},[n("div",{staticClass:"col-3"},[n("q-btn",{attrs:{label:"重置",flat:"",type:"reset",color:"white","text-color":"red"}})],1),n("div",{staticClass:"col-3"},[n("q-btn",{attrs:{label:"送出",type:"submit",color:"primary"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}})],1)])],1)],1)])},o=[],r={name:"PageIndex",data(){return{name:"",money:0,date:"",category:"",options:[{label:"Google",value:"Google",description:"Search engine",category:"1"},{label:"Facebook",value:"Facebook",description:"Social media",category:"1"}]}},methods:{onSubmit(){console.log("onSubmit")}}},c=r,l=n("2877"),s=n("9989"),i=n("0378"),u=n("27f9"),p=n("0016"),d=n("ddd8"),f=n("7cbe"),m=n("52ee"),y=n("9c40"),b=n("eebe"),x=n.n(b),q=Object(l["a"])(c,a,o,!1,null,null,null);t["default"]=q.exports;x()(q,"components",{QPage:s["a"],QForm:i["a"],QInput:u["a"],QIcon:p["a"],QSelect:d["a"],QPopupProxy:f["a"],QDate:m["a"],QBtn:y["a"]})}}]);