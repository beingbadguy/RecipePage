const Recipe = () => {
  return (
    <div className='mx-10 select-none'>
      <div className='py-[4%]'>
        <img src='/public/image-omelette.jpeg' alt='' className=' rounded-xl' />
      </div>
      <div>
        <h1 className='font-bold text-[2rem]'>Simple Omlette Recipe</h1>
        <p className='my-3'>
          An easy and quick dish, perfect for any meal. This classic omlette combines beaten eggs
          cooked to perfection,optionally filled with your choice of cheese, vegetables, or meals.
        </p>
      </div>
      <div className='bg-pink-100 p-[15%] sm:p-[5%] rounded'>
        <p className='font-bold text-[1rem] -m-[15px] text-purple-400'>Preparation time</p>
        <ul className='list-disc mt-5 flex flex-col gap-2'>
          <li>
            <span className='font-bold'>Total: </span>Approximately 10 minutes
          </li>
          <li>
            <span className='font-bold'>Preparation: </span> 5 minutes
          </li>
          <li>
            <span className='font-bold'>cooking: </span>5 minutes
          </li>
        </ul>
      </div>

      <div className='mt-5'>
        <p className='font-bold text-[2rem] text-amber-900'>Ingredients</p>
        <ul className='list-disc p-[2%] flex flex-col gap-4'>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>
      <hr />
      <div className='mt-5'>
        <p className='font-bold text-[2rem] text-amber-900'>Instructions</p>
        <ul className='list-decimal p-[2%] flex flex-col gap-6'>
          <li>
            <span className='font-bold'>Beat the eggs: </span>In a bowl, beat the eggs with a pinch
            of saltand pepper until they are well mixed. You can add tablespoon of water or milk for
            a fluffer texture.
          </li>
          <li>
            <span className='font-bold'>Heat the pan:</span> Place a non-stick fryingpan over medium
            heat andadd butter or oil.
          </li>
          <li>
            <span className='font-bold'>Cook the omlette: </span>Once the butter is melted and
            bubbling , pour in the eggs . Tilt the pan to ensure the eggs evenly coat the surface.
          </li>
          <li>
            <span className='font-bold'>Add fillings(optional): </span>
            When the eggs begin to set at the edges but are still slightly runny in the middle,
            sprinkle your chosen fillings over one half of the omlette.
          </li>
          <li>
            <span className='font-bold'>Fold and serve: </span>
            As the omlette continues to cook , carefully lift one edge and fold it over the fillings
            . Let it cook for another minute , then slide it onto a plate.
          </li>
          <li>
            <span className='font-bold'>Enjoy: </span>Serve hot, with additional salt and pepperif
            needed.
          </li>
        </ul>
      </div>

      <div className='mt-5 mb-10'>
        <h1 className='font-bold text-[2rem] text-amber-900 mb-2'>Nutrition</h1>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <div className='flex justify-between mt-4 mb-3'>
          <p>Calories</p>
          <p className='cal font-bold '>277 kcal</p>
        </div>
        <hr />

        <div className='flex justify-between mt-4 mb-3'>
          <p>carbs</p>
          <p className='cal font-bold '>0 g</p>
        </div>
        <hr />

        <div className='flex justify-between  mt-4 mb-3'>
          <p>Protein</p>
          <p className='cal font-bold '>20 g</p>
        </div>
        <hr />

        <div className='flex justify-between mt-4 mb-3'>
          <p>Fat</p>
          <p className='cal font-bold '>22 g</p>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Recipe;
