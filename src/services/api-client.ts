import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '33c6df9beebc42d6876a2b1c1703f176'
	}}
)
