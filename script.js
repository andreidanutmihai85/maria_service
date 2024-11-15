class Maria {
    constructor(
      buna_sunt_maria,
      ce_problema_laptop,
      alte_info,
      telefonic,
      whatsapp,
      form, 
      email,
      pret_laptop_doresti_programare,
      iti_multumesc_pentru_interactiune,
      cum_doresti_programarea,
      upgrade_laptop,
      devirusare,
      date_sterse,
      optimizare, 
      curatare_praf,
      instalare_programe,
      bios_laptop,
      rest_pass_wind,
      ce_problema_calculator,
      calc_porneste,
      calc_nu_porneste,
      bios_calc, 
      monitor,
      windows,
      router,
      asamblare,
      click2,
     

    ){
      this.buna_sunt_maria = new Audio('media/buna_sunt_maria.mp4');
      this.ce_problema_laptop = new Audio('media/ce_problema_laptop.mp4');
      this.alte_info = new Audio('media/alte_informatii.mp4');
      this.telefonic = new Audio('media/telefon.mp4');
      this.whatsapp = new Audio('media/whatsapp.mp4');
      this.form = new Audio('media/formular_online.mp4');
      this.email = new Audio('media/email.mp4');
      this.pret_laptop_doresti_programare = new Audio('media/pret_laptop_doresti_programare.mp4');
      this.iti_multumesc_pentru_interactiune = new Audio('media/iti_multumesc_pentru_interactiune.mp4');
      this.cum_doresti_programarea = new Audio('media/cum_doresti_programarea.mp4');
      this.upgrade_laptop = new Audio('media/upgrade_laptop.mp4');
      this.devirusare = new Audio('media/devirusare.mp4');
      this.date_sterse = new Audio('media/date_sterse.mp4');
      this.optimizare = new Audio('media/optimizare.mp4');
      this.curatare_praf = new Audio('media/curatare_praf.mp4');
      this.instalare_programe = new Audio('media/instalare_programe.mp4');
      this.bios_laptop = new Audio('media/bios_laptop.mp4');
      this.rest_pass_wind = new Audio('media/rest_pass_wind.mp4');
      this.ce_problema_calculator = new Audio('media/ce_problema_calculator.mp4');
      this.calc_porneste = new Audio('media/calc_porneste.mp4');
      this.calc_nu_porneste = new Audio('media/calc_nu_porneste.mp4');
      this.bios_calc = new Audio('media/bios_calc.mp4');
      this.monitor = new Audio('media/monitor.mp4');
      this.windows = new Audio('media/windows.mp4');
      this.router = new Audio('media/router.mp4');
      this.asamblare = new Audio('media/asamblare.mp4');
      this.click2 = new Audio('media/click2.mp3');
   
    }}
const userClick = new Maria ();

function playclip(){
    let sound = userClick.click2;
    sound.play();
}

// =====================  ON TOP FUNCTION========================
function ontop(){
   window.scrollTo(0, 0)
}


// =====================  ON TOP FUNCTION========================


// ==================== LOADING START ============================
function loading(){
    document.getElementById("loading").style.display = "none";
}

// ==================== LOADING END ==============================

function start() {
   
    let sound = userClick.buna_sunt_maria;
    sound.play();
    
    document.getElementById("startButton").style.display = "none";
    document.getElementById("loading").style.display = "block";
  
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("startButton").style.display = "none";
    document.getElementById("loading").style.display = "none";

    document.getElementById("msgID").style.display = "block"; 
}, 4000);

setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msg1").style.display = "block";  
}, 4500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msg2").style.display = "block";   
}, 5000);

setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgw2").style.display = "block";   
}, 5500);

setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgr2").style.display = "block";   
}, 6000);


setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msg4").style.display = "block";   

}, 6500);

}

// ======================================================================== 

function alteInfo() {

    let sound = userClick.alte_info;
    sound.play();
    document.getElementById("msgID").style.display = "none";
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
    
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("tel").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 5000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("whatsapp").style.display = "block";   
}, 5500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("form").style.display = "block";    
}, 6000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("email").style.display = "block";    
}, 6500);
}

// ============================== CONTACT START============================


function telefonic(){
    let sound = userClick.telefonic;
    sound.play();
    document.getElementById("msg25").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout( function apel() {
   
        document.getElementById("telefonic2").click();
}, 7100);
setTimeout( function menu() {
    let sound = userClick.click2;
    sound.play();
    
}, 7300);

}

function whatsApp(){
    let sound = userClick.whatsapp;
    sound.play();
    document.getElementById("msg25").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout( function apel() {
        document.getElementById("whatsapp2").click();
    }, 8000);
    setTimeout( function menu() {
        let sound = userClick.click2;
        sound.play();
        
    }, 8100);
}

function formularOnline() {
    let sound = userClick.form;
    sound.play();
    document.getElementById("msg25").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout( function apel() {
        // return window.open('https://www.reparatii-laptop-bucuresti.ro/programare-online.html');
        document.getElementById("formularOnline2").click();
    }, 8500);
    setTimeout( function menu() {
        let sound = userClick.click2;
        sound.play();
        
    }, 8600);
}

function email(){
    let sound = userClick.email;
    sound.play();
    document.getElementById("msg25").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout( function apel() {
        document.getElementById("email2").click();
    }, 7500);
    setTimeout( function menu() {
        let sound = userClick.click2;
        sound.play();
        
    }, 8000);
}

// ============================== CONTACT END============================

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// =========================SUB BUTOANE - REPARATII LAPTOP START================

function repartieLaptop(){
    let sound = userClick.ce_problema_laptop;
    sound.play();
    document.getElementById("msgID").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    document.getElementById("msg22").style.display = "block";  
}, 1000);

setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl1").style.display = "block";  
    document.getElementById("loading").style.display = "none"; 
}, 2500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl2").style.display = "block";   
}, 3000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl3").style.display = "block";    
}, 3500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl4").style.display = "block";    
}, 4000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl5").style.display = "block";    
}, 4500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl6").style.display = "block";    
}, 5000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl7").style.display = "block";    
}, 5500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl8").style.display = "block";    
}, 6000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl9").style.display = "block";    
}, 6500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl10").style.display = "block";    
}, 7000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl11").style.display = "block";    
}, 7500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgl111").style.display = "block";    
}, 8000);
}
    
// ---------------------------------------------------------------------------
function lapotpPorneste(){
    let sound = userClick.pret_laptop_doresti_programare;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
  
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 18000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 18500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function lapotpNuPorneste(){
    let sound = userClick.pret_laptop_doresti_programare;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 18000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 18500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function upgradeLaptop(){
    let sound = userClick.upgrade_laptop;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 22000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 22500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function devirusareLaptop(){
    let sound = userClick.devirusare;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
   
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 11000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 11500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function copiereDate(){
    let sound = userClick.date_sterse;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";
    document.getElementById("loading").style.display = "none";  
}, 15000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 15500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function curatareSoftware(){
    let sound = userClick.optimizare;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 16500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 17000);
}
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
function curatarePraf(){
    let sound = userClick.curatare_praf;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 12500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 13000);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function instalarePrograme(){
    let sound = userClick.instalare_programe;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 13000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 13500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function resetareBiosLaptop(){
    let sound = userClick.bios_laptop;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 8000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 8500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function resetPassWind(){
    let sound = userClick.rest_pass_wind;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 14000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 14500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function inapoi(){
    document.getElementById("msg22").style.display = "none";
    location.reload();
   return start();
}
// ---------------------------------------------------------------------------



function da(){
    let sound = userClick.cum_doresti_programarea;
    sound.play();
    document.getElementById("msg23").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout( function menu() {
            document.getElementById("msgID").style.display = "none";
            document.getElementById("msg22").style.display = "none";
            document.getElementById("loading").style.display = "none";
        setTimeout( function menu() {
            let click = new Audio('media/click.mp3');
            click.play();
            document.getElementById("tel").style.display = "block";  
        }, 1500);
        setTimeout( function menu() {
            let click = new Audio('media/click.mp3');
            click.play();
            document.getElementById("whatsapp").style.display = "block";   
        }, 2000);
        setTimeout( function menu() {
            let click = new Audio('media/click.mp3');
            click.play();
            document.getElementById("form").style.display = "block";    
        }, 2500);
        setTimeout( function menu() {
            let click = new Audio('media/click.mp3');
            click.play();
            document.getElementById("email").style.display = "block";    
        }, 3000);
    

    }, 1000);

}

function nu(){
    let sound = userClick.iti_multumesc_pentru_interactiune;
    sound.play();
    document.getElementById("msg23").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout( function apel() {
        // return window.open('https://www.reparatii-laptop-bucuresti.ro');
        document.getElementById("homePage").click();
    }, 7000);
}


// =========================SUB BUTOANE - REPARATII LAPTOP END================



// =========================SUB BUTOANE - REPARATII CALCULATOARE START================
function repartieCalculator(){

    let sound = userClick.ce_problema_calculator;
    sound.play();
    document.getElementById("msgID").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {

    document.getElementById("msgc22").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 1000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc1").style.display = "block";   
}, 2500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc2").style.display = "block";   
}, 3000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc3").style.display = "block";    
}, 3500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc30").style.display = "block";    
}, 4000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc4").style.display = "block";    
}, 4500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc5").style.display = "block";    
}, 5000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc6").style.display = "block";    
}, 5500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc7").style.display = "block";    
}, 6000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc8").style.display = "block";    
}, 6500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc9").style.display = "block";    
}, 7000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc10").style.display = "block";    
}, 7500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc11").style.display = "block";    
}, 8000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("msgc111").style.display = "block";    
}, 8500);
}
// ---------------------------------------------------------------------------
function calcPorneste(){
    let sound = userClick.calc_porneste;
    sound.play();
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 20500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 21000);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function calcNuPorneste(){
    let sound = userClick.calc_nu_porneste;
    sound.play();
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 19500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 20000);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function upgradeCalc(){
    let sound = userClick.upgrade_laptop;
    sound.play();
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 22000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 22500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function asamblareCalc(){
    let sound = userClick.asamblare;
    sound.play();
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 28000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 28500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function devirusareLaptop(){
    let sound = userClick.devirusare;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 11000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 11500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function copiereDate(){
    let sound = userClick.date_sterse;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 15000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 15500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function curatareSoftware(){
    let sound = userClick.optimizare;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block"; 
    document.getElementById("loading").style.display = "none"; 
}, 16500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 17000);
}
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
function curatarePraf(){
    let sound = userClick.curatare_praf;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 12500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 13000);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function instalarePrograme(){
    let sound = userClick.instalare_programe;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 13000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 13500);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function resetareBiosCalc(){
    let sound = userClick.bios_calc;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 8500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 9000);
}
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
function resetPassWind(){
    let sound = userClick.rest_pass_wind;
    sound.play();
    document.getElementById("msg22").style.display = "none";
    document.getElementById("msgc22").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";
    document.getElementById("loading").style.display = "none";  
}, 14000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 14500);
}

function inapoic(){
    document.getElementById("msgc22").style.display = "none";
    location.reload();
   return start();
}


// =========================SUB BUTOANE - REPARATII CALCULATOARE END================



// =========================SUB BUTOANE - REPARATII MONITOARE START=====================
function repartieMonitor(){
    let sound = userClick.monitor;
    sound.play();
    document.getElementById("msgID").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";
    document.getElementById("loading").style.display = "none";  
}, 15500);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 16000);
}
// =========================SUB BUTOANE - REPARATII MONITOARE END=====================




// =========================SUB BUTOANE - INSTALARE WINDOWS START=====================
function instalareWindows(){
    let sound = userClick.windows;
    sound.play();
    document.getElementById("msgID").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 28000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 28500);
}
// =========================SUB BUTOANE - INSTALARE WINDOWS END=====================



// =========================SUB BUTOANE - CONFIGURARE ROUTER START=====================
function configurareRouter(){
    let sound = userClick.router;
    sound.play();
    document.getElementById("msgID").style.display = "none";
    document.getElementById("loading").style.display = "block";
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("da").style.display = "block";  
    document.getElementById("loading").style.display = "none";
}, 15000);
setTimeout( function menu() {
    let click = new Audio('media/click.mp3');
    click.play();
    document.getElementById("nu").style.display = "block";    
}, 15500);
}
// =========================SUB BUTOANE - CONFIGURARE ROUTER END=====================


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////