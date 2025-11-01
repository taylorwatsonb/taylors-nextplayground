import { useEffect } from "react";
import { APP_NAME, APP_DESCRIPTION, APP_URL } from "@/lib/constants";

interface DocumentHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
}

export function DocumentHead({
  title,
  description,
  ogImage,
  url,
}: DocumentHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | ${APP_NAME}` : APP_NAME;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || APP_DESCRIPTION);
    }

    // Update Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let element = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setOGTag("og:title", title ? `${title} | ${APP_NAME}` : APP_NAME);
    setOGTag("og:description", description || APP_DESCRIPTION);
    setOGTag("og:url", url || APP_URL);
    if (ogImage) {
      setOGTag("og:image", ogImage);
    }

    // Update Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let element = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setTwitterTag("twitter:card", "summary_large_image");
    setTwitterTag("twitter:title", title ? `${title} | ${APP_NAME}` : APP_NAME);
    setTwitterTag(
      "twitter:description",
      description || APP_DESCRIPTION
    );
    if (ogImage) {
      setTwitterTag("twitter:image", ogImage);
    }
  }, [title, description, ogImage, url]);

  return null;
}

