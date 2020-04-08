    window.onload = function(){
    
        var all = document.getElementsByTagName("td");
        for (var i = 0; i < all.length; i++) {
            all[i].onclick = inputClickHandler;       
        }
    };
    
    function inputClickHandler(e){
        e = e || window.event;
        var tdElm = e.target || e.srcElement;
        if(tdElm.style.backgroundColor == ""){
            tdElm.style.backgroundColor = "#DBF3FA";
        } else {
            tdElm.style.backgroundColor = "";
        }
    }	

function getInputValue(){
	var hashTable = {BP:"&#9823;", BN:"&#9822;", BB:"&#9821;", BR:"&#9820;", BQ:"&#9819;", BK:"&#9818;", WP:"&#9817;", WN:"&#9816;", WB:"&#9815;", WR:"&#9814;", WQ:"&#9813;", WK:"&#9812;"};
	
	var str = document.getElementById("myInput").value;
	
	for (var i = 0; i < str.length; i++) {
  		var name = str.substring(i, i+2);
		var location = str.substring(i+2, i+4);
		document.getElementById(location).innerHTML = hashTable[name];
  		i+=3;
	}
}