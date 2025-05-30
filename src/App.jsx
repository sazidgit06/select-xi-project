import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Players from './Components/Players/Players';

function App() {
  const [coin, setCoin] = useState(0);

  const handleClaimButton = () => {
    setCoin(6000000);
  }

  return (
    <>
      <Header coin={coin}></Header>
      <Main handleButton={handleClaimButton}></Main>
      <Players></Players>
    </>
  )
}

export default App
