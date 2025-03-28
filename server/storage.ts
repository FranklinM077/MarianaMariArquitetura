import { waitlistUsers, type WaitlistUser, type InsertWaitlistUser } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  getUser(id: number): Promise<WaitlistUser | undefined>;
  getUserByUsername(username: string): Promise<WaitlistUser | undefined>;
  createUser(user: InsertWaitlistUser): Promise<WaitlistUser>;
  createWaitlistUser(user: InsertWaitlistUser): Promise<WaitlistUser>;
  getWaitlistCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<number, WaitlistUser>;
  private waitlistUsers: Map<number, WaitlistUser>;
  currentId: number;
  waitlistId: number;

  constructor() {
    this.users = new Map();
    this.waitlistUsers = new Map();
    this.currentId = 1;
    this.waitlistId = 1;
  }

  async getUser(id: number): Promise<WaitlistUser | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<WaitlistUser | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === username,
    );
  }

  async createUser(insertUser: InsertWaitlistUser): Promise<WaitlistUser> {
    const id = this.currentId++;
    const user: WaitlistUser = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistUser(insertUser: InsertWaitlistUser): Promise<WaitlistUser> {
    // Check if email already exists
    const existingUser = Array.from(this.waitlistUsers.values()).find(
      (user) => user.email === insertUser.email,
    );

    if (existingUser) {
      throw new Error("Email already exists in waitlist. unique constraint violation");
    }

    const id = this.waitlistId++;
    const waitlistUser: WaitlistUser = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.waitlistUsers.set(id, waitlistUser);
    return waitlistUser;
  }

  async getWaitlistCount(): Promise<number> {
    return this.waitlistUsers.size;
  }
}

export const storage = new MemStorage();
