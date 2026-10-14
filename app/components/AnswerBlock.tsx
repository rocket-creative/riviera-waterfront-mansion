export default function AnswerBlock({
  children,
  align = 'left',
  className = '',
}: {
  children: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  const layout = align === 'center'
    ? 'mx-auto text-center max-w-2xl'
    : className.includes('max-w-')
      ? ''
      : 'max-w-md';

  return (
    <p className={`ai-answer text-base sm:text-lg font-light text-riviera-text/70 leading-relaxed mb-6 ${layout} ${className}`}>
      {children}
    </p>
  );
}
