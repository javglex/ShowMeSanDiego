export interface EventItem {
  id?: number;
  name: string;
  city: string;
  neighborhood: string,
  state: string;
  photo: string;
  business: string,
  performer?: string,
  description?: string,
  websiteUrl?: string,
  isPublished: boolean,
  startDate: string,
  endDate: string
}
