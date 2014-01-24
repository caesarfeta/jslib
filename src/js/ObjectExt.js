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