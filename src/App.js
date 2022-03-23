
     import './App.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Menuber from './Componenets/Menuber/Menuber';
    import AllProducts from './Componenets/AllProducts/AllProducts';
    import { useEffect, useState } from 'react';
    import Aos from 'aos';
    import 'aos/dist/aos.css';
     
     function App() {
       const [count, setCount] = useState(0);

       const setCartCount = () => {
        setCount(count + 1);
       }

       useEffect(() => {
         Aos.init()
       }, [])

       return (
         <div className='App'>
          <Menuber count={count}></Menuber>
          <AllProducts setCartCount={setCartCount}></AllProducts>
         </div>
       )
     }
     
     export default App;


