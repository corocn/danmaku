import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const CommentScreen = () => {
  return (
    <div className="text">
      hoge
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CommentScreen} />
      </Switch>
    </Router>
  );
}
