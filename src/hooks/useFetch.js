import { useState,useEffect} from "react"
import axios from "axios"

const useFetch = url => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(url)
        setData(res.data)
      }
      catch (err) {
        setError(err)
      }
      setLoading(false)
    };
    fetchData()
    return () => {
      setData([])
    }
  }, [url])

  // console.log("fff1")

  const reFetch = async () => {
    // console.log("fff2")
    setLoading(true)
    try {
      const res = await axios.get(url)
      setData(res.data)
    }
    catch (err) {
      setError(err)
    }
    setLoading(false)
  };


return {data,loading,error,reFetch}

}

export default useFetch