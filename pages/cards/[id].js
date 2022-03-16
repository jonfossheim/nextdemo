const Card = ({ data }) => {
  const { name, rarity, setName } = data.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>{rarity}</p>
      <p>{setName}</p>
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts

  const res = await fetch(
    `https://api.magicthegathering.io/v1/cards/${params.id}`
  );
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://api.magicthegathering.io/v1/cards');
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.cards.map((card) => ({
    params: { id: card.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export default Card;
