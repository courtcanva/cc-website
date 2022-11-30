import NextHeadSeo from "next-head-seo";
import { rootUrl } from "../../constants";

// types
export type MyPageSeoProps = {
  path?: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
};

const MyPageSeo = (props: MyPageSeoProps) => {
  const {
    path = "/",
    title = "Landing Page",
    description = "Design basketball courts, tennis courts and combined counts online. Save designs and share template for register users. Generate quotations and place orders in real time",
    ogImagePath = "/og-image.png",
    noindex,
    noTitleTemplate,
  } = props;

  // e.g. APP_ROOT_URL=https://example.com
  const APP_ROOT_URL = rootUrl;

  // Absolute page url
  const pageUrl = APP_ROOT_URL + path;
  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - CourtCanva`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? "noindex, nofollow" : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: "website",
        siteName: "CourtCanva",
      }}
      twitter={{
        card: "summary_large_image",
      }}
    />
  );
};

export default MyPageSeo;
