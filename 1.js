function zifu() {
    // 初始化数据
    this.init();
    this.stratYX();
}
zifu.prototype = {
    init() {

        // var start = document.querySelector(".start")
        // start.onclick = function() {

        // }
        this.letter = ["A", "B", "C", "D", "E", "F"]
        this.divs = []
        this.grade = 0;
        this.life = 10;
        this.over = document.querySelector(".over")
        this.sub = document.querySelector(".sub")
        this.start = document.querySelector(".start")
        this.grade1 = document.querySelector(".grade span")
        this.life1 = document.querySelector(".life span")




    },
    createZifu(num) {
        var cur = []
        var that = this

        for (var i = 0; i < num; i++) {
            cur.push(this.letter[Math.floor(this.letter.length * Math.random())])
            var div = document.createElement("div")
            div.innerHTML = cur[i]
            document.body.appendChild(div)

            div.style.cssText = "width:50px;height:50px;float:left; position:absolute; line-height:" + Math.floor(Math.random() * 32 + 16) + "px;text-align: center; font-size: 50px; left:" + Math.floor(Math.random() * 1000 + 300) + "px;top:0";

            that.divs.push(div)

        }
    },
    stratYX() {
        var that = this

        var num = 3


        that.start.onclick = function() {

            that.start.style.display = "none"
            that.createZifu(3)


            that.t = setInterval(function yundong() {
                var speed = 5

                for (var i = 0; i < that.divs.length; i++) {
                    that.divs[i].style.top = that.divs[i].offsetTop + speed + "px";

                }
                for (var i = 0; i < that.divs.length; i++) {
                    if (400 < that.divs[i].offsetTop) {
                        document.body.removeChild(that.divs[i]);
                        that.divs.splice(i, 1);
                        that.life--
                            that.life1.innerHTML = that.life
                        that.createZifu(1);

                    }
                }
                if (that.life <= 0) {
                    clearInterval(that.t)
                        // over.style.background = "red"
                        // that.over.innerHTML = "游戏结束"
                    that.sub.style.display = "block"
                    that.over.style.display = "block"


                }

            }, 50);



        }
        that.sub.onclick = function() {
            that.life = 10;
            that.t = setInterval(function yundong() {
                var speed = 5

                for (var i = 0; i < that.divs.length; i++) {
                    that.divs[i].style.top = that.divs[i].offsetTop + speed + "px";

                }
                for (var i = 0; i < that.divs.length; i++) {
                    if (400 < that.divs[i].offsetTop) {
                        document.body.removeChild(that.divs[i]);
                        that.divs.splice(i, 1);
                        that.life--
                            that.life1.innerHTML = that.life
                        that.createZifu(1);

                    }
                }
                if (that.life <= 0) {
                    clearInterval(that.t)
                        // over.style.background = "red"
                        // that.over.innerHTML = "游戏结束"
                    that.sub.style.display = "block"
                    that.over.style.display = "block"


                }

            }, 50);
            that.sub.style.display = "none"
                // over.style.display = "none"
        }



        document.onkeydown = function(ev) {
            var letter = String.fromCharCode(ev.keyCode);

            for (var i = 0; i < that.divs.length; i++) {
                if (that.divs[i].innerHTML == letter) {
                    document.body.removeChild(that.divs[i]);

                    that.divs.splice(i, 1);
                    that.createZifu(1);
                    that.grade = that.grade + 1

                    that.grade1.innerHTML = that.grade
                    break;


                }
            }
        }





    }

}