//侧边栏 
var btn = document.getElementById("btn");
var control = document.getElementById("control");
//侧边栏的滑出与收缩
btn.addEventListener('click', function(e){
	control.classList.toggle("slide");
}, false)


//粒子选择
var ball = document.getElementById("ball");
var rect = document.getElementById("rect");

function chose(particleName){
    particleName.addEventListener('click', function(e){
        this.style.backgroundColor = "orange";
        //如果particleName是ball的话那么rect的背景颜色为黑色
        (particleName == ball ? rect : ball).style.backgroundColor = "rgba(0, 0, 0, 0)";
        type = (type === "ball" ? "rect" : "ball");
        change();
        
    }, false)
}

chose(ball);
chose(rect);