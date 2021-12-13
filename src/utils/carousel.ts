import { GetCarouselWidth, GetOverlappedData } from 'types'
import { visibleColumnsByScreenSize } from '.'

export const getCarouselWidth: GetCarouselWidth = (columns, visibleColumns) =>
  100 * (columns / visibleColumns)

export const getOverlappedData: GetOverlappedData = (data) =>
  new Array(data.length - visibleColumnsByScreenSize.xl)
    .fill(undefined)
    .concat(data.slice(0, visibleColumnsByScreenSize.xl))
