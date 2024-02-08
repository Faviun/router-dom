import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage';
import News from './components/News/News';
import Maps from './components/Maps/Maps';
import WantedPets from './components/WantedPets/WantedPets';
import Wiki from './components/Wiki/Wiki';
import Messanges from './components/Messanges/Messanges';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import VetHelp from './components/VetHelp/VetHelp';
import PetStore from './components/PetStore/PetStore';
import PetShelters from './components/PetShelters/PetShelters';
import VolounterTeams from './components/VolounterTeams/VolounterTeams';
import OtherServices from './components/OtherServices/OtherServices';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "news",
        element: <News />
      },
      {
        path: "map",
        element: <Maps />
      },
      {
        path: "wanted",
        element: <WantedPets />
      },
      {
        path: "wiki",
        element: <Wiki />
      },
      {
        path: "messanges",
        element: <Messanges />
      },
      {
        path: "friends",
        element: <Friends />
      },
      {
        path: "groups",
        element: <Groups />
      },
      {
        path: "vhelp",
        element: <VetHelp />
      },
      {
        path: "pstore",
        element: <PetStore />
      },
      {
        path: "pshelters",
        element: <PetShelters />
      },
      {
        path: "vteams",
        element: <VolounterTeams />
      },
      {
        path: "oservices",
        element: <OtherServices />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
