import Navbar from './component/nav';
import { MyComponent } from './component/MyComponent.jsx'; 

function App() {
  return (
<>
<Navbar name="ayaan" search={true}/>
<MyComponent/>
</>
  );
}

export default App;
