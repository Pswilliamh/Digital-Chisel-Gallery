import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Share2 } from "lucide-react";

export function JAYEmbassy() {
  const handleShare = () => {
    alert("Social sharing feature — exports current art + wisdom quote as branded vertical image");
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="editorial-container">
        <div className="text-center mb-20">
          <Image
            src="/JAY_LOGO_NEW.JPG"
            alt="J.A.Y. Trade School"
            width={300}
            height={300}
            className="mx-auto mb-8 rounded-lg"
          />
        </div>

        <section className="mb-32">
          <h1 className="editorial-heading">Seven Years of Structural Truth</h1>
          <div className="editorial-body space-y-6">
            <p>
              Seven years. This was not a timeline chosen arbitrarily, but one that mirrors the traditional depth of mastery. Ambassador William spent these seven years serving in local Indonesian communities, understanding the grassroots realities of life on a daily basis in cities, villages, and rural settlements.
            </p>
            <p>
              These Digital Chisel Artifacts represent the passion of life captured through those years of service. They are more than digital images; they are anchors of heritage and endurance.
            </p>
            <p>
              At the Junior Architect Group Yayasan (J.A.Y.), our students learn to appreciate this depth. We help them see the structural truth in these artifacts, guiding them to move from a mindset of survival to a mindset of creation. Through your support, we help them become more than they ever imagined they could be.
            </p>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-16">
          <Button
            asChild
            className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 text-lg px-8 py-6"
            size="lg"
          >
            <Link href="https://www.paypal.com/ncp/payment/54E6N3SEK5EXQ" target="_blank" rel="noopener noreferrer">
              Support the Trade School
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button
            onClick={handleShare}
            variant="outline"
            className="text-lg px-8 py-6"
            size="lg"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share this Wisdom
          </Button>
        </div>

        <div className="text-center">
          <Link
            href="https://kingdom-embassy.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            Visit kingdom-embassy.org
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}