import AddPost from "./AddPost"
import Timeline from "./Timeline"

const Main = () => {
  return (

    <>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-gray-800">
            <div className="w-full max-w-lg">
                <AddPost/>
                <Timeline/>
            </div>    
        </div>  
    </>

  )

}
export default Main