import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const bookedFlightRouter = createTRPCRouter({
  create:  publicProcedure
      .input(
          z.object({
            departureCityId: z.string(),
            destinationCityId: z.string()
        })
      )
      .mutation(({ input, ctx }) => {
          // return ctx.prisma
      }),

  getAll: publicProcedure
    .query(({ input,ctx }) => {
      return ctx.prisma.bookedTicket.findMany({
        select: {
          id: true,
          seat: true,
          flight: {
            select: {
              volType: true,
              departureCity: true,
              destinationCity: true,
              startDate: true,
              endDate: true,
              startTime: true,
              endTime: true,
            }
          },
        }
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
