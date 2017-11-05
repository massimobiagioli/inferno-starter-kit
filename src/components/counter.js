import Inferno from 'inferno';
import Component from 'inferno-component';
import { connect } from 'inferno-redux';
import { counterInc, counterDec } from '../actions/counter_actions';

class Counter extends Component {
  render() {
    //console.log(this.props);
    return (
      <div className="countainer mt-4">
        <span>Counter: </span><span>{this.props.counter}</span>
        <div>
          <a
            className="btn btn-primary mr-2 p-2"
            href="#"
            onClick={this.increment.bind(this)}
            role="button">Inc</a>
          <a
            className="btn btn-primary p-2"
            href="#"
            onClick={this.decrement.bind(this)}
            role="button">Dec</a>
        </div>
      </div>
    );
  }

  increment() {
    this.props.counterInc(1);
  }

  decrement() {
    this.props.counterDec(1);
  }

}

function mapStateToProps(state) {
  return { counter: state.counter };
}

export default connect(mapStateToProps, { counterInc, counterDec })(Counter);
