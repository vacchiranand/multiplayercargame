class Form{
    constructor(){

    }
display(){
    var title = createElement('h2');
    title.html("car racing game");
    title.position(150,0);
    var input = createInput("name");
    var button = createButton('play');
    var greeting = createElement('h3');
    input.position(150,160);
    button.position(250,200);
    button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playercount+= 1;
    player.update(name);
    player.updatecount(playercount);
    greeting.html("helo"+name);
    greeting.position(130,150);
    
    });
}
}