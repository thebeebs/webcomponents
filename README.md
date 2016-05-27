# Introduction to Web Componants

In this demo we will look at Web Componants, 
what they are and how they are plubmed together.

## Pre reqs
* Visual Studio Code
* Chrome
* Delete saleschart.js

## Show Index.html
* We are displaying so date about twitter followers
* Using a framework called knockout but could easily be using any Single page framework
* Show how the table is bound to the data.
* Flick between Martin Beeby and Martin Kearn

## Sales Chart
* Create a saleschart.js add to index.html
* Add the following code


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



