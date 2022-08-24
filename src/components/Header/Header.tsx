import './Header.css'
import { Fragment } from 'react'


interface IHeader 
{
    user: string
}

const Header: React.FC<IHeader> = ({user}: IHeader) => {
    
    return (
        <div className="header_container__div">
            <div className="salutation">
                <h1>Hello, {user}</h1>
            </div>
            <div className="date_time">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                <hr className="divider"/>
            </div>
        </div>
        
    )

}

export default Header