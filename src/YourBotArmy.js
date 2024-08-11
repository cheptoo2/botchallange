import React from "react";
function YourBotArmy ({bots,releaseBotFromArmy, dischargeBot}){
    return (
        <div>
          <h2>Your Bot Army</h2>
          <div className="bot-army">
            {bots.map((bot) => (
              <div key={bot.id} className="bot-card">
                <h3>{bot.id}</h3>
                <p>{bot.name}</p>
                <button onClick={() => releaseBotFromArmy(bot)}>Release</button>
                <button onClick={() => dischargeBot(bot)}>X</button>
              </div>
            ))}
          </div>
        </div>
      );
}
export default YourBotArmy