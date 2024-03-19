import { Box } from '@mui/material';
import './App.css';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <Box sx={{backgroundColor: '#e6e6ed', color: 'black', minHeight: '96vh', padding: '10px'}}>
        <Dashboard />
      </Box>
    </div>
  );
}

export default App;
