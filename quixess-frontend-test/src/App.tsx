import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { OnboardingModal } from './features/onboarding/OnboardingModal';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <OnboardingModal />
      </div>
    </ThemeProvider>
  );
}

export default App;
