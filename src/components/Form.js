import Grid from '@material-ui/core/Grid';
import React from 'react';
import RecommendationsService from '../utils/api';
import Axios from "axios";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


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
    this.handleChangeMediaType = this.handleChangeMediaType.bind(this);
    this.sendExternalData = this.sendExternalData.bind(this);
    this.sendLoadingSignal = this.sendLoadingSignal.bind(this);
  }

  // selected = false;
  // setSelected(sel) { this.selected = sel; }

  sendLoadingSignal = (isLoading) => {
    this.props.parentCallbackLoading(isLoading);
  }

  sendExternalData = (data) => {
    this.props.parentCallback(data);
  }

  handleChange(event) {
    this.setState({ twitterHandle: event.target.value });
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
        throw(err);
    });
  }

  handleChangeMediaType(event){
    this.setState({mediaType: event.target.value});
  }

  render() {
    return (
      <div>
        {/* <Grid item>
          <ToggleButtonGroup size="medium" value={1} exclusive onChange={this.handleChangeMediaType}>
            <ToggleButton key={1} value="left"
              selected={this.selected}
              onChange={() => {
              this.setSelected(!this.selected);
              }}>
              asdf
            </ToggleButton>,
            <ToggleButton key={2} value="center">
              asdf
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid> */}
        {/* <Grid item>
            <ButtonGroup
              color="secondary"
              size="large"
              aria-label="large outlined secondary button group"
            >
              <Button>News</Button>
              <Button>TV</Button>
            </ButtonGroup>
          </Grid> */}
        {/* <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          // className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
          variant="outlined"
        /> */}
        <form onSubmit={this.handleSubmit}>
          <label>
            Twitter Handle:
            <input type="text" value={this.state.twitterHandle} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      {/* <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Media Type</FormLabel>
          <RadioGroup aria-label="media" name="media1" value = {this.state.mediaType} onChange={this.handleChangeMediaType}>
            <FormControlLabel value="news" control={<Radio />} label="News Stories" />
            <FormControlLabel value="tv" control={<Radio />} label="TV Shows" /> 
          </RadioGroup>
        </FormControl>
      </div> */}
      </div>
      );
  }
}