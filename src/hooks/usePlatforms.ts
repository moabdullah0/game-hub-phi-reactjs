import useData from "./useData"

interface PlatForm{
    id:number
    name:string
    slug:string
}
const usePlatForm =()=>useData<PlatForm>('/platforms/lists/parents')
export default usePlatForm;