var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );

window.addEventListener('load', function () {
	if (window.pageYOffset < 1) {
		window.scrollTo(0, 1);
	}
	
	if(iOS){
	
		var a=document.getElementsByTagName("a");
		for(var i=0;i<a.length;i++)
		{
		
		    a[i].onclick=function()
		    {
		    
		    	var evalCode = this.getAttribute("data-onclick");
		    	
		    	if(evalCode){
		    
			    	var result = eval(evalCode);
			    	
			    	if(!result){
			    	
			    		return false;
			    	
			    	}			    	
			    	
			}
		    
		        window.location=this.getAttribute("href");
		        return false
		    }
		}
	
	}
	
}, false);