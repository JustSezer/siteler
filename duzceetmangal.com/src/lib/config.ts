export const siteConfig = {
  name: "Düzce Et Mangal",
  url: process.env.NEXT_PUBLIC_URL || "https://duzceetmangal.com",
  businessUrl: process.env.NEXT_PUBLIC_BUSINESS_URL || "https://ibrahiminyeri.com",
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "İbrahim'in Yeri Et Mangal",
  phone: process.env.NEXT_PUBLIC_PHONE || "08508888114",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0850 888 81 14",
  address: process.env.NEXT_PUBLIC_ADDRESS || "D100 Karayolu, Kaynaşlı, 81900 Düzce",
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK || "https://www.facebook.com/ibrahiminyeriboludagi",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/ibrahiminyeriboludagi",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE || "https://www.youtube.com/@ibrahiminyeri",
  },
  links: {
    menu: `${process.env.NEXT_PUBLIC_BUSINESS_URL || "https://ibrahiminyeri.com"}/menu`,
    store: `${process.env.NEXT_PUBLIC_BUSINESS_URL || "https://ibrahiminyeri.com"}/yoresel-magza`,
    about: `${process.env.NEXT_PUBLIC_BUSINESS_URL || "https://ibrahiminyeri.com"}/hakkimizda`,
    press: `${process.env.NEXT_PUBLIC_BUSINESS_URL || "https://ibrahiminyeri.com"}/basinda-biz`,
    directions: `${process.env.NEXT_PUBLIC_BUSINESS_URL || "https://ibrahiminyeri.com"}/nasil-gidilir`,
  },
} as const;
