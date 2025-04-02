export class CreateBookDto {
    title: string;
    author: string;
    coverUrl?: string;
    description?: string;
    edition: string;
    publishYear: number;
    genre: string;
  }