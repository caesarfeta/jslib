/**
 * Palettes are collections of colors.
 * Dependencies:
 * 		Culuh.js
 */
function Palette( _name ) {
	this.palette = [];
	this.load( _name );
}

/**
 * Load a palette
 *
 * @param { string } _name The name of the palette.
 */
Palette.prototype.load = function( _name ) {
	switch ( _name ) {
		case 'grayscale':
			this.add([ '#000000', '#333333', '#666666', '#999999', '#CCCCCC' ]);
			break;
		case 'primary':
			this.add([ '#FF0000', '#00FF00', '#0000FF' ]);
			break;
		case 'secondary':
			this.add([ '#FFFF00', '#00FFFF', '#FF00FF' ]);
			break;
		case undefined:
			this.add([ '#000000', '#FFFFFF' ]);
	}
}

/**
 * Add colors to a palette
 *
 * @param { array } _colors The colors you would like to add
 */
Palette.prototype.add = function( _colors ) {
	for ( var i=0; i<_colors.length; i++ ) {
		this.palette.push( new Culuh( _colors[i] ) );
	}
}

/**
 * Print out the hex representation of all the colors
 *
 * @param { string } _name The name of the palette.
 */
Palette.prototype.print = function() {
	for ( var i=0; i<this.palette.length; i++ ) {
		console.log( this.palette[i].hex() );
	}
}

/**
 * Print palette to screen
 */
Palette.prototype.show = function() {
	this.hide();
	//------------------------------------------------------------
	//  Build the palette wrapper
	//------------------------------------------------------------
	var palette = document.createElement('div');
	palette.setAttribute( 'id', 'palette-sample' );
	palette.style.position = 'absolute';
	palette.style.right = '0';
	palette.style.top = '0';
	document.body.appendChild( palette );
	//------------------------------------------------------------
	//  Build the swatches
	//------------------------------------------------------------
	for ( var i=0; i<this.palette.length; i++ ) {
		var color = '#'+ this.palette[i].hex();
		var swatch = document.createElement('div');
		swatch.style.backgroundColor = color;
		swatch.style.height = '20px';
		swatch.style.width = '20px';
		swatch.style.float = 'left';
		palette.appendChild( swatch );
	}
}

/**
 * Hide a displayed palette
 */
Palette.prototype.hide = function() {
	var palette = document.getElementById("palette-sample");
	if ( palette != undefined ) {
		palette.parentNode.removeChild( palette );
	}
}

/**
 * Sort your palette
 *
 * @param { string } _type The type of sort: [list types here]
 */
Palette.prototype.sort = function( _type ) {
	
}