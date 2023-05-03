import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";

export const flightRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        startTime: z.coerce.date(),
        endTime: z.coerce.date(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        departureCity: z.string(),
        destinationCity: z.string(),
        volType: z.enum(["Direct", "Escale"]),
      })
    )
    .mutation(({ input, ctx }) => {
      const flight = ctx.prisma.flight.create({
        data: input,
      });
      return flight;
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        startTime: z.coerce.date(),
        endTime: z.coerce.date(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        departureCity: z.string(),
        destinationCity: z.string(),
        volType: z.enum(["Direct", "Escale"]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const flight = await ctx.prisma.flight.update({
        where: {
          id: input.id,
        },
        data: input,
      });

      return flight;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.flight.findMany();
  }),

  getOne: publicProcedure
  .input(z.object({ id: z.string() }))
  .query(({ ctx, input }) => {
    return ctx.prisma.flight.findUnique({
      where: {
        id: input.id
      }
    });
  }),
});
