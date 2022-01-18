export const getCarouselWidth: GetCarouselWidth = (args) => {
  const { columns, viewableItems } = args
  return 100 * (columns / viewableItems)
}

export const getViewableData: GetViewableData = (args) => {
  const { data, dimensions, viewableItems, breakpoints } = args
  let limit: number

  if (dimensions.width >= breakpoints.xl) limit = viewableItems.xl
  else if (
    breakpoints.xl > dimensions.width &&
    dimensions.width >= breakpoints.lg
  )
    limit = viewableItems.lg
  else if (
    breakpoints.lg > dimensions.width &&
    dimensions.width >= breakpoints.md
  )
    limit = viewableItems.md
  else if (
    breakpoints.md > dimensions.width &&
    dimensions.width >= breakpoints.sm
  )
    limit = viewableItems.sm
  else if (
    breakpoints.sm > dimensions.width &&
    dimensions.width >= breakpoints.xs
  )
    limit = viewableItems.xs
  else limit = data.length

  return data.slice(0, limit)
}
