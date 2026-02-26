import type { ReactNode } from "react";
import { Card } from "../ui/card";

interface CWDetailsCardProps {
  children: ReactNode;
}

const CWDetailsCard = ({ children }: CWDetailsCardProps) => {
  return (
    <Card className="flex items-center justify-center w-37.5 h-37.5 gap-1 text-[16px] bg-black/50">
      {children}
    </Card>
  );
};

export default CWDetailsCard;
