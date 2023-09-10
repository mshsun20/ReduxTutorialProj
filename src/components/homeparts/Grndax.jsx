import { useDispatch } from "react-redux"
import { addUser } from "../../store/slices/UserSlice"

let allData = ['a','b','c','d','e','f']

const Grndax = () => {
  const dispatch = useDispatch()
  const addData = (dta) => {
    // console.log(dta)
    dispatch(addUser(dta))
  }

  return (
    <>
        <div>
          <button onClick={() => addData(allData)}>Add Data</button>
        </div>
    </>
  )
}

export default Grndax