import React from 'react';
import RecommendationsService from '../utils/api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";


const recommendationsService = new RecommendationsService();

export default class TwitterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterHandle: '',
      mediaType: "news"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeMediaType = this.handleChangeMediaType.bind(this);
    this.sendExternalData = this.sendExternalData.bind(this);
    this.sendLoadingSignal = this.sendLoadingSignal.bind(this);
  }

  sendLoadingSignal = (isLoading) => {
    this.props.parentCallbackLoading(isLoading);
  }

  sendExternalData = (data) => {
    this.props.parentCallback(data);
  }

  handleChange(event) {
    this.setState({ twitterHandle: event.target.value });
  }

  handleKeyPress(event) {
    if (event.keyCode == 13) {
      this.handleSubmit(event);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendLoadingSignal(true);
    recommendationsService.getNewsRecs(this.state.twitterHandle)
      .then((res) => {
        this.sendLoadingSignal(false);
        console.log(res.data);
        this.sendExternalData(res.data);
      }).catch((err) => {
        this.sendLoadingSignal(false);
        throw (err);
      });
  }

  handleChangeMediaType(event) {
    this.setState({ mediaType: event.target.value });
  }

  render() {
    return (
      <form style={{ display: 'flex', flexWrap: 'wrap' }} noValidate autoComplete="off">
        <div alignItems="center">
          <TextField
            id="outlined-basic"
            style={{ width: 200 }}
            label="Twitter Handle"
            margin="normal"
            variant="outlined"
            value={this.state.twitterHandle}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon onClick={this.handleSubmit} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
      </form>
    );
  }
}