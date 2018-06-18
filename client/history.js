import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory();

  const App = () => (
    <Router history={history} routes />
  )
export default history;
