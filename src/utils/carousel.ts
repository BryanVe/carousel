export const getCarouselWidth: GetCarouselWidth = (columns, viewableColumns) =>
  100 * (columns / viewableColumns)

export const getOverlappedData: GetOverlappedData = (data, viewableItems) =>
  Array.from(
    data
      .slice(viewableItems.xl, data.length)
      .map((item) => ({ ...item, _render: false }))
  ).concat(
    data.slice(0, viewableItems.xl).map((item) => ({ ...item, _render: true }))
  )
