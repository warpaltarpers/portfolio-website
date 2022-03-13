import Landing from './Landing';
import RightSlide from './RightSlide';
import LeftSlide from './LeftSlide';
import About from './About';

function Portfolio() {
  return (
    <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll'>
      <RightSlide
        content={
          <Landing />
        }
      />
      <LeftSlide
        content={
          <About />
        }
      />
    </div>
  );
}

export default Portfolio;
