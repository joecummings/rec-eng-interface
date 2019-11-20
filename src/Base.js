import Grid from '@material-ui/core/Grid';
import React from 'react';
import './App.css';
import ImgMediaCard from './components/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import TwitterForm from './components/Form';
import news from './news.svg';

export default class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: [],
            loading: false
        };
    }

    callbackFunc = (formData) => {
        this.setState({ recommendations: formData })
    }

    callbackFuncLoading = (isLoading) => {
        this.setState({ loading: isLoading });
    }

    render() {

        var button = this.state.loading ? <CircularProgress /> :
            <Grid id="top-row" container spacing={2} alignContent="space-between">
                {this.state.recommendations.map(item => (
                    <Grid key={item.title} item xs={4}>
                        <ImgMediaCard url={item.url} title={item.title} image={item.image} />
                    </Grid>
                ))}
            </Grid>
        return (
            <div>
                <Grid container spacing={4} alignItems="center" justify="center" direction="column">
                    <Grid item xs={12}>
                        <img src={news} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid item xs={12}>
                        <TwitterForm parentCallbackLoading={this.callbackFuncLoading} parentCallback={this.callbackFunc} />
                    </Grid>
                    <Grid item xs={12}>
                        {button}
                    </Grid>
                </Grid>
            </div >
        );
    }
}
