import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

export default class Navigation extends Component {

  navigationItems = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/counter',
      label: 'Counter'
    },
    {
      path: '/info',
      label: 'Info'
    }
  ];

  renderNavItems() {
    return this.navigationItems.map(item => {
      return (
        <li className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
          <Link to={item.path} className="nav-link">
            {item.label}
            {(() => {
              if (location.pathname === item.path) return <span class="sr-only">(current)</span>;
            })()}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Inferno Starter Kit</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {this.renderNavItems()}
          </ul>
        </div>
      </nav>
    );
  }
}
