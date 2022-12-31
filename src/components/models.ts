export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface MediaUrl {
  url: string;
  content_type: string;
}

export interface Tweet {
  id: string;
  created_at: string;
  description: string;
  isMedia: boolean;
  favorite_count: number;
  retweet_count: number,
  reply_count: number,
  quote_count: number,
  isImage: boolean,
  media_url: [MediaUrl]
}