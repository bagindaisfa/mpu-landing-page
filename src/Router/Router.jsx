import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import Main11 from '../Main/Main11';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import ServiceInner from '../Pages/InnerPage/ServiceInner/ServiceInner';
import ServiceDetailsPD from '../Pages/InnerPage/ServiceDetails/ServiceDetailsPD';
import ServiceDetailsTA from '../Pages/InnerPage/ServiceDetails/ServiceDetailsTA';
import ServiceDetailsEE from '../Pages/InnerPage/ServiceDetails/ServiceDetailsEE';
import ServiceDetailsHCC from '../Pages/InnerPage/ServiceDetails/ServiceDetailsHCC';
import ServiceDetailsVBC from '../Pages/InnerPage/ServiceDetails/ServiceDetailsVBC';
import ServiceDetailsOD from '../Pages/InnerPage/ServiceDetails/ServiceDetailsOD';
import PortfolioDetails from '../Pages/InnerPage/PortfolioDetails/PortfolioDetails';
import BlogDetails from '../Pages/InnerPage/BlogDetails/BlogDetails';
import TeamInner from '../Pages/InnerPage/TeamInner/TeamInner';
import PricingInner from '../Pages/InnerPage/PricingInner/PricingInner';
import ContactInner from '../Pages/InnerPage/ContactInner/ContactInner';
import PortfolioInner from '../Pages/InnerPage/PortfolioInner/PortfolioInner';
import BlogGrid from '../Pages/InnerPage/BlogGrid/BlogGrid';
import Assessment from '../Pages/InnerPage/Assessment/Assessment';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home1 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main11 />,
    children: [
      {
        path: '/about',
        element: <AboutInner />,
      },
      {
        path: '/service',
        element: <ServiceInner />,
      },

      {
        path: '/service/people-development',
        element: <ServiceDetailsPD />,
      },
      {
        path: '/service/talent-acquisition',
        element: <ServiceDetailsTA />,
      },
      {
        path: '/service/employee-engagement',
        element: <ServiceDetailsEE />,
      },
      {
        path: '/service/human-capital-consultancy',
        element: <ServiceDetailsHCC />,
      },
      {
        path: '/service/vetting-background-check',
        element: <ServiceDetailsVBC />,
      },
      {
        path: '/service/organisation-development',
        element: <ServiceDetailsOD />,
      },

      // {
      //   path: '/solution_details_1',
      //   element: <SolutionDetails1 />,
      // },
      // {
      //   path: '/solution_details_2',
      //   element: <SolutionDetails2 />,
      // },
      // {
      //   path: '/solution_details_3',
      //   element: <SolutionDetails3 />,
      // },
      {
        path: '/portfolio_details',
        element: <PortfolioDetails />,
      },
      {
        path: '/blog_grid',
        element: <BlogGrid />,
      },
      {
        path: '/blog_details/:id',
        element: <BlogDetails />,
      },
      {
        path: '/team',
        element: <TeamInner />,
      },
      {
        path: '/portfolio',
        element: <PortfolioInner />,
      },
      {
        path: '/pricing',
        element: <PricingInner />,
      },
      {
        path: '/contact',
        element: <ContactInner />,
      },
      {
        path: '/assessment',
        element: <Assessment />,
      },
    ],
  },
]);

export default router;
