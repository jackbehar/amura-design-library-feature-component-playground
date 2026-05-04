import { useCommonStyles } from "../../theme/CommonStyles";
import { useStyles } from "./RecipeCard.styles";
import {
  CaloriesIcon,
  CaloryIcon,
  CookingTimeNew,
  EasyIcon,
  EggetarianSmall,
  FruitarianSmall,
  NonVegetarianSmall,
  PescatarianSmall,
  VeganSmall,
  VegetarianSmall,
} from "./RecipeCard.svg";
import { DietType, IRecipeCardProps } from "./RecipeCard.types";

// Utility functions
const nFormatter = (num: number, digits: number): string => {
  const si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return `${(num / si[i].value).toFixed(digits).replace(rx, "$1")}${si[i].symbol}${num % 10 !== 0 && si[i].symbol ? "+" : ""}`;
};

const secondsToTime = (
  pseconds: number | string,
): { hours: number; minutes: number; seconds: number; timeString: string } => {
  const totalSecs = Number(pseconds);
  const hours = Math.floor(totalSecs / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;
  let h = "";
  let m = "";
  let s = "";
  if (hours > 0) h = `${hours}h`;
  if (minutes > 0) m = `${minutes}m`;
  if (seconds > 0) s = `${seconds}s`;

  return { hours, minutes, seconds, timeString: `${h} ${m} ${s}`.trim() };
};

// Diet type icon mapping
const getDietTypeSmallIcon = (dietType: DietType): JSX.Element | null => {
  const icons: Record<DietType, JSX.Element> = {
    Vegan: <VeganSmall />,
    Vegetarian: <VegetarianSmall />,
    Omnivore: <NonVegetarianSmall />,
    Eggetarian: <EggetarianSmall />,
    Pescatarian: <PescatarianSmall />,
    Fruitarian: <FruitarianSmall />,
  };
  return icons[dietType] || null;
};

/**
 * @uxpindocurl https://www.uxpin.com/docs/
 * @uxpindescription Recipe tile with image, diet icon, calories, cook time, and optional action.
 */
export default function RecipeCard(props: IRecipeCardProps) {
  const {
    onClick,
    imageUrl,
    recipeName,
    calories,
    easyToCook,
    isDisplayInLine,
    isButton,
    handleButton,
    buttonText,
    cookingTime,
    dietType,
    className,
  } = props;
  const { classes } = useStyles();
  const commonClass = useCommonStyles();

  return (
    <div
      className={`${classes.recipe} ${isDisplayInLine ? classes.displayLine : ""} ${className || ""}`}
      onClick={onClick}
    >
      <figure
        className={
          isDisplayInLine
            ? "figureWrapper"
            : `${classes.figureWrapper} ${imageUrl ? classes.hasImage : ""}`
        }
      >
        <img
          className={classes.recipeImg}
          src={imageUrl || "https://via.placeholder.com/135x125?text=No+Image"}
          alt={recipeName}
        />
        {isDisplayInLine ? null : (
          <div className={classes.figureTagsWrap}>
            <span className={classes.foodProperties}>
              {dietType && (
                <i className={`${classes.iconWrap} ${classes.fillIconColor}`}>
                  {getDietTypeSmallIcon(dietType)}
                </i>
              )}
              {dietType}
            </span>
            {easyToCook === true ? (
              <span className={classes.foodProperties}>
                <i className={classes.iconWrap}>
                  <EasyIcon />
                </i>
                Easy
              </span>
            ) : null}
          </div>
        )}
      </figure>

      <div className="contentDiv">
        <div className={classes.recipeNameDiv}>
          <span className={`${commonClass.body15Medium} ${classes.recipeName}`}>
            {recipeName}
          </span>
        </div>
        <div className={classes.flex}>
          {calories !== undefined && (
            <span className={classes.calories}>
              <span className={classes.calorieIcon}>
                <CaloryIcon />
              </span>
              {nFormatter(Number(calories), 1)} Kcal
            </span>
          )}
          {dietType !== undefined && (
            <span className={classes.calories}>
              <span className={classes.calorieIcon}>
                {getDietTypeSmallIcon(dietType)}
              </span>
              {dietType}
            </span>
          )}

          {cookingTime !== undefined && (
            <span className={classes.calories}>
              <span className={classes.calorieIcon}>
                <CookingTimeNew />
              </span>
              {secondsToTime(Number(cookingTime)).timeString}
            </span>
          )}

          {isDisplayInLine && easyToCook !== undefined && (
            <span className={classes.calories}>
              <span className={classes.calorieIcon}>
                <CaloriesIcon />
              </span>
              {easyToCook === true ? " Easy" : " Hard"}
            </span>
          )}
        </div>

        {isButton && (
          <span className={classes.button} onClick={handleButton}>
            {buttonText}
          </span>
        )}
      </div>
    </div>
  );
}
