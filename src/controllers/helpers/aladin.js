/* eslint-disable no-restricted-syntax */
function aladin(magic, dist) {
  let success = -1;
  let power = 0;

  let i = 0;
  while (i <= magic.length - 1) {
    let j = 0;
    for (m of magic) {
      const bank = power + m - dist[j];
      if (bank >= 0) {
        power = bank;
        success = i;
        j += 1;
      } else {
        success = -1;
        power = 0;
        break;
      }
    }

    if (success >= 0) break;

    magic.push(magic[0]);
    dist.push(magic[0]);
    magic.shift();
    dist.shift();

    i += 1;
  }

  return success;
}

module.exports = aladin;
