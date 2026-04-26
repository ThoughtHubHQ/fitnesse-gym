import Header from "@/components/custom/Header/Header";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { format } from "date-fns";

export default function Hero() {
  const heroText = ["Train Harder.", "Move Better.", "Live Bolder."];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div>
        <Header className="py-15 px-20 2xl:px-30" />
      </div>
      <div className="absolute inset-0 -z-10 p-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover rounded-4xl"
        >
          <source src="/trademil.webm" type="video/webm" />
        </video>
      </div>

      <div className="relative z-10 mt-45 2xl:mt-20 flex min-h-screen flex-col px-10 2xl:px-20">
        <div className="flex flex-col items-start justify-center min-h-screen px-10">
          {heroText.map((text, index) => (
            <h1
              key={index}
              className="text-[80px] font-bold leading-21 tracking-[-2px] text-white"
            >
              {text}
            </h1>
          ))}
          <div className="flex items-center gap-2 mt-[41.1px]">
            <Button className="bg-[#00E5FF] text-[16px] text-black rounded-full py-6 px-6 font-bold gap-2">
              Start Free Trial{" "}
              <span className="bg-black rounded-full p-3"></span>
            </Button>
            <Button className="rounded-[100px] text-[16px] border border-white/15 bg-white/10 backdrop-blur-[5px] py-6 px-6 font-semibold">
              Explore Pulse
            </Button>
          </div>
          <div className="mt-15 flex items-start justify-between gap-5">
            <div className="rounded-[24px] border border-white/20 bg-[linear-gradient(121deg,rgba(45,50,60,0.40)_0%,rgba(20,22,28,0.80)_100%)] shadow-[0_8px_32px_0_rgba(0,0,0,0.50),0_2px_10px_1px_rgba(255,255,255,0.05)_inset] backdrop-blur-md p-6">
              <div className="flex items-center gap-4 mb-5">
                <div>
                  <AvatarGroup>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount>+3</AvatarGroupCount>
                  </AvatarGroup>
                </div>
                <div>
                  <h1 className="text-white font-bold text-2xl">15,000+</h1>
                  <h3 className="text-[#00e5ff]">active members</h3>
                </div>
              </div>
              <div>
                <p className="text-[#A0A0A0] max-w-md">
                  People step in with varying ambitions but discover universal
                  encouragement here. Every transformation fuels our passion and
                  validates our approach.
                </p>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/20 bg-[linear-gradient(121deg,rgba(45,50,60,0.40)_0%,rgba(20,22,28,0.80)_100%)] shadow-[0_8px_32px_0_rgba(0,0,0,0.50),0_2px_10px_1px_rgba(255,255,255,0.05)_inset] backdrop-blur-md p-6">
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between gap-3">
                  <Button className="rounded-full bg-white/15 px-3 py-5 font-bold">
                    <ArrowLeft />
                  </Button>

                  <p className="text-white max-w-85 text-center font-medium">
                    Recovery is where the real magic happens. Prioritize 7 to 9
                    hours of quality rest to unlock your peak performance.
                  </p>

                  <Button className="rounded-full bg-white/15 px-3 py-5 font-bold">
                    <ArrowRight />
                  </Button>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-[#8d9090] font-medium">
                    Dhaka, Bangladesh
                  </span>

                  <span className="text-[#8d9090] font-medium">
                    {format(new Date(), "MMMM d")}
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] bg-[#00e5ff] p-6">
              <div className="flex justify-end">
                <span className="bg-black rounded-full p-5"></span>
              </div>
              <h1 className="font-bold text-2xl">Claim your 7-day pass</h1>
              <p>Drop us a message or ring our reception to begin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
