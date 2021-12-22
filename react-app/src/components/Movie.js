import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Movie({ idN, coverImg, title, summary, genres }) {
  const { id } = useParams();
  return (
    <div>
      <img src={coverImg} alt={title} />
      {id > 0 ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <Link to={`/movie/${idN}`}>{title}</Link>
        </h3>
      )}
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  idN: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
