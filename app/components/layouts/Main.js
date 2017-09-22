import React from 'react';
import { Progress, Navigation, Footer, TopHeader } from './partials/index';
import { correctHeight, detectBody } from '../../helpers/Helpers';
import {browserHisory} from 'react-router';
import agent from "../../agent";

class Main extends React.Component {

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <Progress />
                <Navigation location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>

                    <TopHeader />

                    {this.props.children}

                    <Footer />

                </div>

            </div>

        )
    }

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }
    }

    componentDidMount() {
        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
}

export default Main