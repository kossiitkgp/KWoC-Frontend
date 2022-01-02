// Module for helper methods

function countDaysLeft(date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const today = new Date();
  const finalDate = new Date(date);
  const diffDays = Math.ceil(Math.abs((finalDate - today) / _MS_PER_DAY));
  return diffDays;
}

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

function trim_message(message) {
  if (message)
    if (message.length > 40) return message.trim(0, 40) + "...";
    else return message;
}

function trim_lines(lines) {
  let num_lines = parseInt(lines);
  if (num_lines > 1000) return parseInt(num_lines / 1000).toString() + "K";
  else return lines;
}

function fetch_calls(link) {
  return fetch(link, {
    headers: {
      // TODO: don't hardcode tokens below
      Authorization: "token ",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export { countDaysLeft, numFormatter, trim_message, trim_lines, fetch_calls };
