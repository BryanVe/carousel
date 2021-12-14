export type Breakpoints = 'sm' | 'md' | 'lg' | 'xl'

export interface Course {
  name: string
  color: string
}

export type ViewableItemsByBreakpoint = {
  [breakpoint in Breakpoints]: number
}

export type GetCarouselWidth = (
  columns: number,
  viewableItems: number
) => number
export type GetOverlappedData = <T>(data: T[], viewableItems: ViewableItemsByBreakpoint) => T[]
