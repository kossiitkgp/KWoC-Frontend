import React from "react";

interface ShareStatsProps {
  title?: string;
  description?: string;
}

const ShareStatsSection: React.FC<ShareStatsProps> = ({
  title = "KWoC 2025 Impact",
  description = "Join thousands of developers contributing to open source",
}) => {
  const handleShare = (platform: "twitter" | "linkedin" | "copy") => {
    const text = `Check out KWoC 2025! Join thousands collaborating on open source projects. #OpenSource #KWoC`;
    const url = "https://kwoc.kossiitkgp.org";

    switch (platform) {
      case "twitter":
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, "_blank", "width=600,height=400");
        break;

      case "linkedin":
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(linkedinUrl, "_blank", "width=600,height=400");
        break;

      case "copy":
        navigator.clipboard.writeText(`${text}\n${url}`);
        alert("Link copied!");
        break;
    }
  };

  return (
    <div className="share-stats">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="share-buttons">
        <button
          className="share-btn twitter"
          onClick={() => handleShare("twitter")}
        >
          Share on Twitter
        </button>
        <button
          className="share-btn linkedin"
          onClick={() => handleShare("linkedin")}
        >
          Share on LinkedIn
        </button>
        <button
          className="share-btn copy"
          onClick={() => handleShare("copy")}
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default ShareStatsSection;
