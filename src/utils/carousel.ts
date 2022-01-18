export const getCarouselWidth: GetCarouselWidth = (columns, viewableItems) =>
  100 * (columns / viewableItems)

export const getViewableData: GetViewableData = (
  data,
  currentDimensions,
  viewableItems,
  breakpoints
) => {
  console.log(currentDimensions.width)

  if (currentDimensions.width >= breakpoints.xl)
    return data.slice(0, viewableItems.xl)
  else if (
    breakpoints.xl > currentDimensions.width &&
    currentDimensions.width >= breakpoints.lg
  )
    return data.slice(0, viewableItems.lg)
  else if (
    breakpoints.lg > currentDimensions.width &&
    currentDimensions.width >= breakpoints.md
  )
    return data.slice(0, viewableItems.md)
  else if (
    breakpoints.md > currentDimensions.width &&
    currentDimensions.width >= breakpoints.sm
  )
    return data.slice(0, viewableItems.sm)
  else if (
    breakpoints.sm > currentDimensions.width &&
    currentDimensions.width >= breakpoints.xs
  )
    return data.slice(0, viewableItems.xs)
  else return data
}
