import React from 'react';
import axios from 'axios';
import { mapKeys, get, isEqual } from 'lodash';
import MemeCard from '../components/MemeCard';

class MemeContainer extends React.Component {
	state = null;
	componentDidMount() {
		this.getMemes();
  }
  getMemes = async () => {
		try {
			const url = 'https://api.imgflip.com/get_memes';
			const response = await axios.get(url);
			const memes = get(response, ['data', 'data', 'memes'], null);
			const memesMap = mapKeys(memes, (val, key) => key)
			const memeA = memesMap[Math.floor(Math.random() * 99)];
			const memeB = memesMap[Math.floor(Math.random() * 99)];
			!isEqual(memeA, memeB) && this.setState({ memeA, memeB });
		}
		catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<div>
				{this.state && <main className="App-main">
					<MemeCard meme={this.state.memeA} />
					<MemeCard meme={this.state.memeB} />
				</main>}
				<button onClick={this.getMemes}>battle</button>
			</div>
		);
	}
}


export default MemeContainer;