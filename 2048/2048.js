var game={
	data:[
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
	],
	//生成随机数
	randomNUM:function(){
		while(true)
		{	
			var row=parseInt(Math.random()*4);//生成0到3之间的标号
			var col=parseInt(Math.random()*4);
			var n=Math.random()>0.4?2:4;//得到2或者4；
			if (this.data[row][col]==0) {
			this.data[row][col]=n;
			break;
			}
		}
	},
	showInDiv:function(){
			for (var row = 0; row < this.data.length; row++) {
				for (var col=0;col<this.data[row].length;col++) {
					var div=document.querySelector("#fc"+row+col);
					var n=this.data[row][col];
					div.innerHTML=n==0?"":n;
					div.className=n==0?"fcell":"fcell n"+n;
				}
			}
		},

	startGame:function ()
	{
		this.randomNUM();
		this.randomNUM();
		this.showInDiv();
	},
	startLeft:function()
	{
		for (var row=0;row<4;row++)
		 {	
		 	this.Leftmove(row);
	  }
	  this.randomNUM();
		this.showInDiv();
		
	},
	Leftmove:function (row){		
		//先自己和左边判断，如果自己是0，左边的数不为零则互换，自己不为零和左边的元素相等
		//相等则相加，不等不做动作	
		
		for (var col=0;col<this.data[row].length-1;col++) {
			var nextcol=this.getLeftNext(row,col);
			if (nextcol!=-1) {
				if (this.data[row][col]==0) {
					this.data[row][col]=this.data[row][nextcol];
					this.data[row][nextcol]=0;
					col--;
				}
				else if (this.data[row][col]==this.data[row][nextcol]) {
					this.data[row][col]+=this.data[row][nextcol];
					this.data[row][nextcol]=0;
				}

			}
			else {break;}	
			}
		},
	getLeftNext:function (row,start)
	{
		for (var col=start+1;col<this.data[row].length;col++) {
			if (this.data[row][col]!=0) {
				return col;
			}
		}
		return -1;
	},
	startRight:function()
	{
		for (var row=0;row<4;row++)
		 {	
		 	this.Rightmove(row);
	  }
	  this.randomNUM();
		this.showInDiv();
		
	},
	Rightmove:function (row){		
		//先自己和左边判断，如果自己是0，左边的数不为零则互换，自己不为零和左边的元素相等
		//相等则相加，不等不做动作	
		
		for (var col=this.data[row].length;col>0;col--) {
			var nextcol=this.getRightNext(row,col);
			if (nextcol!=-1) {
				if (this.data[row][col]==0) {
					this.data[row][col]=this.data[row][nextcol];
					this.data[row][nextcol]=0;
					col++;
				}
				else if (this.data[row][col]==this.data[row][nextcol]) {
					this.data[row][col]+=this.data[row][nextcol];
					this.data[row][nextcol]=0;
				}

			}
			else {break;}	
			}
		},
	getRightNext:function (row,start)
	{
		for (var col=start-1;col>=0;col--) {
			if (this.data[row][col]!=0) {
				return col;
			}
		}
		return -1;
	},
	startup:function()
	{
		for (var col=0;col<4;col++)
		 {	
		 	this.upmove(col);
	  }
	  this.randomNUM();
		this.showInDiv();
		
	},
	upmove:function (col){		
		//先自己和左边判断，如果自己是0，左边的数不为零则互换，自己不为零和左边的元素相等
		//相等则相加，不等不做动作			
		for (var row=0;row<3;row++) {
			var nextrow=this.getupNext(col,row);
			if (nextrow!=-1) {
				if (this.data[row][col]==0) {
					this.data[row][col]=this.data[nextrow][col];
					this.data[nextrow][col]=0;
					row++;
				}
				else if (this.data[row][col]==this.data[nextrow][col]) {
					this.data[row][col]+=this.data[nextrow][col];
					this.data[nextrow][col]=0;
				}

			}
			else {break;}	
			}
		},
	getupNext:function (col,start)
	{
		for (var row=start+1;row<4;row++) {
			if (this.data[row][col]!=0) {
				return row;
			}
		}
		return -1;
	},
	startdown:function()
	{
		for (var col=0;col<4;col++)
		 {	
		 	this.downmove(col);
	  }
	  this.randomNUM();
		this.showInDiv();
		
	},
	downmove:function (col){		
		//先自己和左边判断，如果自己是0，左边的数不为零则互换，自己不为零和左边的元素相等
		//相等则相加，不等不做动作			
		for (var row=3;row>0;row--) {
			var nextrow=this.getdownNext(col,row);
			if (nextrow!=-1) {
				if (this.data[row][col]==0) {
					this.data[row][col]=this.data[nextrow][col];
					this.data[nextrow][col]=0;
					row--;
				}
				else if (this.data[row][col]==this.data[nextrow][col]) {
					this.data[row][col]+=this.data[nextrow][col];
					this.data[nextrow][col]=0;
				}

			}
			else {break;}	
			}
		},
	getdownNext:function (col,start)
	{
		for (var row=start-1;row>=0;row--) {
			if (this.data[row][col]!=0) {
				return row;
			}
		}
		return -1;
	}
}