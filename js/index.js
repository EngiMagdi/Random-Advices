let icon =document.querySelector('.icon-dice');
icon.addEventListener('click',function(){
    getAdvice()  
})

async function getAdvice(){
    let advice=await fetch ("https://api.adviceslip.com/advice");
    let randomAdvice= await advice.json();
    // console.log(randomAdvice.slip.id)
    // console.log(randomAdvice.slip.advice)
     let content=`
     <h1 class="py-7 text-center ">Advice # ${randomAdvice.slip.id}</h1>
    <p class="text-center text-xl md:text-3xl p-2 "> “  ${randomAdvice.slip.advice} ”</p>  `

    document.querySelector(".Advice-text").innerHTML=content
}



