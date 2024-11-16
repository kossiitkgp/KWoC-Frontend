// function to randomly shuffle an array
export function shuffle(array: any[]): any[] {
    let arraycopy: any[] = [];
    array.forEach((val: any) => arraycopy.push(Object.assign({}, val)));
    for (let i = arraycopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp: any = arraycopy[i];
      arraycopy[i] = arraycopy[j];
      arraycopy[j] = temp;
    }
    return arraycopy;
  }