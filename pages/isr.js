import Cards from '../components/Cards';

const Isr = ({ bookings }) => {
  return (
    <div>
      <h1>ISR</h1>
      <p>
        Next.js allows you to create or update static pages after you’ve built
        your site. Incremental Static Regeneration (ISR) enables you to use
        static-generation on a per-page basis, without needing to rebuild the
        entire site. With ISR, you can retain the benefits of static while
        scaling to millions of pages.
      </p>
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

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
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
    revalidate: 10,
  };
}
export default Isr;
