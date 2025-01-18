import { Banner } from "@/types/banner";

export const mockBanners: Banner[] = [
  {
    id: "1",
    title: "Oferta Especial - 20% OFF",
    imageUrl: {
      desktop: "/banners/oferta-especial-desktop.png",
      mobile: "/banners/oferta-especial-mobile.png",
    },
    link: "/promocao-verao",
    altText: "Promoção de Verão - 20% de desconto em produtos selecionados",
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-02-01T23:59:59Z",
    isActive: true,
    order: 1,
    campaign: {
      code: "VEM20",
      discount: 20,
      description: "20% de desconto em produtos selecionados",
    },
  },
  {
    id: "2",
    title: "Nova Coleção Verão",
    imageUrl: {
      desktop: "/banners/nova-colecao-desktop.png",
      mobile: "/banners/nova-colecao-mobile.png",
    },
    link: "/colecao/verao",
    altText: "Nova Coleção Verão 2025 - Looks frescos e estilosos",
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-03-01T23:59:59Z",
    isActive: true,
    order: 2,
  },
  {
    id: "3",
    title: "Frete Grátis",
    imageUrl: {
      desktop: "/banners/frete-gratis-desktop.png",
      mobile: "/banners/frete-gratis-mobile.png",
    },
    link: "/frete-gratis",
    altText: "Frete Grátis em compras acima de R$ 299,90",
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-12-31T23:59:59Z",
    isActive: true,
    order: 3,
  },
];
