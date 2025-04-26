export type Photo = {
  id: number;
  urls: {
    regular: string;
    small: string;
  };
  description?: string;
};