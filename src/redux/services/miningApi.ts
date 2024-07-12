import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type MiningPurchase = {
	offer_id: string;
	level: number;
};

export const miningApi = createApi({
	reducerPath: "miningApi",
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: `/api/v1/mining`,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("token");
			if (token)
				headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);

			return headers;
		},
	}),
	tagTypes: ["Mining"],
	endpoints: (builder) => ({
		getLevelsCost: builder.query({
			query: () => "/level-cost",
			providesTags: ["Mining"],
		}),
		onTap: builder.mutation({
			query: (body) => ({
				url: "/taps",
				method: "POST",
				body,
			}),
		}),
		getMiningOffers: builder.query({
			query: (type: string) => `/offers/${type}`,
			providesTags: ["Mining"],
		}),
		postMiningPurchase: builder.mutation({
			query: (body: MiningPurchase) => ({
				url: "/purchase",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useGetLevelsCostQuery, useOnTapMutation, useGetMiningOffersQuery, usePostMiningPurchaseMutation } = miningApi;
