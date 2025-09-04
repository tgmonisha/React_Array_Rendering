
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipeCard from './recipe';

const root= createRoot(document.getElementById('root'));
function Cards(){
  return(
    <>
        <RecipeCard />
    </>
  )
}
root.render(<RecipeCard />);
