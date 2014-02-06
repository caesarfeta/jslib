/**
 * @author AdamTavares / http://adamtavares.com
*/
module( "ObjectExt" );

var obj = {
	country: {
		France: [
			'Paris',
			'Lyon',
			'Nice',
			'Dijon'
		],
		England: [
			'London',
			'Bath',
			'Waterloo',
			'Kent'
		]
	},
	planet: [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune'
	]
}

test( "byString", function() {
	var objExt = new ObjectExt();
	ok( obj['country']['France'][0] == objExt.byString( obj, "['country']['France'][0]") );
});