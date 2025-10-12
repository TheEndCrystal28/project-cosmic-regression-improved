const convertToArray = (asset, disposIndex) => {
	let line = asset.split("\n");
	let x = [];
	let y = [];
	for (var i = 0; i < line.length; i++) {
		x.push(line[i].split(','));
	}
	for (var i = 0; i < x.length; i++) {
		for (var j = 0; j < x[i].length; j++) {
			if(isNaN(x[i][j]) !== true && x[i][j] !== ''){
				x[i][j] = parseFloat(x[i][j]);
			}
		}
		y.push(x[i][disposIndex]);
		x[i].splice(disposIndex,1);
	}
	return {x:x,y:y}
}