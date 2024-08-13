import React from "react";
function YourBotArmy ({bots,releaseBotFromArmy, dischargeBot}){
    return (
        <div>
          <h2>Your Bot Army</h2>
          <div className="bot-army">
            {bots.map((bot) => (
              <div key={bot.id} className="bot-card">
                <img src={bot.avatar_url} alt="hfg"/>
                <h3>{bot.id}</h3>
                <p>{bot.name}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <p>Bot_class: {bot.bot_class}</p>
                <p>Catchphrase: {bot.catchphrase}</p>
                <p>Created_at: {bot.created_at}</p>
                <p>Updated_at: {bot.updated_at}</p>
                <button onClick={() => releaseBotFromArmy(bot)}>Release</button>
                <button onClick={() => dischargeBot(bot)}>X</button>
              </div>
            ))}
          </div>
        </div>
      );
}
export default YourBotArmy