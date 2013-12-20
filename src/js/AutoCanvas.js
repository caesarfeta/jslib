/**
 * Build a full screen canvas
*/
AutoCanvas = function( _id, _padding, _color ) {
	//------------------------------------------------------------
	// Set defaults
	//------------------------------------------------------------
	this.padding = ( _padding != undefined ) ? _padding : 0;
	this.color = ( _color != undefined ) ? _color : "#FFF";
	
	//------------------------------------------------------------
	//	Build the canvas
	//------------------------------------------------------------
	this.canvas = document.createElement("canvas");
	document.body.appendChild( this.canvas );
	this.canvas.id = _id;
	this.resize();
	
	//------------------------------------------------------------
	//	Add the window event listener
	//------------------------------------------------------------
	var self = this;
	window.addEventListener('resize', function( _event ) {
		self.resize();
	});
}
AutoCanvas.prototype.resize = function() {
	this.canvas.width = document.body.clientWidth - this.padding;
	this.canvas.height = document.body.clientHeight - this.padding;
	this.canvas.style.position = "fixed";
	this.canvas.style.top = this.padding/2;
	this.canvas.style.left = this.padding/2;
	document.body.style.backgroundColor = this.color;
}
AutoCanvas.prototype.color = function( _color ) {
	this.color = _color
	document.body.style.backgroundColor = this.color;
}