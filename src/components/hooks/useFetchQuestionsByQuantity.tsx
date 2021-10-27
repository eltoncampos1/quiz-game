import { useEffect, useState } from "react"
import axios from "axios"
import { useQuestions } from "../../context/questions"

export const useFetchQuestionsByQuantity = () => {
    const {formValues} = useQuestions()
    const [quantity, setQuantity] = useState(Number(formValues.numberofQuestions))
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)
    const url = ` https://opentdb.com/api.php?amount=${quantity}`


    const fetch = async () => {
        try {
            setLoading(true)
            const {data} = await axios.get(url)
            
            setQuestions(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        setLoading(true)
        fetch()
        setLoading(false)

    }, [])

    return {questions, loading}
}