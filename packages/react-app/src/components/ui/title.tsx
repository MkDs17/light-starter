import GradientText from './gradient-text'

interface IProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
  subtitle?: string
}

export const Title = ({ type, text, subtitle }: IProps) => {
  return (
    <>
      {type === 'h1' && (
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-4">
          {text}
        </h1>
      )}
      {type === 'h2' && (
        <div className="flex flex-col items-center justify-center gap-2 my-10">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-normal text-center">
            <GradientText
              colors={['#59168b', '#3c0366', '#8400ff']}
              animationSpeed={8}
              showBorder={false}
            >
              {text}
            </GradientText>
          </h2>
          <p className="text-base px-4 md:px-14 opacity-70 md:w-3/5">
            {subtitle}
          </p>
        </div>
      )}
    </>
  )
}
