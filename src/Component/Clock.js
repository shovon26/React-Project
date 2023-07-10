import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        // console.log('clock component rendered');
        const { date, locale } = this.state;
        // let button;
        // if(locale === 'bn-BD'){
        //     button = (
        //         <Button change={this.handleClick} locale="en-US">
        //         </Button>
        //     );
        // }
        // else{
        //     button = (
        //         <Button change={this.handleClick} locale="bn-BD">
        //         </Button>
        //     );
        // }
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false}/>
                    ):
                    (<Button change={this.handleClick} locale="bn-BD" show/>  )
                }
            </div>
        );
    }
}

export default Clock;