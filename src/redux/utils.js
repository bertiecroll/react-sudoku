export const updateArrayItem = updateItemCallback => (array, itemIndex) => (
  array.map((item, index) => ( index === itemIndex ? updateItemCallback(item) : item ))
)
