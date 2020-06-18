
TRocket = new Class({
      initialize: function(pX,pY,dist,rX,rY)  {
        this.distanation = dist;
        this.posX = pX; //позиция шарика по X
        this.posY = pY; //позиция шарика по Y
        //цвет шарика, формируется случайным оьразом
        // this.colBall = 'rgb('+Math.floor(Math.random()*256)+','
        // +Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
        // радиус шарика, случайное число от 5 до 30
        this.rangX = rX;
        this.rangY = rY;
      },
      distanation:"",
      posX: 0,
      posY: 0,
      rangX: 0,
      rangY: 0,
      //colorBall: function(ctx){
        // формируем градиентную заливку для шарика
      //   with (this){      //     var gradient = ctx.createRadialGradient(posX+rBall/4,
      //     posY-rBall/6, rBall/8, posX, posY, rBall);
      //     gradient.addColorStop(0, '#fff');
      //     gradient.addColorStop(0.85, colBall);
      //     return gradient;
      //   }
      // },
      draw : function(ctx,RtypeR,dist){
        with (this){
          //ctx.fillStyle = colorBall(ctx);
          ctx.beginPath();
          let bulletImage = new Image();
          if(RtypeR!=3){
            if(dist=="UP")bulletImage.src = 'bulletUP.png';
            if(dist=="DOWN")bulletImage.src = 'bulletDOWN.png';
            if(dist=="FRONT"){
              bulletImage.src = 'bullet.png';
              ctx.drawImage(
              bulletImage,
              0,0,
              //50,11,
              rangX,rangY,
              posX,posY,
              //50,11
              rangX,rangY,)
            }
            else{
            ctx.drawImage(
              bulletImage,
              0,0,
              //39,38,
              rangX,rangY,
              posX,posY,
              //39,38
              rangX,rangY,);
            }
          }
          else if(RtypeR==3){       
            bulletImage.src = 'lazer.png';
              ctx.drawImage(
              bulletImage,
              0,0,
              //50,11,
              rangX,rangY,
              posX+25,posY-5,
              canvas.width,rangY)
          }
          ctx.lineTo(posX, posY);
          ctx.closePath();
          ctx.fill();
        }
      }
    });

function type_rocket(type){
  type_R = type;
}


function moveBullet() {
  for(var i = 0;i<rockets.length;){
    if(rockets[i].distanation=="UP"){
      rockets[i].posX += 4;
      rockets[i].posY -= 4;
    }
    else if(rockets[i].distanation=="DOWN"){
      rockets[i].posX += 4;
      rockets[i].posY += 4;
    }
    else if(rockets[i].distanation=="FRONT"){
      rockets[i].posX += 4;
    }
    else if(rockets[i].distanation=="RECTANGL"){
      rockets[i].rangY += 0.3;
    }
    rockets[i].draw(ctx,type_R,rockets[i].distanation);
    if((rockets[i].posX>canvas.width)||(type_R==3&&rockets[i].rangY>20)){
      rockets.splice(i,1);
    }
    else i++;
  }
  if(rockets.length==0)bullet_flight = 0;
 
}


////////////////////////////выстрел при нажатии
var button = document.querySelector("canvas");
  button.onmousedown = function() {
    if(hitpoints<=0){
      show_table_player();
    }
    else
    if(IDpausa==0&&level<3){
      if(widthProgressBar>=100){
        widthProgressBar = 0;
        ProgressBar.style.width = widthProgressBar + "%";
        if (type_R==1){
          var item = new TRocket(40,mouseY,"FRONT",50,11);
          item.draw(ctx, type_R,"FRONT");
          rockets.push(item);
        }
        else if(type_R==2){
          var item = new TRocket(40,mouseY,"UP",39,38);
          item.draw(ctx, type_R,"UP");
          rockets.push(item);
          var item = new TRocket(40,mouseY,"DOWN",39,38);
          item.draw(ctx, type_R,"DOWN");
          rockets.push(item);
          var item = new TRocket(40,mouseY,"FRONT",50,11);
          item.draw(ctx, type_R,"FRONT");
          rockets.push(item);
        }
        else if(type_R==3){
          var item = new TRocket(40,mouseY,"RECTANGL",63,11);
          item.draw(ctx, type_R,"");
          rockets.push(item);
        } 
        bullet_flight = 1;
      };
    }else{
    idTimer = setInterval("sprite.start()",1);  
    IDpausa = 0;
  }
}
/////////////////////////////выстрел при нажатии
canvas.style.cursor = "crosshair";

