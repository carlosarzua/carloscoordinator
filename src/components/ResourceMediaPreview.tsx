
interface ResourceMediaPreviewProps {
  type: string;
  link: string;
  image?: string;
}

const isYouTube = (url: string) =>
  url.includes("youtube.com") || url.includes("youtu.be");

function getYouTubeEmbed(url: string) {
  // Parse ID and produce embed url for video/playlist/shorts
  try {
    if (url.includes("playlist?list=")) {
      const params = new URL(url).searchParams;
      const listId = params.get("list");
      if (listId) {
        return `https://www.youtube.com/embed/videoseries?list=${listId}`;
      }
    }
    if (url.includes("/shorts/")) {
      // shorts
      let id = url.split("/shorts/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("watch?v=")) {
      let id = new URL(url).searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (url.includes("youtu.be/")) {
      let id = url.split("youtu.be/")[1]?.split("?")[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

export const ResourceMediaPreview = ({ type, link, image }: ResourceMediaPreviewProps) => {
  if (isYouTube(link)) {
    const embed = getYouTubeEmbed(link);
    return embed ? (
      <div className="aspect-video rounded-md overflow-hidden mb-2">
        <iframe
          src={embed}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full border-none"
          loading="lazy"
          title="Resource media"
        />
      </div>
    ) : null;
  }

  if (image) {
    return (
      <img
        src={image}
        alt=""
        className="object-cover w-full aspect-video rounded-md mb-2"
      />
    );
  }
  return null;
};
