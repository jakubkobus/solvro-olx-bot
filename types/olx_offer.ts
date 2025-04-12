// z discordowego watku
export interface OLXOffer {
  id: number;
  url: string;
  title: string;
  last_refresh_time: string;
  created_time: string;
  valid_to_time: string;
  pushup_time?: string | null;
  description: string;
  promotion: {
    highlighted: boolean;
    urgent: boolean;
    top_ad: boolean;
    options: string[];
    b2c_ad_page: boolean;
    premium_ad_page: boolean;
  };
  params: {
    key: string;
    name: string;
    type: string;
    value?: {
      key?: string | number | null;
      label?: string | null;
      value?: number | null;
      type?: string;
      arranged?: boolean;
      budget?: boolean;
      currency?: string | null;
      negotiable?: boolean;
      converted_value?: number | null;
      previous_value?: number | null;
      converted_previous_value?: number | null;
      converted_currency?: string | null;
    };
  }[];
  key_params: string[];
  business: boolean;
  user: {
    id: number;
    created: string;
    other_ads_enabled: boolean;
    name: string;
    logo?: string | null;
    logo_ad_page?: string | null;
    social_network_account_type?: string | null;
    photo?: string | null;
    banner_mobile?: string | null;
    banner_desktop?: string | null;
    company_name?: string | null;
    about?: string | null;
    b2c_business_page?: boolean;
    is_online: boolean;
    last_seen: string;
    seller_type?: string | null;
    uuid: string;
  };
  status: "active" | "inactive";
  contact: {
    name: string;
    phone?: boolean;
    chat?: boolean;
    negotiation?: boolean;
    courier?: boolean;
  };
  map?: {
    zoom: number;
    lat: number;
    lon: number;
    radius?: number;
    show_detailed: boolean;
  };
  location: {
    city: {
      id: number;
      name: string;
      normalized_name: string;
    };
    district?: {
      id: number;
      name: string;
    };
    region?: {
      id: number;
      name: string;
      normalized_name?: string;
    };
  };
  photos?: {
    id: number;
    filename: string;
    rotation?: number;
    width?: number;
    height?: number;
    link: string;
  }[];
  partner?: {
    code?: string | null;
  };
  external_url?: string | null;
  category?: {
    id: number;
    type: "real_estate" | "other";
  };
  delivery?: {
    rock?: {
      offer_id?: number | null;
      active: boolean;
      mode: "NotEligible" | "Eligible";
    };
  };
  safedeal?: {
    weight?: number;
    weight_grams?: number;
    status?: "active" | "unactive";
    safedeal_blocked?: boolean;
    allowed_quantity: number[];
  };
}
