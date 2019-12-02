import React from 'react';
import RecommendationsService from '../utils/api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
      <div>
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
      <div alignItems = "center">
      <FormControl component="fieldset" >
        <FormLabel component="legend">Recommendation Type</FormLabel>
        <RadioGroup aria-label="rec_type" name="rec_type1" value={this.value} onChange={this.handleChangeMediaType}>
          <FormControlLabel value="news" control={<Radio />} label="News" />
          <FormControlLabel value="tv" control={<Radio />} label="TV" />
        </RadioGroup>
      </FormControl>
      </div>
      </div>
    );
  }
}