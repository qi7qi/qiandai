$(".del1").click(function(){
//	alert(111);
	$("#ul1").show();
})
$(".del2").click(function(){
//	alert(222);
	$("#ul2").show();
})

//	var aInp1=document.getElementsByTagName('input')[0];
//	var aInp2=document.getElementsByTagName('input')[1];
	
	$("#ul1>li").click(function(){
		var Li = $("#ul1>li");
		$(".pp").html(parseInt($(this).html()));
		$("#ul1").hide();
	});
	$("#ul2>li").click(function(){
		var Lii = $("#ul2>li");
		$(".pp2").html(parseInt($(this).html()));
		$("#ul2").hide();
	});
	$("ul li").hover = function(){
		$(this).style.background = '#f5f5f5'
	}

