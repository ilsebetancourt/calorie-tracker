import { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo , Dispatch} from "react"
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { XCircleIcon } from "@heroicons/react/16/solid"
import { ActivityActions } from "../reducers/activity-reducer"

type ActivityListProps = {
    activities : Activity [ ]
    dispatch : Dispatch<ActivityActions>
}

export default function ActivityList({activities, dispatch} : ActivityListProps) {

  const categoryName = useMemo(() => 
    (category : Activity["category"]) => {
      const cat = categories.find(cat => cat.id === category);
      return cat ? cat.name : " ";
    }, [])

  return (
    <>
    
    <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

    {activities.length === 0 ? <p className="text text-center text-lg my-8">No hay actividades aún</p> : (
    
    activities.map (activity => (

       <div key={activity.id} className="px-10 py-10 bg-slate-100 mt-10 flex justify-evenly ">
         <div className="space-y-2 relative">
           <p className={`absolute -top-10 -right-6 px-15 py-2 text-white uppercase font-bold  ${activity.category === 1 ? 'bg-indigo-950' : 'bg-red-900'}`}>
            {categoryName(+activity.category)}
           </p>
           <p className="text-2xl font-bold pt-5">{activity.name}</p>
           <p className="font-black text-4xl text-left text-indigo-600">{activity.calories} <span>Calorías</span></p>
         </div>

         <div className="flex gap-5 items-center">
           <button
               onClick={() => dispatch({type: 'set-activeId' , payload: {id : activity.id}})}>

             <PencilSquareIcon  
               className="h-8 w-8 text-gray-800"
             />

           </button>
              
           <button
               onClick={() => dispatch({type: 'delete-activity' , payload: {id : activity.id}})}>

             <XCircleIcon 
               className="h-8 w-8 text-red-700"
             />

           </button>



           </div>
       </div>

    ))
    )}
    
    </>


  )
}

