import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorietrackerProps = {
    activities: Activity[]
}
export default function Calorietracker({activities} : CalorietrackerProps) {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
    const caloriesQuemadas = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? caloriesConsumed - activity.calories : total, 0), [activities])
    const caloriesTotales = useMemo(() => caloriesConsumed - caloriesQuemadas, [caloriesConsumed, caloriesQuemadas])

  return (
    <>
       <h2 className="text-3xl font-black text-white text-center "> Resumen de calorías</h2>    
    <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
   <CalorieDisplay  
    calories={caloriesConsumed}
    text='Consumidas'
   />
    
    <CalorieDisplay 
  calories={caloriesTotales}
  text="Calorías totales del día"
  />

  <CalorieDisplay  
    calories={caloriesQuemadas}
    text='Quemadas'
  />


  </div>
  </>
  )
}
