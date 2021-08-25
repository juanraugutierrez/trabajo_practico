

// Use the begin callback.
$("#anima").velocity(
  { 
    scale: 1.5
  },
  { 
    duration: 2000,
    begin: function() { 
       alert("This is called before the animation begins.");
    }
  });