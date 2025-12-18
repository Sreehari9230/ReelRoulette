import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useMovieStore = create((set) => ({
    // state
    isMoviesLoading: false,
    movies: [],
    filters: {},

    // actions
    fetchMovies: async (filters = {}) => {
        try {
            set({ isMoviesLoading: true, filters });

            const res = await axiosInstance.post("/movies/filter", filters);

            set({ movies: res.data });
        } catch (error) {
            console.error("Error fetching movies:", error);
            toast.error("Failed to fetch movies");
        } finally {
            set({ isMoviesLoading: false });
        }
    },

    // clearMovies: () => set({ movies: [] }),
}));
