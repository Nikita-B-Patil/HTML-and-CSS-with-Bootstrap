/**
 * 
 */

	var x=1;
	var i1=new Image();
	i1.src="../img/html_css.jpg";
	var i2=new Image();
	i2.src="../img/js_ajax.jpg";
	var i3=new Image();
	i3.src="../img/java.jpg";
	var i4=new Image();
	i4.src="../img/python.png";

	function slideshow1()
	{
		document.images.firstslide.src=eval("i"+x+".src");
		if(x<3)
		{
			x=x+1;
		}
		else
		{
			x=1;
		}
		setTimeout("slideshow1()",500);
	}
	slideshow();