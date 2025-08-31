import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { WORK } from "@/data/config/work.config";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { AnimeLinkCard, GHStats, LinksCard } from "./cards";

export const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
        <div className="col-span-3">
          {/* <GHLink /> */}
          <div className="flex gap-2">
            <div className="w-72">
              <AnimeLinkCard />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <LinksCard />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <GHStats />
        </div>
      </div>
    </div>
  );
};
