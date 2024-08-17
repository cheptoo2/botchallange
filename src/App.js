import React,{useEffect,useState} from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./style.css"
function App (){
    const [bots, setBots] = useState([]);
    const[botArmy,setBotArmy]=useState([]);
  
    useEffect(() => {
      fetch('https://json-server-vercel-p7t5d0q7v-cheptoo-lornas-projects.vercel.app/bots')
        .then((res) => res.json())
        .then((data) => setBots(data));
    }, []); 

    const addBotToArmy = (bot) => {
        if (!botArmy.some((b) => b.id === bot.id)) {
          setBotArmy([...botArmy, bot]);
          
        }
      };

      const releaseBotFromArmy = (bot) => {
        setBotArmy(botArmy.filter((b) => b.id !== bot.id));
      };
    
      const dischargeBot = (bot) => {
        fetch(`'http://localhost:3000/bots'${bot.id}`, {
          method: 'DELETE',
        }).then(() => {
          setBots(bots.filter((b) => b.id !== bot.id));
          setBotArmy(botArmy.filter((b) => b.id !== bot.id));
        });
      };
    
return (
    <div className="app">
      <BotCollection bots={bots} addBotToArmy={addBotToArmy}/>
      <YourBotArmy bots={botArmy} releaseBotFromArmy={releaseBotFromArmy}
      dischargeBot={dischargeBot}/>
      </div>
)
}
export default App