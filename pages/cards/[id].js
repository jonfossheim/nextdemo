import Image from 'next/image';
import { filterCards } from './index';
import Head from 'next/head';

const Card = ({ data: { card } }) => {
  const { name, originalText, id, imageUrl, rarity, setName } = card;
  return (
    <div>
      <Head>
        <title>MTG: {name}</title>
        <meta property='og:title' content={originalText} key={id} />
      </Head>
      <p>test: {name}</p>
      <h1>Name: {name}</h1>

      <Image width={250} height={375} src={imageUrl} alt={name} />

      <p>Rarity: {rarity}</p>
      <p>setName: {setName}</p>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://api.magicthegathering.io/v1/cards/${params.id}`
  );
  const data = await res.json();
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
  return { paths, fallback: false };
}

export default Card;
