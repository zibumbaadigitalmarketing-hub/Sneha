import { 
  type User, 
  type InsertUser,
  type Package,
  type InsertPackage,
  type Testimonial,
  type InsertTestimonial,
  type GalleryItem,
  type InsertGalleryItem,
  type Service,
  type InsertService,
  type ContactForm
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllPackages(): Promise<Package[]>;
  getPackage(id: string): Promise<Package | undefined>;
  createPackage(pkg: InsertPackage): Promise<Package>;
  
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getAllGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  
  getAllServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  
  submitContactForm(form: ContactForm): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private packages: Map<string, Package>;
  private testimonials: Map<string, Testimonial>;
  private galleryItems: Map<string, GalleryItem>;
  private services: Map<string, Service>;
  private contactSubmissions: ContactForm[];

  constructor() {
    this.users = new Map();
    this.packages = new Map();
    this.testimonials = new Map();
    this.galleryItems = new Map();
    this.services = new Map();
    this.contactSubmissions = [];
    
    this.seedData();
  }

  private seedData() {
    const packagesData: InsertPackage[] = [
      {
        title: "Kashi Allahabad Ayodhya Yatra",
        duration: "3N/4D",
        image: "/placeholder-package.jpg",
        description: "Experience the spiritual essence of three holy cities - Kashi (Varanasi), Allahabad (Prayagraj), and Ayodhya.",
        itinerary: [
          "Day 1: Arrival in Varanasi, Ganga Aarti",
          "Day 2: Varanasi temple tour and boat ride",
          "Day 3: Allahabad - Triveni Sangam visit",
          "Day 4: Ayodhya - Ram Janmabhoomi, return"
        ],
        highlights: [
          "Ganga Aarti at Dashashwamedh Ghat",
          "Kashi Vishwanath Temple darshan",
          "Triveni Sangam in Allahabad",
          "Ram Janmabhoomi Temple visit"
        ],
        price: 15000
      },
      {
        title: "Kashi Gaya Allahabad",
        duration: "3N/4D",
        image: "/placeholder-package.jpg",
        description: "Visit the three most sacred cities for Hindu pilgrimage - Kashi, Gaya, and Allahabad.",
        itinerary: [
          "Day 1: Arrival in Varanasi",
          "Day 2: Varanasi sightseeing",
          "Day 3: Travel to Gaya, Pinda Dhan rituals",
          "Day 4: Allahabad and return"
        ],
        highlights: [
          "Kashi Vishwanath Temple",
          "Pinda Dhan in Gaya",
          "Triveni Sangam visit",
          "Boat ride on Ganges"
        ],
        price: 16000
      },
      {
        title: "Kashi Nepal",
        duration: "7N/8D",
        image: "/placeholder-package.jpg",
        description: "Extended spiritual journey covering Varanasi and sacred temples of Nepal.",
        itinerary: [
          "Day 1-2: Varanasi exploration",
          "Day 3: Travel to Nepal",
          "Day 4-6: Kathmandu and Pashupatinath",
          "Day 7-8: Return journey"
        ],
        highlights: [
          "Kashi temples and ghats",
          "Pashupatinath Temple Nepal",
          "Muktinath Darshan",
          "Kathmandu sightseeing"
        ],
        price: 35000
      }
    ];

    packagesData.forEach(pkg => {
      const id = randomUUID();
      this.packages.set(id, { ...pkg, id });
    });

    const testimonialsData: InsertTestimonial[] = [
      {
        name: "Meghavarman King",
        quote: "Really awesome! The way you treated and took kind way of talk all are very good and hotel stay is extraordinary and temple visit on time. Thank you a lot.",
        image: "/placeholder-avatar.jpg"
      },
      {
        name: "Manaswini Chowdary",
        quote: "The best guide. I got the bliss of Kashi everywhere. Kashi is a lifetime experience we feel and I got it because of this tourist guide. Blessed!",
        image: "/placeholder-avatar.jpg"
      },
      {
        name: "Saravanan Shanmugam",
        quote: "You people are awesome guys, especially Mr Prakash, who took care of my mom. No words to explain. We lived like a family for 4 days. Definitely I would refer to all. Thanks!",
        image: "/placeholder-avatar.jpg"
      }
    ];

    testimonialsData.forEach(testimonial => {
      const id = randomUUID();
      this.testimonials.set(id, { ...testimonial, id });
    });

    const servicesData: InsertService[] = [
      {
        title: "Cab Booking",
        description: "Comfortable and reliable transportation services for your spiritual journey",
        icon: "car"
      },
      {
        title: "VIP Dharshan Booking",
        description: "Skip the queues with our exclusive VIP darshan arrangements",
        icon: "eye"
      },
      {
        title: "Tour Escorts",
        description: "Expert guides to enrich your spiritual experience with knowledge",
        icon: "users"
      },
      {
        title: "Boat Booking",
        description: "Sacred boat rides on holy rivers for a divine experience",
        icon: "ship"
      },
      {
        title: "Pinda Dhan",
        description: "Traditional ritual services performed with utmost devotion",
        icon: "heart"
      }
    ];

    servicesData.forEach(service => {
      const id = randomUUID();
      this.services.set(id, { ...service, id });
    });

    const galleryData: InsertGalleryItem[] = Array.from({ length: 16 }, (_, i) => ({
      image: `/placeholder-gallery-${i + 1}.jpg`,
      destination: ["Kashi", "Varanasi", "Nepal", "Ayodhya", "Allahabad", "Gaya"][i % 6],
      category: ["Temples", "Ghats", "Rituals", "Buddhist"][i % 4]
    }));

    galleryData.forEach(item => {
      const id = randomUUID();
      this.galleryItems.set(id, { ...item, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllPackages(): Promise<Package[]> {
    return Array.from(this.packages.values());
  }

  async getPackage(id: string): Promise<Package | undefined> {
    return this.packages.get(id);
  }

  async createPackage(insertPackage: InsertPackage): Promise<Package> {
    const id = randomUUID();
    const pkg: Package = { ...insertPackage, id };
    this.packages.set(id, pkg);
    return pkg;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const item: GalleryItem = { ...insertItem, id };
    this.galleryItems.set(id, item);
    return item;
  }

  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async submitContactForm(form: ContactForm): Promise<void> {
    this.contactSubmissions.push(form);
    console.log("Contact form submitted:", form);
  }
}

export const storage = new MemStorage();
