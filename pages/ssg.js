import Cards from '../components/Cards';

const Ssg = ({ bookings }) => {
  return (
    <div>
      <h1>Static Site Generation</h1>
      <h2>NOTICE ME HELLO BIG TEXT</h2>
      <p>
        Static Generation: The HTML is generated at build time and will be
        reused on each request and is usually uploaded to a CDN for fast
        caching.
      </p>
      <h3>What is this useful for?</h3>
      <hr />
      {bookings.map((b, idx) => {
        const { title } = b.attributes;
        return (
          <div key={idx}>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
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

export default Ssg;
