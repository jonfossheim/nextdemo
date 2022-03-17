import Image from 'next/image';
import { filterCards } from './index';

const Card = ({ data }) => {
  return (
    <div>
      <h1>Name: {data?.card?.name ? data?.card?.name : 'undefined'}</h1>
      {data?.card?.imageUrl ? (
        <Image
          width={250}
          height={375}
          src={data?.card?.imageUrl}
          alt={data?.card?.name}
        />
      ) : null}

      <p>Rarity: {data?.card?.rarity ? data?.card?.rarity : 'undefined'}</p>
      <p>setName: {data?.card?.setName ? data?.card?.setName : 'undefined'}</p>
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps(context) {
  // Call an external API endpoint to get posts
  const { params } = context;

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
  const temp = data.cards;
  const cards = filterCards(temp);
  const paths = cards.map((card) => ({
    params: { id: card.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
}

export default Card;
