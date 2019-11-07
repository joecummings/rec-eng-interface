import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default class TwitterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      media_type: "news"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeMediaType = this.handleChangeMediaType.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //axios.get(this.state.host + "/" + this.state.media_type+ "/" + this.state.value)
  }

  handleChangeMediaType(event){
    this.setState({media_type: event.target.value});
    alert("Media type changed")
  }

  render() {
    return (
      <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Twitter Handle:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Media Type</FormLabel>
          <RadioGroup aria-label="media" name="media1" value = {this.state.media_type} onChange={this.handleChangeMediaType}>
            <FormControlLabel value="news" control={<Radio />} label="News Stories" />
            <FormControlLabel value="tv" control={<Radio />} label="TV Shows" /> 
          </RadioGroup>
        </FormControl>
      </div>
      </div>
      );
  }
}