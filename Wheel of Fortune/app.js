

let spinArray = [];

function addSpins(){
let sum = 0

for (let i = 0; i < spinArray.length; i++){
    sum += spinArray[i];
}
document.getElementById('totalspinscore').innerHTML = sum;
console.log(sum);
}





function onSpin(){
    let val = Math.round(Math.random() * 350);
    document.getElementById('see-spin-result').innerHTML = val;
    spinArray.push(val);
}


function onSpinDelay(){
    setTimeout(onSpin, 5000);
}


function spinResult() {
    var x = 1024;
    var y = 9999; 

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    
    var element = document.getElementById('mainbox');
    element.classlList.remove('animate');
    setTimeout(function(){
    element.classList.add('animate');
     
    }, 5000); //5000 = 5 seconds
}








$(document).ready(function(){
$('.true').click(function(){
$('#spin-me').prop('disabled', false);
$('#take-a-spin').css('display','block');
$('#no-spin').css('display','none');

 });
});

$(document).ready(function(){
    $('.false').click(function(){
    $('#spin-me').prop('disabled', true);
    $('#no-spin').css('display','block');
    $('#take-a-spin').css('display','none');

     });
    });

    $(document).ready(function(){
    $('#spin-me').click(function(){
        onSpinDelay();
        spinResult();
    });
    });
    


$(document).ready(function(){
    $('#confirm-btn1').click(function(){
    $('#question2').show();
    $('#question1').hide();
    $('#take-a-spin').hide();
    $('#no-spin').hide();
    $('#confirm-btn1').hide();
    $('#confirm-btn2').show();
    }); 
});

$(document).ready(function(){
    $('#confirm-btn2').click(function(){
    $('#question3').show();
    $('#question2').hide();
    $('#take-a-spin').hide();
    $('#no-spin').hide();
    $('#confirm-btn2').hide();
    $('#confirm-btn3').show();
    }); 
});

$(document).ready(function(){
    $('#confirm-btn3').click(function(){
    $('#question4').show();
    $('#question3').hide();
    $('#take-a-spin').hide();
    $('#no-spin').hide();
    $('#confirm-btn3').hide();
    $('#confirm-btn4').show();
    }); 
});
$(document).ready(function(){
    $('#confirm-btn4').click(function(){
    $('#question5').show();
    $('#question4').hide();
    $('#take-a-spin').hide();
    $('#no-spin').hide();
    $('#confirm-btn4').hide();
    $('#confirm-btn5').show();
    }); 
});
$(document).ready(function(){
    $('#confirm-btn5').click(function(){
    $('#question6').show();
    $('#question5').hide();
    $('#take-a-spin').hide();
    $('#no-spin').hide();
    $('#confirm-btn5').hide();
    $('#confirm-btn6').show();
    }); 
});
$(document).ready(function(){
    $('#confirm-btn6').click(function(){
    $('#question7').show();
    $('#question6').hide();
    $('#take-a-spin').hide();
    $('#no-spin').hide();
    $('#confirm-btn6').hide();
    $('#confirm-btn7').show();
    }); 
});

$(document).ready(function(){
    $('#confirm-btn7').click(function(){
        let myForm = document.getElementById('myForm');
        let formData = new FormData(myForm);
        
        let total = 0;
      
        for (var value of formData.values()) {
           total += parseInt(value);
        }
        
        document.getElementById("final-score").innerHTML = Math.round(total/7 * 100) + "%";
        
        console.log(total);
        $('#finalScore').show();
        $('#totalspinsdisplay').show();
    });
});
document.getElementById('confirm-btn7').addEventListener('click', addSpins);
console.log(spinArray);

/*function getValues() {
    let myForm = document.getElementById('myForm');
    let formData = new FormData(myForm);
    
    let total = 0;
  
    for (var value of formData.values()) {
       total += parseInt(value);
    }
    
    document.getElementById("final-score").innerHTML = total;
    
    console.log(total);
  }*/

  





