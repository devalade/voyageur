import { createTRPCRouter } from "@/server/api/trpc";
import { exampleRouter } from "@/server/api/routers/example";
import {flightRouter} from './routers/flight';
import {authRouter} from './routers/auth';
import {cityRouter} from "@/server/api/routers/city";
import {bookedFlightRouter} from "@/server/api/routers/booked-flight";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
  city: cityRouter,
  flight: flightRouter,
  bookedFlight: bookedFlightRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
