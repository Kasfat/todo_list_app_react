import AddTodoList from "./components/AddTodoList";
import NavBar from "./components/NavBar";
import ShowTodoList from "./components/ShowTodoList";
import { TodosProvider } from "./store/TodosData";

function App() {
  return (
    <>
      <TodosProvider>
        <main className=" w-full min-h-[100vh] bg-[#6983aa] flex flex-col justify-centera items-center">
          <div className=" w-[90%] md:[75%] lg:w-[60%] h-auto bg-white rounded shadow-lg mt-20 mb-20">
            <h1 className=" text-center font-bold text-2xl my-4">
              Todo List App
            </h1>
            <NavBar />
            <AddTodoList />
            <ShowTodoList />
          </div>
        </main>
      </TodosProvider>
    </>
  );
}

export default App;
