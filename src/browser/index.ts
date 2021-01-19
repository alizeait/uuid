function generateRandomBuffer(size: number) {
  //generate cryptographically strong random 8 bit unsigned integers
  return crypto.getRandomValues(new Uint8Array(size));
}

let index = 0,
  hex = [],
  size = 6144,
  buffer = generateRandomBuffer(size);

// generate 2 hexadecimal digits array
for (; index < 256; index++) {
  hex[index] = (index + 256).toString(16).substring(1);
}
index = 0;
export function v4() {
  if (index + 16 > size) {
    // only generate a new buffer when the previous buffer is all used up
    buffer = generateRandomBuffer(size);
    index = 0;
  }
  let i = 0,
    result = "",
    currentBufferValue,
    nextBufferValue;
  // each digit of a hexadecimal number "maps" to four bits of a binary value.
  // So a byte (8 bits) can always be represented by two hexadecimal digits
  for (; i < 8; i++) {
    currentBufferValue = buffer[index + 2 * i];
    nextBufferValue = buffer[index + 2 * i + 1];
    if (i == 3)
      //https://digitalbunker.dev/2020/09/30/understanding-how-uuids-are-generated/
      //Take the 7th byte perform an AND operation with 0x0F to clear out the high nibble. Then, OR it with 0x40 to set the version number to 4.
      result += hex[(currentBufferValue & 0x0f) | 0x40] + hex[nextBufferValue];
    else if (i == 4)
      //take the 9th byte and perform an AND operation with 0x3F and then OR it with 0x80
      result += hex[(currentBufferValue & 0x3f) | 0x80] + hex[nextBufferValue];
    else result += hex[currentBufferValue] + hex[nextBufferValue];
    // add dashes in correct places as the RFC suggests
    if (i > 0 && i < 5) result += "-";
  }
  index += 16;
  return result;
}
