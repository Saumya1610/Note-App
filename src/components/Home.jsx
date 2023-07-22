import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <body>
        <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" />
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap');

        :root {
          --color: #333; 
        }
        body {
  font-family: 'Red Hat Text', sans-serif;
}

.container {
  text-align: center;
  color: var(--color);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80);
  background-size: cover;
  background-position: center;
  
/*  this is where the magic happens:  */
  background-attachment: fixed;
}

h1 {
  font-weight: 700;
  font-size: 3rem;
}

p {
  max-width: 52ch;
  line-height: 1.5;
  padding: 1em;
}

a {
  display: inline-block;
  padding: 1em 3.5em;
  background-color: var(--color);
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.3em;
  font-weight: 700;
  letter-spacing: .5px;
  font-size: .875rem;
}

.blank,
.other {
  width: 100%;
  min-height: 60vh;
  background-color: var(--color);
}

.second {
  background-image:url(https://images.unsplash.com/photo-1514496959998-c01c40915c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80);
  background-attachment: fixed;
  height: 1200px;
}

h3 {
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 1em;
}

.card > a {
  margin-bottom: 2em;
}

.item {
  display: flex;
  max-width: 320px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: .5em;
  -webkit-box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  -moz-box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
}

.img {
  width: 90%;
  height: 200px;
  background-color: lightgrey;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: .3em;;
}

.img-first {
  background-image: url(https://static.vecteezy.com/system/resources/previews/016/712/112/non_2x/marker-low-poly-background-icon-vector.jpg);
  filter: grayscale(100%);
}

.img-second {
  background-image: url(https://static.vecteezy.com/system/resources/previews/016/693/257/original/write-notes-low-poly-background-icon-vector.jpg);
  filter: grayscale(100%);
}

.img-third {
  background-image: url(https://static.vecteezy.com/system/resources/previews/016/689/631/original/search-results-low-poly-background-icon-vector.jpg);
  filter: grayscale(100%);
}


.second {
  flex-direction: row;
  gap: 1.6em;
}
`}
      </style>
    </Helmet>
<div class="container">
  <h1>SeaScribe</h1>
  <p> "Unleash Your Creativity: Take Notes, Make Waves!"<br/>
  Be on Top: Elevate Your Potential, Excel in Life</p>
  <Link to = '/login'>Create Notes</Link>
</div>

<div class="blank"></div>

<div class="container second">
  <div class="item">
    <div class="img img-first"></div>
    <div class="card">
      <h3>Make Notes</h3>
      <p>Effortlessly create and organize notes with our user-friendly feature.</p>
    </div>
  </div>
  <div class="item">
    <div class="img img-second"></div>
    <div class="card">
      <h3>Edit Notes</h3>
      <p>Seamlessly edit and refine your notes with our intuitive editing feature.</p>
    </div>
  </div>
  <div class="item">
    <div class="img img-third"></div>
    <div class="card">
      <h3>Search Notes</h3>
      <p>Easily find and access your notes using our powerful search feature.".</p>

    </div>
  </div>
</div>

<div class="blank"></div>
</body>
    )
}
export default Home;