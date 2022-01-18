import styled from 'styled-components'
import { Carousel, ItemContent } from 'components'

interface Course extends GenericWithKey {
  name: string
  color: string
}

const courses: Course[] = [
  { key: '1', name: '1', color: '#FFA940' },
  { key: '2', name: '2', color: '#73D13D' },
  { key: '3', name: '3', color: '#36CFC9' },
  { key: '4', name: '4', color: '#FFC53D' },
  { key: '5', name: '5', color: '#597EF7' },
  { key: '6', name: '6', color: '#9254DE' },
  { key: '7', name: '7', color: '#F759AB' },
  { key: '8', name: '8', color: '#A1A1AA' },
]

const CustomCard = styled(ItemContent)`
  /* -- my styles -- */
  background-color: ${(props) => props.color};
  height: 10vw;
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
    style={{ margin: '24px 0' }}
    data={courses}
    render={(data) => <CustomCard color={data.color}>{data.name}</CustomCard>}
  />
)

export default App
