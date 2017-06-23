		var msg={
			 emptyName:"ユーザーネームを入力してください"
			,minName:"ユーザーネームは〇文字以上入力してください"
			,emptyMail:"メールアドレスを入力してください"
			,wrongMail:"メールアドレスは半角英数字で入力してください"
			,success:"送信完了"
			,error:"正しく入力されていない項目があります。もう一度ご入力ください。"
		}

		$(document).ready(function() {

			$('#fullpage').fullpage({
				verticalCentered: false
				,scrollBar:true
			});

			$("#saveBtn").on("click",function(){
				$("#sendForm").submit();
			});

			//vaildate
			$("#sendForm").validate({
				debug : true,
				rules : {
					 name : {required : true}
					,mail : {required : true, email : true}
				},
				messages: {
					name: {required: msg.emptyName}
					,mail : {required: msg.emptyMail,email : msg.wrongMail}

				},
				// message : {
				// 	 name : {required : msg.emptyName}
				// 	,mail : {required : msg.emptyMail, email : msg.wrongMail}
				// },

				// errorPlacement:function(error,element){
				// 	error.appendTo( element.closest("fieldset").next("div#errorMsg"));
				// },

				submitHandler: function() {
					sendData();
				},
				errorClass:"validate_error"
				,
				validClass:"validate_valid"
			});

			//text size
			$("h1#title").fitText(1,{ minFontSize: '50px', maxFontSize: '80px' });
			$("h3#s2").fitText(2,{ minFontSize: '20px', maxFontSize: '40px' });
			$("h3#s3").fitText(2,{ minFontSize: '20px', maxFontSize: '40px' });
			$("h3#s4").fitText(2,{ minFontSize: '20px', maxFontSize: '40px' });
			$("h1#s5").fitText(1,{ minFontSize: '40px', maxFontSize: '60px' });
			$("span#s6").fitText(2,{ minFontSize: '30px', maxFontSize: '60px' });
			$("h3#s6").fitText(1.8,{ minFontSize: '18px', maxFontSize: '40px' });
			$("h3#s8").fitText(1,{ minFontSize: '20px', maxFontSize: '35px' });
			$("h3#s9").fitText(2,{ minFontSize: '20px', maxFontSize: '20px' });
		});	//document.ready End

		function sendData(){
			$.ajax({
				 //url:"https://script.google.com/macros/s/AKfycbwow4e86Vh8Syq_1fzpct7STCHHpnFkU2etQUVhBE9wN9oqtpE/exec"//googledrive
				 url:"https://listensoft.slack.com/services/hooks/slackbot?token=FnYtz5bBVRS7i3D7ahE51Yq6&channel=%23fb_teaser_writer"
				,data:{name:$("#name").val()
					, mail:$("#mail").val()
				}
				,type:"POST"
				,success:function(e){
					$("#name").val("");
					$("#mail").val("");
					$("div#modalMsg").text(msg.success);
					$("div#modalMsg").css("color","#000000");
					$("#bs-example-modal-lg").modal("toggle");
				}
				,error:function(){
					$("div#modalMsg").text(msg.error);
					$("#bs-example-modal-lg").modal("toggle");
				}
			});

		}
