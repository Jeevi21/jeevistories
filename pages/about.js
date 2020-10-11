import Header from "./utils/header";

export default function About() {
    return (
      <div className="bg-py"> 
        <Header/>
        <section className="flex justify-center min-h-screen items-center">
            <div className="flex-col">
              <h1 className="text-4xl md:text-6xl text-center  font-bold text-indigo-500"> Writing  
               <span className="text-white" > Soon....</span>
              </h1>
              </div>
            </section>
      </div>
    )
  }