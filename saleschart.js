"use strict"
class salesChart extends HTMLElement{
    createdCallback(){
         //var shadow = this.createShadowRoot();
        this.innerHTML =  `
    <style>p {color: red;}</style>
    <p> My Sales data goes here</p>    
    `;
    }    
}
document.registerElement('sales-chart', salesChart);
