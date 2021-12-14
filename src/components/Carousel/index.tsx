import { ReactNode } from 'react'
import styled from 'styled-components'

import { CarouselWithItem, CarouselWithoutItem } from '..'
import { getCarouselWidth, getOverlappedData } from 'utils'

import { ViewableItemsByBreakpoint } from 'types'

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
  position: absolute;
  width: ${(props) =>
    `${getCarouselWidth(props.columns, props.viewableItemsByBreakpoint.xl)}%`};
  margin: 24px 0;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  /* animation: ${(props) =>
    `left-to-right ${props.columns * 4}s linear infinite`}; */
  animation: ${(props) =>
    `right-to-left ${props.columns * 2}s linear infinite`};

  @keyframes left-to-right {
    from {
      left: ${(props) =>
        `-${getCarouselWidth(
          props.columns,
          props.viewableItemsByBreakpoint.xl
        )}%`};
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
      left: ${(props) =>
        `-${getCarouselWidth(
          props.columns,
          props.viewableItemsByBreakpoint.xl
        )}%`};
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
interface CarouselProps<I> {
  viewableItemsByBreakpoint: ViewableItemsByBreakpoint
  height?: string
  data: I[]
  render: (data: I) => ReactNode
}

function Carousel<I>(props: CarouselProps<I>) {
  const { data, viewableItemsByBreakpoint, render } = props

  return (
    <MainWrapper>
      <StyledWrapper
        className='sub-carousel'
        columns={data.length}
        viewableItemsByBreakpoint={viewableItemsByBreakpoint}
      >
        {data.map((item, index) => (
          <CarouselWithItem key={`carousel-item-${index}`}>
            {render(item)}
          </CarouselWithItem>
        ))}
      </StyledWrapper>
      <StyledWrapper
        className='sub-carousel overlapped-carousel'
        columns={data.length}
        viewableItemsByBreakpoint={viewableItemsByBreakpoint}
      >
        {getOverlappedData<I>(data, viewableItemsByBreakpoint).map(
          (item: I | undefined, index) =>
            !item ? (
              <CarouselWithoutItem key={`carousel-item-${index}`} />
            ) : (
              <CarouselWithItem key={`carousel-item-${index}`}>
                {render(item)}
              </CarouselWithItem>
            )
        )}
      </StyledWrapper>
    </MainWrapper>
  )
}

export default Carousel
