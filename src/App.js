import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({categories: [], products: []});
  const [show, setShow] = useState([]);
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState(false);

  // for data load
  useEffect(() =>{  
    fetch("https://api.dev-sheba.xyz/v2/partners/37732/pos/products?is_shop=1")
    .then(data => data.json())
    .then(result => {
      const newD = {products: result.products, categories: result.categories};
      setData(newD)
      setShow(result.products);
    })
  }, [])


  // for filter
  // selected = [1, 5 , 7]
  useEffect(() =>{
    if(selected[0] == 'all'){
      setShow(data.products);
    }else{
      let allShow = [];
      selected.forEach(sel => {
        allShow = [...allShow, ...data.products.filter(pd => pd.category_id == sel)]
      })
      setShow(allShow);
    }
  },[selected])

  function handleChecks(e) {
    const inputs = document.querySelectorAll('input');
    const ni = []
    inputs.forEach(i =>{
      i.checked && ni.push(i.value);
    })
    setSelected(ni);  
  }

function selectAll() {
  const al = document.querySelector("#select-all");
  if(al.checked == true){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(i => i.checked = false);
    al.checked = true;
  } else {
    al.checked = false;
  }
}


  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="shortBtn">Short</button>
      <div style={{visibility: toggle ? "visible" : "hidden"}} className="shortOption">
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
      </div>
      <ul style={{listStyle: "none"}}>
        <li >            
            <label>
            <input onClick={selectAll} type="checkbox" name="all" id="select-all"/>
              All
            </label>
        </li>
        {
          data.categories.map(cate => 
          <li key={cate.id}>            
              <input type="checkbox" value={cate.id} id={cate.id}/>
              <label for={cate.id}>
              {cate.name}
              </label>
          </li>)
        }
      </ul>
        <button onClick={handleChecks}>Search</button>
        <button onClick={() => setSelected([])}>Reset</button>
      <ul>
      {
        show.map(data => <li key={data.id}>{data.name}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
