import { 
  type User, 
  type InsertUser, 
  type Product, 
  type InsertProduct, 
  type Recipe, 
  type InsertRecipe, 
  type NewsletterSubscription, 
  type InsertNewsletterSubscription, 
  type Stockist, 
  type InsertStockist 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Products
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Recipes
  getAllRecipes(): Promise<Recipe[]>;
  getRecipe(id: string): Promise<Recipe | undefined>;
  createRecipe(recipe: InsertRecipe): Promise<Recipe>;
  
  // Newsletter
  subscribeToNewsletter(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined>;
  
  // Stockists
  getAllStockists(): Promise<Stockist[]>;
  getStockistsByRadius(postcode: string, radius: number): Promise<Stockist[]>;
  createStockist(stockist: InsertStockist): Promise<Stockist>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private products: Map<string, Product> = new Map();
  private recipes: Map<string, Recipe> = new Map();
  private newsletterSubscriptions: Map<string, NewsletterSubscription> = new Map();
  private stockists: Map<string, Stockist> = new Map();

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Initialize with sample products
    const sampleProducts: InsertProduct[] = [
      {
        name: "Indian Ketchup",
        description: "Rich, tangy, and perfectly spiced - those are proper adjectives to define this amazing condiment.",
        price: "15.00",
        imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=600&fit=crop",
        category: "sauces",
        inStock: 50
      },
      {
        name: "Chilli Mango",
        description: "Sweet meets heat in this tropical fusion sauce that brings sunshine to every meal.",
        price: "15.00",
        imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=600&fit=crop",
        category: "sauces",
        inStock: 45
      },
      {
        name: "Tamarind",
        description: "A classic tangy sauce with deep, complex flavors that enhance any dish with authentic taste.",
        price: "15.00",
        imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=600&fit=crop&sat=-100",
        category: "sauces",
        inStock: 35
      },
      {
        name: "Ginger & Coriander",
        description: "Fresh, zesty, and aromatic - this vibrant sauce brings garden-fresh flavors to your table.",
        price: "15.00",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        category: "sauces",
        inStock: 40
      }
    ];

    sampleProducts.forEach(product => {
      this.createProduct(product);
    });

    // Initialize with sample recipes
    const sampleRecipes: InsertRecipe[] = [
      {
        title: "Greg's Tamarind Cheese on Toast",
        description: "A fusion twist on classic comfort food.",
        imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
        instructions: "Spread Auntie's Tamarind sauce on toasted bread, top with cheese and grill until melted.",
        ingredients: ["Bread", "Auntie's Tamarind Sauce", "Cheese", "Butter"]
      },
      {
        title: "Auntie's Punjabi Rajma for the family",
        description: "Traditional comfort food that brings families together.",
        imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
        instructions: "Cook kidney beans with onions, tomatoes and Auntie's Indian Ketchup for authentic flavor.",
        ingredients: ["Kidney beans", "Onions", "Tomatoes", "Auntie's Indian Ketchup", "Spices"]
      },
      {
        title: "Indian-style Nachos",
        description: "East meets West in this delicious fusion snack.",
        imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop",
        instructions: "Top tortilla chips with cheese, jalapeños and drizzle with Auntie's Chilli Mango sauce.",
        ingredients: ["Tortilla chips", "Cheese", "Jalapeños", "Auntie's Chilli Mango Sauce"]
      }
    ];

    sampleRecipes.forEach(recipe => {
      this.createRecipe(recipe);
    });
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Products
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  // Recipes
  async getAllRecipes(): Promise<Recipe[]> {
    return Array.from(this.recipes.values());
  }

  async getRecipe(id: string): Promise<Recipe | undefined> {
    return this.recipes.get(id);
  }

  async createRecipe(insertRecipe: InsertRecipe): Promise<Recipe> {
    const id = randomUUID();
    const recipe: Recipe = { ...insertRecipe, id };
    this.recipes.set(id, recipe);
    return recipe;
  }

  // Newsletter
  async subscribeToNewsletter(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = { ...insertSubscription, id };
    this.newsletterSubscriptions.set(insertSubscription.email, subscription);
    return subscription;
  }

  async getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined> {
    return this.newsletterSubscriptions.get(email);
  }

  // Stockists
  async getAllStockists(): Promise<Stockist[]> {
    return Array.from(this.stockists.values());
  }

  async getStockistsByRadius(postcode: string, radius: number): Promise<Stockist[]> {
    // Simplified implementation - in real world would use geolocation API
    return Array.from(this.stockists.values()).slice(0, 5);
  }

  async createStockist(insertStockist: InsertStockist): Promise<Stockist> {
    const id = randomUUID();
    const stockist: Stockist = { ...insertStockist, id };
    this.stockists.set(id, stockist);
    return stockist;
  }
}

export const storage = new MemStorage();
