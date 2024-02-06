
import './App.css'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <main className=' w-full h-[100vh] bg-[#6983aa] flex flex-col justify-centera items-center'>
        <div className=' w-1/2 h-auto bg-white rounded shadow-lg mt-20'>
          <h1 className=' text-center font-bold text-2xl mb-4'> Todo List App</h1>
          <NavBar/>
          <form className=' flex gap-3 py-10 px-10'>
          <input type='text' className=' border-[1px] border-[#cccccc] w-full font-medium text-[16px] px-3 py-1 rounded-md'/>
          <button type='submit' className=' rounded py-3 px-10 font-medium text-[#fff] bg-[#68b984] cursor-pointer'>Add</button>
          </form>

        </div>
      </main>
    </>
  )
}

export default App
