import { Router } from "express";
import MovieMongooseRepository from "../repository/MoviesMongooseRepository.js";
import MovieController from "../controller/MovieController.js";
import { movieValidation } from "../schema/movieSchema.js";

export const moviesRouter = Router();

const movieRepository = new MovieMongooseRepository();
const moviesController = new MovieController(movieRepository);

moviesRouter.get("/", moviesController.getMovies);
moviesRouter.delete("/:movieId", moviesController.deleteMovie);
moviesRouter.post("/create", movieValidation, moviesController.addMovie);
moviesRouter.get("/:movieId", moviesController.getMovieById);
moviesRouter.put("/:movieId", moviesController.modifyMovie);
