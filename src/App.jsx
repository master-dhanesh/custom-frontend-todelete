import { useEffect, useState } from 'react';
import axios from './config/axios';
import useSWR from 'swr';
const App = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('/api/v1', fetcher);

  if (isLoading) return <h1 className="text-3xl font-bold">loading...</h1>;

  if (error)
    return <h1 className="text-3xl font-bold">{error.response.data}</h1>;

  if (data)
    return (
      <div className="w-[80%] mx-auto my-10 p-5 bg-zinc-300 rounded">
        <h1 className="text-3xl font-bold">{data.message}</h1>
        <h2 className="text-2xl font-medium text-red-300">
          {import.meta.env.VITE_API_KEY}
        </h2>
      </div>
    );
};

export default App;

// const [info, setinfo] = useState(null);
// const getData = async () => {
//   try {
//     const { data } = await axios.get('/api/v1');
//     setinfo(data.message);
//   } catch (error) {
//     console.log(error);
//   }
// };
// useEffect(() => {
//   getData();
// }, []);
