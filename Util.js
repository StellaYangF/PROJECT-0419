var eventUtil = {
    //添加句柄
    //element,节点
    //type,事件类型
    //handler,函数
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (elemnt.attachEvent) { //对ie进行判断
            element.attachEvent('on' + type, handler)
        } else { //
            element['on' + type] + handler;
        }
    },
    name: "Linda"
}

// function Student(){
//     name:"Tom",
// }



//  a = {
//     name= "aaa",
//     age = 15,
//     aa=function(){

//     }
// }

module.exports = eventUtil;