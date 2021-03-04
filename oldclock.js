
	var dayToCountFrom = new Date("December 25, 2020 00:00:00");
    var today = new Date();
    var distance = dayToCountFrom - today;
        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daysString = days.toString();
    var hoursString = hours.toString();
    var minutesString = minutes.toString();
    var secondsString = seconds.toString();

    if(days < 10){
        daysString = "0" + daysString;
    }
    if(hours < 10){
        hoursString = "0" + hoursString;
    }
    if(minutes < 10){
        minutesString = "0" + minutesString;
    }
    if(seconds < 10){
        secondsString = "0" + secondsString;
    }
    var daysa = daysString.split("");
    var hoursa = hoursString.split("");
    var minsa = minutesString.split("");
    var secsa = secondsString.split("");


    document.getElementById("days1").innerHTML = daysa[0];

    document.getElementById("days2").innerHTML = daysa[1];
    document.getElementById("hours1").innerHTML = hoursa[0];
    document.getElementById("hours2").innerHTML = hoursa[1];
    document.getElementById("mins1").innerHTML = minsa[0];
    document.getElementById("mins2").innerHTML = minsa[1];
    document.getElementById("secs1").innerHTML = secsa[0];
    document.getElementById("secs2").innerHTML = secsa[1];
	
	if (distance < 0) {
            clearInterval(x);
            var daysa = ["D","E"];
			var hoursa = ["A","L"];
			var minsa = ["O","V"];
			var secsa = ["E","R"];
			document.getElementById("days1").innerHTML = daysa[0];
			document.getElementById("days2").innerHTML = daysa[1];
			document.getElementById("hours1").innerHTML = hoursa[0];
			document.getElementById("hours2").innerHTML = hoursa[1];
			document.getElementById("mins1").innerHTML = minsa[0];
			document.getElementById("mins2").innerHTML = minsa[1];
			document.getElementById("secs1").innerHTML = secsa[0];
			document.getElementById("secs2").innerHTML = secsa[1];
        }
    
    var x = setInterval(function() {
        
        var today = new Date();
        var distance = dayToCountFrom - today;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var daysString = days.toString();
        var hoursString = hours.toString();
        var minutesString = minutes.toString();
        var secondsString = seconds.toString();
        
        if(days < 10){
            daysString = "0" + daysString;
        }
        if(hours < 10){
            hoursString = "0" + hoursString;
        }
        if(minutes < 10){
            minutesString = "0" + minutesString;
        }
        if(seconds < 10){
            secondsString = "0" + secondsString;
        }
        var daysa = daysString.split("");
        var hoursa = hoursString.split("");
        var minsa = minutesString.split("");
        var secsa = secondsString.split("");

        console.log(daysa + " " + hoursa + " " + minsa + " " + secsa);
        document.getElementById("days1").innerHTML = daysa[0];
        document.getElementById("days2").innerHTML = daysa[1];
        document.getElementById("hours1").innerHTML = hoursa[0];
        document.getElementById("hours2").innerHTML = hoursa[1];
        document.getElementById("mins1").innerHTML = minsa[0];
        document.getElementById("mins2").innerHTML = minsa[1];
        document.getElementById("secs1").innerHTML = secsa[0];
        document.getElementById("secs2").innerHTML = secsa[1];
        
        if (distance < 0) {
            clearInterval(x);
            var daysa = ["D","E"];
			var hoursa = ["A","L"];
			var minsa = ["O","V"];
			var secsa = ["E","R"];
			document.getElementById("days1").innerHTML = daysa[0];
			document.getElementById("days2").innerHTML = daysa[1];
			document.getElementById("hours1").innerHTML = hoursa[0];
			document.getElementById("hours2").innerHTML = hoursa[1];
			document.getElementById("mins1").innerHTML = minsa[0];
			document.getElementById("mins2").innerHTML = minsa[1];
			document.getElementById("secs1").innerHTML = secsa[0];
			document.getElementById("secs2").innerHTML = secsa[1];
        }
        
    },1000 );
    