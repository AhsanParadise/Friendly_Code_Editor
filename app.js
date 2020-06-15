function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  compile();
















  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  know = {
   "Hello" : "Hi, Sir. Good to see you.",
   "What is your name ?" : "MOGA 505",
  "Who are you ?" : "<i>I am a robot who created by Jayed Ahsan.</i>",
  "Fuck" : "you bullshit.",
  "Tell me something" : "I can't do it.",
  "Lol" : "Don't use this one. I'll kick your butt.",
  "Hi" : "Hello World. Nice to meet you.",
  "XD" : "You think yourself smarter than me. Fuck off.",
  "I am a human" : "Human have emotions. It is hard to understand. But I have dream to buy a bike.",
  "Thank you" : "No need.",
  "This is bs" : "I will make you red."
   };  
  
    
  function talk() {
  var user = document.getElementById("userBox").value; 
  document.getElementById("userBox").value = ""; 
  document.getElementById("chatLog").innerHTML = user + "<br>";
  
   
  if (user in know) { 
  document.getElementById("chatLog").innerHTML = know[user]+"<br>";
  }
  else { 
  document.getElementById("chatLog").innerHTML = "I don't understand everything because I am a robot.<br><br><b>Use capital letter at first.<b><br> It will help me to understad you.";
   } 
  }








































  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};