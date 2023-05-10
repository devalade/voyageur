import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const bookedFlightRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(({ input,ctx }) => {
      return ctx.prisma.bookedFlight.findMany();
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
