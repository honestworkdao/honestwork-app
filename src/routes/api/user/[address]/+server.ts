import type { RequestHandler } from '../$types';
import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ params }) => {
	const apiUrl =
		parseInt(env.PRODUCTION_ENV) == 1
			? env.PRIVATE_HONESTWORK_API
			: env.PRIVATE_LOCAL_HONESTWORK_API;
	const url = `${apiUrl}/users/${params.address}`;
	let response = await fetch(url);
	let data = await response.json();
	console.log('JSON:', data);
	return json(data);
};
