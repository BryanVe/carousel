import { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'

import { CarouselWithItem, CarouselWithoutItem } from '..'
import { getCarouselWidth, getOverlappedData } from 'utils'

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
  viewableItemsByBreakpoint: ViewableItemsByBreakpoint
}
const StyledWrapper = styled.div<StyledWrapperProps>`
  --width: ${(props) =>
    `${getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.xl)}%`};
  position: relative;
  width: var(--width);
  display: grid;
  z-index: 300;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  /* animation: ${(props) =>
    `left-to-right ${props.columns * 4}s linear infinite`}; */
  animation: ${(props) =>
    `${props.reverse ? 'left-to-right' : 'right-to-left'} ${
      props.duration
    }s linear infinite`};

  @keyframes left-to-right {
    from {
      left: calc(-1 * var(--width));
    }
    to {
      left: 0%;
    }
  }

  @keyframes right-to-left {
    from {
      left: 0%;
    }
    to {
      left: calc(-1 * var(--width));
    }
  }

  /* @media (max-width: 1920px) {
    width: ${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.lg)};
    height: 11vw;

    @keyframes left-to-right {
      from {
        left: -${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.lg)};
      }
      to {
        left: 100%;
      }
    }

    @keyframes right-to-left {
      from {
        left: 100%;
      }
      to {
        left: -${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.lg)};
      }
    }
  } */

  /* @media (max-width: 1024px) {
    width: ${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.md)};
    height: 18vw;

    @keyframes left-to-right {
      from {
        left: -${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.md)};
      }
      to {
        left: 100%;
      }
    }

    @keyframes right-to-left {
      from {
        left: 100%;
      }
      to {
        left: -${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.md)};
      }
    }
  } */

  /* @media (max-width: 640px) {
    width: ${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.sm)};
    height: 27vw;

    @keyframes left-to-right {
      from {
        left: -${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.sm)};
      }
      to {
        left: 100%;
      }
    }

    @keyframes right-to-left {
      from {
        left: 100%;
      }
      to {
        left: -${(props) =>
    getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.sm)};
      }
    }
  } */
`

interface CarouselProps<I extends GenericWithKey> {
  reverse?: boolean
  duration?: number
  viewableItemsByBreakpoint: ViewableItemsByBreakpoint
  data: I[]
  render: (data: I) => ReactNode
  style?: CSSProperties
}

const Carousel = <I extends GenericWithKey>(props: CarouselProps<I>) => {
  const {
    reverse = false,
    duration = 10,
    style = {},
    data,
    viewableItemsByBreakpoint,
    render,
  } = props

  return (
    <MainWrapper style={style}>
      <StyledWrapper
        reverse={reverse}
        duration={duration}
        className='sub-carousel'
        columns={data.length}
        viewableItemsByBreakpoint={viewableItemsByBreakpoint}
      >
        {data.map((item) => (
          <CarouselWithItem key={item.key}>{render(item)}</CarouselWithItem>
        ))}
      </StyledWrapper>
      <StyledWrapper
        reverse={reverse}
        duration={duration}
        className='sub-carousel overlapped-carousel'
        columns={data.length}
        viewableItemsByBreakpoint={viewableItemsByBreakpoint}
      >
        {getOverlappedData<I>(data, viewableItemsByBreakpoint).map((item) =>
          item._render ? (
            <CarouselWithItem key={item.key}>{render(item)}</CarouselWithItem>
          ) : (
            <CarouselWithoutItem key={item.key} />
          )
        )}
      </StyledWrapper>
    </MainWrapper>
  )
}

export default Carousel
