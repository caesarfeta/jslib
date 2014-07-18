# jslib
jslib is a collection of general use Javascript classes.
They aren't tied to any specific project and do very fundamental things.

## AutoCanvas.js
Builds an auto-resizing, fullscreen, HTML canvas.

## Contemplate.js
Super lightweight HTML5 templating system.
Supports subtemplating.

Not designed for reliable use in production systems.
Best used for experimentation!
Templates can be repurposed very easily for use with more traditional server-side template system like Rails ERB.

### How to use:

Save as _tally.html

	<div class="tally">
		<span class="number">{ number }</span>
		<span class="product">{ product }</span>
		<span class="amount">{ amount }</span>
		<span class="cost">{ cost }</span>
	</div>

Save as index.html

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

## Culuh.js
A class that allows you to manipulate colors and output them as either RGB or HEX values.

## DateConver.js
Functions for converting dates

## DomPlus.js
Fills some gaps left by Javascript's native DOM manipulation methods.

## jQueryPlus.js
Custom jQuery methods.

## MathExt.js
Handy math functions.

## ObjectExt.js
Mush and manipulate objects.

## Palette.js
Predefined palettes an object away.

## SharedConfig.js
Need a shared Javascript object with global scope to hold configuration options?

## Sorted.js
Array sorting methods.

## StringExt.js
Extends Javascript's native String class with some useful methods.

## Styler.js
Create CSS rules from within Javascript working at the class/selector level instead of the element level.

## TimeStamp.js
Get a time-stamp complete with UTC offset.