import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard({ img, title, desc, link }) {
  const goToLink = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card color="transparent" className="bg-white/10 max-w-[90%] p-4"  shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-60">
        <Image
          src={img}
          alt={title}
          width={15120}
          height={1080}
          className="w-[90%] object-cover"
        />
      </CardHeader>
      <CardBody className="p-0 flex flex-col h-[50%]">
        <a
          onClick={goToLink}
          className="cursor-pointer text-white/70 transition-colors hover:text-white"
        >
          <Typography variant="h5" className="mb-2 ">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500 flex-1">
          {desc}
        </Typography>
        <Button size="sm" onClick={goToLink} className="bg-white/30 cursor-pointer w-full h-10 mt-auto">
          see live
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
