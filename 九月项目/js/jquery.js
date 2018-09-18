new breath($("#box"),$("#img_box li"),$("#dian_box li"),$("#left_btn"),$("#right_btn"));
function Data(){
	this.p = 1;
	this.init();
	this.fenye();
	this.bindEvent();
}
Data.prototype = {
	init:function(){
		var self = this;
	},
	fenye:function(){
		var self = this;
		$.post("http://127.0.0.1/dumeiyao/九月项目/php/find1.php",{P:self.p},function(data){
			self.yonghu(data);
		})
	},
	yonghu:function(data){
		var dataobj = typeof data=='object'?data:eval("("+data+")");
		var dataArr = dataobj.data;
		
		var templateString = $("#template1").html();
		$(".list").html(" ");
		for(var i = 0;i<dataArr.length;i++){
			var DomString = templateFn(templateString,dataArr[i]);
			$(".list").append(DomString);
			$(".content").css("margin-bottom","6%");
		}
		function templateFn(templateString,data){
			return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
				return data[$1];
			});
		}
		$(".content").on("click",function(){
			window.open('detail.html#' + $(this).attr("stu_mate"),'_self');
		})
	},
	bindEvent:function () {
        var self = this;
        $(".prev").on("click",function () {
            self.p--;
            if (self.p<1) {
                self.p = 1;
            }
            $.post("http://127.0.0.1/dumeiyao/九月项目/php/find1.php",{
                "P":self.p
            },function(data){
                self.yonghu(data);
            })
        })
        $(".next").on("click",function () {
            self.p++;
            $.post("http://127.0.0.1/dumeiyao/九月项目/php/find1.php",{
                "P":self.p
            },function(data){
                self.yonghu(data);
            })
        })
        $("#go").on("click",function(){
        	$(".page").html("<a href = 'javascript:;'>更多数据</a>");
        	var keyword = $("#keyword").val();
        	console.log(keyword);
        	$.post("http://127.0.0.1/dumeiyao/九月项目/php/keyword.php",{
        		keyword:keyword,
        		"P":self.p
        	},function(data){
        		self.yonghu(data);
        		
        	})
        	$(".page").on("click",function(){
        		self.p++;
        		$.post("http://127.0.0.1/dumeiyao/九月项目/php/keyword.php",{
                	"P":self.p,
                	keyword:keyword
	            },function(data){
	                self.yonghu(data);
	            })
        	})
        })
        
    }
}