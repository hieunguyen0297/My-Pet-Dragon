
/*
    N220
    Hieu Nguyen
    Week 12 assignment
    My pet dragon

*/
function main(){
    //instantiate class Dragon
    let dragon = new Dragon('Durango', 50, 50);
    // dragon.name = 'New Durango';

    //create image element to hole the image
    let image = dragon.createItem('img', 70, 180, 150, 150);

    //create a div
    let div = dragon.createItem('div', 20, 100, 250, 250, 'palegreen');
    //display statistics 
    dragon.display(div, image);




    //create the feed button
    let feedBtn = dragon.createItem('button', 20, 360, 100, 40, 'lightgreen', 'Feed');

    //add  event to the feed button
    feedBtn.addEventListener('click', () => {
        dragon.feed();
        dragon.display(div, image);
    })

    //create the play button
    let playBtn = dragon.createItem('button', 170, 360, 100, 40, 'pink', 'Play');

    //add event to the play button
    playBtn.addEventListener('click', () => {
        dragon.play();
        dragon.display(div, image);
    })
}



