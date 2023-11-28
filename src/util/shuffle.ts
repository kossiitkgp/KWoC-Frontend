// function to randomly shuffle an array
export function shuffle(array: any[]):any[] {
    const arraycopy: any[]= [];
    array.forEach((val: any) => arraycopy.push(Object.assign({}, val)));
    for (var i = arraycopy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp:any = arraycopy[i];
        arraycopy[i] = arraycopy[j];
        arraycopy[j] = temp;
    }
    return arraycopy;
  }