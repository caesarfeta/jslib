/**
 * A smarter way to control colors
 */
function Culuh( _color ) {
	if ( _color != undefined ) {
		this.original = _color;
		this.reset();
	}
}

Culuh.prototype.reset = function( ) {
	var self = this;
	var color = this.original;
	//------------------------------------------------------------
	//  Check if it's RGB
	//------------------------------------------------------------
	color = color.toUpperCase();
	if ( color.indexOf( 'RGB' ) > -1 ) {
		var vals = color.match( /\d+\.?\d*/g );
		this.r = parseInt( vals[0] );
		this.g = parseInt( vals[1] );
		this.b = parseInt( vals[2] );
	}
	//------------------------------------------------------------
	//  No... then it's a hex
	//------------------------------------------------------------
	else {
		var vals = color.match( /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i );
		this.r = this.hexToInt( vals[1] );
		this.g = this.hexToInt( vals[2] );
		this.b = this.hexToInt( vals[3] );
	}
}

Culuh.prototype.hex = function() {
	return this.rHex() + this.gHex() + this.bHex();
};

Culuh.prototype.rgb = function() {
	return 'rgb('+this.r+','+this.g+','+this.b+')';
};

Culuh.prototype.rHex = function() {
	return this.intToHex( this.r );
};

Culuh.prototype.gHex = function() {
	return this.intToHex( this.g );
};

Culuh.prototype.bHex = function() {
	return this.intToHex( this.b );
};

Culuh.prototype.rInt = function() {
	return this.r;
};

Culuh.prototype.gInt = function() {
	return this.g;
};

Culuh.prototype.bInt = function() {
	return this.b;
};

Culuh.prototype.hexToInt = function( _hex ) {
	return parseInt( _hex, 16 ) ;
}

Culuh.prototype.intToHex = function( _int ) {
	var hex = _int.toString(16);
	if ( hex.length < 2 ) {
		hex = '0'+hex;
	}
	return hex.toUpperCase();
}

Culuh.prototype.saturation = function( _sat ) {
	
}