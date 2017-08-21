// Counter Code
var button=document.getElementById('counter');
button.onclick = function(){
    
    // Create a request
  var request= new XMLHttpRequest();
   // Capture response
  request.onreadystatechange= function(){
      if (request.readystate === XMLHttpRequest.DONE){
      // Take Some action
      if (request.status === 200){
          var counter = request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
      }
  }  
   //Not done yet
  };
  // Make the Request
  request.open('GET','http://vigneshkumar337884.imad.hasura-app.io/counter', true);
  request.send(null);
};