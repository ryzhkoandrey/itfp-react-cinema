import { useState } from 'react';

function Home() {
   const [count, setCount] = useState(0);

   return (
      <div style={{ padding: '100px 400px' }}>
         <p style={{ color: 'white', fontSize: '100px', marginBottom: '20px' }}>
            {count}
         </p>
         <button
            onClick={() => setCount((current) => current + 1)}
            style={{ fontSize: '50px', width: '100px' }}
         >
            +
         </button>
         <button
            onClick={() => setCount((current) => Math.max(current - 1, 0))}
            style={{ fontSize: '50px', width: '100px' }}
         >
            -
         </button>
      </div>
   );
}

export default Home;
