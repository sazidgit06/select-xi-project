import {FaFlag} from 'react-icons/fa';
const Player = ({ player }) => {
    const { name, image, country } = player;
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
                        <div className='flex items-center gap-2'>
                            <p><FaFlag/></p>
                            <p className='text-[#00000052]'>{country}</p>
                        </div>
                    <div className="justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;