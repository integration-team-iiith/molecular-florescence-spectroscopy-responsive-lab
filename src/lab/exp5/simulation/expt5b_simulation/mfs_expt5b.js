// This file contains all general functions used in the experiment
    
    var images = [];// Two images that are alternated in ordered to get the blinking effect of the spectrophotometer
    images[0] = "images/spec_with_red.png";
    images[1] = "images/spec_with_red.png";
    var x = 0;
    var y = 0;
    // Variables necessary to obtain motion of all the images
    var initial_top;
    var initial_left;
    var final_top;
    var final_left;
    var step;
    var elem;
    var img,img1;
    var id,id1;
    var type_of_movement;// Indicates upward or downward motion
    var step_no=0;   /*This variable is used to perform all the actions in the required sequence. 
                      Depending on the value of this variable the part of the method is called.*/
    var sol_name;

/*This method is called when the page is loaded. 
// first function helps in providing basic functionality to manual button and also sets the first set of instructions
// second function adds click events to elements as soon as the page loads.
// third function adds mouse events to elements as soon as the page loads. */
window.onload = function(){ 
    initial_function();
    addclickEvents();
    mouseEvents();
}
//It helps in providing basic functionality to manual button and also sets the first set of instructions.
function initial_function(){
        // Intial intrsuction to be followed
        document.getElementById("demo").innerHTML = "Step-No 1: Select pH4 from the solvent selection bar.";
        var modal = document.getElementById('manual');
        // Get the button that opens the manual modal
        var btn = document.getElementById("manual_button");
        // Get the <span> element that closes the manual modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks the button, open the manual modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
}

// When user clicks on the Data button it redirects him to the page containing slideshow of two graphs 
function popitup(url) {
        // Opens a new browser window called newwindow. url specifies the URL of the page to open.
        newwindow=window.open(url,'name','height=390,width=350',"_parent");
        // Sets focus to the new window if the focus is on the previous page.
        if (window.focus) {
            newwindow.focus()
        }
        return false;
}

//This function is used to add click events to elements.
function addclickEvents(){
        document.getElementById("reset_btn").addEventListener("click", function() {
            location.reload();
        }, false);
        document.getElementById("data_button").addEventListener("click", function() {
            popitup("slideshow.html");
        }, false);
        document.getElementById("round-bottom-flask").addEventListener("click", function() {
            moveFlask();
        }, false);
        document.getElementById("pipette").addEventListener("click", function() {
            movePipette();
        }, false);
        document.getElementById("quartz_cuvette").addEventListener("click", function() {
            moveCuvette();
        }, false);
        document.getElementById("comp_trans_button").addEventListener("click", function() {
            scan();
        }, false);
        document.getElementById("spectrolid_trans_button").addEventListener("click", function() {
            spectrophotometer();
        }, false);
        document.getElementById("spectrolid_trans_button1").addEventListener("click", function() {
            spectrophotometer();
        }, false);
        document.getElementById("power_trans_button").addEventListener("click", function() {
            turnOn(); showClock();
        }, false);
        document.getElementById("start").addEventListener("click", function() {
            hideInstruction();
        }, false);
        document.getElementById("select").addEventListener("click", function() {
            selectGraph();
        }, false);
        document.getElementById("start_btn").addEventListener("click", function() {
            startBtn();
        }, false);
        document.getElementById("ok_btn").addEventListener("click", function() {
            okBtn();
        }, false);
        document.getElementById("disposegraph").addEventListener("click", function() {
            disposeGraph();
        }, false);
}

//This function is used to add mouse events to elements.
function mouseEvents(){
        document.getElementById("manual_button").addEventListener("mouseover", function(){
            this.src='images/hover_manual.png';
        });
        document.getElementById("manual_button").addEventListener("mouseout", function(){
            this.src='images/manual_button.png';
        });
        document.getElementById("data_button").addEventListener("mouseover", function(){
            this.src='images/hover_data.png';
        });
        document.getElementById("data_button").addEventListener("mouseout", function(){
            this.src='images/data_button.png';
        });
}

//This specifies the solution to be used when the input button is clicked
function setSolution(){
      sol_name = document.getElementById("slider").value;
      if(sol_name == 0){
        document.getElementById("round-bottom-flask").src = "images/flask-with-sol.png"
      }
      else if(sol_name == 1){
        document.getElementById("round-bottom-flask").src = "images/flask-with-sol1.png"   
      }
      document.getElementById("demo").innerHTML = "Step-No 2: Click on the volumetric flask containing rhodamine B solution to take it to the instrument table. ";
}

/* When the user switches on the spectrophotometer this method is called. Here the spectrophotometer image is changed 
   continuously  to give the blinking light effect. The two images that are swapped is stored in images[] */
function turnOn() {
        // Get the image
        img = document.getElementById('table_with_spec');
        // Change the source of the image 
        img.src = images[x];
        //increment x;
        x++;
        if(x >= images.length){
            x = 0;
        }
        // Call turnOn() method every 250ms 
        setTimeout("turnOn()", 250)
        if(step_no == 17){
            images[0] = "images/spec_on_no_redLight.png";
            images[1] = "images/spec_on_redLight.png";
        }
}

//Common function to make the clock visible and rotate it.
function clck(){
        // Get the images.
        context=document.getElementById('clockScreen');
        hand =document.getElementById('clockHand');
        // Make the visiblility of the obtained images visible
        context.style.visibility='visible';
        hand.style.visibility="visible";
        // Rotate 'clockHand' using jQueryRotate.js
        var angle=0;
        var id = setInterval(function(){
        angle+=1;
        if(angle==360){
            clearInterval(id);
        }
        $("#clockHand").rotate(angle);
        },30);

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
/* This method displays a timer which runs for 30 seconds. There exists two images which are hidden initailly; 
when this method is called they are amde visible and the clock hand is made to rotate.  */
function showClock(){
        if(step_no==7){
            clck();
            document.getElementById("demo").innerHTML = "Step-No 9: Click on the lid of the sample chamber of the spectrophotometer by clicking on the lid for placing the sample in the cell holder;"
            //After 10 secs dispose clock
            setTimeout("removeClock()",5350);
        }
        else if(step_no==17){
            clck();
            document.getElementById("demo").innerHTML = "Step-No 19: Open the lid of the sample chamber of the spectroflourimeter by clicking on the lid for placing the sample in the cell-holder."
            //After 10 secs dispose clock
            setTimeout("removeClock()",5350);
        }
}

// After 30 seconds of display of the timer the visibility of clock is changed back to hidden.
function removeClock() {
        if(step_no == 7||step_no == 17){
            context.style.visibility='hidden';
            hand.style.visibility="hidden";
            step_no++;
        }
}

// First time its called to open the spectrophotometer
// Second time its called to close the spectrophotometer
function spectrophotometer(){
        if (step_no == 8){
            // Replace the spectrophotometer images with the open spectrophotometer images
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open1.png";
            document.getElementById("demo").innerHTML = "Step-No 10: Click on the cuvette top place it in the sample holder. One has to use pure solvent as the sample bank or reference in this measurement. Here a double beam spectrophotometer is shown.";
            step_no++;
        }
        else if(step_no == 10){
            // Replace the spectrophotometer images with the closed spectrophotmeter images.
            images[0] = "images/spec_close.png";
            images[1] = "images/spec_close1.png";
            document.getElementById("demo").innerHTML = "Step-No 12:  Open the measurement set-up screen by clicking on the absorption measurement icon on the computer monitor. ";
            step_no++;
        }
        else if(step_no == 13){
            // Replace the spectrophotometer images with the open spectrophotometer images
            images[0] = "images/spec_open.png";
            images[1] = "images/spec_open1.png";
            document.getElementById("demo").innerHTML = "Step-No 15: To take the cuvette out of the sample chamber, first click on the sample chamber lid to open it and then on the cuvette. ";
            step_no++;
        }
        else if(step_no == 14){
            //on click cuvettes comes out of spectrometer.One cuvette is removed and the other cuvette is placed on table.
            $("#ref_cuvette, #quartz_cuvette").show()
            $("#ref_cuvette").animate({left:'800px',top:'15px'},"slow", function(){
                this.remove();
            });
            $("#quartz_cuvette").animate({left:'290px', top:'338px'});
            document.getElementById("demo").innerHTML = "Step-No 16:  Close the sample chamber lid by clicking on it. ";
            step_no++;

        }
        else if(step_no == 15){
            // Replace the spectrophotometer images with the closed spectrophotmeter images.
            images[0] = "images/spec_close.png";
            images[1] = "images/spec_close1.png";
            document.getElementById('start').innerHTML = "Start Fluorescence measurement";
            document.getElementById("demo").innerHTML = "Step-No 17: Click on the pop-up: 'Start Fluorescence measurement'";
            setTimeout( function(){
            $("#popup, #start").css("visibility", "visible");
            }, 700);
            step_no++;
        }
        else if(step_no == 18){
            // click on the lid for placing the sample in the cell-holder.
            // Replace the spectroflourimeter images with the open spectrophotometer images
            images[0] = "images/specfluro_open.png";
            images[1] = "images/specfluro_open1.png";
            document.getElementById("demo").innerHTML = "Step-No 20: Click on the spectrophotometric quartz cuvette to transfer its content into an all-side-transparent quartz cuvette of path length 1 cm ×1 cm for the fluorescence measurement.";
            step_no++;
        }
        else if(step_no == 20){
            // Replace the spectrophotometer images with the closed spectrophotmeter images.
            images[0] = "images/specfluro_close.png";
            images[1] = "images/specfluro_close1.png";
            document.getElementById("demo").innerHTML = "Step-No 21:  Open the instrument set-up screen by clicking on the fluorescence measurement icon on the computer monitor.";
            step_no++;
        }

}

// This method is used to play a video which shows constructing graphs based on their sample path length.
/*After the cuvettes are inserted into the spectrophotometer/spectroflurmeter, when the computer in pressed to scan,
  depending on the cuvette choosen form with an instruction is displayed.*/ 
function scan(){
        if(step_no==11){
            $(".data_validation, #instruction_bkgd, #graph_instruction").css("visibility", "visible");
            if(sol_name == 0){
                graph_instruction.innerHTML = "Step-No 13:On the screen enter the wavelength range of spectral scan.  start: 580 nm End: 460 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan.";
            }
            else if(sol_name ==1){
                graph_instruction.innerHTML = "Step-No 13:On the screen enter the wavelength range of spectral scan.  start: 580 nm End: 440 nm. In real operation, the wavelength range of incident light for the sample is chosen and the wavelength scan is run via the accompanied computer software. One can run the scan in absorbance (A)  or transmittance (%T) mode. Click on the green 'start' button on the measurement set-up screen to run the wavelength scan.";
            }
        }
        else if(step_no == 21){
            $(".data_validation1, #popup").css("visibility", "visible");
            document.getElementById("demo").innerHTML = "Step-No 22: Select the Emission Scan Mode on the screen.On the screen, enter the Excitation wavelength: 535 nm, Emission Start Wavelength: 500 nm and Emission End wavelength: 680 nm. One chooses the Excitation Slit(nm) and Emission Slit(nm) values (here 2.5 nm/2.5 nm) and the scan speed value (here “medium”) also. ";
            step_no++;
        }
}

function startBtn(){
        input1 = document.getElementById("input1").value;
        input2 = document.getElementById("input2").value;
        video1 = document.getElementById("video1");
        video3 = document.getElementById("video3");
        if(sol_name== 0 &&  input1 == 580 && input2 == 460){
            $(".data_validation").css("visibility", "hidden");
            $("#popup, #video1").css("visibility", "visible");
            document.getElementById("graph_instruction").innerHTML = "Step-No 14:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
            video1.play();
            step_no++;
        }
            
        else if(sol_name == 1 && input1 == 580 && input2 == 440){
            $(".data_validation").css("visibility", "hidden");
            $("#popup, #video3").css("visibility", "visible");
            document.getElementById("graph_instruction").innerHTML = "Step-No 14:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
            video3.play();
            step_no++;
        }
        else{
            alert("Enter start and end values and click start button on top of the window");
        }
}

//This method is used to select the specific mode from the dropdown menu.
function selectGraph() {
    dropdown = document.getElementById("select");
    dropdown.onchange = function(event){
       if(dropdown.value=="Excitation" && step_no==22){
         $("#select").html("<option value='Emission'>Emission</option><option value='Excitation'>Excitation</option>");
         alert("Select Emission scan mode");
       }
    }
}


//This method is used to validate the correct data and display particular graph.
function okBtn(){
        var input_1 = document.getElementById("input1_data").value;
        var input_2 = document.getElementById("input2_data").value;
        var input_3 = document.getElementById("input3_data").value;
        video2 = document.getElementById("video2");
        video4 = document.getElementById("video4");
        if(input_1 == 535 && input_2 == 500 && input_3 == 680 && step_no == 22 && sol_name == 0){
                $(".data_validation1").css("visibility", "hidden");
                video2.style.visibility = "visible";
                document.getElementById("demo").innerHTML = "Step-No 23:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                video2.play();
                step_no++;
        }
        else if(input_1 == 535 && input_2 == 500 && input_3 == 680 && step_no == 22 && sol_name == 1){
                $(".data_validation1").css("visibility", "hidden");
                video4.style.visibility = "visible";
                document.getElementById("demo").innerHTML = "Step-No 23:Click on the close button when the spectral scal is complete. In real operation, the scan data are stored in the computer. The instrument stores data and therefore asks for the Sample File name. One enters a file name to save the data.";
                video4.play();
                step_no++
        }
        else{
                alert("Select Scanmode, EXWL,EM Start WL and EM End WL values");
        }
}

//This method makes the graph hidden once the video is played and close is pressed. 
function disposeGraph(){
        /* After playing the graph plotting video close option is choosen, the background scan image and 
            the video is mafde hidden. */
        if(step_no == 12){
            $(".videos, .common, #popup").css("visibility", "hidden");
            document.getElementById("demo").innerHTML = "Step-No 15: To take the cuvette out of the sample chamber, first click on the sample chamber lid to open it and then on the cuvette. ";
            step_no++;
        }
        if(step_no == 23){
            $(".videos, #popup").css("visibility", "hidden");
            if(sol_name == 0){
                document.getElementById("demo").innerHTML = "Collect all data by clicking on the Data tab.";
            }
            else if(sol_name == 1){
                document.getElementById("demo").innerHTML = " Click on 'Reset' button to start over the measurements. ";
            }
        }
}