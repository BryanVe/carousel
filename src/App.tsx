import { Carousel } from 'components'
import { Course } from 'types'

const courses: Course[] = [
  { name: 'JavaScript', color: '#FFA940' },
  { name: 'TypeScript', color: '#73D13D' },
  { name: 'Go', color: '#36CFC9' },
  { name: 'C/C++', color: '#FFC53D' },
  { name: 'Python', color: '#597EF7' },
  { name: 'Rust', color: '#9254DE' },
  { name: 'Scala', color: '#F759AB' },
  { name: 'Java', color: '#FFBB96' },
  { name: 'HTML', color: '#FFD591' },
  { name: 'CSS', color: '#FFE58F' },
]

const App = () => <Carousel<Course> data={courses} />

export default App
