import Inferno from 'inferno';
import Component from 'inferno-component';
import Navigation from './navigation'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
