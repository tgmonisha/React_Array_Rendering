
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipeCard from './recipe';

const root= createRoot(document.getElementById('root'));
function Cards(){
  return(
    <>
     <header className='mainHead'>RECIPE MENU CARD</header>
    <div className='mainParent'>
        <RecipeCard 
          RecipeName="Masala Chai"
          time="Prep Time: 5 min | Cook Time: 10 min"        
          serving="Serves: 2 people"
          difficulty="Difficulty: Easy"
          type="Type:Beverage"
          chefname=" “Tea by Monisha”  | Recipe  Since 2000" 
          img="https://media.istockphoto.com/id/599909102/photo/indian-masala-chai-tea-spiced-tea-with-milk.jpg?s=612x612&w=0&k=20&c=wf4F5qKJFWn-MS41gfAMi6dgPOtlN8_fcwGXJL-ftVQ="/>

        <RecipeCard  
          RecipeName="Dosa"
          time="Prep Time: 20 min (batter overnight) | Cook Time: 5 min"
          serving="Serves: 2 people"
          difficulty="Difficulty: Medium"
          type="Type: Breakfast"
          chefname=" “South Indian Delight by Haarika” | Recipe Since 2005"
          img="https://t4.ftcdn.net/jpg/14/87/08/63/360_F_1487086307_TrQcEjsbQ1TAUk5A30EWqRp8aYvx9Yyb.jpg" />

        <RecipeCard 
          RecipeName="Puri"
          time="Prep Time: 15 min | Cook Time: 10 min"
          serving="Serves: 3 people"
          difficulty="Difficulty: Medium"
          type="Type: Breakfast "
          chefname=" “Golden Fluffy Treats by Sireesha” | Recipe Since 1995"
          img="https://media.istockphoto.com/id/1309890111/photo/masala-aloo-sabzi-or-indian-potato-curry-served-with-fried-puri-or-poori-with-sliced-onion.jpg?s=612x612&w=0&k=20&c=pRbAv50g-FnQO2EFt-U4QKatt11N4U0TbsT_9sbw1mA="/>

        <RecipeCard 
          RecipeName="Filter Coffee"
          time="Prep Time: 5 min | Brew Time: 10 min"
          serving="Serves: 2 people"
          difficulty="Difficulty: Easy"
          type="Type: Beverage"
          chefname=" “Authentic South Indian Coffee by Jesvith” | Recipe Since 2000"
          img="https://media.istockphoto.com/id/1426308134/photo/south-indian-filter-coffee-served-in-a-traditional-tumbler-or-cup-over-roasted-raw-beans.jpg?s=612x612&w=0&k=20&c=0_pG57x7SK2y8hEBpcMvUrmBLtkwwWfdKDD4p4BZqhk=" />

        <RecipeCard
          RecipeName="Idly"
          time="Prep Time: 15 min (batter overnight) | Cook Time: 12 min"
          serving="Serves: 4 people"
          difficulty="Difficulty: Easy"
          type="Type: Breakfast "
          chefname=" “Soft & Fluffy Idlis by Kavitha” | Recipe Since 1998"
          img="https://t4.ftcdn.net/jpg/04/39/31/29/360_F_439312935_lxOEQSqasYc5GeyHKgYJXWCIFm8gmQUN.jpg"/>

        <RecipeCard
          RecipeName="Ice Cream"
          time="Prep Time: 15 min | Freeze Time: 6 hrs"
          serving="Serves: 4 people"
          difficulty="Difficulty: Easy"
          type="Type: Dessert"
          chefname=" “Cool Treats by Yuvan” | Recipe Since 2010"
          img=" https://static.vecteezy.com/system/resources/thumbnails/028/273/149/small/satisfy-your-cravings-endless-options-of-mouth-watering-ice-cream-flavors-generative-ai-photo.jpg" />

        <RecipeCard 
          RecipeName="Roti with Curry"
          time="Prep Time: 20 min | Cook Time: 25 min"
          serving="Serves: 4 people"
          difficulty="Difficulty: Medium"
          type="Type: Main Course"
  
          chefname=" “Traditional Indian  Food by Sasikala” | Recipe Since 1985"
          img="https://media.istockphoto.com/id/968309596/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl-with-bread-or-roti.jpg?s=612x612&w=0&k=20&c=rl0JYh33uiM0LI9Op_s0Twzw0a9fqWblvbkWQUrjibo=" />

        <RecipeCard 
          RecipeName="Chicken Biryani"
          time="Prep Time: 30 min | Cook Time: 45 min"
          serving="Serves: 5 people"
          difficulty="Difficulty: Hard"
          type="Type: Main Course"
          chefname="“Royal Hyderabadi Taste by Nithya” | Recipe Since 1999"
          img="https://saihomefood.in/cdn/shop/products/n7.jpg?v=1572348312" />
        
       </div> 
    </>
  );
}
root.render(<Cards />);
