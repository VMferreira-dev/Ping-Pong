var bola = createSprite(200, 200, 15, 15);
bola.shapeColor = "yellow";

var RaqueteJogador = createSprite(360, 200, 15, 90);
RaqueteJogador.shapeColor = "red";

var RaqueteComputador = createSprite(40, 200, 15, 90);
RaqueteComputador.shapeColor = "red";

var estado = "inicio";


var placarComputador = 0;
var placarJogador = 0;

bola.setAnimation("bola");
RaqueteJogador.setAnimation("raquete");
RaqueteComputador.setAnimation("raquete2");




function pontilhado(){
  
  var salto = 20;
  var y1 = 0;
var y2 = 20;

  for (var i = 0; i < 11; i++) {
    line(200, y1, 200, y2);
    y1 = y2 + salto;
    y2 = y1 + salto;
    
  }
}





function draw() {
  
  
  
  
      
  //Raquete jogador é movida pelo eixo y do mouse.
  RaqueteJogador.y = World.mouseY;
  
  // Raquete computador irá seguir o eixo y da bola.
  RaqueteComputador.y = bola.y;
  
  
  background ("black");
   
   pontilhado();
   
   if (keyDown("space") && estado === "inicio"){
     bola.velocityX = 7;
  bola.velocityY = 4;   
  
  }
   
    if (estado === "inicio"){
      textSize(25);
    text("Aperte espaço", 165, 170);
  }
  
  if (keyDown("space")){
    estado = "jogando";
  }
  
  if (bola.isTouching(RaqueteJogador)){
    playSound("sound://category_hits/8bit_splat.mp3", false);
  }
  
  if (bola.isTouching(RaqueteComputador)){
    playSound("sound://category_hits/8bit_splat.mp3", false);
  }
  
 
   
  
  
  
  
    // Criação das bordas
  createEdgeSprites();
  
  // Configurando para a bola apenas quicar na borda de cima e borda de baixo.
  bola.bounceOff(topEdge);
  bola.bounceOff(bottomEdge);
  
    /*if(bola.isTouching(rightEdge)){
    RaqueteComputador.y = 200;
    RaqueteComputador.x = 15;
  }*/
  
  // Quando a raquetejogador perder o jogo, a bola voltará ao meio.
  if (bola.isTouching(rightEdge)){
    bola.y = 200;
    bola.x = 200;
    bola.velocityX = 0;
    bola.velocityY = 0;
    estado = "inicio";
    placarComputador ++;
     playSound("sound://category_explosion/8bit_explosion.mp3", false);
    
  }
  
  textSize(25);
  text (placarComputador + "  " + placarJogador, 180, 20);
  
  
  bola.bounceOff(RaqueteJogador);
  bola.bounceOff(RaqueteComputador);
  
  
  
  
  
  
  drawSprites();
}


