import { useLocation } from 'react-router-dom';
import MainPage from './MainPage';

function Home(){
    const location = useLocation();
    const username = location.state.username;

    return (
        <div>
        <h2>Welcome, {username}!</h2>
        <MainPage/>
        </div>
    );
}

export default Home;