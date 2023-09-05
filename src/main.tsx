import React from 'react'
import ReactDOM from 'react-dom/client'
import {App, RootElement} from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createRoutesFromElements, Route} from "react-router";
import {PluginViewer} from "./pages/PluginViewer.tsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootElement/>}>
        <Route index element={<App/>}/>
        <Route path="/plugins" element={<PluginViewer/>}/>
    </Route>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
            <RouterProvider router={router}/>
  </React.StrictMode>,
)
