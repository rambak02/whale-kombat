export interface FloatingNumberConfig {
    left: number;
    top: number;
    value: string;
    target: HTMLDivElement | null;
}

const NUMBER_STYLES = `
  z-index: 2;
  position: absolute;
  max-width: 100%;
  max-height: 100px;
  overflow: hidden;
  animation: slideUp 1s ease-out;
  pointer-events: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
`

export const addFloatingNumber = (config: FloatingNumberConfig) => {
    if (!config.target) {
        return;
    }

    const numberEl = document.createElement('div');
    numberEl.innerText = config.value;

    numberEl.style.cssText = NUMBER_STYLES;
    numberEl.style.left = `${config.left}px`;
    numberEl.style.top = `${config.top}px`;

    config.target.append(numberEl);

    const keyframes = [
        { transform: 'translateY(0)', opacity: '1' },
        { transform: 'translateY(-150px)', opacity: 0 },
    ];

    const animationOptions = { duration: 900, iterations: 1 };

    const animation = numberEl.animate(keyframes, animationOptions);

    animation.finished.then(() => {
        numberEl.remove();
    });
}