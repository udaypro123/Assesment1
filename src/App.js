
import './App.css';
import Cards from './Components/cards/Cards';
import Cradssecond from './Components/cards/Cradssecond';
import Explore from './Components/cards/Explore';
import Card2 from './Components/clientsTestomonial/Card2';
import ClientsTestomoniyal from './Components/clientsTestomonial/ClientsTestomoniyal';
import FetureProjects from './Components/featureProjects/FetureProjects';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Logo from './Components/logo/Logo';
import Middlecaedpart from './Components/middlepart/Middlecaedpart';
import Plotpart from './Components/middlepart/Plotpart';
import ProjectAmenities from './Components/project Amenities/ProjectAmenities';
import ProjectHighlight from './Components/projectsHighlights/ProjectHighlight';


function App() {
  return (
    <div className="container">
      <Header />
      <Plotpart />
      <Middlecaedpart />
      <Logo/>
      <div className='carddiv'>
        <Cards imgsrc="../Screenshot 2023-05-24 140141.png"/>
        <Cards imgsrc="https://img.freepik.com/premium-photo/land-plot-building-house-aerial-view-land-field-with-pins-pin-location-housing-subdivision-residential-development-owned-sale-rent-buy-investment-home-house-expand-city-suburb_73523-7857.jpg"/>
        <Cards imgsrc="https://media.zameen.com/thumbnails/18144293-400x300.jpeg"/>
        <Cards imgsrc="https://is1-3.housingcdn.com/4f2250e8/2d141703334a38a52e29e8845c1dbc64/v0/fs/sj_maharaja_plotting_project-janla_1-bhubaneswar-sj_properties.jpeg"/>
      </div>
     <Explore/>
     <ProjectAmenities/>
    <FetureProjects/>
      <div className='carddiv1'>
        <Cradssecond imgsrc='https://static.langimg.com/thumb/85826979/plot-flate-85826979.jpg?imgsize=96996&width=540&height=405&resizemode=75'/>
        <Cradssecond imgsrc="https://www.wisdomproperties.com/web/assets/images/residental-plots-chennai.webp" />
        <Cradssecond imgsrc="https://is1-2.housingcdn.com/01c16c28/51799515cbef6504c4477a28af2ea655/v0/medium/residential_plot-for-sale-hazratganj-Lucknow-others.jpg"/>
        <Cradssecond imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIheoh0XgHsWW56xzx3AGGg5MVsU12YWuWLg&usqp=CAU" />
      </div>
      <ProjectHighlight/>
      <ClientsTestomoniyal/>
      <Card2/>
      <Footer/>
    </div>
  );
}

export default App;
