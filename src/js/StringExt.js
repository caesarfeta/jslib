/**
 * Custom String methods
 */

/**
 * Remove newlines and tabs
 */
String.prototype.smoosh = function() {
	return this.replace(/(\r\n+|\n+|\r+|\t+)/gm,'');
}

/**
 * Count the occurences of a string in a larger string
 *
 * @parm {string} _sub : The search string
 * @param {boolean} _overlap : Optional. Default: false
 */
String.prototype.occurs = function( _search, _overlap ) {
	var string = this;
	
	//------------------------------------------------------------
	//  If _search is null just return a char count
	//------------------------------------------------------------
	if ( _search == undefined ) {
		return string.length;
	}
	
	//------------------------------------------------------------
	//  Make sure _search is a string
	//------------------------------------------------------------
	_search+="";
	
	//------------------------------------------------------------
	//  If no search term is past just return a character count
	//------------------------------------------------------------
	if ( _search.length <= 0 ) {
		return string.length;
	}
	
	//------------------------------------------------------------
	//  Otherwise start counting.
	//------------------------------------------------------------
	var n=0;
	var pos=0;
	var step = ( _overlap ) ? 1 : _search.length;
	while ( true ) {
		pos = string.indexOf( _search, pos );
		if ( pos >= 0 ) {
			n++;
			pos += step;
		}
		else {
			break;
		}
	}
	return n;
}

/*
 * Turn a string with HTTP GET style parameters to an object
 *
 * @return { obj } A collection of keys and values
 */
String.prototype.params = function() {
	var arr = this.split('?');
	var get = arr[1];
	arr = get.split('&');
	var out = {};
	for ( var i=0, ii=arr.length; i<ii; i++ ) {
		if ( arr[i] != undefined ) {
			var pair = arr[i].split('=');
			out[ pair[0] ] = pair[1];
		}
	}
	return out;
}