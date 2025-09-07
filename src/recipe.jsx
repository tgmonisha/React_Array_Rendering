
export default function RecipeCard(props){
    return(
      <div className='recipe-container'>
          <header className="recipe-header">
               <h2>✨ {props.item.RecipeName} ✨</h2>
               <p>{props.item.time}</p>
          </header> 
          
          <section className="recipe-details">
            <div>
                 <p>{props.item.serving}</p>
                 <p>{props.item.difficulty}</p>
                 <p>{props.item.type}</p>
            </div>
            <img className="foodimg"
                 src={props.item.img}
                 alt="food image"
            />
          </section>
          
          <footer className="recipe-footer">
              <small>{props.item.chefname}</small>
          </footer>
      </div>
       
    );
}