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
		
		$.post("http://127.0.0.1/dumeiyao/九月项目/js/index.json",function(data){
			var dataobj = typeof data=='object'?data:eval("("+data+")");
			var dataArry = dataobj.data;
			console.log(dataArry);
			for(var i = 0;i<dataArry.length;i++){
				var h4 = dataArry[i].h4;
				var title = dataArry[i].title;
				var icon_text1 = dataArry[i].icon_text1;
				var time = dataArry[i].time;
				var m1 = dataArry[i].m1;
				var m2 = dataArry[i].m2;
				var m3 = dataArry[i].m3;
				$.post("http://127.0.0.1/dumeiyao/九月项目/php/insert.php",{
					h4:h4,
					title:title,
					icon_text1:icon_text1,
					time:time,
					m1:m1,
					m2:m2,
					m3:m3
				},function(data){
					console.log(data);
				})
			}
		})
	},
	fenye:function(){
		var self = this;
		$.post("http://127.0.0.1/dumeiyao/九月项目/php/find.php",{P:self.p},function(data){
			self.yonghu(data);
		})
	},
	yonghu:function(data){
		var dataobj = typeof data=='object'?data:eval("("+data+")");
		var dataArr = dataobj.data;
		var templateString = $("#template").html();
		$(".list").html(" ");
		for(var i = 0;i<dataArr.length;i++){
			var DomString = templateFn(templateString,dataArr[i]);
			$(".list").append(DomString);
			$(".content").css("margin-bottom","6%");
			$(".username").html("杜美瑶");
		}
		function templateFn(templateString,data){
			return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
				return data[$1];
			});
		}
	},
	bindEvent:function () {
        var self = this;
        $(".prev").on("click",function () {
            self.p--;
            if (self.p<1) {
                self.p = 1;
            }
            $.post("http://127.0.0.1/dumeiyao/九月项目/php/find.php",{
                "P":self.p
            },function(data){
                self.yonghu(data);
            })
        })
        $(".next").on("click",function () {
            self.p++;
            $.post("http://127.0.0.1/dumeiyao/九月项目/php/find.php",{
                "P":self.p
            },function(data){
                self.yonghu(data);
            })
        })
    }
}