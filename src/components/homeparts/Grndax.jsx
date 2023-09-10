import { useDispatch } from "react-redux"
import { addUser } from "../../store/slices/UserSlice"

let allData = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6}

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