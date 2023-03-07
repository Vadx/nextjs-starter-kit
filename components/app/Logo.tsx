import { WithChildren } from "@/types/common";

interface LogoProps extends WithChildren {
  logoSize?: number;
  logoColor?: string;
}

const Logo = ({ logoSize, logoColor, children }: LogoProps) => {
  return (
    <span
      className="font-semibold"
      style={{
        fontSize: logoSize ? logoSize : 16,
        color: logoColor ? logoColor : '#000'
      }}
    >
      💎 {children}
    </span>
  );
};

export default Logo;
