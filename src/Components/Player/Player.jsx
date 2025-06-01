import { FaFlag } from 'react-icons/fa';
const Player = ({ player }) => {
    const { name, image, country, category, rating, batting_arm, bowling_arm, price } = player;
    return (
        <div className="">
            <div className="card border">
                <figure>
                    <img
                        className="w-[300px] h-[300px] object-cover"
                        src={image}
                        alt="Players" />
                </figure>
                <div className="p-4 space-y-3">
                    <div className="items-center flex gap-2">
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img className="object-cover" src={image} />
                            </div>
                        </div>
                        <h2 className="font-bold">{name}</h2></div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <p><FaFlag /></p>
                            <p className='text-[#00000052]'>{country}</p>
                        </div>
                        <p className='bg-gray-200 px-2 p-2 rounded-lg'>{category}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <h2 className='text-lg'>Rating</h2>
                        <p>{rating}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>{batting_arm}</p>
                        <p>{bowling_arm}</p>
                    </div>
                    
                    <div className='flex justify-between'>
                        <p className='font-bold'>price: ${price}</p>
                        <button className='btn'>Choose player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;