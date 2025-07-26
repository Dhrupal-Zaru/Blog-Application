
import './App.css'
import AllBlogs from './components/AllBlogs'
import Blogs from './components/Blogs'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Blogs />
      <AllBlogs />
    </QueryClientProvider>
  )
}

export default App
