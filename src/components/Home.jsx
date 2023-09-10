import Childa from "./homeparts/Childa"
import Childb from "./homeparts/Childb"
import { useEffect } from "react"
import axios from "axios"

const Home = () => {
  // console.log(store)
  let phn=8597124436
  const getLead = async () => {
    // const payld = {
    //   "SearchParameters": {
    //     "LeadIds": [
    //     "0acb9356-bcd1-4128-b63a-97f52cb8cc3c",
    //     "3aee22bd-8419-422a-8242-c510df9af021",
    //     "6ba78830-bd39-435f-8687-460b677f3fb4"
    //     ]
    //   },
    //   "Columns": {
    //   "Include_CSV": "CreatedOn, ModifiedOn, Phone, EmailAddress, ProspectId, OwnerIdEmailAddress, ProspectAutoID, FirstName, LastName, ProspectStage"
    //   },
    //   "Paging": {
    //   "PageIndex": 1,
    //   "PageSize": 1000
    //   }
    // }
    const api = `https://api-in21.leadsquared.com/v2/LeadManagement.svc/RetrieveLeadByPhoneNumber?accessKey=u$r80dceccd180f2da9118ae76188aa80af&secretKey=3597246096083d1d798c1d133356f107a751106c&phone=${phn}`
    const res = await axios.get(api)
    const data = await res.data[0]
    // console.log(data)
  }
  
  useEffect(() => {
    getLead()
  }, [])

  return (
    <>
        <div className="container">
            <div style={{margin:'0.5rem', border:'0.3rem solid #467ba6'}}>
              Home
            </div>
            <div>
              <Childa />
              <Childb />
            </div>
        </div>
    </>
  )
}

export default Home