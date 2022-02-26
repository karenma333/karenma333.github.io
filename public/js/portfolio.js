$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
  	if ( scrollTop > $("#first").offset().top ) {
  	 $(".sticky").show();
  	 $(".sticky").addClass("stuck");

 	}
 	else{
 	$(".sticky").hide();
	
 	}
})

window.onload = function(){main()};

$(document).ready(function(){
	$(".sticky").hide();
	$("#scrollMenu").hide();
})
function main(){
	headerText();
	//prepHeaders();
	nav();
}

function prepHeaders(){
	// Get the header
	var headers = document.getElementsByClassName('secTitle');  
	array = [];
	for (let item of headers) {
	    var sticky = new Waypoint({
		  element: item,
		  group: "wpgroup",
		  handler: function(dir){
		  	//console.log(this.group.waypoints.length)
		  	if (dir === "up"){
		  		console.log("going up");
		  	}
		  	else{
			  	$(this.element).addClass("stuck")
			  	var previousWaypoint = this.previous()
			  	var nextWaypoint = this.next()
			  	if(previousWaypoint){
			  		$(previousWaypoint.element).removeClass("stuck")
			  	}
			  	if(nextWaypoint){
			  		$(nextWaypoint.element).removeClass("stuck")
		
			  	}
			  }
			}


		})
		array.push(sticky);
	}

}
function headerText(){
	var headers = document.getElementsByClassName('secTitle');  
	array = [];
	for (let item of headers) {
	    var sticky = new Waypoint({
	    	element: item,
	    	handler: function(direction) {
    		var title = this.element.getAttribute("data-title");
    		$("#stickyTitle").text(title);
    		if(this === this.group.first()){
    			$(".sticky").show();
    		}
	    }
		})
		array.push(sticky);
	}
}
function nav(){
	$(".menu").click(function(){
		$("#scrollMenu").toggle();
		console.log("click")
	})
}

