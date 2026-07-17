import { asset } from "@/lib/paths";

type DecorName = "fan" | "crane" | "sakura" | "omamori" | "notebook" | "stamp" | "hiragana";

export function Decor({
  name,
  className = "",
  alt = "",
}: {
  name: DecorName;
  className?: string;
  alt?: string;
}) {
  return <img className={`decor-object ${className}`} src={asset(`/decor/${name}.svg`)} alt={alt} aria-hidden={alt ? undefined : true} />;
}
