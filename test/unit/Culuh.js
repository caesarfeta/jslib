/**
 * @author AdamTavares / http://adamtavares.com
*/
module( "Culuh" );

test( "rgbUpdate-0", function() {
	var culuh = new Culuh( '#FFA934' );
	var hex1 = culuh.hex();
	culuh.rgbUpdate();
	var hex2 = culuh.hex();
	ok( hex1 == hex2 );
});

test( "rgbUpdate-1", function() {
	var culuh = new Culuh( '#FFFFFF' );
	var hex1 = culuh.hex();
	culuh.rgbUpdate();
	var hex2 = culuh.hex();
	ok( hex1 == hex2 );
});

test( "rgbUpdate-2", function() {
	var culuh = new Culuh( '#000000' );
	var hex1 = culuh.hex();
	culuh.rgbUpdate();
	var hex2 = culuh.hex();
	ok( hex1 == hex2 );
});