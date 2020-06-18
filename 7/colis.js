function check_on_colis_fire(){
	//снаряд и противник
			for (var i = 0; i < rockets.length; i++){
				for(var j = 0; j < enemies.length; j++){
					if(rockets[i].distanation == "FRONT"){
						if(((enemies[j].posY<rockets[i].posY&&rockets[i].posY<enemies[j].posY+100)
							||(enemies[j].posY<rockets[i].posY+11&&rockets[i].posY+11<enemies[j].posY+100))
						   &&
						   ((enemies[j].posX<rockets[i].posX&&rockets[i].posX<enemies[j].posX+100)
							||(enemies[j].posX<rockets[i].posX+50&&rockets[i].posX+50<enemies[j].posX+100))
						  ){
						rockets.splice(i,1);
						enemies.splice(j,1);
						expoints += (level+1) * 10;
						i--;
						break;
						}	
					}
					else if (rockets[i].distanation=="RECTANGL"){
						if((enemies[j].posY<rockets[i].posY&&rockets[i].posY<enemies[j].posY+100)
							||(enemies[j].posY<rockets[i].posY+11&&rockets[i].posY+11<enemies[j].posY+100)
						  ){
						enemies.splice(j,1);
						expoints += (level+1) * 10;
						i--;
						break;
						}	
					}
					else{
						if(((enemies[j].posY<rockets[i].posY&&rockets[i].posY<enemies[j].posY+100)
							||(enemies[j].posY<rockets[i].posY+38&&rockets[i].posY+38<enemies[j].posY+100))
						   &&
						   ((enemies[j].posX<rockets[i].posX&&rockets[i].posX<enemies[j].posX+100)
							||(enemies[j].posX<rockets[i].posX+39&&rockets[i].posX+39<enemies[j].posX+100))
						  ){
						rockets.splice(i,1);
						enemies.splice(j,1);
						expoints += (level+1) * 10;
						i--;
						break;
						}	
					}
				}
			}
		}
function check_on_colis_plane(){
	for(var i = 0; i<enemies.length;i++){
		if(((enemies[i].posY<mouseY&&mouseY<enemies[i].posY+100)
			||(enemies[i].posY<mouseY&&mouseY<enemies[i].posY+100))
		   &&
		   ((enemies[i].posX<0&&0<enemies[i].posX+100)
			||(enemies[i].posX<20&&20<enemies[i].posX+100))
		  ){
			enemies.splice(i,1);
			i--;
			hitpoints -=20;
			}	
	}
}