/**
 * Add/Change CSS with Javascript,
 * working at the class/selector level instead of the element level.
 */
function Styler() {
	this.head = document.getElementsByTagName('head')[0];
	this.style = document.createElement('style');
	this.style.type = 'text/css';
	this.head.appendChild( this.style );
}

/**
 * Add a CSS declaration
 */
Styler.prototype.add = function( _rules ) {
	for ( var selector in _rules ) {
		var dec = document.createTextNode( selector+' { '+_rules[ selector ]+' }' );
		if ( this.style.styleSheet ) {
			style.styleSheet.cssText = dec.nodeValue;
		}
		else {
			this.style.appendChild( dec );
		}
	}
}