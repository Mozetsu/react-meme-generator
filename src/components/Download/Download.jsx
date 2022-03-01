import './download.css';

const Download = (props) => (
	<button onClick={props.downloadMeme} className="download-btn">
		Download meme
	</button>
);

export default Download;
