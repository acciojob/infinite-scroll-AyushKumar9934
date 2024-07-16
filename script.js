//your code here!
let list=document.getElementById("infi-list");
let i;
for( i=1;i<=10;i++){
    list.innerHTML+=`<p>Item ${i}</p>`
}
i--;
function handleScroll(){
    i++;

    list.innerHTML+=`<p>Item ${i}</p>`
    i++;

    list.innerHTML+=`<p>Item ${i}</p>`
}
list.addEventListener("scroll",()=>{
    if(list.clientHeight>=list.scrollHeight-list.scrollTop){
        handleScroll();
    }
})
