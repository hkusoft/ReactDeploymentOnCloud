import logo_default from './logo_react.svg';
import logo_fb from './logo_firebase.svg';
import logo_cf from './logo_cloudflare.png';
import {CodeBlock, CopyBlock, dracula, github, nord} from 'react-code-blocks';
import './App.css';

function App() {
    let logo;
    if (process.env.REACT_APP_NAME === 'React') {
        logo = logo_default;
    } else if (process.env.REACT_APP_NAME === 'Firebase') {
        logo = logo_fb;
    } else if (process.env.REACT_APP_NAME === 'Cloudflare') {
        logo = logo_cf;
    }
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    This is a react app hosted in {process.env.REACT_APP_NAME}.
                </p>

                <div className="left">
                    <CopyBlock text={`npx create-react-app proj-name      
cd proj-name
yarn
yarn start`}
                               theme={dracula}

                    />

                </div>
            </header>

        </div>
    );
}

export default App;
