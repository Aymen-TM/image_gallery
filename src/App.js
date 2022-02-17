import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";




function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
   fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
   .then(res => res.json())
   .then(data => {
     setImages(data.hits)
     setIsLoading(false)
   })
   .catch(err => console.log(err))
  },[term])

  return (
    <div className="container mx-auto py-4">
      <Search searchText={setTerm} />

      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center">No Images Found</h1>}


      {isLoading ? <span className="text-6xl  block text-center text-black font-bold">Loading....</span>:
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 content-center">
        {images.map(image =>(
          <Card key={image.id}  image={image} />
        ))}
      </div>}
      
    </div>
  );
}

export default App;
