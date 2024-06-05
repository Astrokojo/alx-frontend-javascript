// Returns a new ArrayBuffer with an Int8 value at a specific position
//
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const dadaView = new DataView(buffer);

  dadaView.setInt8(position, value);

  return dadaView;
}
