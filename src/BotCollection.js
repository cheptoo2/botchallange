import React from "react";

function BotCollection ({bots, addBotToArmy}){
    return (
        <div>
          <h2>Bot Collection</h2>
          <div className="bot-collection">
            {bots.map((bot) => (
              <div key={bot.id} className="bot-card">
                <img src={bot.avatar_url} alt="pic"/>
                <h3>Id: {bot.id}</h3>
                <p>Name: {bot.name}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <p>Bot_class{bot.bot_class}</p>
                <p>Catchphrase: {bot.catchphrase}</p>
                <p>Created_at: {bot.created_at}</p>
                <p>Updated_at: {bot.updated_at}</p>
                <button onClick={() => addBotToArmy(bot)}>Add to Army</button>
              </div>
            ))}
          </div>
        </div>
      );
}
export default BotCollection