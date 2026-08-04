interface IntroductionSectionProps {
  introContent: string;
}

export function IntroductionSection({ introContent }: IntroductionSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 text-lg md:text-xl leading-[1.8]">
          {introContent}
        </p>
      </div>
    </div>
  );
}
