import * as React from 'react';
import MealCard from '../MealCard';

export default (
  <MealCard
    time="8:00 AM"
    title="Greek yogurt with berries"
    kcal={220}
    mins={5}
    imageUrl="https://via.placeholder.com/80x80.png?text=Meal"
    isLastMealOfDay={false}
    mealState="active"
    uxpId="meal-card-default"
  />
);
