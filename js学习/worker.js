/* Sass Document */
function fbnc(n) {
			return n<=2?1:fbnc(n-1)+fbnc(n-2)
		}

	//子线程设计
var onmessage = function(event) {
	var value = event.data
	console.log("子线程从主线程接收数据" + event.data)
	//计算
	var result = fbnc(value)
	postMessage(result)
	console.log("子线程向主线程返回数据" + result)
}
