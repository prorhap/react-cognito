import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Authenticator>
          {({ signOut, user }) => (
              <div>
                  <p>Welcome {user.username}</p>
                  <button onClick={signOut}>Sign out</button>
              </div>
          )}
      </Authenticator>
  );
}

export default App;
