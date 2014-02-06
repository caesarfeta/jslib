/**
 * Sort arrays
 */
function Sorted() {}

/**
 * Sort an array of rectangular objects into rows and columns
 *
 * @{ param } _array (required)
 * @{ param } _x (required)
 * @{ param } _y1 (required)
 * @{ param } _y2 (required)
 * @{ param } _rollover
 * @{ param } _depth
 * @{ param } _nested
 * @{ return } A sorted two dimensional array of the rectangular objects
 */
//------------------------------------------------------------
//  TODO I need to figure out how to pass nested object
//  selectors as a string.
//------------------------------------------------------------
Sorted.prototype.areaSort = function( _array, _x, _y1, _y2, _rollover, _depth, _nested ) {
	//------------------------------------------------------------
	//  Set some default values
	//------------------------------------------------------------
	_rollover = ( _rollover == undefined ) ? [] : _rollover;
	_depth = ( _depth == undefined ) ? 0 : _depth;
	_x = ( _x == undefined ) ? 'x' : _x;
	_y1 = ( _y1 == undefined ) ? 'y1' : _y1;
	_y2 = ( _y2 == undefined ) ? 'y2' : _y2;
	if ( _rollover.length-1 < _depth ) {
		_rollover[ _depth ] = [];
	}
	//------------------------------------------------------------
	//  Check to make sure _array is an array of objects.
	//------------------------------------------------------------
	if ( typeof _array[0] !== 'object' ) {
		throw "Sorted.areaSort() -- First parameter must be an array of objects";
		return null;
	}
	//------------------------------------------------------------
	//  Find the lowest Y
	//------------------------------------------------------------
	var lowestIndex = 0;
	var lowestY = parseInt( _array[ lowestIndex ]['param'][ _y1 ] );
	for ( var i=1, ii=_array.length; i<ii; i++ ) {
		var check = parseInt( _array[i]['param'][ _y1 ] );
		if (  check < lowestY ) {
			lowestY = check;
			lowestIndex = i;
		}
	}
	//------------------------------------------------------------
	//  Find other rectangles in row
	//------------------------------------------------------------
	var lowest = _array.splice( lowestIndex, 1 );
	lowest = lowest[0];
	_rollover[ _depth ].push( lowest );
	var min = parseInt( lowest['param'][ _y1 ] );
	var max = parseInt( lowest['param'][ _y2 ] );
	i = _array.length
	while ( i-- ) {
		var y1 = parseInt( _array[i]['param'][ _y1 ] );
		var y2 = parseInt( _array[i]['param'][ _y2 ] );
		var height = y2-y1;
		var check = y1+height/2;
		if ( check >= min && check <= max ) {
			var splice = _array.splice( i,1 );
			splice = splice[0];
			_rollover[ _depth ].push( splice );
		}
	}
	//------------------------------------------------------------
	//  Done sorting?
	//------------------------------------------------------------
	if ( _array.length == 0 ) {
		//------------------------------------------------------------
		//  Now sort each row by each element's x value
		//------------------------------------------------------------
		for ( var i=0, ii=_rollover.length; i<ii; i++ ) {
			_rollover[i] = this.numSort( _rollover[i], _x );
		}
		return _rollover;
	}
	//------------------------------------------------------------
	//  Nope... well then do it again.
	//------------------------------------------------------------
	else {
		_depth+=1;
		return this.areaSort( _array, _x, _y1, _y2, _rollover, _depth, _nested );
	}
}

/**
 * Sort an array of objects ascending numerically by a key's value
 *
 * @{ param } _array 
 * @{ param } _key
 */
Sorted.prototype.numSort = function( _array, _key ) {
	function sortKeyNum( _a, _b ) {
		return _a[_key] - _b[_key];
	}
	return _array.sort( sortKeyNum );
}
