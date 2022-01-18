import { ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'

import { CarouselWithItem, CarouselWithoutItem } from '..'
import {
  BREAKPOINTS,
  DURATION,
  REVERSE,
  STYLE,
  VIEWABLE_ITEMS,
  getCarouselWidth,
} from 'utils'
import { useNodeDimensions } from 'hooks'

interface MainWrapperProps {
  columns: number
  viewableItems: ViewableItems
  breakpoints: Breakpoints
}

const MainWrapper = styled.div<MainWrapperProps>`
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

  &
    .overlapped-carousel
    > div:nth-last-child(-n
      + ${({ columns, viewableItems }) => columns - viewableItems.xl}) {
    display: none;
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.xl}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.lg}px`}) {
    &
      .overlapped-carousel
      > div:nth-last-child(-n
        + ${({ columns, viewableItems }) => columns - viewableItems.lg}) {
      display: none;
    }
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.lg}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.md}px`}) {
    &
      .overlapped-carousel
      > div:nth-last-child(-n
        + ${({ columns, viewableItems }) => columns - viewableItems.md}) {
      display: none;
    }
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.md}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.sm}px`}) {
    &
      .overlapped-carousel
      > div:nth-last-child(-n
        + ${({ columns, viewableItems }) => columns - viewableItems.sm}) {
      display: none;
    }
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.sm}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.xs}px`}) {
    &
      .overlapped-carousel
      > div:nth-last-child(-n
        + ${({ columns, viewableItems }) => columns - viewableItems.xs}) {
      display: none;
    }
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
  --width: ${(props) =>
    `${getCarouselWidth(props.columns, props.viewableItems.xl)}%`};
  position: relative;
  width: var(--width);
  display: grid;
  z-index: 300;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
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

  @media (max-width: ${(props) =>
      `${props.breakpoints.xl}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.lg}px`}) {
    --width: ${(props) =>
      `${getCarouselWidth(props.columns, props.viewableItems.lg)}%`};
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.lg}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.md}px`}) {
    --width: ${(props) =>
      `${getCarouselWidth(props.columns, props.viewableItems.md)}%`};
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.md}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.sm}px`}) {
    --width: ${(props) =>
      `${getCarouselWidth(props.columns, props.viewableItems.sm)}%`};
  }

  @media (max-width: ${(props) =>
      `${props.breakpoints.sm}px`}) and (min-width: ${(props) =>
      `${props.breakpoints.xs}px`}) {
    --width: ${(props) =>
      `${getCarouselWidth(props.columns, props.viewableItems.xs)}%`};
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
    <MainWrapper
      ref={(ref) => (divRef.current = ref)}
      style={style}
      columns={data.length}
      viewableItems={viewableItems}
      breakpoints={breakpoints}
    >
      <StyledWrapper
        className='sub-carousel'
        columns={data.length}
        reverse={reverse}
        duration={duration}
        viewableItems={viewableItems}
        breakpoints={breakpoints}
      >
        {data.map((item) => (
          <CarouselWithItem key={item.key}>{render(item)}</CarouselWithItem>
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
        <CarouselWithoutItem
          columns={data.length}
          viewableItems={viewableItems}
          breakpoints={breakpoints}
        />
        {data.map((item) => (
          <CarouselWithItem key={item.key}>{render(item)}</CarouselWithItem>
        ))}
      </StyledWrapper>
    </MainWrapper>
  )
}

export default Carousel
