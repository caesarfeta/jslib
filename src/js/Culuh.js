/**
 * A smarter way to control colors
 */
function Culuh( _color ) {
	this.r=0; // red
	this.g=0; // blue
	this.b=0; // green
	this.h=0; // hue
	this.s=0; // saturation
	this.v=0; // value
	if ( _color != undefined ) {
		this.original = _color;
		this.reset();
		this.hsvUpdate();
	}
}

/**
 * Reset the color to the original color 
 * declared in the constructor.
 */
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

/**
 * Builds HSV ( Hue, Saturation, and Value ) from RGB
 */
Culuh.prototype.hsvUpdate = function() {
	var min = Math.min( this.r, this.g, this.b );
	var max = Math.max( this.r, this.g, this.b );
	
	this.v = max;
	var delta = max - min;
	if ( max != 0 ) {
		this.s = delta / max;
	}
	else {
		this.s = 0;
		this.h = -1;
		this.v = undefined;
	}
	if ( this.r === max ) {
		this.h = ( this.g - this.b ) / delta;
	}
	else if ( this.g === max ) {
		this.h = 2 + ( this.b - this.r ) / delta;
	}
	else {
		this.h = 4 + ( this.r - this.g ) / delta;
	}
	this.h *= 60;
	if ( this.h < 0 ) {
		this.h += 360;
	}
	if ( isNaN( this.h ) ) {
		this.h = 0;
	}
}

/**
 * Builds RGB from HSV
 */
Culuh.prototype.rgbUpdate = function() {
	//------------------------------------------------------------
	//  No saturation means achromatic aka 'gray'
	//------------------------------------------------------------
	if ( this.s === 0 ) {
		this.r = this.g = this.b = this.v;
	}
	//------------------------------------------------------------
	//  Determine dominant hue
	//------------------------------------------------------------
	this.h /= 60;
	var i = Math.floor( this.h );
	
	//------------------------------------------------------------
	//  Build the possible RGB values
	//------------------------------------------------------------
	var f = this.h-i;
	var p = parseInt( this.v * ( 1 - this.s ) );
	var q = parseInt( this.v * ( 1 - this.s * f ) );
	var t = parseInt( this.v * ( 1 - this.s * ( 1 - f ) ) );
	
	//------------------------------------------------------------
	//  Assign values based on dominant hue
	//------------------------------------------------------------
	switch ( i ) {
		case 0:
			this.r = this.v;
			this.g = t;
			this.b = p;
			break;
		case 1:
			this.r = q;
			this.g = this.v;
			this.b = p;
		case 2:
			this.r = p;
			this.g = this.v;
			this.b = t;
			break;
		case 3:
			this.r = p;
			this.g = q;
			this.b = this.v;
			break;
		case 4:
			this.r = t;
			this.g = p;
			this.b = this.v;
			break;
		default:
			this.r = this.v;
			this.g = p;
			this.b = q;
			break;
	}
}

/**
 * Builds hexadecimal color value
 *
 * @param { string } _pre hexadecimal prefix typically '#' or '0x'
 * @return { string } hexadecimal color value
 */
Culuh.prototype.hex = function( _pre ) {
	_pre = ( _pre == undefined ) ? '' : _pre;
	return _pre + this.rHex() + this.gHex() + this.bHex();
}

Culuh.prototype.rgb = function() {
	return 'rgb('+this.r+','+this.g+','+this.b+')';
}

Culuh.prototype.rHex = function() {
	return this.intToHex( this.r );
}

Culuh.prototype.gHex = function() {
	return this.intToHex( this.g );
}

Culuh.prototype.bHex = function() {
	return this.intToHex( this.b );
}

Culuh.prototype.rInt = function() {
	return this.r;
}

Culuh.prototype.gInt = function() {
	return this.g;
}

Culuh.prototype.bInt = function() {
	return this.b;
}

Culuh.prototype.hexToInt = function( _hex ) {
	return parseInt( _hex, 16 );
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