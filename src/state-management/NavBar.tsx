import LoginStatus from './auth/LoginStatus';
import { useCounterStore } from './counter';
import { useTasks } from './tasks';

const NavBar = () => {
  const { tasks } = useTasks();
  // Només es torna a renderitzar si canvia el counter
  const counter = useCounterStore(s => s.counter);

  return (
    <nav className='navbar d-flex justify-content-between'>
      <span className='badge text-bg-secondary'>{tasks.length}</span>
      <span className='badge text-bg-secondary'>{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
