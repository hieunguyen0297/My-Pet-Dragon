
/*
    N220
    Hieu Nguyen
    Week 12 assignment
    My pet dragon

*/

//create class Dragon
class Dragon{
    //create a constructor that has attribute name, happiness and energy
    constructor(name, energy, happiness){
        this._name = name;
        this._happiness = happiness;
        this._energy = energy;  
    }

    //create getter for name, energy, happiness
    get name(){
        return this._name;
    };

    get energy(){
        return this._energy;
    }

    get happiness(){
        return this._happiness;
    }


    //create setter for name, energy, happiness
    set name(value){
        this._name = value;
    }

    set energy(value){
        this._energy = value;
    }

    set happiness(value){
        this._happiness = value;
    }


    //create method feed to add to energy and subtract from happiness
    feed(){
        this._happiness = this._happiness - 1;
        this._energy = this._energy + 2;
    }

    //create play method to add to happiness and subtract from energy
    play(){
        this._happiness = this._happiness + 2;
        this._energy = this._energy - 2;
    }

    //create display method to change color of the div
    //if energy above 35 the div will turn green, below 35 it turns red
    //i add the image as an argument to display pictures
    display(output, image){
        output.innerHTML = this._name + '<br>' ;
        output.innerHTML += 'Energy: ' + this._energy + '<br>';
        output.innerHTML += 'Happiness: ' + this._happiness;
        //set zindex to make the image stay on top of the div
        image.style.zIndex = '1';
        //set background to green and display a happy dragon on screen when the energy above 35
        if(this._energy > 35){ 
            image.setAttribute('src','images/happyDragon.jpg' );
            output.style.backgroundColor = 'palegreen';
        //set background to red and display a angry/hungry dragon on screen when the energy below 35
        }else if(this._energy < 35){
            image.setAttribute('src', 'images/angryDragon.jpg');
            output.style.backgroundColor = 'red';
        }
       
    }

    //create a method to create HTML element and add to the page
    createItem(type, left, top, width, height, background, text){
        //create item
        let item = document.createElement(type);
        //set text
        item.innerHTML = text;
        //set style for the item
        item.style.position = 'absolute';
        item.style.left = left + 'px';
        item.style.top = top + 'px';
        item.style.width = width + 'px';
        item.style.height = height + 'px';
        item.style.backgroundColor = background;
        document.body.appendChild(item);
        //return item
        return item;
    }


}