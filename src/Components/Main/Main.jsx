
const Main = ({handleButton}) => {
    return (
        <div className="w-11/12 mx-auto my-7">
            <div
                className="hero min-h-[500px] rounded-xl"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/HLKDZT4L/bg-shadow.png')",
                }}
            >
                <div className="hero-overlay rounded-xl"></div>
                <div className="hero-content">
                    <div className="max-w-3xl space-y-5 text-center">
                        <img className="mx-auto" src="/src/assets/banner-main.png" alt="" />
                        <h1 className="text-xl md:text-3xl text-[#ffffff] font-bold">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h1>
                        <p className="text-[#ffffff7b]">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button onClick={handleButton} className="border border-[#E7FE29] p-1 rounded-lg">
                            <button className="btn bg-[#E7FE29] text-black font-bold border-[#E7FE29] hover:bg-[#cfe317] rounded-lg">Claim Free Credit</button>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;