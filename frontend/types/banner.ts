/**
 * Tipos para o sistema de banners
 * Define a estrutura dos dados necessários para exibição de banners
 * tanto em desktop quanto em mobile
 */

export interface Banner {
  id: string;
  title: string;
  imageUrl: {
    desktop: string;
    mobile: string;
  };
  link: string;
  altText: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  order: number;
  campaign?: {
    code: string;
    discount: number;
    description: string;
  };
}
