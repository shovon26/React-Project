import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import {convert, toCelsius, toFahrenheit} from "../lib/Converter";

export default class Calculator extends React.Component {
    state = {temperature: '', scale: 'c'};

    handleChange = (e, scale) => {
      this.setState({
         temperature: e.target.value,
          scale: scale,
      });
    };
    render() {
        const {temperature, scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return(
            <>
                <TemperatureInput scale='c' temperature={celsius} onTemperaureChange={this.handleChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperaureChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
            </>
        );
    }
}