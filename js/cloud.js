$(document).ready(function() {
    if(!$('#myCanvas').tagcanvas({
      
      outlineColour: '#000',
      
      reverse: true,
      depth: 1,
      maxSpeed: 0.09,
      textFont: null,
      textColour: null,
      weightMode:'both',
      weight: true,
      weightGradient: {
       0:    '#f00', // red
       //0.33: '#ff0', // yellow
       //0.66: '#0f0', // green
       1:    '#00f'  // blue
      }
    },'tags')) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  });

  function cloudcat(){
      document.querySelector('.cloud-text').innerHTML = "heyy look its a cat";
      rating(5);
  }

  function cloudhtml(){
    document.querySelector('.cloud-header').innerHTML = "HTML" ;
    document.querySelector('.cloud-text').innerHTML = "Sevreal experiences with HTML i have done websites includeing this portfolio. The bare bone and essential for webdevelopemnt" ;
    rating(5);

}
function cloudcss(){
    document.querySelector('.cloud-header').innerHTML = "CSS" ;
    document.querySelector('.cloud-text').innerHTML = "Sevreal experiences with CSS i have done websites includeing this portfolio, it is a language i learned during my bachelor and have recently started to pick up again due to an interest in webdevlopment and UX/UI design" ;
    rating(5);
}

function cloudpython(){
    document.querySelector('.cloud-header').innerHTML = "Python" ;
    document.querySelector('.cloud-text').innerHTML = "Python is third language I learned and is one im self taught I have couple of project I've made in this language for example the latest group project 'carrier-based rail system' in model based engeneering" ;
    rating(4);
}
function cloudcsharp(){
    document.querySelector('.cloud-header').innerHTML = "C#" ;
    document.querySelector('.cloud-text').innerHTML = "The 2nd language I learned and the first I was self taught. It use to my preffered language during my bacholor and had a lot of project made in this language" ;
    rating(4);
}function mysql(){
    document.querySelector('.cloud-header').innerHTML = "MySQL" ;
    document.querySelector('.cloud-text').innerHTML = "A database management system that we got taught in bachelor, I've used it in my bacholor project and during my internship at Kepasa" ;
    rating(3);
}
function postgre(){
    document.querySelector('.cloud-header').innerHTML = "PostGRE" ;
    document.querySelector('.cloud-text').innerHTML = "The first Database management system I used, more or less just a stepping stone for journey as a developer" ;
    rating(2);
}


function cloudangular(){
    document.querySelector('.cloud-header').innerHTML = "Angular" ;
    document.querySelector('.cloud-text').innerHTML = "used it in my 4th semester of my bacholor to make a website to display data on the project 'Vehicle data monitoring and intelligent speed assistence'" ;
    rating(3);
}

function cloudxamarin(){
    document.querySelector('.cloud-header').innerHTML = "Xamarin" ;
    document.querySelector('.cloud-text').innerHTML = "An open source mobile app platform for building native and high-performance iOS, Android. I've used this during my studyabroad for the for my project Ourway. Ourway is an carpooling app ment to help elderly people getting around in small villages. " ;
    rating(3)
}



function cloudflutter(){
    document.querySelector('.cloud-header').innerHTML = "Flutter" ;
    document.querySelector('.cloud-text').innerHTML = "A framework to develop phone applications, I picked it up to make some side projects." ;
    rating(2);
}

function cloudjava(){
    document.querySelector('.cloud-header').innerHTML = "Java" ;
    document.querySelector('.cloud-text').innerHTML = "My introction to the programming world and my first programming language. Needless to say I have been working with this language for the first 2 years of my bachelor" ;
    rating(4);
}

function cloudblazor(){
    document.querySelector('.cloud-header').innerHTML = "Blazor" ;
    document.querySelector('.cloud-text').innerHTML = "I worked with Blazor during my internship at kepasa, I used it to make a visualization of data stored from database" ;
    rating(3);
}

function clouddotnet(){
    document.querySelector('.cloud-header').innerHTML = "DotNet" ;
    document.querySelector('.cloud-text').innerHTML = "An open source framework, I use to use this framewrok every thime i programmed in C#" ;
    rating(4);
}

function cloudBootstrao(){
    document.querySelector('.cloud-header').innerHTML = "Bootstrap" ;
    document.querySelector('.cloud-text').innerHTML = "Bootstrap are cheatcode for webdevelopers." ;
    rating(5);
}

function cloudnodejs(){
    document.querySelector('.cloud-header').innerHTML = "NodeJS" ;
    document.querySelector('.cloud-text').innerHTML = "WIP" ;
    rating(3);
}
function github(){
    document.querySelector('.cloud-header').innerHTML = "GitHub" ;
    document.querySelector('.cloud-text').innerHTML = "Always remember to push before you pull! The first thing ive learned, and its stuck to me. Ive used github ever since my first project so its safe to say I know how to use :P" ;
    rating(4);
}

function cloudeng(){
    document.querySelector('.cloud-header').innerHTML = "English" ;
    document.querySelector('.cloud-text').innerHTML = "Can both Speak and write fluent english. I spent a lot time online talking with friends across the world" ;
    rating(5);
}

function clouddan(){
    document.querySelector('.cloud-header').innerHTML = "Dansk" ;
    document.querySelector('.cloud-text').innerHTML = "Født og opvokset i Danmark, så kan også flydende dansk" ;
    rating(5);
}





function rating(rating){
    if ( rating==1 ){
    document.getElementById("star1").classList.add('checked');
    document.getElementById("star2").classList.remove('checked');
    document.getElementById("star3").classList.remove('checked');
    document.getElementById("star4").classList.remove('checked');
    document.getElementById("star5").classList.remove('checked');
    }

    if ( rating==2 ){
    document.getElementById("star1").classList.add('checked');
    document.getElementById("star2").classList.add('checked');
    document.getElementById("star3").classList.remove('checked');
    document.getElementById("star4").classList.remove('checked');
    document.getElementById("star5").classList.remove('checked');
    }
    
    if ( rating==3 ){
    document.getElementById("star1").classList.add('checked');
    document.getElementById("star2").classList.add('checked');
    document.getElementById("star3").classList.add('checked');
    document.getElementById("star4").classList.remove('checked');
    document.getElementById("star5").classList.remove('checked');
    }   

    if ( rating==4 ){
    document.getElementById("star1").classList.add('checked');
    document.getElementById("star2").classList.add('checked');
    document.getElementById("star3").classList.add('checked');
    document.getElementById("star4").classList.add('checked');
    document.getElementById("star5").classList.remove('checked');
    }
                
    if ( rating==5 ){
    document.getElementById("star1").classList.add('checked');
    document.getElementById("star2").classList.add('checked');
    document.getElementById("star3").classList.add('checked');
    document.getElementById("star4").classList.add('checked');
    document.getElementById("star5").classList.add('checked');
    }
    
}