import Profile from "./Componets/Profile"
import "./index.css"

function App() {


  return (
    <div className="app">
      <Profile
        avatar="../public/avatar.jpeg"
        name="Daniel  Dantas"
        bio="Daniel Dantas é um desenvolvedor web."
        email="contatomarcosdgomes@gmail.com"
        phone="+55 (85) 99955-xxxx"
        githubUrl="https://github.com/mdanieldantas"
        linkedinUrl="www.linkedin.com/in/mdanieldantas"
        portifolioUrl="https://danieldantasdev.vercel.app"
        curriculoUrl="https://drive.google.com/file/d/1Z_tqBv6kg4wkDAQHAvY3lcuVSq3rabTt/view?usp=drive_link"
      />
    </div>
  )
}

export default App
