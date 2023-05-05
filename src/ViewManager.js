import Navigation from './components/Navigation';
import Config from './components/Config';
import Todo from './components/Todo';
import Alexa from './components/Alexa';

export default function ViewManager() {
  const views = {
    nav: <Navigation />,
    config: <Config />,
    todo: <Todo />,
    alexa: <Alexa />
  }
  
  const currentView = Object.keys(views).find(view => window.location.href.includes(view));  
  return views[currentView] || <Navigation />;
}