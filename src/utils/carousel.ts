export const getCarouselWidth: GetCarouselWidth = (columns, viewableColumns) =>
  100 * (columns / viewableColumns)

export const getOverlappedData: GetOverlappedData = (data, viewableItems) =>
  new Array(data.length - viewableItems.xl)
    .fill(data.map(item => ({ key: item.key })))
    .concat(data.slice(0, viewableItems.xl))
