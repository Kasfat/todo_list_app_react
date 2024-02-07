
import './App.css'
import AddTodoList from './components/AddTodoList'
import NavBar from './components/NavBar'
import ShowTodoList from './components/ShowTodoList'
import { TodosProvider } from './store/TodosData'

function App() {


  return (
    <>
    <TodosProvider>
    <main className=' w-full h-[100vh] bg-[#6983aa] flex flex-col justify-centera items-center'>
        <div className=' w-1/2 h-auto bg-white rounded shadow-lg mt-20'>
          <h1 className=' text-center font-bold text-2xl mb-4'> Todo List App</h1>
          <NavBar/>
          <AddTodoList/>
          <ShowTodoList/>
        </div>
      </main>
    </TodosProvider>
      
    </>
  )
}

export default App
