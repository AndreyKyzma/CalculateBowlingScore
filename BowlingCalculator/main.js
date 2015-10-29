$(document).ready(function(){
    var ScoreBowling = function () {
        this.throwBall = [];
        this.currentThrowBall = 0;
    };

    ScoreBowling.prototype.roll = function (pins) {
        this.throwBall[this.currentThrowBall++] = pins;
    };


    ScoreBowling.prototype.score = function () {
        var score = 0;
        var frameIndex = 0;
        var self = this;

        function sumOfBallsInGameFrame() {
            return self.throwBall[frameIndex] + self.currentThrowBall[frameIndex + 1];
        }

        function strikeBonus() {
            return self.throwBall[frameIndex + 1] + self.throwBall[frameIndex + 2];
        }

        function spareBonus() {
            return self.throwBall[frameIndex + 2];
        }

        function isStrike() {
            return self.throwBall[frameIndex] === 10;
        }

        function isSpare() {
            return self.throwBall[frameIndex] + self.throwBall[frameIndex + 1] === 10;
        }

        for (var frame = 0; frame < 10; frame++) {
            if (isStrike()) {
                score += 10 + strikeBonus();
                frameIndex++;
            }
            else if (isSpare()) {
                score += 10 + spareBonus();
                frameIndex += 2;
            }
            else {
                score += sumOfBallsInGameFrame();
                frameIndex += 2;
            }
        }
        return score;
    };

    var scoreButtons = $(".score-buttons input");
    scoreButtons.each(function(i){
        $(this).on("click", function(){
            $(".one").attr("value",$(this).val());

            m=10;
            for( m - this; i<m; i++){
                delete this.button(a)
            }


        })
    });
});