/**
 * Convert dates
 */
function DateConvert() {}

/**
 * Convert an Hijri year to a Gregorian year
 *
 * @param { Int } _h
 * @return { Int } Gregorian year.
 */
DateConvert.prototype.hijriToGreg = function( _h ) {
	return Math.round( _h-(_h/33)+622 );
}

/**
 * Convert a Gregorian year to an Hijri year
 *
 * @param { Int } _g
 * @return { Int } Hijri year.
 */
DateConvert.prototype.gregToHijri = function( _g ) {
	return Math.round( _g-622+(_g-622)/32 );
}