window.onload = $(function(){
        $("input").on("click",function(){
            var numberOfListItem = $("li").length;
            var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            $("h1").text($("li").eq(randomChildNumber).text());
            var img=document.getElementById("img1");
		    img.src=(randomChildNumber+1)+".jpg";
        });
    });