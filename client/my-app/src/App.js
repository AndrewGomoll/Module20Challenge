import './App.css';

function App() {
  return (
    <main>
    <header>
      <div id="Name">Andrew Gomoll</div>
      <nav>
        <a href="#About Me ">About Me</a>
        <a href="#Portfolio ">Portfolio</a>
        <a href="#Contact ">Contact</a>


      </nav>
    </header>
      <div id="About Me">
        <h1>About Me</h1>
        <p>My name is Andrew Gomoll. I am currently as student enrolled in the Michigan State Full Stack Development Bootcamp.
          I have Coding, Networking, and IT expirence from Oakland University, Oakland Community College,
          as well as Oakland School Technical Campus.</p>
        <div id="image"></div>
      </div>

      <div id="Portfolio">
        <h1>Portfolio</h1>
        <a href="https://andrewgomoll.github.io/Andrew-Gomoll-Module-2-Challenge/"><img src="Project1.PNG" alt="Project1"></img></a>
        <a href="https://andrewgomoll.github.io/AndrewGomoll-Module3-Challenge/"><img src="Project2.PNG" alt="Project2"></img></a>
        <a href="https://andrewgomoll.github.io/Module-4-Challenge/"><img src="Project3" alt="Project3.PNG"></img></a>
      </div>

      <div id="Contact">
        <h1>Contact</h1>
        <form>
          <input type="text" name="name" placeholder='Enter Name' required></input>
          <input type="text" name="email" placeholder='Enter Email' required></input>
          <input type="text" name="comments" placeholder='Enter Comments' required></input>
          <button id="button">Sumbit</button>
        </form>
      </div>
    <footer>
      <a href="https://github.com/AndrewGomoll">github</a>
      <a href="Resume.docx">Resume</a>
    </footer>
    <script  src=""></script>
    </main>

  );



  function requiredPrompt(name)
  {
    var button = document.getElementById("button");
    button.addEventListener("click", noInputMessage(name))
    if (name.value === "")
    window.prompt("This field is required");
  }

  function noInputMessage(name)
  {
    if (name.value === "")
    window.prompt("This field is required");
  }
}

export default App;
