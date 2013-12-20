/**
 * @author AdamTavares / http://adamtavares.com
*/
module( "Culuh" );

test( "rgbUpdate-hsvUpdate-1", function() {
	var culuh = new Culuh( '#FFA934' );
	var hex1 = culuh.hex();
	culuh.rgbUpdate();
	var hex2 = culuh.hex();
	ok( hex1 == hex2, "Passed!" );
});