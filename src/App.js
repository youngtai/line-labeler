import './App.css';
import React, {useState} from 'react';
import FileUpload from "./FileUpload";
import LinesViewer from "./LinesViewer";

function App() {
  const [data, setData] = useState([]);
  const handleFiles = async files => {
    const data = await Promise.all(files.map(async file => {
      const json = JSON.parse(await file.fileObj.text());
      return {id: file.name, data: json};
    }));
    // console.log(data);
    setData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        Line Labeler
      </header>
      <FileUpload onChange={handleFiles}/>
      <LinesViewer input={data}/>
    </div>
  );
}

export default App;
