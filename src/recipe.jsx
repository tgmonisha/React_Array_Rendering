import Header from "./components/header";
import Info from "./components/info";
import Footer from "./components/footer";
export default function RecipeCard(){
    return(
      <div className='recipe-container'>
          <Header />
          <Info />
          <Footer />
      </div>
       
    );
}