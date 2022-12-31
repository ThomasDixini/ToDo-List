import './header.module.scss';
import todoLogo from '../assets/todoLogo.svg'

export function Header(){
    return(
        <header>
            <img src={todoLogo} alt="Logo" />
        </header>
    );
}