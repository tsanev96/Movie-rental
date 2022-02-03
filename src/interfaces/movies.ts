export interface Genre {
  id: string;
  title: string;
  icon: any;
}

export interface Movie {
  title: string;
  genre: Genre;
  numberInStock: number;
}
