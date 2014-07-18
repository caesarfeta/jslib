/* require StringExt.js */

function Contemplate() {
	var grabber = jQuery('*[data-contemplate="go"]');
	grabber.each( function(_i){
		var me = jQuery( this );
		var params = me.attr('data-params').shellArgs();
		var map = Replacers[ me.attr('data-replacer')]( params, _i+1 );
		jQuery.ajax({
			url: me.attr('data-file'),
			type: 'GET',
			success: function( _data ) {
				me.replaceWith( _data.template( map ) );
				Contemplate();
			},
		});
	});
}