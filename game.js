AFRAME.registerComponent("game",{
  schema:{
    gameState:{type:"string",default:"play"},
  },
  init: function () {
    var duration =300;
    var timerEl=document.querySelector("timer");
    this.startTimer(duration,timerEl);
  },


  startTimer: function(duration,timer){
    var minutes;
    var seconds;
    setInterval(()=>{
        if (duration >=0){
            this.data.gameState="play";
            minutes=parseInt(duration/60);
            seconds=parseInt(duration%60);

        if (minutes<10){
            minutes='0'+minutes
        } 
        
        if (seconds<10){
            seconds='0'+seconds
        }
        timerEl.setAttribute({
            
        })
        }
    })
  }
 

})