import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render () {
       
        // const icon1 = '/images/icon1.png';
        // const icon2 = '/images/icon2.png';
        // const icon3 = '/images/icon3.png';
        // const icon4 = '/images/icon4.png';
        // const ihLogo = '/images/ironhack-logo.svg';
        // const reactLogo = '/images/react-logo.svg';
        // const menuBarImage = '/images/menu-top.svg';

        const theDescription = (descriptionUrl) => {
            return <p class="description">{descriptionUrl}</p>
        };

        const theTitle = (titleUrl) => {
            return <h3 class="title">{titleUrl}</h3>
        };

        const theComponents = (compoUrl) => {
            return <img src={compoUrl} width='200' height='200'/>
        };

        return (
            <div className="App">
                <section class="black">
                    <div class="nav">
                        <img src="./images/ironhack-logo.svg" alt="Ironhack logo" />
                        <img src="/images/menu-top.svg" alt="Menu top icon" />
                    </div>
                    <h1 class="font-white">Say hello to <br/>
                    ReactJS
                    </h1>
                    <p class="font-white-little">You will learn how to use <br/>
                    the most popular frontend library, <br/>
                    and become a super Ninja developer.
                    </p>
                    <div class="awesome">
                        <p class="squared">Awesome!</p>
                    </div>
                </section>
                <section class="four-things">
                    <div class="components">
                        {theComponents('./images/icon1.png')}
                        {theTitle('Declarative')}
                        {theDescription('React makes it')}
                        {theDescription('painless to create')}
                        {theDescription('interactive UIs.')}
                    </div>
                    <div class="components">
                        {theComponents('./images/icon2.png')}
                        {theTitle('Components')}
                        {theDescription('Build encapsulated')}
                        {theDescription('components that')}
                        {theDescription('manage their state.')}
                    </div>
                    <div class="components">
                        {theComponents('./images/icon3.png')}
                        {theTitle('Single-Way')}
                        {theDescription('A set of inmutable')}
                        {theDescription('values are passed to')}
                        {theDescription("the component's.")}
                    </div>
                    <div class="components">
                        {theComponents('./images/icon4.png')}
                        {theTitle('JSX')}
                        {theDescription('Statically-typed,')}
                        {theDescription('design to run on')}
                        {theDescription('modern browsers.')}
                    </div>
                </section>
            </div>
        );
            
    }
}

export default App;