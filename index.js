document.addEventListener('DOMContentLoaded',function(event){
  let techButtons=Array.from(document.querySelectorAll('#technologies button'));
  techButtons.forEach(button=>{
    button.addEventListener('click',function(event){
      if(this.classList.contains('active')){
        this.classList.remove('active');
      }
      else {
        techButtons.forEach(button=>button.classList[(button==this)?'add':'remove']('active'));
      }
    })
  })
})
