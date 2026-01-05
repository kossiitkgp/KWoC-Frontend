import React from "react";
import ShareStatsSection from "../components/ShareStatsSection/ShareStatsSection";

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
    <>
      <style jsx>{`
        /* Share Stats Section - Issue #13 */
        .share-stats {
          margin: 3rem 0;
          padding: 2.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          text-align: center;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .share-stats h3 {
          margin: 0 0 0.5rem 0;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(45deg, #fff, #f0f0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .share-stats p {
          margin: 0 0 2.5rem 0;
          opacity: 0.95;
          font-size: 1.15rem;
          font-weight: 400;
        }

        .share-buttons {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .share-btn {
          padding: 14px 28px;
          border: none;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .share-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .share-btn:hover::before {
          left: 100%;
        }

        .share-btn:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }

        .share-btn:active {
          transform: translateY(-2px) scale(1);
        }

        .share-btn.twitter {
          background: linear-gradient(135deg, #1da1f2, #0d8bd9);
          color: white;
        }

        .share-btn.linkedin {
          background: linear-gradient(135deg, #0077b5, #005885);
          color: white;
        }

        .share-btn.copy {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        @media (max-width: 768px) {
          .share-stats {
            margin: 2rem 1rem;
            padding: 2rem 1.5rem;
          }

          .share-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .share-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

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
        <ShareStatsSection
  title="Share Your KWoC Journey!"
  description="Help inspire others to contribute to open source"/>

      </div>
    </>
  );
};

export default ShareStatsSection;
