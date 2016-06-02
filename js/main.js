$(document).ready(function(){
	console.log("loaded");
	$("#submit-btn").click(function(){
	event.preventDefault();
	var city = $("#city-type").val()
	console.log(city);
	if (city === "New York" || city === "NYC" || city === "New York City" || city === "new york" || city === "nyc" || city === "new york city"){
		console.log("running")
		//$("body").attr("class", "nyc");
		$("body").css("background-image", "url(images/nyc.jpg")
		$(this).prev("input").val("")
	}
	if (city === "San Francisco" || city === "SF" || city === "Bay Area" || city === "san francisco" || city === "sf" || city === "bay area"){
		console.log("running")
		$("body").css("background-image", "url(images/sf.jpg)")
		$(this).prev("input").val("")
	}
	if (city === "Los Angeles" || city === "LA" || city === "LAX" || city === "los angeles" || city === "la" || city === "lax"){
		console.log("running")
		$("body").css("background-image", "url(images/la.jpg)")
		$(this).prev("input").val("")
	}
	if (city === "Austin" || city === "ATX" || city === "austin" || city === "atx"){
		console.log("running")
		$("body").css("background-image", "url(images/austin.jpg)")
		$(this).prev("input").val("")
	}
	if (city === "Sydney" || city === "SYD" || city === "sydney" || city === "syd"){
		console.log("running")
		$("body").css("background-image", "url(images/sydney.jpg)")
		$(this).prev("input").val("")
	}
	})
})