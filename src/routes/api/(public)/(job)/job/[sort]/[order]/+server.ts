import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { MongoClient, Db } from 'mongodb';
import { json, error } from '@sveltejs/kit';

let cached_db: Db = "" as any;

export const GET: RequestHandler = async ({ params }) => {
  let jobs: any;
  const uri =
    parseInt(env.PRODUCTION_ENV) == 1
      ? env.MONGODB_URI
      : env.PRIVATE_MONGODB_URI;
  try {
    if (cached_db) {
      jobs = await cached_db.collection('jobs').find({}).sort(params.sort!, -1).limit(10).toArray();
      for (let i = 0; i < jobs.length; i++) {
        jobs[i]._id = jobs[i]._id.toString();
      }
      return json(jobs);
    }
    const client = new MongoClient(uri!);
    await client.connect();
    const database = client.db("honestwork-cluster");
    cached_db = database;
    jobs = await cached_db.collection('jobs').find({}).sort(params.sort!, -1).limit(10).toArray();
    for (let i = 0; i < jobs.length; i++) {
      jobs[i]._id = jobs[i]._id.toString();
    }
  } catch (err: any) {
    throw error(500, err.message)
  }
  return json(jobs);
};
