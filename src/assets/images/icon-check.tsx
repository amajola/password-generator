interface ArrowLeftInterface {
  className?: string;
}

const CheckIcon = ({ className }: ArrowLeftInterface) => {
  return (
    <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        stroke="#18171F"
        strokeWidth="3"
        fill="none"
        d="M1 5.607 4.393 9l8-8"
      />
    </svg>
  );
};

export default CheckIcon;
