const removeFromArray = (arr,indexes) => {
	//Remove a object from obj at index k from array of indexes
	for (let k = 0; k < indexes.length; k++) {
		arr[indexes[k]] = null;
	}
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
	    if (arr[i] !== null) {
	        temp.push(arr[i]);
	    }
	}
	arr.length = 0;
	arr.push(...temp); 
}
const convertToArray = (asset, disposIndex, indexes) => {
	let line = asset.split("\n");
	let x = [];
	let y = [];
	for (let i = 0; i < line.length; i++) {
		x.push(line[i].split(','));
	}
	for (let i = 0; i < x.length; i++) {
		for (let j = 0; j < x[i].length; j++) {
			if(isNaN(parseFloat(x[i][j])) !== true && x[i][j] !== ''){
				x[i][j] = parseFloat(x[i][j]);
			}
		}
		y.push(x[i][disposIndex]);
		x[i].splice(disposIndex,1);
	}
	for (let i = 0; i < x.length; i++) {
		removeFromArray(x[i],indexes)
	}
	return {x:x,y:y}
}
class Feature {
    constructor(features) {
        this.mean = features.mean;
        this.errorUpper = features.errorUpper;
        this.errorLower = features.errorLower;
        this.value = features.value;
    }
}
//const convertToRect = (arr, meanIndex,errorUpperIndex,errorLowerIndex)
console.log(convertToArray(`0,1,2b,3,4,5,6,7,8,9
'',a,2b,c,d,e,f,g,h,i`,0,[0]));













































