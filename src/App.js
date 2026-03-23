import "./App.css";
import { LIST_TREE } from "./constant";
import TreeNode from "./pages/TreeNode";

function App() {
  return (
    <div className="App">
      <div>
        {LIST_TREE?.map((item) => (
          <div>
            <TreeNode key={item?.id} node={item}></TreeNode>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
