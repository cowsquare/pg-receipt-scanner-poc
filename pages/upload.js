import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { getData } from '../src/actions';
import { connect } from 'react-redux';

const styles = (theme) => ({
  input: {
    display: 'none'
  }
});

class MediaCapture extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  componentWillMount() {
    const {
      handleGetData
    } = this.props;
    handleGetData();
  }

  handleCapture = ({ target }) => {
    const fileReader = new FileReader();
    const name = target.accept.includes('image') ? 'images' : 'videos';

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      this.setState((prevState) => ({
        [name]: [...prevState[name], e.target.result]
      }));
    };
  };

  render() {
    const { classes, data } = this.props;

    return (
      <Fragment>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-photo"
          onChange={this.handleCapture}
          type="file"
        />
        <label htmlFor="icon-button-photo">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>

        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-photo"
          onClick={this.handleCapture}
          type="file"
        />
        <label htmlFor="icon-button-photo">
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <div>
          {JSON.stringify(data)}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.upload.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleGetData: params => getData(dispatch, params),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MediaCapture));