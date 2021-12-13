import { FC } from 'react'
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
  index: number
}

interface CarouselItemContentProps extends StyledWrapperProps {
  data: Course
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  background-color: ${(props) => colors[props.index % colors.length]};
  height: inherit;
  border-radius: 12px;
  transition: transform 0.1s ease-out;
  padding: 5px;
  box-sizing: border-box;

  /* -- temporal styles -- */
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2a2a2a;
  /* --------------------- */

  &:hover {
    transform: scale(1.1);
  }
`

const CarouselItemContent: FC<CarouselItemContentProps> = (props) => {
  const { index } = props

  return (
    <StyledWrapper index={index}>
      {index + 1}
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
