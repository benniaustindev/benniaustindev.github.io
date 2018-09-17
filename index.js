document.addEventListener('DOMContentLoaded',function(event){

  if(window.scrollY!==0){
    let header=document.querySelector('header');
    header.style.top=window.scrollY+'px';
    window.setTimeout(function(){
      header.classList.add('adjusted');
      window.setTimeout(function(){
        header.style.top='0px';
      },1);
    },1);
    header.addEventListener('transitionend',(event)=>{
      header.classList.remove('adjusted');
      header.style.top=null;
    })
  }


  let techButtons=Array.from(document.querySelectorAll('#technologies button'));
  techButtons.forEach(button=>{
    button.addEventListener('click',function(event){
      techButtons.forEach(button=>{
        button.classList[(button==this)?'add':'remove']('active');
      });
    });
  });
});
