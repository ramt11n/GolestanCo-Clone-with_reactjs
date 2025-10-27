import react from 'react';
import reactDOM from 'react-dom/client';
import App from './components/app/app';

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
    <react.StrictMode>
        <App />
    </react.StrictMode>
)