import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}







h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  
  
  font-weight: 900;
}

 h2 {
  
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
 
  font-size: 2rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}




.container {
  max-width: 120rem;
  margin: 0px auto;
  
}

.grid {
  display: grid;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      
      
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem;
   
    padding: 1.6rem 2.4rem;
    
    text-transform: uppercase;
   
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;

    
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }



 

.grid{
  gap: 3.2rem;
}

      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;
export default GlobalStyle;