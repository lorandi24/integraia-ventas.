import Link from "next/link";
import { isExternal } from "@/lib/site";

/** Link interno con next/link o externo con target _blank automáticamente. */
export function SmartLink({
  href,
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
