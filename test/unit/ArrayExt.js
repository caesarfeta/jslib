/**
 * @author AdamTavares / http://adamtavares.com
*/
module( "ArrayExt" );

test( "multijoin", function() {
	var array = [ '1', '1', '2', '2' ];
	ok( array.multijoin( ['+',' '] ) == '1+1 2+2' );
});