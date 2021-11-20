import HomePage from './pages/HomePage/HomePage';
import Container from './components/Container/Container';
import Phonebook from './pages/Phonebook';
import Navigation from './pages/Navigation/Navigation';

export default function App() {
  return (
    <Container>
      <Navigation />
      <HomePage />
      <Phonebook />
    </Container>
  );
}
