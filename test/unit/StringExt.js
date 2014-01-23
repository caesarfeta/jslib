/**
 * @author AdamTavares / http://adamtavares.com
*/
module( "StringExt" );

test( "occurs-0", function() {
	var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
	 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
	 Ut enim ad minim veniam, \
	 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
	 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
	 Excepteur sint occaecat cupidatat non proident, \
	 sunt in culpa qui officia deserunt mollit anim id est laborum.";
	
	var count = string.occurs( 'in' );
	ok( count == 7 );
});

test( "occurs-0", function() {
	var string = "1234567890";
	var count = string.occurs();
	console.log( count );
	ok( count == 10 );
});

test( "occurs-0", function() {
	var string = "aaa"
	var count = string.occurs( 'aa' );
	ok( count == 1 );
});

test( "occurs-0", function() {
	var string = "aaa"
	var count = string.occurs( 'aa', true );
	ok( count == 2 );
});