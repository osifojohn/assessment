interface ProgressStep {
  id: number;
  title: string;
  icon: string;
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  currentStep: number;
}

import React from 'react';

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="w-full">
      {/* Circles and connecting lines */}
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? 'bg-green-500 text-white shadow-md'
                      : isActive
                      ? 'bg-white text-blue-600 shadow-lg border-2 border-blue-200'
                      : 'bg-blue-400 text-white'
                  }`}
                >
                  {isCompleted ? (
                    <img
                      src="/icons/check.svg"
                      alt="Checked"
                      className="w-3 h-3"
                    />
                  ) : (
                    <img src={step.icon} alt={step.title} className="w-3 h-3" />
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div
                    className={`text-xs font-medium ${
                      isActive ? 'text-white' : 'text-blue-100'
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 rounded-full transition-all duration-500 ${
                    isCompleted ? 'bg-green-400' : 'bg-blue-300'
                  }`}
                  style={{ marginTop: '-20px' }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
