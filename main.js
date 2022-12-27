document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var opts = {headings: ["Tage", "Stunde", "Minutes", "Sekunden"]};
    var twoDaysFromNow = (new Date("Oct 1, 2023 10:00:00").getTime() / 1000);
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow, opts)
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
  
  });