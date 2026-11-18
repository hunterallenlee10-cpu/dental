import type { ElementType } from "react";

type Props = {
  plain: string;
  accent: string;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Break before the accent phrase on wide screens. */
  breakAccent?: boolean;
};

/** A plain phrase followed by one italic azure accent phrase. */
export function SplitHeading({ plain, accent, as: Tag = "h2", className = "", id, breakAccent }: Props) {
  return (
    <Tag id={id} className={className}>
      {plain}
      {breakAccent ? <br className="hidden md:block" /> : " "}
      {breakAccent ? <span className="md:hidden"> </span> : null}
      <em className="accent">{accent}</em>
    </Tag>
  );
}
