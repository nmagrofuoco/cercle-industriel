export default function Authors({ authors, updateScroller }) {
  const jsxImages = authors.map(author => (
    <img
      onLoad={updateScroller}
      key={author.name + '_picture'}
      src={author.photo}
      alt={author.name}
    ></img>
  ));

  const jsxAuthorsData = authors.map(author => (
    <div key={author.name + '_data'}>
      <p>{author.name}</p>
      <p className="postes">{author.postes}</p>
    </div>
  ));

  const jsxAuthors = authors.length > 1 ? 'Auteurs' : 'Auteur';

  return (
    <div self="right" className="authors">
      <div layout="row top-right">{jsxImages}</div>
      {jsxAuthorsData}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        href="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        className="caption"
      >
        <title>{jsxAuthors}</title>

        <defs>
          <path
            id="textcircle"
            d="M250,400
          a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
            transform="rotate(12,250,250)"
          />
        </defs>
        <rect width="100%" height="100%" fill="none" />
        <text>
          <textPath
            href="#textcircle"
            aria-label="Auteurs de l'article"
            textLength="942"
          >
            {jsxAuthors} de l'article • {jsxAuthors} de l'article • &nbsp;
          </textPath>
        </text>
      </svg>
    </div>
  );
}
