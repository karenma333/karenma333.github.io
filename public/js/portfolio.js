

window.onload = function(){prepHeaders()};

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

		})
		array.push(sticky);
	}

}