let result=document.getElementById("inputtext");

let calculate=(x)=>{
   result.value=result.value+x;
}

let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert("Enter the valid input");
    }

}

function clr()
{
    result.value="";
}

function del()
{
    result.value=result.value.slice(0,-1);
    // remove last one number

}