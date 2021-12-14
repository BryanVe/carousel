import { GetCarouselWidth, GetOverlappedData } from 'types'

export const getCarouselWidth: GetCarouselWidth = (columns, viewableColumns) =>
  100 * (columns / viewableColumns)

export const getOverlappedData: GetOverlappedData = (data, viewableItems) =>
  new Array(data.length - viewableItems.xl)
    .fill(undefined)
    .concat(data.slice(0, viewableItems.xl))
