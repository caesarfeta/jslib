/**
 * Get a quality timestamp
 */
function TimeStamp() {}

/**
 * Return a timestamp with a UTC offset
 */
TimeStamp.prototype.withUtc = function( ) {
	var d = new Date();
	var yyyy = d.getFullYear();
	var mm = ('0' + (d.getMonth()+1)).slice(-2);
	var dd = ('0' + d.getDate()).slice(-2);
	var hh = d.getHours();
	var min = ('0' + d.getMinutes()).slice(-2);
	var sec = ('0' + d.getSeconds()).slice(-2);
	var diff = d.getTimezoneOffset();
	var time = yyyy+'-'+mm+'-'+dd+'T'+hh+":"+min+":"+sec+"UTC";
	if ( diff > 0 ) {
		time = time+"+"+diff;
	}
	else {
		time = time+"-"+diff;
	}
	return time;
}

