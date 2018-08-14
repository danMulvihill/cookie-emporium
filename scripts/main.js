var cookie = Cookies.get('visited')

if( !cookie ){

    document.querySelector("#out").textContent = "I see you are new here."

    setTimeout(function(){
        document.querySelector("#modal").style = "display:block;";
        document.querySelector("body").style="background: #555";
    }, 1000)
    
    var closeButton = document.querySelector("#x-button");
    
    closeButton.onclick = function(){
        document.querySelector("#modal").style = "display:none";
        document.querySelector("body").style="background: #fff";
    }
    
    var closeButton2 = document.querySelector("#more-button");
    
    closeButton2.onclick = function(){
        document.querySelector("#modal").style = "display:none";
        document.querySelector("body").style="background: #fff";
    }


    Cookies.set("visited", "visitor");

    document.querySelector("form").onsubmit = function(e){
        e.preventDefault();
        console.log(e.target[0].value);
        Cookies.set("visitorName", e.target[0].value)
        Cookies.set("sug", 0);
        Cookies.set("choc", 0);
        Cookies.set("lemon", 0);
        document.querySelector("#input0").style.display = "none"
        document.querySelector("#out").innerHTML = "Welcome "+e.target[0].value+"<br>Now buy some cookies!";
    }


}else{
    
   
    document.querySelector("#input0").style.display = "none"
    document.querySelector("#out").textContent = "Welcome Back, "+Cookies.get("visitorName");
    document.querySelector("#sug .out").textContent = Cookies.get("sug");
    document.querySelector("#choc .out").textContent = Cookies.get("choc");
    document.querySelector("#lemon .out").textContent = Cookies.get("lemon");

}




    document.querySelector("#sug").onclick = function(){
        var amt = Cookies.get("sug");
        amt++;
        Cookies.set("sug", amt);
        document.querySelector("#sug .out").textContent = amt;
    }

    document.querySelector("#choc").onclick = function(){
        var amt = Cookies.get("choc");
        amt++;
        Cookies.set("choc", amt);
        document.querySelector("#choc .out").textContent = amt;
    }

    document.querySelector("#lemon").onclick = function(){
        var amt = Cookies.get("lemon");
        amt++;
        Cookies.set("lemon", amt);
        document.querySelector("#lemon .out").textContent = amt;
    }


    document.querySelector("#clearButton").onclick = function(){
        Cookies.set("sug", 0);
        document.querySelector("#sug .out").textContent = 0; 
        Cookies.set("choc", 0);
        document.querySelector("#choc .out").textContent = 0;
        Cookies.set("lemon", 0);
        document.querySelector("#lemon .out").textContent = 0;
    }
    




