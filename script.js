$(document).ready(function(){
	$("#payment-tab-1").css({'background-color': '#ebebeb','border':'1px solid rgba(208, 208, 208, 0)'});
	
	$('input[name="cardType"]').click(function() {

	   if($(this).attr('id') == 'creditCart') {
            $('.creditCart-form').show(400);    
			
			$("#payment-tab-1").css({'background-color': '#ebebeb','border':'1px solid rgba(208, 208, 208, 0)'});  
       }
       else {
            $('.creditCart-form').hide(400);   
			$("#payment-tab-1").css({'background-color': 'white','border':'1px solid #d6d6d6'});  
       }
	   
	   if($(this).attr('id') == 'paypal') {
            $('.showpaypal').show(400);
			$("#payment-tab-2").css({'background-color': '#ebebeb','border':'1px solid rgba(208, 208, 208, 0)'});
       }
       else {
            $('.showpaypal').hide(400);  
			$("#payment-tab-2").css({'background-color': 'white','border':'1px solid #d6d6d6'});
			
       }
   });
});