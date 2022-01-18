import styled from 'styled-components'

interface ItemWithoutContentProps {
  columns: number
  viewableItems: ViewableItems
  breakpoints: Breakpoints
}

const ItemWithoutContent = styled.div<ItemWithoutContentProps>`
  --empty-items: ${({ columns, viewableItems }) => columns - viewableItems.xl};
  grid-column: span var(--empty-items);
  height: 100%;
  pointer-events: none;

  @media (max-width: ${({ breakpoints: { xl } }) =>
      `${xl}px`}) and (min-width: ${({ breakpoints: { lg } }) => `${lg}px`}) {
    --empty-items: ${({ columns, viewableItems }) =>
      columns - viewableItems.lg};
  }

  @media (max-width: ${({ breakpoints: { lg } }) =>
      `${lg}px`}) and (min-width: ${({ breakpoints: { md } }) => `${md}px`}) {
    --empty-items: ${({ columns, viewableItems }) =>
      columns - viewableItems.md};
  }

  @media (max-width: ${({ breakpoints: { md } }) =>
      `${md}px`}) and (min-width: ${({ breakpoints: { sm } }) => `${sm}px`}) {
    --empty-items: ${({ columns, viewableItems }) =>
      columns - viewableItems.sm};
  }

  @media (max-width: ${({ breakpoints: { sm } }) =>
      `${sm}px`}) and (min-width: ${({ breakpoints: { xs } }) => `${xs}px`}) {
    --empty-items: ${({ columns, viewableItems }) =>
      columns - viewableItems.xs};
  }
`

export default ItemWithoutContent
