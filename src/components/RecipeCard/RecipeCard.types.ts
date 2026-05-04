import { MouseEventHandler } from "react";

export type DietType =
  | "Vegan"
  | "Vegetarian"
  | "Omnivore"
  | "Eggetarian"
  | "Pescatarian"
  | "Fruitarian";

export interface IRecipeCardProps {
  /**
   * URL of the recipe image
   * @uxpincontroltype image
   */
  imageUrl: string;
  /** Name of the recipe */
  recipeName: string;
  /** Calorie count as a string (will be formatted with nFormatter) */
  calories?: string;
  /** Whether the recipe is easy to cook */
  easyToCook?: boolean;
  /** Display in inline/horizontal mode */
  isDisplayInLine?: boolean;
  /** Show action button */
  isButton?: boolean;
  /** Handler for button click */
  handleButton?: MouseEventHandler<HTMLSpanElement>;
  /** Text for the action button */
  buttonText?: string;
  /** Cooking time in seconds */
  cookingTime?: string;
  /** Diet type of the recipe */
  dietType?: DietType;
  /** Click handler for the card */
  onClick?: () => void;
  /** Custom class name */
  className?: string;
}
