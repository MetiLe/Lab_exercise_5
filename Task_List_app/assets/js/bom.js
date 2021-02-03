/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
badges = document.querySelectorAll(".badge")








// Display the BOM Information on the innerHTML of the elements

badges[0].innerText=location.href;
badges[1].innerText=location.protocol;
badges[2].innerText=location.host;
badges[3].innerText=location.port;
badges[4].innerText = location.hostname;
badges[5].innerText = navigator.appName;
badges[6].innerText = navigator.appVersion;
badges[7].innerText = navigator.platform;
badges[8].innerText = navigator.language;
badges[9].innerText = navigator.cookieEnabled;
badges[10].innerText = screen.height;
badges[11].innerText = screen.width;
badges[12].innerText = screen.pixelDepth;
badges[13].innerText = history.length;
badges[14].innerText = history.state;