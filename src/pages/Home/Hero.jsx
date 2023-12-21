import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom/dist";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('https://img.freepik.com/free-vector/digital-coding-background-with-numbers-zero-one_1017-30363.jpg?w=1060&t=st=1703175193~exp=1703175793~hmac=243e7cf14517b2738bed83d508c276d6a003524b8e7c5ff9a25a637ee199fa27')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            29-31 August @ New York
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            AI Conference 2023: Unlocking the Future
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Join us for the most anticipated event of the year - the AI
            Conference 2023!
          </Typography>
          <Link to={"/auth/signIn"} className="flex items-center gap-4">
            <Button variant="gradient" color="white">
              Let’s Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
