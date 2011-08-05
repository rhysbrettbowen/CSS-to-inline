etInline = (function(){
	  if(window.getComputedStyle){
		      return function(elem){
			            var st = window.getComputedStyle(elem,null);
				          for(var i=0; st[i]; i++){
						          styleName = st[i].toString().replace(/-([a-z])/g,function(str,p1){return p1.toUpperCase();});
							          if(st[styleName])
	          elem.style[styleName] = st[styleName];
      }
					      }
		        }else if(document.body.currentStyle){
				    return function(elem){
					          for(var styleName in elem.currentStyle)
	        elem.style[styleName] = elem.currentStyle[styleName];
    }
				      }
})();

(function setAllInline(root){
	  var l = root.childNodes.length;
	    for(var i = 0; i < l; i++){
		        if(root.childNodes[i].nodeType == 1){
				      setInline(root.childNodes[i]);
				            setAllInline(root.childNodes[i]);
					        }
			  }
})(document.body);
