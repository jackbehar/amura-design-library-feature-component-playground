import React from "react";

export type MealSlotState =
  | "before_slot"
  | "active"
  | "missed"
  | "logged"
  | "loading";

export interface IMealCardProps {
  /** Time slot display (e.g., "8:00 AM") */
  time: string;
  /** Meal title/name */
  title: string;
  /** Calorie count */
  kcal: number;
  /** Cooking time in minutes */
  mins: number;
  /** Image URL for the meal */
  imageUrl: string;

  /** Time displayed on the right side */
  rightTime?: string;
  /** Show the Done button */
  showDoneButton?: boolean;
  /** Handler for Done button click */
  onDoneClick?: () => void;

  /** Show redo icon */
  showRedoIcon?: boolean;
  /** Handler for redo click */
  onRedoClick?: () => void;
  /** Custom redo icon element */
  redoIcon?: React.ReactNode;

  /** Show swap icon */
  showSwapIcon?: boolean;
  /** Handler for swap click */
  onSwapClick?: () => void;
  /** Custom swap icon element */
  swapIcon?: React.ReactNode;

  /** Current state of the meal slot */
  mealState?: MealSlotState;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Whether user can interact with buttons */
  canInteract?: boolean;
  /** Timestamp when meal was logged */
  loggedAt?: string;
  /** Whether this is the last meal of the day (affects timeline styling) */
  isLastMealOfDay: boolean;
  /** Custom class name */
  className?: string;
}
