
type CalorieDisplayProps = {
   calories : number,
   text: string

}


export default function CalorieDisplay({calories, text} : CalorieDisplayProps) {
  return (
    <p className="text-white text-2xl font-bold rounded-full grid grid-cols-1 gap-3 text-center">
       <span className="font-black text-5xl text-orange"> {calories}</span>
       {text}
     </p>

  )
}
