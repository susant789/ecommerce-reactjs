import React from "react";
import CardPack from "./components/Card";
import data from "./data.json"

function App() {

  const [size,setSize]= React.useState("")
  const [sort,setSort]= React.useState("")

  return (
    <div className="grid-container">
      <header>
        <a href="/">Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <div className="container">
            {             
              data.products.map(product=>(
                <CardPack product={product} />
              ))             
            }
            </div>
          </div>
          <div className="sidebar">
              sidebar
          </div>
        </div>
      </main>
      <footer>
        All rights reserved
      </footer>
    </div>
  );
}

export default App;
