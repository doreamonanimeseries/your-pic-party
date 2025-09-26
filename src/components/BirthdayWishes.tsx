import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const BirthdayWishes = () => {
  const [wishName, setWishName] = useState("");
  const [wishMessage, setWishMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    console.log("Birthday wish submitted:", { wishName, wishMessage });
    setWishName("");
    setWishMessage("");
    alert("🎉 Your birthday wish has been sent! 🎉");
  };

  const sampleWishes = [
    {
      name: "Sarah 💕",
      message: "Hope your special day brings you all the happiness your heart can hold! You deserve all the wonderful things life has to offer. Happy Birthday! 🎂✨",
      emoji: "🌸"
    },
    {
      name: "Mike 🎸",
      message: "Another year around the sun! May this new chapter be filled with incredible adventures, laughter, and all your dreams coming true! 🎉🚀",
      emoji: "🎯"
    },
    {
      name: "Emma 🎨",
      message: "Wishing you a birthday as bright and beautiful as you are! May every moment of your special day be filled with the same joy you bring to others! 🌟💖",
      emoji: "🎭"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-celebration bg-clip-text text-transparent mb-6">
            Birthday Wishes 💝
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your heartfelt wishes and make this birthday even more special!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Wish form */}
          <Card className="p-8 shadow-celebration bg-card/90 backdrop-blur">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Send Your Birthday Wish 🌟
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your name"
                  value={wishName}
                  onChange={(e) => setWishName(e.target.value)}
                  className="text-lg py-6 border-primary/20 focus:border-primary/50"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Write your birthday message here... ✨"
                  value={wishMessage}
                  onChange={(e) => setWishMessage(e.target.value)}
                  className="min-h-32 text-lg border-primary/20 focus:border-primary/50 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full text-lg py-6 bg-gradient-celebration border-0 shadow-party hover:shadow-glow transition-all duration-300"
              >
                🎉 Send Birthday Wish 🎉
              </Button>
            </form>
          </Card>

          {/* Sample wishes */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">
              Wishes from Friends 💫
            </h3>
            
            {sampleWishes.map((wish, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-party hover:shadow-celebration transition-all duration-300 bg-card/80 backdrop-blur animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{wish.emoji}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-primary mb-2">
                      {wish.name}
                    </div>
                    <p className="text-foreground/90 leading-relaxed">
                      {wish.message}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun birthday elements */}
        <div className="flex justify-center items-center gap-8 mt-16 text-6xl">
          <span className="animate-float">🎁</span>
          <span className="animate-float" style={{ animationDelay: '0.5s' }}>🎈</span>
          <span className="animate-float" style={{ animationDelay: '1s' }}>🎂</span>
          <span className="animate-float" style={{ animationDelay: '1.5s' }}>🎉</span>
          <span className="animate-float" style={{ animationDelay: '2s' }}>✨</span>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-10 right-10 text-4xl animate-float opacity-30">🎪</div>
      <div className="absolute bottom-10 left-10 text-5xl animate-float opacity-30" style={{ animationDelay: '3s' }}>🎭</div>
    </section>
  );
};

export default BirthdayWishes;