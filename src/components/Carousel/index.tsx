import styled from 'styled-components'

import { CarouselItemContent, CarouselWithItem, CarouselWithoutItem } from '..'
import {
  visibleColumnsByScreenSize,
  getCarouselWidth,
  getOverlappedData,
} from 'utils'

const MainWrapper = styled.div`
  overflow-x: hidden;
`

interface StyledWrapperProps {
  columns: number
}
const StyledWrapper = styled.div<StyledWrapperProps>`
  position: absolute;
  width: ${(props) =>
    `${getCarouselWidth(props.columns, visibleColumnsByScreenSize.xl)}%`};
  height: 20vw;
  margin: 24px 0;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  /* animation: ${(props) =>
    `left-to-right ${props.columns * 4}s linear infinite`}; */
  animation: ${(props) =>
    `right-to-left ${props.columns * 3}s linear infinite`};

  @keyframes left-to-right {
    from {
      left: ${(props) =>
        `-${getCarouselWidth(props.columns, visibleColumnsByScreenSize.xl)}%`};
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
        `-${getCarouselWidth(props.columns, visibleColumnsByScreenSize.xl)}%`};
    }
  }

  /* @media (max-width: 1920px) {
    width: ${(props) =>
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.lg)};
    height: 11vw;

    @keyframes left-to-right {
      from {
        left: -${(props) =>
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.lg)};
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
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.lg)};
      }
    }
  } */

  /* @media (max-width: 1024px) {
    width: ${(props) =>
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.md)};
    height: 18vw;

    @keyframes left-to-right {
      from {
        left: -${(props) =>
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.md)};
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
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.md)};
      }
    }
  } */

  /* @media (max-width: 640px) {
    width: ${(props) =>
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.sm)};
    height: 27vw;

    @keyframes left-to-right {
      from {
        left: -${(props) =>
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.sm)};
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
    getCarouselWidth(props.columns, visibleColumnsByScreenSize.sm)};
      }
    }
  } */
`

interface CarouselProps<T> {
  data: T[]
}

function Carousel<T>(props: CarouselProps<T>) {
  const { data } = props

  return (
    <MainWrapper>
      <StyledWrapper columns={data.length}>
        {data.map((element, index) => (
          <CarouselWithItem key={`carousel-item-${index}`}>
            <CarouselItemContent<T> data={element} />
          </CarouselWithItem>
        ))}
      </StyledWrapper>
      <StyledWrapper
        columns={data.length}
        style={{ marginLeft: '100vw', zIndex: -1 }}
      >
        {getOverlappedData<T>(data).map((element, index) =>
          !element ? (
            <CarouselWithoutItem key={`carousel-item-${index}`} />
          ) : (
            <CarouselWithItem key={`carousel-item-${index}`}>
              <CarouselItemContent<T> data={element} />
            </CarouselWithItem>
          )
        )}
      </StyledWrapper>
    </MainWrapper>
  )
}

export default Carousel
