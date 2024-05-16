interface ArrowLeftInterface {
  className?: string;
}

const ArrowLeft = ({ className }: ArrowLeftInterface) => {
  return (
    <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
      <path
        fill="#24232C"
        className={className}
        d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
      />
    </svg>
  );
};

export default ArrowLeft;
