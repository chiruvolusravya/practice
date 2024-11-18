const button=document.getElementById("myButton");
const messageele=document.getElementById("message");
button.addEventListener("click",function()
{
messageele.textContent="You clicked a button";
});