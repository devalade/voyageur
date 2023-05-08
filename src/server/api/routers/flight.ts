import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const flightRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        startTime: z.coerce.date(),
        endTime: z.coerce.date(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        departureCityId: z.string(),
        destinationCityId: z.string(),
        volType: z.enum(["Direct", "Escale"]),
        numberOfSeat: z.number().min(1).max(500)
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
        departureCityId: z.string(),
        destinationCityId: z.string(),
        volType: z.enum(["Direct", "Escale"]),
        numberOfSeat: z.number().min(1).max(500)

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
    delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
        return ctx.prisma.flight.delete({
            where: {
                id: input.id
            }
        });
    }),


});
