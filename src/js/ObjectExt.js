ObjectExt = function() {}

/**
 * Merge an object adding values
 *
 * @param { obj } _obj1 An Object
 * @param { obj } _obj2 An Object
 */
ObjectExt.prototype.mergeAdd = function( _obj1, _obj2 ) {
	for ( var key in _obj1 ) {
		if ( ! ( key in _obj2 ) ) {
			_obj2[key] = 1;
			continue;
		}
		_obj2[key] += _obj1[key];
	}
}

/**
 * Count the characters of all values in an object
 *
 * @param { obj } _obj An Object
 * @return { int } character count
 */
ObjectExt.prototype.totalChars = function( _obj, _totalRoll, _depth ) {
	_totalRoll = ( _totalRoll == undefined ) ? 0 : _totalRoll;
	_depth = ( _depth == undefined ) ? 0 : _depth;
	for ( var i=0, ii=_obj.length; i<ii; i++ ) {
		var type = typeof _obj[i];
		if ( type == 'object' ) {
			_depth++;
			return this.totalChars( _obj[i], _totalRoll, _depth );
		}
		_totalRoll += _obj[i].toString().length;
	}
	return _totalRoll;
}

/**
 * Count the characters of all values in an object
 *
 * @param { obj } _obj An Object
 * @return { array } character count, array of character counts by column
 */
ObjectExt.prototype.totalKeys = function( _obj ) {
   var total = 0;
   for ( var i in _obj ) {
		if ( _obj.hasOwnProperty( i ) ) {
			total++;
		}
	}
	return total;
}

ObjectExt.prototype.wrap = function( _obj, _str1, _str2 ) {
	_str2 = ( _str2 == undefined ) ? _str1: _str2;
	var wrapped = [];
	for ( var i=0, ii=_obj.length; i<ii; i++  ) {
		wrapped[i] = _str1.toString() + _obj[i] + _str2.toString();
	}
	return wrapped;
}

/**
 * http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
 * by A. Levy
 *
 * Coopted this function.  It clones an object.
 *
 * @param { obj } _obj An Object
 * @return { obj } _obj Cloned Object
*/
ObjectExt.prototype.clone = function( _obj ) {
	//------------------------------------------------------------
	// Handle the 3 simple types, and null or undefined
	//------------------------------------------------------------
	if ( null == _obj || "_object" != typeof _obj ) return _obj;
	//------------------------------------------------------------
	// Handle Date
	//------------------------------------------------------------
	if ( _obj instanceof Date ) {
		var copy = new Date();
		copy.setTime( _obj.getTime() );
		return copy;
	}
	//------------------------------------------------------------
	// Handle Array
	//------------------------------------------------------------
	if ( _obj instanceof Array ) {
		var copy = [];
		for ( var i=0, ii=_obj.length; i<ii; i++ ) {
			copy[i] = this.clone( _obj[i] );
		}
		return copy;
	}
	//------------------------------------------------------------
	// Handle Object
	//------------------------------------------------------------
	if ( _obj instanceof Object ) {
		var copy = {};
		for ( var attr in _obj ) {
			if ( _obj.hasOwnProperty( attr ) ) copy[attr] = this.clone( _obj[attr] );
		}
		return copy;
	}
	throw new Error( "Unable to copy obj! Its type isn't supported." );
}