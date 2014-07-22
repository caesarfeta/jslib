ArrayExt = function() {}
/**
 * Join an array with alternating strings
 *
 * @param { array } _strings
 */
ArrayExt.prototype.multijoin = function( _array, _strings ) {
	var output = '';
	for ( var i=0; i<_array.length; i++ ) {
		var glue = _strings[ i % _strings.length ]
		if ( i == _array.length-1 ) {
			glue = '';
		}
		output += _array[i]+glue;
	}
	return output;
}