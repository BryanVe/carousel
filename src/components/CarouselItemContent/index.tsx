import styled from 'styled-components'
import { Course } from 'types'

export const colors = [
  '#FFA940',
  '#73D13D',
  '#36CFC9',
  '#FFC53D',
  '#597EF7',
  '#9254DE',
  '#F759AB',
  '#FFBB96',
  '#FFD591',
  '#FFE58F',
  '#B7EB8F',
  '#87E8DE',
  '#ADC6FF',
  '#D3ADF7',
  '#FFADD2',
  '#FF9C6E',
  '#FFC069',
  '#FFD666',
  '#95DE64',
  '#5CDBD3',
  '#85A5FF',
  '#B37FEB',
  '#FF85C0',
  '#FF7A45',
]

interface StyledWrapperProps {
  color: string
}

interface CarouselItemContentProps<T> {
  data: T | Course
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  background-color: ${(props) => props.color};
  height: inherit;
  border-radius: 12px;
  transition: transform 0.1s ease-out;
  padding: 5px;
  box-sizing: border-box;

  /* -- temporal styles -- */
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2a2a2a;
  /* --------------------- */

  &:hover {
    transform: scale(1.1);
  }
`

function CarouselItemContent<T>(props: CarouselItemContentProps<T>) {
  const { data } = props

  return (
    <StyledWrapper color={(data as Course).color || '#FFF'}>
      {(data as Course).name}
      {/* <img
        alt={data.name}
        src={data.image}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'inherit',
        }}
      /> */}
    </StyledWrapper>
  )
}

export default CarouselItemContent
