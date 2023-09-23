import Categories from "../Categories/Categories"
import SectionHeader from "../SectionHeader/SectionHeader"
import Banner from "./Banner"

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionHeader title={'Job Category List'} desc={'Explore thousands of job opportunities with all the information you need. Its your future'} />
      <Categories />
    </div>
  )
}

export default Home