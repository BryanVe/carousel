import { ReactNode } from 'react'
import styled from 'styled-components'

import { CarouselWithItem, CarouselWithoutItem } from '..'
import { getCarouselWidth, getOverlappedData } from 'utils'

const MainWrapper = styled.div`
  overflow-x: hidden;

  &:hover .sub-carousel {
    animation-play-state: paused;
  }

  & .overlapped-carousel {
    margin-left: 100vw;
    z-index: -1;
  }
`

interface StyledWrapperProps {
  columns: number
  viewableItemsByBreakpoint: ViewableItemsByBreakpoint
}
const StyledWrapper = styled.div<StyledWrapperProps>`
  --width: ${(props) =>
    `${getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.xl)}%`};
  position: absolute;
  width: var(--width);
  margin: 24px 0;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  /* animation: ${(props) =>
    `left-to-right ${props.columns * 4}s linear infinite`}; */
  animation: ${(props) =>
    `right-to-left ${props.columns * 3}s linear infinite`};

  @keyframes left-to-right {
    from {
      left: calc(-1 * var(--width));
    }
    to {
      left: 100%;
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
  viewableItemsByBreakpoint: ViewableItemsByBreakpoint
  data: I[]
  render: (data: I) => ReactNode
}

const Carousel = <I extends GenericWithKey>(props: CarouselProps<I>) => {
  const { data, viewableItemsByBreakpoint, render } = props

  return (
    <MainWrapper>
      <StyledWrapper
        className='sub-carousel'
        columns={data.length}
        viewableItemsByBreakpoint={viewableItemsByBreakpoint}
      >
        {data.map((item) => (
          <CarouselWithItem key={item.key}>{render(item)}</CarouselWithItem>
        ))}
      </StyledWrapper>
      <StyledWrapper
        className='sub-carousel overlapped-carousel'
        columns={data.length}
        viewableItemsByBreakpoint={viewableItemsByBreakpoint}
      >
        {getOverlappedData<I>(data, viewableItemsByBreakpoint).map(
          (item, index) =>
            Object.keys(item).length > 1 ? (
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
