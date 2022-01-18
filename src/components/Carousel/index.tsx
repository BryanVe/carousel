import { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'

import { ItemWithContent, ItemWithoutContent } from '..'
import {
  BREAKPOINTS,
  DURATION,
  REVERSE,
  STYLE,
  VIEWABLE_ITEMS,
  getCarouselWidth,
  getViewableData,
} from 'utils'
import { useNodeDimensions } from 'hooks'

const MainWrapper = styled.div`
  position: relative;

  &:hover .sub-carousel {
    animation-play-state: paused;
  }

  & .overlapped-carousel {
    position: absolute;
    top: 0;
    margin-left: 100vw;
    z-index: 0;
  }
`

interface StyledWrapperProps {
  reverse: boolean
  duration: number
  columns: number
  viewableItems: ViewableItems
  breakpoints: Breakpoints
}
const StyledWrapper = styled.div<StyledWrapperProps>`
  --width: ${({ columns, viewableItems }) =>
    getCarouselWidth({
      columns,
      viewableItems: viewableItems.xl,
    })}%;
  width: var(--width);
  position: relative;
  display: grid;
  z-index: 300;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  animation: ${({ reverse, duration }) =>
    `carousel-animation ${duration}s linear infinite ${
      reverse ? 'reverse' : 'normal'
    }`};

  @media (max-width: ${({ breakpoints: { xl } }) =>
      `${xl}px`}) and (min-width: ${({ breakpoints: { lg } }) => `${lg}px`}) {
    --width: ${({ columns, viewableItems }) =>
      getCarouselWidth({
        columns,
        viewableItems: viewableItems.lg,
      })}%;
  }

  @media (max-width: ${({ breakpoints: { lg } }) =>
      `${lg}px`}) and (min-width: ${({ breakpoints: { md } }) => `${md}px`}) {
    --width: ${({ columns, viewableItems }) =>
      getCarouselWidth({
        columns,
        viewableItems: viewableItems.md,
      })}%;
  }

  @media (max-width: ${({ breakpoints: { md } }) =>
      `${md}px`}) and (min-width: ${({ breakpoints: { sm } }) => `${sm}px`}) {
    --width: ${({ columns, viewableItems }) =>
      getCarouselWidth({
        columns,
        viewableItems: viewableItems.sm,
      })}%;
  }

  @media (max-width: ${({ breakpoints: { sm } }) =>
      `${sm}px`}) and (min-width: ${({ breakpoints: { xs } }) => `${xs}px`}) {
    --width: ${({ columns, viewableItems }) =>
      getCarouselWidth({
        columns,
        viewableItems: viewableItems.xs,
      })}%;
  }

  @keyframes carousel-animation {
    from {
      left: calc(-1 * var(--width));
    }
    to {
      left: 0%;
    }
  }
`

interface CarouselProps<I extends GenericWithKey> {
  reverse?: boolean
  duration?: number
  style?: CSSProperties
  viewableItems?: ViewableItems
  breakpoints?: Breakpoints
  data: I[]
  render: (data: I) => ReactNode
}

const Carousel = <I extends GenericWithKey>(props: CarouselProps<I>) => {
  const {
    reverse = REVERSE,
    duration = DURATION,
    style = STYLE,
    viewableItems = VIEWABLE_ITEMS,
    breakpoints = BREAKPOINTS,
    data,
    render,
  } = props
  const { ref: divRef, dimensions: divDimensions } = useNodeDimensions()

  return (
    <MainWrapper ref={(ref) => (divRef.current = ref)} style={style}>
      <StyledWrapper
        className='sub-carousel'
        columns={data.length}
        reverse={reverse}
        duration={duration}
        viewableItems={viewableItems}
        breakpoints={breakpoints}
      >
        {data.map((item) => (
          <ItemWithContent key={item.key}>{render(item)}</ItemWithContent>
        ))}
      </StyledWrapper>
      <StyledWrapper
        className='sub-carousel overlapped-carousel'
        columns={data.length}
        reverse={reverse}
        duration={duration}
        viewableItems={viewableItems}
        breakpoints={breakpoints}
      >
        <ItemWithoutContent
          columns={data.length}
          viewableItems={viewableItems}
          breakpoints={breakpoints}
        />
        {getViewableData<I>({
          data,
          viewableItems,
          breakpoints,
          dimensions: divDimensions,
        }).map((item) => (
          <ItemWithContent key={item.key}>{render(item)}</ItemWithContent>
        ))}
      </StyledWrapper>
    </MainWrapper>
  )
}

export default Carousel
