import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
  <div>
<h1>Home Page</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic sed eum soluta cum aperiam aliquam officia nisi et repudiandae quo repellat nostrum omnis, eveniet iure modi inventore explicabo adipisci.</p>
  </div> 
  )
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export function Routing() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

