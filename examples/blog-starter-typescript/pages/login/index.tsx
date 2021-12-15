import { useRouter } from 'next/router'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'

const Login = (props) => {
     const router = useRouter()
 const registerUser = event => {
    event.preventDefault() 
    localStorage.setItem("userToken", event.target.email.value);
    router.replace(`/posts/${router.query.slug}`);
  }
  return (
    <Layout preview={true}>
      <Container>
        <Header />
        <div className="w-16 md:w-48">
  <form onSubmit={registerUser}>
        <label className="block">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
    Email
  </span>
  <input type="email" name="email" className="mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
  <br></br>
  <button 
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            type="submit">sign in</button>
            </form> 
            </div>
      </Container>
    </Layout>
  )
}

export default Login