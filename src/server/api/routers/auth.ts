import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import * as argon2 from 'argon2';
// import MailService from '@/server/nodemailer';

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      password: z.string().min(8)
    }))
    .mutation(async ({ input, ctx }) => {
        // MailService
        //     .from("test@mail.com")
        //     .to(input.email)
        //     .subject("Account Registration")
        //     .text("Votre compte a été créé avec succès")
        //     .send();

      return ctx.prisma.user.create({
        data: {
          email: input.email,
          firstName: input.firstName,
          lastName: input.lastName,
          passsword: await argon2.hash(input.password)
         }
      })
    }),

  me: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: ctx.session?.user.id
      }
    });
  }),
});
