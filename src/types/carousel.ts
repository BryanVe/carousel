export interface Course {
  name: string
  color: string
}

export type GetCarouselWidth = (
  columns: number,
  visibleColumns: number
) => number
export type GetOverlappedData = <T>(data: T[]) => T[]
