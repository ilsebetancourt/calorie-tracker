import { useReducer, useEffect, useMemo } from "react";
import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activity-reducer";
import ActivityList from "./components/ActivityList";
import Calorietracker from "./components/Calorietracker";

function App() {
  
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = useMemo(() => state.activities.length, [state.activities]);

  return (
    <>
      <header className="bg-indigo-400 py-5">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-black text-4xl font-black text-center"> Contador de calorías </h1>
          <button 
            className="bg-cyan-50 w-40 p-2 font-bold uppercase rounded-lg text-black cursor-pointer disabled:opacity-5"
            disabled={!canRestartApp}
            onClick={() => dispatch({ type: 'restart' })}
          >
            REINICIAR
          </button>
        </div> 
      </header>

      <section className="bg-indigo-100 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="bg-gray-800 py-10"> 
        <div className="max-w-4xl mx-auto"> 
          <Calorietracker activities={state.activities} />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
