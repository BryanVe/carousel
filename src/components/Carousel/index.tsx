import styled from 'styled-components'
import { CarouselItem, CarouselItemContent } from '..'
import { Course } from 'types'

const visibleColumnsByScreenSize = {
  xl: 6,
  lg: 5,
  md: 3,
  sm: 2
}

const courses = new Array<Course>(6).fill({
  name: 'TypeScript',
  image:
    'https://i1.wp.com/techie365.net/wp-content/uploads/2020/02/typescript-logo.png?fit=1200%2C630&ssl=1',
})

const getCarouselWidth = (columns: number, visibleColumns: number) =>
  `${(100 * columns) / visibleColumns}%`

interface StyledWrapperProps {
  columns: number
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  position: relative;
  width: ${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.xl)};
  height: 9vw;
  margin: 24px 0;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  /* animation: ${(props) =>
    `left-to-right ${props.columns * 4}s linear infinite`}; */
  animation: ${(props) =>
    `right-to-left ${props.columns * 4}s linear infinite`};

  @keyframes left-to-right {
    from {
      left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.xl)};
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
      left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.xl)};
    }
  }

  @media (max-width: 1920px) {
    width: ${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.lg)};
    height: 11vw;

    @keyframes left-to-right {
      from {
        left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.lg)};
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
        left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.lg)};
      }
    }
  }

  @media (max-width: 1024px) {
    width: ${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.md)};
    height: 18vw;

    @keyframes left-to-right {
      from {
        left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.md)};
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
        left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.md)};
      }
    }
  }

  @media (max-width: 640px) {
    width: ${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.sm)};
    height: 27vw;

    @keyframes left-to-right {
      from {
        left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.sm)};
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
        left: -${(props) => getCarouselWidth(props.columns, visibleColumnsByScreenSize.sm)};
      }
    }
  }
`

const Carousel = () => {
  return (
    <StyledWrapper columns={courses.length}>
      {courses.map((course, index) => (
        <CarouselItem key={`${course.name}-${index}`}>
          <CarouselItemContent index={index} data={course} />
        </CarouselItem>
      ))}
    </StyledWrapper>
  )
}

export default Carousel
