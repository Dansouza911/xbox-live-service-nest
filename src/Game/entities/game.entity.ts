import { Genre } from "src/Genre/entities/genre.entity";

export class Game {
  id?: string;
  title: string;
  cover_image_url: string;
  description: string;
  year: number;
  score: number;
  trailer_url: string;
  gameplay_url: string;
  genres?: Partial<Genre>[]
  created_at?: Date;
  updated_at?: Date;
}
