
export default function RecipeCard({RecipeName,time,serving,difficulty,type,chefname,img}){
    return(
      <div className='recipe-container'>
          <header className="recipe-header">
               <h2>✨ {RecipeName} ✨</h2>
               <p>{time}</p>
          </header> 
          
          <section className="recipe-details">
            <div>
                 <p>{serving}</p>
                 <p>{difficulty}</p>
                 <p>{type}</p>
            </div>
            <img className="foodimg"
                 src={img}
                 alt="food image"
            />
          </section>
          
          <footer className="recipe-footer">
              <small>{chefname}</small>
          </footer>
      </div>
       
    );
}