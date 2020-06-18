
class Sprite {
    constructor(options) {
        this.ctx = options.ctx;

        this.image = options.image;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;

        this.width = options.width;
        this.height = options.height;
               
    }

      start() {
        panel.style.visibility = 'visible';
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
        drawBack(ctx,canvas.width,canvas.height);
        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            0,
            this.width / this.numberOfFrames,
            this.height,
            0,
            mouseY - 31,
            this.width / this.numberOfFrames,
            this.height
        )

        if(widthProgressBar<100){
          widthProgressBar+=0.8;
          ProgressBar.style.width = widthProgressBar + "%";
          ProgressBar.innerHTML = "reload";
        }else ProgressBar.innerHTML = "fire"
        if(bullet_flight==1){
         moveBullet();
        }
        //уровни и враги
        if(Enemies_flight==0){
          moveEnemies();
        }else{
           $("#level").text("level "+(level+1));
           $("#wave").text("волна "+wave);
          if(level<3){
            if(wave<=level_mas[level][0]){
              creatEnem(level_mas[level][wave]);
              wave++;
            }
            else{
              wave = 1;
              level++;
            }
          }
          else 
            end_game();
        }
        //уровни и враги
        check_on_colis_fire();
        check_on_colis_plane();
        $("#HP").text("Количество HP:"+hitpoints);
        $("#EXP").text("Количество exp:"+expoints);
        if(hitpoints<=0)end_game();
     }
}
let canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
let planeImage = new Image();
planeImage.src = 'plane.png';
//моделька самолета
let sprite = new Sprite({
  ctx: ctx,
  image: planeImage,
  width: 319,
  height: 62,
  numberOfFrames: 5,
  ticksPerFrame: 50,
});
var level_mas = [[5,2,3,4,5,6],[5,4,2,5,6,1],[4,6,4,3,7]];//уровни

var panel = document.getElementById("form");//отображение интерфейса

var ProgressBar = document.getElementById("bar");//готовность стрелять
var widthProgressBar = 0;//перезарядка

var rockets = [];// массив пуль
var type_R = 1;// массив какой тип пуль..1 одна пуля 2 тройная 3 лазер
var bullet_flight = 0;// определение полета пули если 1 надо двигать если 0 нет

var enemies = [];// массив врагов
var Enemies_flight = 1;//определение полета врага если 1 надо если 0 нет

var IDpausa = 0;//0 нет паузы, 1 пауза

var level = 0;//1,2,3,4
var wave = 1;//1,2,3,4

var expoints = 0;//опыт
var hitpoints = 100;//жизнь

var PlayerName = prompt('Введите свое имя(12 символов)','');//имя игрока
while(PlayerName.length>13){
alert('введено больше 12 силволов');
PlayerName = prompt('Введите свое имя(12 символов)','');
};
if(!PlayerName)PlayerName = "Пустой игрок";
$("#PlayerName").text("Игрок: "+PlayerName);

var table_player;//загрузка таблицы игроков
var table_player = JSON.parse(localStorage.getItem('game_plane'));


var idTimer;//запуск анимации и игры
idTimer = setInterval("sprite.start()",1);

