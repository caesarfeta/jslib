
/**
 * A smarter way to control colors
 */
function Culuh( _color ) {
	var self = this;
	self.orignal = _color;
	self.reset();
}

Culuh.prototype.reset = function( ) {
	var self = this;
	var color = self.original;
	//------------------------------------------------------------
	//  Check if it's RGB
	//------------------------------------------------------------
	color = color.toUpperCase();
	if ( color.indexOf( 'RGB' ) > -1 ) {
		var vals = color.match( /\d+\.?\d*/g );
		self.r = parseInt( vals[0] );
		self.g = parseInt( vals[1] );
		self.b = parseInt( vals[2] );
	}
	//------------------------------------------------------------
	//  No... then it's a hex
	//------------------------------------------------------------
	else {
		var vals = color.match( /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i );
		self.r = self.hexToInt( vals[1] );
		self.g = self.hexToInt( vals[2] );
		self.b = self.hexToInt( vals[3] );
	}
}

Culuh.prototype.hex = function() {
	return self.rHex() + self.gHex() + self.bHex();
};

Culuh.prototype.rgb = function() {
	return 'rgb('+self.r+','+self.g+','+self.b+')';
};

Culuh.prototype.rHex = function() {
	return self.intToHex( self.r );
};

Culuh.prototype.gHex = function() {
	return self.intToHex( self.g );
};

Culuh.prototype.bHex = function() {
	return self.intToHex( self.b );
};

Culuh.prototype.rInt = function() {
	return self.r;
};

Culuh.prototype.gInt = function() {
	return self.g;
};

Culuh.prototype.bInt = function() {
	return self.b;
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