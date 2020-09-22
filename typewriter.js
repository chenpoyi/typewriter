const typewriter = function(sentence){
  let delay = 50
  for (const char of sentence) {
    setTimeout(() => {
      // print the char here
      process.stdout.write(char);
    
    }, delay += 50); // <= 1s delay to make it noticeable. Can dial it down later.
    
    
  }

}

const sentence = "hello there from lighthouse labs\n";
typewriter(sentence);
