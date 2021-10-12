import React from 'react';
import './css/style.css';

class Button extends React.Component {
    shouldComponentUpdate(nextProps){
        const {change: currentChange , locale : currentLocale} = this.props;
        const {change: nextChange, locale: nextLocale} = nextProps;

        if(currentChange === nextChange && nextLocale === currentLocale){
            return false
        }
        return true
    }
    render(){
        const {change, locale, show} = this.props;
        return(
            <div className="body">
                <button type='button' onClick={() => change(locale)}>
                    {locale === "bn-BD" ? 'Bangla cloock' : 'English clock '}
                </button>
                {show && <p>English Clock</p>}
            </div>
        )
    }
};

export default Button;

