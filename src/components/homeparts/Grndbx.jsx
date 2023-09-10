import { useSelector } from "react-redux"

const Grndbx = () => {
  const data = useSelector((state) => state.users)
  console.log(data)

  return (
    <>
        <div>
          {data[0]}
        </div>
    </>
  )
}

export default Grndbx