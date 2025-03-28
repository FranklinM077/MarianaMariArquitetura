import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistUserSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API routes
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistUserSchema.parse(req.body);
      const waitlistUser = await storage.createWaitlistUser(validatedData);
      res.status(201).json({
        success: true,
        message: "Successfully added to waitlist",
        user: waitlistUser,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.details,
        });
      }
      
      // Handle duplicate email error
      if (error instanceof Error && error.message.includes("unique")) {
        return res.status(409).json({
          success: false,
          message: "This email is already on our waitlist",
        });
      }
      
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your request",
      });
    }
  });

  app.get("/api/waitlist/count", async (_req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      res.json({ count });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get waitlist count",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
