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

export function GridCards() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Work Experience •</h2>
      {WORK.map((work) => (
        <Card
          key={work.title}
          className="flex flex-col md:flex-row w-full overflow-hidden"
        >
          <div className="flex-shrink-0 md:w-1/4 p-4 flex items-start justify-center ">
            <Image src={work.image} alt={work.title} width={100} height={100} />
          </div>
          <div className="flex-grow">
            {work.roles ? (
              <div>
                <div className="flex flex-col gap-4">
                  {work.roles.map((role, index) => (
                    <div key={index} className="">
                      <CardHeader>
                        <div className="flex items-end justify-between">
                          <div className="">
                            <CardTitle className="text-base">
                              {role.role}
                            </CardTitle>
                            {/* <CardDescription className="font-semibold border border-red-500">
                              {work.title}
                            </CardDescription> */}
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">
                              {role.dates}
                            </div>
                            <div className="text-sm text-gray-500">
                              {work.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside text-sm">
                          {role.description.map((desc, index) => (
                            <li key={index}>{desc.text}</li>
                          ))}
                        </ul>
                      </CardContent>
                      {index < work.roles.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
                <Separator />
                <CardFooter className="flex gap-2 p-2">
                  {work.links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.title}
                      target="_blank"
                      className="text-sm flex items-center gap-1"
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  ))}
                </CardFooter>
              </div>
            ) : (
              <>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">{work.role}</CardTitle>
                      {/* <CardDescription className="font-semibold">
                        {work.title}
                      </CardDescription> */}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{work.dates}</div>
                      <div className="text-sm text-gray-500">
                        {work.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm">
                    {work.description.map((desc, index) => (
                      <li key={index}>{desc.text}</li>
                    ))}
                  </ul>
                </CardContent>
                <Separator />
                <CardFooter className="flex gap-2 p-2">
                  {work.links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.title}
                      target="_blank"
                      className="text-sm flex items-center gap-1"
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  ))}
                </CardFooter>
              </>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
