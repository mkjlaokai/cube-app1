import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { translate } from 'react-i18next';
import { i18n, changeLang } from '../../i18n';
import logo from './images/logo.svg';
import * as DemoActions from './actions';
import './style.css';

const mapStateToProps = ({ demo }) => ({ demo });

const mapDispatchToProps = dispatch => ({
  demoActions: bindActionCreators(DemoActions, dispatch),
});

export class Demo extends Component {
  static propTypes = {
    demo: PropTypes.object.isRequired,
    demoActions: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired,
  };

  render() {
    const { demo, demoActions, t } = this.props;
    const { count } = demo.toJS();
    return (
      <div className="demo">
        <div className="demo-header">
          <img src={logo} className="demo-logo" alt="logo" />
          <h2>{t('welcome')}</h2>
        </div>
        <div className="demo-content">
          <div>
            <h3>counter:{count}</h3>
          </div>
          <div className="demo-buttons">
            <Button onClick={() => demoActions.addCount()} icon="plus" />
            <Button
              className="demo-minus-count"
              onClick={() => demoActions.minusCount()}
              icon="minus"
            />
          </div>
          <div className="demo-buttons">
            <Button size="small" onClick={() => changeLang()}>
              {t('switchLang')}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('Demo', { wait: true, i18n })(
  connect(mapStateToProps, mapDispatchToProps)(Demo)
);
