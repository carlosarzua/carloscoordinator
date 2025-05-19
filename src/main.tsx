
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a root first, then render
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
