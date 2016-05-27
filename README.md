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

* Add the following code:


    <sales-chart>    
    </sales-chart>
    <p>Here is a p tag that isn't a web componant</p>

## A more complex Tag Helper.

* Replace the content in sales chart.js with 


    class View{  
        constructor(cont){
            this.ctx = cont.container.ctx;
            this.points = [];              
        }
        
        addGraphpoint(value){
            
            this.points.push(value);
            var lengthOfGraph = this.points.length;  
            this.drawGraph();  
            return lengthOfGraph - 1;       
        }
        
        updateGraphpoint(i, oldValue, newValue){        
        this.ctx.fillRect(20,0,8,290);    
        this.points[i] = newValue;
        this.drawGraph();                
        }
        drawGraph(){
            
            this.ctx.fillStyle = "#fff";
            this.ctx.fillRect(0,0,1000,300);
            
            this.ctx.fillStyle = "red";
            for (var index = 0; index < this.points.length; index++) {
                var element = this.points[index];
                if (element !== null){
                    var divide = 290 / 15;
                    var h = element * divide
                    this.ctx.fillRect(index * 10,290 - h,8,h); 
                }           
            }
        }
        
        removeGraphpoint(i){
            
            this.points.shift();  
            this.drawGraph();              
        }
            
    }

    class chart extends HTMLElement{
        attachedCallback(){
            var shadow = this.createShadowRoot();          
            var container = document.createElement('canvas');
            container.height = "300";
            container.width = "1000";
            this.ctx = container.getContext("2d");
            this.ctx.fillStyle = "#fff";
            this.ctx.fillRect(0,0,1000,300);
            
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(10,0,8,290);
        
            shadow.appendChild(container);              
            this.view = new View({ container: this})        
        }    
    }

    class graphpoint extends HTMLElement{
            attachedCallback(){
                // This is null when first Created dynamically
                var val = this.getAttribute('value');
                this.view = this.parentNode.view;
                this.graphpoint = this.view.addGraphpoint(val)
            }
            attributeChangedCallback(attributeName, oldValue, newValue){
                if (attributeName = "value"){
                    this.view.updateGraphpoint(this.graphpoint, oldValue, newValue)
                }
            }
            detachedCallback(){
                this.view.removeGraphpoint(this.graphpoint);
            }
        
    }

    document.registerElement('sales-chart', chart);
    document.registerElement('graphpoint', graphpoint);

* Add a graph point and knockout stuff


    <sales-chart>     
        <!-- ko foreach : monthsData -->
        <graphpoint data-bind="attr: {'value' : sales}">
        </graphpoint>     
        <!-- /ko -->
    </sales-chart>

* Show the attributeChangedCallback and detachedCallback and attachedCallback
* Show that in manages the add a removal and how that gets drawn.

## Future of busines

Web componants are a very future sort of thing, obviously these sort of charts won't 
be good enough in the future.

In the future 

