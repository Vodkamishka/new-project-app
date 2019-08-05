import React from 'react';
import './header.css';
import HeaderUp from './header-up/header-up';
import HeaderBottom from './header-bottom/header-bottom';

export default function Header({newBudgetToggled, iconSettingsToggled, inBudgetsSeached, termDataTableUpdated, columnsNames, filtersWindowToggled }) {
    return (
        <div className = 'budgets__header'>
            <HeaderUp newBudgetToggled  = {newBudgetToggled }/>
            <HeaderBottom 
            iconSettingsToggled = {iconSettingsToggled}

            inBudgetsSeached = {inBudgetsSeached}
            termDataTableUpdated = {termDataTableUpdated}

            filtersWindowToggled = {filtersWindowToggled}

            columnsNames={columnsNames}
            />
            <div className = 'at-this-week'>
                <div className = 'at-this-week_title'>At this week</div>
                <div><img src='images/icons-png/shevron.png' alt='shevron' /></div> 
            </div>
        </div>
    )
}
