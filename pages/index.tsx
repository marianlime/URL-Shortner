import { useState } from 'react';
import { setNewUrl } from '../lib/redis-db';




export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string>();


  return (
    
    <div className='mainman'>
      <h1>My Lonly URL</h1>
      {shortUrl ?  (
      <div><a href={shortUrl}>{shortUrl}</a></div>
        ) :(
      
      <form onSubmit={ async (e) =>{
      e.preventDefault();
      
        const response = await fetch(`api/shortner`, {
          method: "POST",
          headers: {"Content-Type": "application/json"}, 
          body: JSON.stringify({ url: originalUrl}),
        })
        const data = await response.json();

        setShortUrl(
          `${document.location.protocol}//${document.location.host}/${data.shortened}`
          )
        
      }}>
        <h3>Enter your URL</h3>
        <input value = {originalUrl} onChange={e => setOriginalUrl(e.target.value)}/>
        <button className='slasher' type="submit">Slash!</button>
      </form>
      ) }    
    </div>
  )
}
