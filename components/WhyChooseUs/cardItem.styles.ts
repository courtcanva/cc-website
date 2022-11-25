export const cartItemStyles = [
  {
    title: "Reason one",
    titleStyles: [
      "text-center",
      "rounded-md",
      "w-40",
      "py-1.5",
      "px-6",
      "bg-cardBorderBlue",
      "relative",
      "top-4",
    ].join(" "),
    details: ["reason blablabla", "reason blablabl", "reason blablabla"],
    containerStyles: ["w-full","pl-4", "bg-cardBorderOne", "h-cardBody","border-gradient"].join(" "),
    gradient: ["bg-cardBorderBlue"],
    animation:'animate-enterSlow'
  },
  {
    title: "Reason two",
    titleStyles: [
      "text-center",
      "rounded-md",
      "w-40",
      "py-1.5",
      "px-6",
      "bg-btn",
      "relative",
      "top-4",
    ].join(" "),
    details: ["reason blablabla", "reason blablabl", "reasonblablabla"],
    containerStyles: ["w-full","pl-4", "bg-cardBorderTwo", "h-cardBody","border-gradient"].join(" "),
    gradient: ["bg-btn"],
    animation:'animate-enterCard2'
  },
  {
    title: "Reason three",
    titleStyles: [
      "text-center",
      "rounded-md",
      "w-40",
      "py-1.5",
      "px-6",
      "bg-cardBorder",
      "relative",
      "top-4",
    ].join(" "),
    details: ["reason blablabla", "reason blablabl", "reasonblablabla"],
    containerStyles: ["w-full","pl-4", "bg-cardBorderThree", "h-cardBody","border-gradient"].join(" "),
    gradient: ["bg-cardBorder"],
    animation:'animate-enterCard3'
  },
];
