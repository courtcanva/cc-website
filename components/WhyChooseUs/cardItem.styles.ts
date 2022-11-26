export const cartItemStyles = [
  {
    title: "Customized",
    titleStyles: [
      "text-center",
      "rounded-md",
      "py-1.5",
      "px-6",
      "bg-cardBorderBlue",
      "relative",
      "z-10",
      'text-btnText'
    ].join(" "),
    heading:"Customize Your Dream Court",
    details: ["Customized Color", "Customized Size", "Customized Central Badge"],
    containerStyles: ["w-full","px-[25px]","-top-4","relative", "md:px-[16px]","lg:px-[21px]", "bg-cardBorderOne", "h-cardBody","border-gradient",].join(" "),
    gradient: ["bg-cardBorderBlue"],
    animation:'animate-enterSlow'
  },
  {
    title: "Professional",
    titleStyles: [
      "text-center",
      "rounded-md",
      "py-1.5",
      "px-6",
      "bg-btn",
      "relative",
      "z-10",
      'text-btnText'
    ].join(" "),
    heading:"Enjoy Our Professional Service",
    details: ["Professional Design Tools", "One to One Customer Service", "Trusted Construction Team"],
    containerStyles: ["w-full","pl-[25px]","md:pl-[16px]","-top-4","relative", "lg:pl-[21px]", "bg-cardBorderTwo", "h-cardBody","border-gradient"].join(" "),
    gradient: ["bg-btn"],
    animation:'animate-enterCard2'
  },
  {
    title: "One-step Service",
    titleStyles: [
      "text-center",
      "rounded-md",
      "py-1.5",
      "px-6",
      "bg-cardBorder",
      "relative",
      "z-10",
      'text-btnText'
    ].join(" "),
    heading:"Enjoy Your Court Without Extra Effort",
    details: ["Customized Design", "Material Preparation", "On-site Installation"],
    containerStyles: ["w-full","pl-[25px]","md:pl-[16px]","-top-4","relative", "md:pl-[21px]", "bg-cardBorderThree", "h-cardBody","border-gradient"].join(" "),
    gradient: ["bg-cardBorder"],
    animation:'animate-enterCard3'
  },
];
