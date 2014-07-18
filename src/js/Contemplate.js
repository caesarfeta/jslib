/* requires StringExt.js */

/* 

HOW TO USE:

Save as _tally.html

	<div class="tally">
		<span class="number">{ number }</span>
		<span class="product">{ product }</span>
		<span class="amount">{ amount }</span>
		<span class="cost">{ cost }</span>
	</div>

Save as index.html in same directory

	<html>
		<head><title>Check Out</title></head>
		<body>
		
			<label data-contemplate="go" 
				 data-file="_tally.html" 
				 data-replacer="check_out" 
				 data_params ="GiftBox 12 144" />
			
			<label data-contemplate="go" 
				 data-file="_tally.html" 
				 data-replacer="check_out" 
				 data_params ="TV 1 1000" />
				 
			<label data-contemplate="go" 
				 data-file="_tally.html" 
				 data-replacer="check_out" 
				 data_params ="Car 1 16000" />
				 
		</body>
		<script src="jslib/src/js/StringExt.js"></script>
		<script src="jslib/src/js/Contemplate.js"></script>
		<script>
			Replacers = {
				check_out: function( _params, _i ) {
					return {
						number: _i, 
						product: _params[0],
						amount: _params[1],
						cost: _params[2]
					};
				}
			}
		</script>
	</html>
*/

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