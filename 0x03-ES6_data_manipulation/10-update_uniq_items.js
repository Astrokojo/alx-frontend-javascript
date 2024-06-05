// Returns an updated map for all items with initial quantity at 1
//
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process: Argument is not a map');
  }
  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });
  return map;
}
