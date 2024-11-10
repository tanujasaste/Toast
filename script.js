let atnot = document.querySelector(".atnot");
let successmsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted'
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the Error!';
let invalidmsg ='<i class="fa-solid fa-circle-exclamation"></i> invalid input check again';

function notifyt(msg){
    let toast = document.createElement('toast');
    toast.innerHTML = msg;
    atnot.appendChild(toast);
    toast.classList.add("toast");
    if( msg.includes('Error') ){
        toast.classList.add('error');
    }
    if(msg.includes('invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}
