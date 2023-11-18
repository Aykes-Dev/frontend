import LoginForm from './components/login/loginForm'
import NavBar from './components/navbar/NavBar'

export default function Home() {
  return (
    <main className="items-center justify-between">
      <NavBar />
      <LoginForm />
    </main>
  )
}
