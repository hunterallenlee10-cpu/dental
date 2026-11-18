import NextLink from "next/link";
import type { ComponentProps } from "react";

/** next/link that tags navigations with the "page" transition type, so only route changes crossfade. */
export default function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink transitionTypes={["page"]} {...props} />;
}
