import * as React from 'react';
import MealCard from '../MealCard';

export default (
  <MealCard
    time="8:00 AM"
    title="Greek yogurt with berries"
    kcal={220}
    mins={5}
    imageUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80"
    isLastMealOfDay={false}
    mealState="active"
    uxpId="meal-card-default"
  />
);
