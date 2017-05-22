import React from 'react';
import Calculator from '../Calculator/Calculator';
import styles from './Main.css';
import AnswersListContainer from '../../containers/AnswersListContainer/AnswersListContainer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculations: [],
    };
  }
  handleCalculationAdded = (calculation) => {
    const calculations = this.state.calculations;
    calculations.push(calculation);
    this.setState({ calculations });
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          JavaScript Calculator
        </div>
        <Calculator
          onNewCalculation={this.handleCalculationAdded}
        />
        <div className={styles.answers}>
          <AnswersListContainer
            data={this.state.calculations}
          />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
};
