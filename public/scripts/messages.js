$(document).ready(


  ()=>{
    console.log("ready");
    $("#sendMessageBtn").on("click", onClick);


  }
);

function onClick() {

  console.log("clicked");
  // let messageToSend = $("#messageToSend").val();
  // // console.log(messageToSend);
  // // make a post request to /sms
  // fetch('http://localhost:8080/sms', {method: 'POST', body:messageToSend})
  //   // .then(results=>console.log(results))
  // // results.json())
  //   .then(console.log);
}



