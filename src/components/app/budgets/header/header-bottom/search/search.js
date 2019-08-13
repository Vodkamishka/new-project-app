import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeWindows = this.closeWindows.bind(this);
    }
    handleChange(event) {
        let p = new Promise(resolve => {
            this.setState({
                value: event.target.value
            })
            resolve()
        })
        
        p.then(()=> {
            this.props.budgetsSearched(this.state.value)
        })  
    }
    closeWindows () {
        const {showFiltersWindow, filtersWindowToggled, showIconViewSettingsWindow, iconSettingsToggled} = this.props;
            if (showFiltersWindow === true) {filtersWindowToggled()}
            if (showIconViewSettingsWindow === true) {iconSettingsToggled()}
    }
    render() {
        return (
            <div className='search-in-budgets'>

               <img src = 'images/icons/search.svg' alt = 'search'/>

               <input 
                    type = 'search'
                    value = {this.state.value}
                    onChange = {this.handleChange}
                    placeholder = 'Search in budgets...'
                    onClick = {this.closeWindows}
                />

            </div>
        )
    }
}
