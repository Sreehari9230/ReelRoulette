import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useMovieStore = create((set) => ({
    // state
    isMoviesLoading: false,
    movies: [],
    filters: {},

    // actions
    fetchMovies: async (filters) => {
        try {
            console.log("Selected filters: from store", filters);

            set({ isMoviesLoading: true, filters });

            // const res = await axiosInstance.post("/movies/filter", filters);
            const res = await axiosInstance.post("/api/analytics/", {
                "event": "from_frontend2",
                "value": "home"
            });

            // http://localhost:5000/api/analytics
            // ✅ show backend response message
            if (res?.data?.message) {
                toast.success(res.data.message);
                console.log(res.data, "data");
                console.log(res.data.message, "message");
            }

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
