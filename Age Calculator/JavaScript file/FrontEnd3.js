
function calculateAge() {
            let birthYear = parseInt(document.getElementById("birthYear").value);

            let birthMonth = parseInt(document.getElementById("birthMonth").value);

            let birthDay = parseInt(document.getElementById("birthDay").value);

            let currentDate = new Date();
            let birthDate = new Date(birthYear, birthMonth - 1 , birthDay);

            let years = currentDate.getFullYear() - birthYear;
            let months = currentDate.getMonth() - birthMonth + 1;
            let days = currentDate.getDate() - birthDay;
          

            if (days < 0) {
                months--;
                days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }
            if (months < birthMonth) {
               years--;
            }
            if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
              document.getElementById('dem').innerHTML = 'This field is required';
              document.getElementById('dem1').innerHTML = 'This field is required';
              document.getElementById('dem2').innerHTML = 'This field is required';
              document.getElementById('day1').style.color = "#D60A0A";
              document.getElementById('mon1').style.color = "#D60A0A";
              document.getElementById('year1').style.color = "#D60A0A";
              document.getElementById('birthDay').style.borderColor = "#D60A0A";
              document.getElementById('birthMonth').style.borderColor = "#D60A0A";
              document.getElementById('birthYear').style.borderColor = "#D60A0A";

              return;
            }

            document.getElementById('resultYear').innerHTML = years;
            document.getElementById('resultMonth').innerHTML = months;
            document.getElementById('resultDay').innerHTML = days;

               let showMessage1 = 'Must be a valid day';
               let showMessage2 = 'Must be a valid month';
               let showMessage3 = 'Must be in the past';
               let showMessage4 = 'This field is required';
               let clearMessage = '';
               let clearMessage1 = 'NaN';

               if (birthDay > 31) {
                   document.getElementById('dem').innerHTML = showMessage1;
                    document.getElementById('resultDay').innerHTML = clearMessage1;
                    document.getElementById('day1').style.color = "#D60A0A";
                    document.getElementById('birthDay').style.borderColor = "#D60A0A";

                  }
                 
                 if (birthMonth > 12 ) {

                   document.getElementById('dem1').innerHTML = showMessage2;
                   document.getElementById('resultMonth').innerHTML = clearMessage1;
                   document.getElementById('mon1').style.color = "#D60A0A";
                   document.getElementById('birthMonth').style.borderColor = "#D60A0A";
                   }
            
            
                if (birthYear > 2023) {
                
                     document.getElementById('dem2').innerHTML = showMessage3;
                     document.getElementById('resultYear').innerHTML = clearMessage1;
                     document.getElementById('year1').style.color = "#D60A0A";
                     document.getElementById('birthYear').style.borderColor = "#D60A0A";

                  }
                   
                if (birthDay <= 0 ) {

                    document.getElementById('dem').innerHTML = showMessage1;
                    document.getElementById('resultDay').innerHTML = clearMessage 
                    document.getElementById('day1').style.color = "#D60A0A";
                    document.getElementById('birthDay').style.borderColor = "#D60A0A";


                    }
                if (birthMonth <= 0 ) {

                    document.getElementById('dem1').innerHTML = showMessage2;
                    document.getElementById('resultMonth').innerHTML = clearMessage;
                    document.getElementById('mon1').style.color = "#D60A0A";
                    document.getElementById('birthMonth').style.borderColor = "#D60A0A";

                  }
                if (birthYear <= 0 ) {

                    document.getElementById('dem2').innerHTML = showMessage3;
                    document.getElementById('resultYear').innerHTML = clearMessage;
                    document.getElementById('year1').style.color = "#D60A0A";
                    document.getElementById('birthYear').style.borderColor = "#D60A0A";

                }
                
             document.getElementById('resultDay').value = "" ;
             document.getElementById('resultMonth').value = "" ; 
             document.getElementById('resultYear').value = "" ; 
                
                
                  
                 
 }
                        
// function showColor() {
//     document.getElementById('demo').style.display = "block";
//     document.getElementById('demo1').style.display = "block";
//     document.getElementById('demo2').style.display = "block";
//     document.getElementById('day1').style.color = "#D60A0A";
//     document.getElementById('mon1').style.color = "#D60A0A";
//     document.getElementById('year1').style.color = "#D60A0A";
//     document.getElementById('birthDay').style.borderColor = "#D60A0A";
//     document.getElementById('birthMonth').style.borderColor = "#D60A0A";
//     document.getElementById('birthYear').style.borderColor = "#D60A0A";
//  }

 //   function hideColor() {
              //     document.getElementById('demo').style.display = "none";
              //     document.getElementById('demo1').style.display = "none";
              //     document.getElementById('demo2').style.display = "none";
              //     document.getElementById('day1').style.color = "rgba(36,36,36,0.6)";
              //     document.getElementById('mon1').style.color = "rgba(36,36,36,0.6)";
              //     document.getElementById('year1').style.color = "rgba(36,36,36,0.6)";
              //     document.getElementById('birthDay').style.borderColor = "rgba(136,78,255,0.8)";
              //     document.getElementById('birthMonth').style.borderColor = "rgba(136,78,255,0.8)";
              //     document.getElementById('birthYear').style.borderColor = "rgba(136,78,255,0.8)";
              //  }
//  function hideColor() {
//     document.getElementById('demo').style.display = "none";
//     document.getElementById('demo1').style.display = "none";
//     document.getElementById('demo2').style.display = "none";
//     document.getElementById('day1').style.color = "rgba(36,36,36,0.6)";
//     document.getElementById('mon1').style.color = "rgba(36,36,36,0.6)";
//     document.getElementById('year1').style.color = "rgba(36,36,36,0.6)";
//     document.getElementById('birthDay').style.borderColor = "rgba(136,78,255,0.8)";
//     document.getElementById('birthMonth').style.borderColor = "rgba(136,78,255,0.8)";
//     document.getElementById('birthYear').style.borderColor = "rgba(136,78,255,0.8)";
//  }

                          

 //           function showMessage(message) {
 //            let messageElement = document.getElementById('demo');
 //            messageElement.textContent = message;
 //             }
 //           function showMessage(message) {
 //          let messageElement = document.getElementById('demo1');
 //          messageElement.textContent = message;
 //            }
 //          function showMessage(message) {
 //          let messageElement = document.getElementById('demo2');
 //          messageElement.textContent = message;
 //            }
 //         function clearMessage() {
 //          let messageElement = document.getElementById('demo');
 //           messageElement.textContent = "";
 //       }
 //        function clearMessage() {
 //    let messageElement = document.getElementById('demo1');
 //    messageElement.textContent = "";
 // }
 // function clearMessage() {
 //    let messageElement = document.getElementById('demo2');
 //    messageElement.textContent = "";
 // }
      
     
            // birthDay.addEventListener("input", birthDay);
            // birthMonth.addEventListener("input", birthMonth);
            // birthYear.addEventListener("input", birthYear);    
        


// function calculateAge() {
//       let birthYear = parseInt(document.getElementById("birthYear").value);

//       let birthMonth = parseInt(document.getElementById("birthMonth").value);

//       let birthDay = parseInt(document.getElementById("birthDay").value);

//       let showMessage4 = 'This field is required';
//                let clearMessage = '';

//       if (birthDay === "" ) {
//                     document.getElementById('dem').innerHTML = showMessage4;
//                     document.getElementById('day1').style.color = "#D60A0A";
//                     document.getElementById('day1').style.color = "#D60A0A";
//                     document.getElementById('birthDay').style.borderColor = "#D60A0A";

//                     return false;
//       }
//                     document.getElementById('dem').innerHTML = clearMessage;
//                     document.getElementById('day1').style.color = "rgba(36,36,36,0.6)"
//                     document.getElementById('birthDay').style.borderColor = "#D60A0A";

//                     return true;
// }
