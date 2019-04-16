var newLink=document.createElement("a");

var allParagraphs=document.getElementsByTagName("p");

var firstParagraph=allParagraphs[0];

function revealCopy(e) {
  // console.log( e );
  var allParagraphs=document.getElementsByTagName("p");
  for( var i=0; i < allParagraphs.length; i++ ){
    // console.log(allParagraphs[i]);
      if(i===0) {
        continue;
      }
  allParagraphs[i].style.display="block";
}
  e.preventDefault();
}

newLink.setAttribute("href","#");

newLin.setAttribute("class","more-link");

newLink.innerHTML="Read More";

newLink.addEventListener("click",revealCopy);

firstParagraph.appendChild( newLink );

for( var i=0; i < allParagraphs.length; i++ ){
  // console.log(allParagraphs[i]);
    if(i===0) {
      continue;
    }
  allParagraphs[i].style.display="none";
}




// newLink.setAttribute("class","more-link");

newLink.style.display="inline-block";

newLink.style.marginLeft="0.5em";
