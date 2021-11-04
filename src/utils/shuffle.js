function shuffle(array) {
  /* Durstenfeld shuffle
   * Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * Accessed on: 05-Dec-2020
   */

  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function shuffleArray(arr, club_size = 3) {
  /* Sorts an array of Projects using a given policy
   * Current policy: Club sorted list of projects into groups of 3 of "similar" description length.
   * Then choose a strata size within which projects are randomized.
   * club_size : size of clubbed elements
   */

  let clubbed_array = [];
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    let temp = [];
    var j = i;
    for (; j < i + 3 && j < n; j++) {
      temp.push(arr[j]);
    }
    i = j - 1;
    clubbed_array.push(temp);
  }

  let temp_shuffled_clubbed_array = shuffle(clubbed_array);

  let final_shuffled_array = [];
  temp_shuffled_clubbed_array.map((clubs) => {
    clubs.map((element) => {
      final_shuffled_array.push(element);
    });
  });

  return final_shuffled_array;
}
