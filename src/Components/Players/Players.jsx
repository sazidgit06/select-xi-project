import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="w-11/12 mx-auto my-7 space-y-10">
            <div className="text-center md:flex justify-between items-center">
                <h3 className="font-bold text-2xl">Available Players</h3>
                <div>
                    <button className="p-2 rounded-l-lg bg-[#E7FE29] border font-medium">Available</button>
                    <button className="p-2 rounded-r-lg border">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    players.map(player => <Player player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;