function drawBack(ctx,w,h){
			// закрашиваем канвас градиентным фоном
			ctx.save();
			ctx.beginPath();
			let tmp = new Image();
	          tmp.src = 'backfon.png';
	          ctx.drawImage(
	          tmp,
	          0,0,
	          w,h,
	          0,0,
	          w,h);
	          
          ctx.closePath();
          ctx.fill();
		}