interface StepHeaderProps {
  title: string;
  description: string;
}

export const StepHeader: React.FC<StepHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};
