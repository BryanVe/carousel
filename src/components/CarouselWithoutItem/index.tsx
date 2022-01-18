import styled from 'styled-components'

interface CarouselWithoutItemProps {
  columns: number
  viewableItems: ViewableItems
  breakpoints: Breakpoints
}

const CarouselWithoutItem = styled.div<CarouselWithoutItemProps>`
  --empty-items: ${(props) => props.columns - props.viewableItems.xl};
  grid-column: span var(--empty-items);
  height: 100%;
  pointer-events: none;

  @media (max-width: ${(props) =>
      `${props.breakpoints.xl}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.lg}px`}) {
    --empty-items: ${(props) => props.columns - props.viewableItems.lg};
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.lg}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.md}px`}) {
    --empty-items: ${(props) => props.columns - props.viewableItems.md};
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.md}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.sm}px`}) {
    --empty-items: ${(props) => props.columns - props.viewableItems.sm};
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.sm}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.xs}px`}) {
    --empty-items: ${(props) => props.columns - props.viewableItems.xs};
  }
`

export default CarouselWithoutItem
