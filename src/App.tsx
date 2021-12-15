import styled from 'styled-components'
import { Carousel, CarouselItemContent } from 'components'

const courses: Course[] = [
  { key: 'JavaScript', name: 'JavaScript', color: '#FFA940' },
  { key: 'TypeScript', name: 'TypeScript', color: '#73D13D' },
  { key: 'Go', name: 'Go', color: '#36CFC9' },
  { key: 'C/C++', name: 'C/C++', color: '#FFC53D' },
  { key: 'Python', name: 'Python', color: '#597EF7' },
  { key: 'Rust', name: 'Rust', color: '#9254DE' },
  // { name: 'Scala', color: '#F759AB' },
  // { name: 'Java', color: '#FFBB96' },
  // { name: 'HTML', color: '#FFD591' },
  // { name: 'CSS', color: '#FFE58F' },
]

const viewableItemsByBreakpoint: ViewableItemsByBreakpoint = {
  xl: 6,
  lg: 5,
  md: 3,
  sm: 2,
}

interface CustomCardProps {
  color: string
}

const CustomCard = styled(CarouselItemContent)<CustomCardProps>`
  /* -- my styles -- */
  background-color: ${(props) => props.color};
  height: 400px;
  border-radius: 12px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2a2a2a;
  /* --------------- */
`

const App = () => (
  <Carousel
    data={courses}
    viewableItemsByBreakpoint={viewableItemsByBreakpoint}
    render={(data) => <CustomCard color={data.color}>{data.name}</CustomCard>}
  />
)

export default App
