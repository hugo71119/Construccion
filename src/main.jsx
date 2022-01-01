import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layout from './layout/Layout'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Kitchen from './components/Kitchen'
// import Bathroom from './components/Bathroom'
// import Interiors from './components/Interiors'
// import Project from './components/Project'
// import Grill from './components/Grill'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import global_pt from "./translations/pt/global.json"
// import Error from './components/Error'
import App from './App'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         index: true,
//         element: <Home/>,
//       },
//       {
//         path: '/services',
//         element: <Project/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       },
//       {
//         path: '/contact',
//         element: <Contact/>,
//         errorElement: <Error/>
//       },
//       {
//         path: '/kitchen',
//         element: <Kitchen/>
//       },
//       {
//         path: '/bathroom',
//         element: <Bathroom/>
//       },
//       {
//         path: '/Interiors',
//         element: <Interiors/>
//       },
//       {
//         path: '/gril-paver',
//         element: <Grill/>
//       }
//     ]
//   }
// ])

i18next.init({
  interpolation: { escapeValue: false},
  lng: "en",
  resources: {
    es:{
      global: global_es
    },
    en:{
      global: global_en
    },
    pt:{
      global: global_pt
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App/>
        {/* <RouterProvider router={router}/> */}
      </I18nextProvider>
  </React.StrictMode>,
)
