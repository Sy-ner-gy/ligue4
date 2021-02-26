//Window
window.on = function(events,func){
    events.split(' ').forEach(event => {
        this.addEventListener(event,func)
    });
}
window.$=function(e){return e.search("#")>-1?document.querySelector(e):document.querySelectorAll(e)}

//Elements
Element.prototype.on=function(events,func){
    events.split(' ').forEach(event => {
        this.addEventListener(event,func)
    });
}
Element.prototype.$=function(e){return e.search("#")>-1?document.querySelector(e):document.querySelectorAll(e)}
Element.prototype.toggle=function(){this.classList.toggle("close")}