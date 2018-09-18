
	var CheckObject = function(){};
	CheckObject.prototype = {
		checkName:function(username,error){
			//验证姓名( 匹配一个4到9位长的字符串,其中只能包含大小写字母和数字)
			var reg=/^[a-zA-Z][a-zA-Z0-9]{4,9}$/;
			//检测输入内容是否匹配正则表达式
	        if(!reg.test(username.val())){
	            error[0].innerHTML='姓名输入错误';
	            return;
	        }else{
	        	error[0].innerHTML='';
	        }
			return this;
		},
		checkEmail:function(email){
			//验证邮箱
			var reg=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
			if(!reg.test(email.val())){
	            email.css("border","1px solid red");
	            return;
	        }else{
	        	email.css("border","solid 1px rgba(210,215,217,.75)");
	        }
			return this;
		},
		checkPostcodes:function(postcodes,error){
			//验证邮编
			var reg=/[1-9]\d{5}(?!\d)/;
			if(!reg.test(postcodes.val())){
	            error[0].innerHTML='邮编输入错误';
	            return;
	        }else{
	        	error[0].innerHTML='';
	        }
			return this;
		},
		checkIdcard:function(idcard,error){
			//验证身份证号
			var reg=/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
			if(!reg.test(idcard.val())){
	            error[0].innerHTML='身份证号输入错误';
	            return;
	        }else{
	        	error[0].innerHTML='';
	        }
			return this;
		},
		checkPhone:function(phone,error){
			//验证身份证号
			var reg = /\d{3}-\d{8}|\d{4}-\{7,8}/;
			if(!reg.test(phone.val())){
	            error[0].innerHTML='身份证号输入错误';
	            return;
	        }else{
	        	error[0].innerHTML='';
	        }
			return this;
		},
		checkQQ:function(qq){
//			验证qq号
			var reg = /[1-9][0-9]{4,}/;
			if(!reg.test(qq.val())){
	            qq.css("border","1px solid red");
	            return;
	        }else{
	        	qq.css("border","solid 1px rgba(210,215,217,.75)");
	        }
			return this;
		}
	}
