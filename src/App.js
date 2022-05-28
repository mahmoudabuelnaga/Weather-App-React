import React, {Component} from "react";
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

// API_KEY = "7d845ae894eb33c34cf3d4cc1dd6fa4d";


// http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=7d845ae894eb33c34cf3d4cc1dd6fa4d

class App extends Component{
  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: '',
    code: ''
  }
  API_KEY = "7d845ae894eb33c34cf3d4cc1dd6fa4d";

  getWeather = async (e) =>{
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
    try{
      let api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${this.API_KEY}`);
      let data = await api.json();
      console.log(data)
      if (data.cod === 200){
        this.setState({
          tempreature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: '',
          code: data.cod
        })

      }else if (data.cod === '400'){
        this.setState({
          tempreature: '',
          city: '',
          country: '',
          humidity: '',
          description: '',
          error: data.message,
          code: data.cod
        })

      }else if (data.cod === '404'){
        this.setState({
          tempreature: '',
          city: '',
          country: '',
          humidity: '',
          description: '',
          error: data.message,
          code: data.cod
        })
      }
      // this.setState({
        // tempreature: data.main.temp,
        // city: data.name,
        // country: data.sys.country,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        // code: data.cod
      // })

    }catch(err){
      // console.log(err)
      // try{
      //   this.setState({
      //     error:err.message,
      //     code:err.cod,
      //   })
      // }catch(err){
        
      // }
    }
        
  }
  

  render(){
    // console.log(this.state.error)
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather}/>
          <Weather code={this.state.code} tempreature={this.state.tempreature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error} />
        </div>
      </div>
    );
  }
}

export default App;
