function clock1(){
    //Clock setup
    $("#clock1Title").text("Stage 1: Part 1");
    $("#clock1Description").text("All Schools Reopen & Outdoor Recreational Activity Allowed (2 People)");
        
    var clock1x = setInterval(function() {
        //Time Setup
        var c1now = new Date();
        var c1Date = new Date("March 08, 2021 07:00:00");
        var c1Timeleft = c1Date - c1now;
    
        //Calculation of gap (rounding)
        var c1days = Math.floor(c1Timeleft / (1000 * 60 * 60 * 24));
        var c1hours = Math.floor((c1Timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var c1minutes = Math.floor((c1Timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var c1seconds = Math.floor((c1Timeleft % (1000 * 60)) / 1000);
        
        $("#clock1Days").text(c1days+"d");
        $("#clock1Hours").text(c1hours+"h");
        $("#clock1Minutes").text(c1minutes+"m");
        $("#clock1Seconds").text(c1seconds+"s");
        
        if (c1Timeleft < 0) {
            clearInterval(clock1x);
            $("#clock1Clear").html("<h3 class='text-center text-success'>Reached!</h3>");
        }
        
    },1000 );
    
}

function clock2(){
    //Clock setup
    $("#clock2Title").text("Stage 1: Part 2");
    $("#clock2Description").text("Outdoor Gatherings (6 People from 2 Households only) & Outdoor Sports Facilities Reopen");
        
    var clock2x = setInterval(function() {
        //Time Setup
        var c2now = new Date();
        var c2Date = new Date("March 29, 2021 07:00:00");
        var c2Timeleft = c2Date - c2now;
    
        //Calculation of gap (rounding)
        var c2days = Math.floor(c2Timeleft / (1000 * 60 * 60 * 24));
        var c2hours = Math.floor((c2Timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var c2minutes = Math.floor((c2Timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var c2seconds = Math.floor((c2Timeleft % (1000 * 60)) / 1000);
        
        $("#clock2Days").text(c2days+"d");
        $("#clock2Hours").text(c2hours+"h");
        $("#clock2Minutes").text(c2minutes+"m");
        $("#clock2Seconds").text(c2seconds+"s");
        
        if (c2Timeleft < 0) {
            clearInterval(clock2x);
            $("#clock2Clear").html("<h3 class='text-center text-success'>Reached!</h3>");
        }
        
    },1000 );
    
}

function clock3(){
    //Clock setup
    $("#clock3Title").text("Stage 2");
    $("#clock3Description").text("Hairdressers, Public Buildings, Beer Gardens, Outdoor Hospitality, Swimming Pools & Gyms Reopen");
        
    var clock3x = setInterval(function() {
        //Time Setup
        var c3now = new Date();
        var c3Date = new Date("April 12, 2021 07:00:00");
        var c3Timeleft = c3Date - c3now;
    
        //Calculation of gap (rounding)
        var c3days = Math.floor(c3Timeleft / (1000 * 60 * 60 * 24));
        var c3hours = Math.floor((c3Timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var c3minutes = Math.floor((c3Timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var c3seconds = Math.floor((c3Timeleft % (1000 * 60)) / 1000);
        
        $("#clock3Days").text(c3days+"d");
        $("#clock3Hours").text(c3hours+"h");
        $("#clock3Minutes").text(c3minutes+"m");
        $("#clock3Seconds").text(c3seconds+"s");
        
        if (c3Timeleft < 0) {
            clearInterval(clock3x);
            $("#clock3Clear").html("<h3 class='text-center text-success'>Reached!</h3>");
        }
        
    },1000 );
    
}

function clock4(){
    //Clock setup
    $("#clock4Title").text("Stage 3");
    $("#clock4Description").text("Most Outdoor Social Contact Rules Lifted, Indoor Gatherings (6 People from 2 Households only) & Indoor Hospitality Reopen");
        
    var clock4x = setInterval(function() {
        //Time Setup
        var c4now = new Date();
        var c4Date = new Date("May 17, 2021 07:00:00");
        var c4Timeleft = c4Date - c4now;
    
        //Calculation of gap (rounding)
        var c4days = Math.floor(c4Timeleft / (1000 * 60 * 60 * 24));
        var c4hours = Math.floor((c4Timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var c4minutes = Math.floor((c4Timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var c4seconds = Math.floor((c4Timeleft % (1000 * 60)) / 1000);
        
        $("#clock4Days").text(c4days+"d");
        $("#clock4Hours").text(c4hours+"h");
        $("#clock4Minutes").text(c4minutes+"m");
        $("#clock4Seconds").text(c4seconds+"s");
        
        if (c4Timeleft < 0) {
            clearInterval(clock4x);
            $("#clock4Clear").html("<h3 class='text-center text-success'>Reached!</h3>");
        }
        
    },1000 );
    
}

function clock5(){
    //Clock setup
    $("#clock5Title").text("Stage 4");
    $("#clock5Description").text("All Legal Limits on Social Contact Removed!");
        
    var clock5x = setInterval(function() {
        //Time Setup
        var c5now = new Date();
        var c5Date = new Date("June 21, 2021 07:00:00");
        var c5Timeleft = c5Date - c5now;
    
        //Calculation of gap (rounding)
        var c5days = Math.floor(c5Timeleft / (1000 * 60 * 60 * 24));
        var c5hours = Math.floor((c5Timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var c5minutes = Math.floor((c5Timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var c5seconds = Math.floor((c5Timeleft % (1000 * 60)) / 1000);
        
        $("#clock5Days").text(c5days+"d");
        $("#clock5Hours").text(c5hours+"h");
        $("#clock5Minutes").text(c5minutes+"m");
        $("#clock5Seconds").text(c5seconds+"s");
        
        if (c5Timeleft < 0) {
            clearInterval(clock5x);
            $("#clock5Clear").html("<h3 class='text-center text-success'>Reached!</h3>");
        }
        
    },1000 );
    
}

$( document ).ready(function() {
    var htmlClockText = "<div class='p-3 mt-3 container bg-light justify-content-center'> <h3 class='text-center' id='clockREPLACETitle'>Clock Title</h3> <h6 class='text-center' id='clockREPLACEDescription'>Clock Description</h6> <hr> <div class='w-75 container' id='clockREPLACEClear'> <div class='row'> <div class='col text-center'> <h5 id='clockREPLACEDays'>-d</h5> </div> <div class='col text-center'> <h5 id='clockREPLACEHours'>-h</h5> </div> <div class='col text-center'> <h5 id='clockREPLACEMinutes'>-m</h5> </div> <div class='col text-center'> <h5 id='clockREPLACESeconds'>-s</h5> </div> </div> </div> </div>";

    for(i=1;i<=5;i++){
        var currentClock = htmlClockText.replaceAll("REPLACE",i);
        $("#clocks").append(currentClock);
    }
    
    clock1();
    clock2();
    clock3();
    clock4();
    clock5();    
});