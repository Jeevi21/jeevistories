import Header from "../utils/header";

export default function Blog() {
    return (
      <div className="bg-gray-800"> 
        <Header/>
        <section className="flex justify-center min-h-screen items-center">
            <div className="flex-col">
              <h1 className="text-4xl md:text-6xl text-center  font-bold text-indigo-500"> Cooking   
               <span className="text-white" > Stories....</span>
              </h1>
              </div>
            </section>
      </div>
    )
  }