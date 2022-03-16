import React from 'react';
import Cards from '../components/Cards';

const Ssr = ({ bookings }) => {
  return (
    <div>
      <h1>Server Side Rendering</h1>
      <p>
        Server-Side Rendering: Next. js pre-renders a page on each request. It
        will be slower because the page cannot be cached by a CDN, but the
        pre-rendered page will always be up-to-date.
      </p>
      {bookings.map((b, idx) => {
        const { title } = b.attributes;
        return (
          <div key={idx}>
            <p> {title} </p>
          </div>
        );
      })}
    </div>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://api-hackaton-jf.herokuapp.com/api/bookings');
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  console.log(data);
  const bookings = data.data;
  return {
    props: {
      bookings,
    },
  };
}

export default Ssr;
