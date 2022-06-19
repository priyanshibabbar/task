// function importData() {
//   let input = document.createElement("input");
//   input.type = "file";
//   input.onchange = (_) => {
//     // you can use this method to get file and perform respective operations
//     let files = Array.from(input.files);
//     console.log(files);
//   };
//   input.click();
// }

inputTypeFile = document.getElementById("inputTypeFile");
showFilesList = document.getElementById("showFilesList");

inputTypeFile.addEventListener("change", function(){
  if(this.files.length > 0){
    for(var i=0 ; i < this.files.length ; i++){
      showFilesList.innerHTML += "<table><td>" + this.files.item(i).name + "<span class = 'closeIT'>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp x</span></table></td>"
    }
  }

  closeIT = document.getElementsByClassName("closeIT");

  arrayFromCloseBtn = [...closeIT];
  arrayFromCloseBtn.forEach((onebyone) => {
    
    onebyone.addEventListener('click', function(e){

      e.target.parentElement.remove()
      if(showFilesList.children == 'null'){
        alert("All files cleared.")
      }

    });

  });

});