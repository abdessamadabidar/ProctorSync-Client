import ReactDOM from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {RouterProvider} from "react-router-dom";
import {router} from "@/routes/routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
    </ThemeProvider>
)
