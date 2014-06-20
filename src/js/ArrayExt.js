/**
 * Join an array with alternating strings
 *
 * @param { array } _strings
 */
Array.prototype.multijoin = function( _strings ) {
	var output = '';
	for ( var i=0; i<this.length; i++ ) {
		var glue = _strings[ i % _strings.length ]
		if ( i == this.length-1 ) {
			glue = '';
		}
		output += this[i]+glue;
	}
	return output;
}