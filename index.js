
//option-1 ata use korbo na
// <button onclick="console.log('PleaseClickMe');">click me</button> <br> <br>


//option-2 ata amaje maje babhor korbo
function redColor() {
    document.body.style.backgroundColor='red';
}

// option-3 ata amaje khub kom babhor korbo
const colorBlue=document.getElementById('blueColor');
colorBlue.onclick=function blueColor(){
    document.body.style.backgroundColor='blue'
}

const colorPurpale=document.getElementById('purpaleColor');
colorPurpale.onclick=function purpaleColor(){
    document.body.style.backgroundColor='purple'
}

//option -4 maje maje use korbo

const colorPink=document.getElementById('pinkColor')
colorPink.addEventListener('click',pinkColor);
function pinkColor() {
    document.body.style.backgroundColor='pink';
}

const colorGreen=document.getElementById('greenColor')
colorGreen.addEventListener('click',function greenColor() {document.body.style.backgroundColor='green';
});

//option -5 ata use korbo amra sobsomy
document.getElementById('goldenrod').addEventListener('click',function colorGoldenrod() {
    document.body.style.background='goldenrod';
})

//---------------------------------------------------------

function onclickHand(){
    const handStatus =document.getElementById('handStatus');
    handStatus.innerText= 'please support me'
}


document.getElementById('evenTimes').addEventListener('click',function(){
    const handStatus=document.getElementById('handStatus')
    handStatus.innerText='please support me too'
})


document.getElementById('btnUpdate').addEventListener('click',function(){
    const inputFields=document.getElementById('inputField') 
    const inputText=inputFields.value;

    const p=document.getElementById('inputTextDisplay');
    p.innerText=inputText;
    inputText.value='';
})



// step-1 add event listener to the post button
document.getElementById("btnPost").addEventListener('click', function(){
    // step-2 get the comment inside the text area
    const commentbox = document.getElementById('newComment');
    const newComment=commentbox.value;

   // step-3 set the comment inside the comment container 
   //* get the comment container
   //* create a new element(p tag)
   // * set the text of the comment ad innertext of the p tag
   // * add the p tag  using appendchild
   const commentContiner= document.getElementById('commentContiner');
   const p =document.createElement('p');
   p.innerText=newComment;
   console.log(p);
   commentContiner.appendChild(p);
   // step 4 clear the text area
   commentbox.value='';
})