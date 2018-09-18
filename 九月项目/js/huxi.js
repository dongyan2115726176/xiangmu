(function(){
			var self=null;
			window.breath = breath;
			function breath(Broadcast,imgs,numLis,leftBtn,rightBtn){
				this.timer = null;
				this.Broadcast = Broadcast;
				this.imgs = imgs;
				// console.log(this.imgs);
				this.numLis = numLis;
				this.leftBtn = leftBtn;
				this.rightBtn=rightBtn;
				this.init();
				this.autoNum = 0;
				this.amounts = this.imgs.length;
				this.Indicator();
				self = this;
			}
			breath.prototype.init = function(){
				
				this.timer = setInterval(this.actionFn,2000);
				this.rightBtn.on("click",this.actionFn)
	            this.leftBtn.on("click",function () {
	                self.autoNum-=2;
	                self.actionFn();
	            })
	            this.clearFn();
			}
			breath.prototype.actionFn = function(){
                self.autoNum++;
                self.autoNum%=self.amounts;
                self.imgs.eq(self.autoNum).fadeIn(999).siblings().fadeOut(999);
                self.changeColorFn();
			}
			breath.prototype.changeColorFn = function(){
				self.numLis.eq(this.autoNum).addClass("select").siblings().removeClass("select");
			}
			breath.prototype.Indicator = function(){
				var self = this;
				this.numLis.on("click",function () {
	               self.autoNum = $(this).index()-1;//抵消actionFn里的autoNum++
	                self.actionFn();
	                self.changeColorFn(); 
            	})
			}
            breath.prototype.clearFn = function(){
            	var self = this;
            	this.Broadcast.on("mouseenter",function () {
                	clearInterval(self.timer);
	            })
	            this.Broadcast.on("mouseleave",function () {
	                self.timer = setInterval(self.actionFn,2000);
	            })
            }
            
            
})()