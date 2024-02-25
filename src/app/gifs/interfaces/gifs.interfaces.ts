export interface ISearchResponse {
  data:       IGif[];
  meta:       IMeta;
  pagination: IPagination;
}

export interface IGif {
  type:                       IType;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   string;
  source:                     string;
  title:                      string;
  rating:                     IRating;
  content_url:                string;
  source_tld:                 string;
  source_post_url:            string;
  is_sticker:                 number;
  import_datetime:            Date;
  trending_datetime:          string;
  images:                     IImages;
  user?:                      IUser;
  analytics_response_payload: string;
  analytics:                  IAnalytics;
}

export interface IAnalytics {
  onload:  IOnclick;
  onclick: IOnclick;
  onsent:  IOnclick;
}

export interface IOnclick {
  url: string;
}

export interface IImages {
  original:                 IFixedHeight;
  downsized:                IThe480_WStill;
  downsized_large:          IThe480_WStill;
  downsized_medium:         IThe480_WStill;
  downsized_small:          IDownsizedSmall;
  downsized_still:          IThe480_WStill;
  fixed_height:             IFixedHeight;
  fixed_height_downsampled: IFixedHeight;
  fixed_height_small:       IFixedHeight;
  fixed_height_small_still: IThe480_WStill;
  fixed_height_still:       IThe480_WStill;
  fixed_width:              IFixedHeight;
  fixed_width_downsampled:  IFixedHeight;
  fixed_width_small:        IFixedHeight;
  fixed_width_small_still:  IThe480_WStill;
  fixed_width_still:        IThe480_WStill;
  looping:                  ILooping;
  original_still:           IThe480_WStill;
  original_mp4:             IDownsizedSmall;
  preview:                  IDownsizedSmall;
  preview_gif:              IThe480_WStill;
  preview_webp:             IThe480_WStill;
  "480w_still":             IThe480_WStill;
  hd?:                      IDownsizedSmall;
}

export interface IThe480_WStill {
  height: string;
  width:  string;
  size:   string;
  url:    string;
}

export interface IDownsizedSmall {
  height:   string;
  width:    string;
  mp4_size: string;
  mp4:      string;
}

export interface IFixedHeight {
  height:    string;
  width:     string;
  size:      string;
  url:       string;
  mp4_size?: string;
  mp4?:      string;
  webp_size: string;
  webp:      string;
  frames?:   string;
  hash?:     string;
}

export interface ILooping {
  mp4_size: string;
  mp4:      string;
}

export enum IRating {
  G = "g",
  PG = "pg",
}

export enum IType {
  GIF = "gif",
}

export interface IUser {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      string;
  display_name:  string;
  description:   string;
  instagram_url: string;
  website_url:   string;
  is_verified:   boolean;
}

export interface IMeta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface IPagination {
  total_count: number;
  count:       number;
  offset:      number;
}
