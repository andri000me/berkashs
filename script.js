$(function () {

	//target mouse move and apply to background color
	/*
	var dynamicColor = function(){
		var height = $("body").height();
		var width = $("body").width();
		var totalBody = height + width;
		$("body").mousemove(function(event){
			var x = event.pageX;
			var y = event.pageY;
			var totalXY = x + y;
			var total = Math.round(totalXY / totalBody * 255);
			var color = "rgb(" + total + ", 128, 114)";
			$(this).css("background-color", color);
		});
	}
	
	dynamicColor();
	*/


	// inserting document to the website
	$.getJSON( "docs.json", function( data ) {

	  tmp1 = "<div class=\"panel panel-default\"><div class=\"panel-heading\" role=\"tab\" id=\"heading";
	  tmp2 = "\"><h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" href=\"#collapse";
	  tmp3 = "\" aria-expanded=\"false\" aria-controls=\"collapse";
	  tmp4 = "\"><span class=\"dropup\"><span class=\"caret\"></span></span><span class=\"caret\"></span>";
	  tmp5 = "</a></h4></div><div id=\"collapse"; 
	  tmp6 = "\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading";
	  tmp7 = "\"><div class=\"panel-body\"><div class=\"list-group\"><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">";
	  tmp8 = "</h4><p class=\"list-group-item-text\">";
	  tmp9 = "</p></div>";
	  tmp10 = "</div></div></div></div>";

	  var probitems = [];
	  var contitems = [];
	  $.each( data.problems, function( key, problem ) {
	  	$.each(problem.contents, function(key, content){
	  		contitems.push("<a  target=\"_blank\" href=\"" + content.clink + "\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-download-alt\" aria-hidden=\"true\"></span> " + content.cname + "</a>");
	  	});
	  	contentsJoined = contitems.join("");
	  	probitems.push( tmp1 + key + tmp2 + key + tmp3 + key + tmp4 + problem.name + tmp5 + key + tmp6 + key +
	  					tmp7 + problem.heading + 
	  					tmp8 + problem.description + 
	  					tmp9 + contentsJoined + tmp10);
	    contitems = []; //clearing array for next loop
	  });
	  problemsJoined = probitems.join("");
	 
	  $( problemsJoined ).appendTo( ".panel-group" );
	}).done(function(){

	
		// dropdown to dropup toggle
		$(".dropup").hide();
		$(".panel-title>a")
			.click( function(){

				$(this).children(".caret").toggle();
				$(this).children(".dropup").toggle();
			});
	});

	



});	

