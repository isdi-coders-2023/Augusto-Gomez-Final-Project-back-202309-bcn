import { type Request } from "express";

export interface MovieStructure {
  _id: string;
  name: string;
  director: string;
  writer: string;
  stars: string[];
  releaseDate: string;
  genre: string[];
  description: string;
  imageUrl: string;
}

export interface MovieRepositoryStructure {
  getMovies: () => Promise<MovieStructure[]>;
  deleteMovie: (id: string) => Promise<void>;
}

export type MovieRequestById = Request<{ movieId: string }>;
