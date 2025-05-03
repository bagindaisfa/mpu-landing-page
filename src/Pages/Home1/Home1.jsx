import { useEffect } from 'react';
import About from '../../Component1Default/About/About';
import Banner from '../../Component1Default/Banner/Banner';
import Blog from '../../Component1Default/Blog/Blog';
import Brand from '../../Component1Default/Brand/Brand';
import ContentSlider from '../../Component1Default/ContentSlider/ContentSlider';
import Counter from '../../Component1Default/Counter/Counter';
import Feature from '../../Component1Default/Feature/Feature';
import LatestWork from '../../Component1Default/LatestWork/LatestWork';
import Pricing from '../../Component1Default/Pricing/Pricing';
import Service from '../../Component1Default/Service/Service';
import TeamMember from '../../Component1Default/TeamMember/TeamMember';
import Testimonial from '../../Component1Default/Testimonial/Testimonial';
import Work from '../../Component1Default/Work/Work';

const Home1 = () => {
  const addVisitor = async (page) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/visitors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ page: page }),
    });

    if (!response.ok) {
      throw new Error('Failed to record visitor');
    }

    return response.json();
  };

  useEffect(() => {
    const visited = sessionStorage.getItem('visited-home');

    if (!visited) {
      addVisitor('home')
        .then(() => {
          console.log('Visitor recorded');
          sessionStorage.setItem('visited-home', 'true');
        })
        .catch((error) => {
          console.error('Failed to record visitor', error);
        });
    }
  }, []);

  return (
    <>
      <Banner />
      {/* <Brand /> */}
      <Feature />
      <Service />
      <ContentSlider />
      <About />
      <Counter />
      <Work />
      {/* <Pricing /> */}
      {/* <LatestWork /> */}
      {/* <TeamMember /> */}
      {/* <Testimonial /> */}
      <Blog />
    </>
  );
};

export default Home1;
