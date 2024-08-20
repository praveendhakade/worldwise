export function convertToEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    // console.log(countryCode, String.fromCodePoint(...codePoints));
    return String.fromCodePoint(...codePoints);
  }
  