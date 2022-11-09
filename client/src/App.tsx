import { FC, useState } from "react";
import { Context } from "./Shared/Context";
import "./App.css";
import Login from "./Components/Login";

const App: FC = (): JSX.Element => {
  const [url, setUrl] = useState<string>(
    "https://data-ethics-game.herokuapp.com/api/v1"
  ); // https://data-ethics-game.herokuapp.com/api/v1 || http://localhost:4000/api/v1
  const [userFirstName, setUserFirstName] = useState<string | null>(null);
  const [userLastName, setUserLastName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [googleUserEmail, setGoogleUserEmail] = useState<string | null>(null);
  const [googleUserFirstName, setGoogleUserFirstName] = useState<string | null>(
    null
  );
  const [googleUserLastName, setGoogleUserLastName] = useState<string | null>(
    null
  );
  const [googleUserFullName, setGoogleUserFullName] = useState<string | null>(
    null
  );
  const [googleUserImage, setGoogleUserImage] = useState<string | null>(null);
  const [userFullName, setUserFullName] = useState<string | null>(null);
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [player, setPlayer] = useState([]);

  return (
    <Context.Provider
      value={{
        setUserFullName,
        setUserEmail,
        userFirstName,
        setUserFirstName,
        userLastName,
        setUserLastName,
        userEmail,
        userFullName,
        image,
        setImage,
        url,
        setUrl,
        googleUserEmail,
        setGoogleUserEmail,
        googleUserFullName,
        setGoogleUserFullName,
        googleUserImage,
        setGoogleUserImage,
        googleUserLastName,
        setGoogleUserLastName,
        googleUserFirstName,
        setGoogleUserFirstName,
        userExists,
        setUserExists,
        player,
        setPlayer,
      }}
    >
      <Login />
    </Context.Provider>
  );
};

export default App;
