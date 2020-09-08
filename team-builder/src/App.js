import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form";
import TeamList from "./Components/TeamList";

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Chucky Qiu",
      email: "chucky-qiu@lambdastudents.com",
      class: "WebPT20",
      role: "Newbie"
    }
  ]);

  const addNewTeam = teamData => {
    const newTeam = {
      id: Date.now(),
      name: teamData.name,
      email: teamData.email,
      class: teamData.class,
      role: teamData.role
    };
    setTeam([...team, newTeam]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewTeam = {addNewTeam}/>
      <TeamList team = {team}/>
    </div>
  );
}

export default App;
