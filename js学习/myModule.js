/* Sass Document */
function myModule() {
	var msg = "this is a test"
	function doSth() {
		console.log('doSth:' + msg.toUpperCase())
	}
	function doOSth() {
		console.log('doOSth:' + msg.toLowerCase())
	}
	return {
		doSth: doSth,
		doOSth: doOSth
	}
}
