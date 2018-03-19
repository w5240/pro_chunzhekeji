 $(function() {
        var timer = null;
        var index = 0;
        var liMath = $(".oUlplay li.parent-list").length;
        var liDiv = $(".oUlplay li.parent-list");
        var liPoint=$(".smalltitle ul li");
        function autoPlay() {
            timer = setInterval(function() {
                index++;
                if (index == liMath) {
                    index = 0;
                }
                
                if(index==0){
                    $(".business ul li:nth-child(1) .garden img").attr("src", "images/navIcon1.png");
                    $(".business ul li:nth-child(2) .garden img").attr("src", "images/navIcon2.png");
                    $(".business ul li:nth-child(3) .garden img").attr("src", "images/navIcon3.png");
                }else if(index==1){
                    $(".business ul li:nth-child(2) .garden img").attr("src", "images/navIcon_2.png");
                    $(".business ul li:nth-child(1) .garden img").attr("src", "images/navIcon_1.png");
                    $(".business ul li:nth-child(3) .garden img").attr("src", "images/navIcon3.png");
                }else{
                    $(".business ul li:nth-child(1) .garden img").attr("src", "images/navIcon_1.png");
                    $(".business ul li:nth-child(2) .garden img").attr("src", "images/navIcon2.png");
                    $(".business ul li:nth-child(3) .garden img").attr("src", "images/navIcon_3.png");
                }
                showAndHide(index);
                
            }, 3000)
        }
        autoPlay();

        liPoint.hover(function() {
            index = $(this).index();
            showAndHide(index);
            clearInterval(timer);
        }, function() {
            autoPlay();
        });
        $(".example-list,.left,.right").hover(function() {
            clearInterval(timer);
        }, function() {
            autoPlay();
        });

        function showAndHide(index) {
            console.log(index)
            liDiv.eq(index).fadeIn().siblings('li.parent-list').fadeOut();
            liPoint.children('div.garden').eq(index).addClass('active').parent().siblings().children('div.garden').removeClass('active');
            
        }
        $(".left").click(function(){
            alert(6666)
          index--;
          if(index==-1){
            index=liMath;
          }
          showAndHide(index);
        });
        $(".right").click(function(){
          index++;
          if(index==liMath){
            index=0;
          }
          showAndHide(index);
        });
    });