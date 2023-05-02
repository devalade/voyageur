import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";

export const flightRouter = createTRPCRouter({
  craete: protectedProcedure
    .input(
      z.object({
        startTime: z.coerce.date(),
        endTime: z.coerce.date(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        departureCity: z.string(),
        destinationCity: z.string(),
        volType: z.enum(['Direct', 'Escale'])
      })
    )
    .query(({ input, ctx }) => {
      // const flight = await ctx.prisma.flight.
    }),

    update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        startTime: z.coerce.date(),
        endTime: z.coerce.date(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        departureCity: z.string(),
        destinationCity: z.string(),
        volType: z.enum(['Direct', 'Escale'])
      })
    )
    .query(({ input, ctx }) => {
      // const flight = await ctx.prisma.flight.
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    // return ctx.prisma.flight.findMany();
    return [];
  }),

  getOne: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
