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
  const [userFullName, setUserFullName] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const clientId: string =
    "519426874197-o3jlhftgfofimfnl7an4ph1ii6n5ugo0.apps.googleusercontent.com";

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
      }}
    >
      <Login />
    </Context.Provider>
  );
};

export default App;
