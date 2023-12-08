import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min"

import NavBar from './components/NavBar';

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    setUsers({"count":3,"data":[{"_id":"656a77e2e0146408496be4d1","title":"Olá, mundo! ATUALIZADO","author":"Tião Ricardo Rodrigues","publishYear":2024,"createdAt":"2023-12-02T00:18:42.823Z","updatedAt":"2023-12-02T00:19:12.309Z","__v":0},{"_id":"6570c8cbbdacd13d9a115055","title":"Hi, again","author":"Nouras","publishYear":2024,"createdAt":"2023-12-06T19:17:31.757Z","updatedAt":"2023-12-06T19:17:31.757Z","__v":0},{"_id":"657339ad9387911bf16af275","title":"Alice in the wonderful country","author":"Obama","publishYear":2024,"createdAt":"2023-12-08T15:43:41.376Z","updatedAt":"2023-12-08T15:43:41.376Z","__v":0}]})

  },[]);

  return (   
   <div className="container">
      <NavBar />

      <hr />

      <ul className="list-group">
        {users.count > 0 && users.data.map((item, key) => 
        <li key={key} className="list-group-item">{item.title}</li>  
        )}
              
      </ul>

   </div>
  );
}

export default App
