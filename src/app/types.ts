export type Page = "all" | "favorite";

interface Button {
  page: Page;
  name: string;
}

export interface RoutingSliceState {
  buttons: Button[],
  currentPage: Page
}

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: [];
}

export interface CatsSliceState {
  catsList: Cat[];
  favoriteCatsList: Cat[];
}
