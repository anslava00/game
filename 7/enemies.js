TEnemies = new Class({
			initialize: function(pX,pY,rX,rY,dist)  {
		        this.posX = pX; //позиция шарика по X
		        this.posY = pY; //позиция шарика по Y
		        //цвет шарика, формируется случайным оьразом
		        // this.colBall = 'rgb('+Math.floor(Math.random()*256)+','
		        // +Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
		        // радиус шарика, случайное число от 5 до 30
		        this.rangX = rX;
		        this.rangY = rY;
		        this.distan = dist;
		      },
		      posX: 0,
		      posY: 0,
		      rangX: 0,
		      rangY: 0,
		      distan: 0,
			draw : function(ctx){
				// рисуем шарик на canvas
				with (this){
					ctx.beginPath();
          			let bulletImage = new Image();
					bulletImage.src = 'ememies2.png';
		              ctx.drawImage(
		              bulletImage,
		              0,0,
		              //50,11,
		              rangX,rangY,
		              posX,posY,
		              //50,11
		              rangX,rangY,)
            		ctx.lineTo(posX, posY);
					ctx.closePath();
					ctx.fill();
				}
			}
		});

function moveEnemies() {
if(per_for_swap_dist>200){
	for(var i = 0; i<enemies.length;i++)
		if(enemies[i].distan==1)
			enemies[i].distan = 0;
		else 
			enemies[i].distan = 1;
	per_for_swap_dist = 0;
	}
  for(var i = 0;i<enemies.length;){	
      enemies[i].posX -= 1.5;
      if(enemies[i].distan==0)
      	enemies[i].posY -= 1;
      else
      	enemies[i].posY += 1;
    enemies[i].draw(ctx);

    if(enemies[i].posX<-100){
      enemies.splice(i,1);
    }
    else i++;
  }
  per_for_swap_dist++;
  if(enemies.length==0)Enemies_flight = 1;
}

function creatEnem(kol){
	Enemies_flight = 0;
		for (var i = 1; i<=kol;i++){
			var item = new TEnemies((canvas.width),
			Math.random()*(i*80), 100 ,100,Math.random().toFixed(0));
			item.draw(ctx);
			enemies.push(item);
		}
}


var per_for_swap_dist = 0;
