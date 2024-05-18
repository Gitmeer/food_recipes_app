import React, { useEffect, useState } from 'react'
import styles from './RecipeDetails.module.css'
import {useSelector} from 'react-redux';
function RecipeDetails() {
      const {recipe} =useSelector(state => state.currentRecipeSlice);
      console.log(recipe);
  return (
     <div className={styles.main}> 
        <div className={styles.contentSection}>
        <img src={recipe.image} className={styles.img}/>
            <div className={styles.detailsSection}>
               <p><b>Title :</b> {recipe.title}</p>
               <p><b>Description :</b> {recipe.description}</p>
               <h3>Steps</h3>
               {
                recipe.steps.map((step,i)=><p>{++i}) {step}</p>)
               }
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails;