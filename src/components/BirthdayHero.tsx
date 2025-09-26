import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import birthdayPersonImage from "@/assets/birthday-person.png";

const BirthdayHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated confetti background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Birthday person photo */}
        <div className="mb-8 animate-bounce-in">
          <div className="relative inline-block">
            <img
              src={birthdayPersonImage}
              alt="Birthday person"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-celebration border-8 border-primary/20 animate-pulse-glow"
            />
            <div className="absolute -top-4 -right-4 text-6xl animate-float">
              🎉
            </div>
            <div className="absolute -bottom-4 -left-4 text-5xl animate-float" style={{ animationDelay: '1s' }}>
              🎂
            </div>
            <div className="absolute top-0 left-0 text-4xl animate-float" style={{ animationDelay: '2s' }}>
              🎈
            </div>
          </div>
        </div>

        {/* Birthday message */}
        <div className="space-y-6 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-celebration bg-clip-text text-transparent leading-tight">
            Happy Birthday!
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            🌟 Another year of amazing adventures awaits! 🌟
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="text-xl px-8 py-6 shadow-celebration hover:shadow-glow transition-all duration-300 bg-gradient-celebration border-0">
              🎊 Celebrate Together 🎊
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-8 py-6 border-primary/30 hover:bg-primary/10 transition-all duration-300">
              💝 Send Wishes 💝
            </Button>
          </div>
        </div>

        {/* Fun stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-bounce-in" style={{ animationDelay: '1s' }}>
          <Card className="p-6 shadow-party hover:shadow-celebration transition-all duration-300 bg-card/80 backdrop-blur">
            <div className="text-3xl mb-2">🎂</div>
            <div className="text-2xl font-bold text-primary">Another Year</div>
            <div className="text-muted-foreground">of wonderful memories!</div>
          </Card>
          
          <Card className="p-6 shadow-party hover:shadow-celebration transition-all duration-300 bg-card/80 backdrop-blur">
            <div className="text-3xl mb-2">💫</div>
            <div className="text-2xl font-bold text-secondary">More Adventures</div>
            <div className="text-muted-foreground">waiting to unfold!</div>
          </Card>
          
          <Card className="p-6 shadow-party hover:shadow-celebration transition-all duration-300 bg-card/80 backdrop-blur">
            <div className="text-3xl mb-2">🎉</div>
            <div className="text-2xl font-bold text-accent">Endless Joy</div>
            <div className="text-muted-foreground">and happiness ahead!</div>
          </Card>
        </div>
      </div>

      {/* Decorative balloons */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-50">
        🎈
      </div>
      <div className="absolute top-20 right-20 text-5xl animate-float opacity-50" style={{ animationDelay: '1.5s' }}>
        🎁
      </div>
      <div className="absolute bottom-20 left-20 text-7xl animate-float opacity-50" style={{ animationDelay: '2.5s' }}>
        🌟
      </div>
    </div>
  );
};

export default BirthdayHero;