
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipeCard from './recipe';
import Data from './components/Data';

const root= createRoot(document.getElementById('root'));
function Cards(){
  return(
    <>
     <header className='mainHead'>RECIPE MENU CARD</header>
    <div className='mainParent'>
        {Data.map(item=>(<RecipeCard
        item={item} />
        ))}

       </div> 
    </>
  );
}
root.render(<Cards />);
