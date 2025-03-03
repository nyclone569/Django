import React, { Suspense, useEffect, useState } from "react";

import { createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import { routers } from "./pages/routes";

function App() {

  const element = useRoutes(routers)
  return(
    <Suspense fallback={<div>Loading...</div>}>
      {element}
    </Suspense>
  )
}

export default App;
