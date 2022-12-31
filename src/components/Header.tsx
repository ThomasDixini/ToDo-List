import './header.module.css';
import todoLogo from '../assets/todoLogo.svg'

export function Header(){
    return(
        <header>
            <img src={todoLogo} alt="Logo" />
        </header>
    );
}