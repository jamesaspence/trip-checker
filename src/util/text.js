export function capitalizeFirst(text) {
  if (typeof text !== 'string' || text.trim().length < 1) {
    return null;
  }

  let firstLetter = text[0].toUpperCase();

  return firstLetter + text.substr(1);
}

